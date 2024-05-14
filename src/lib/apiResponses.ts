import { NextResponse } from "next/server";
import { ZodError, ZodIssue } from "zod";
const errorMessages = {
  SyntaxError: {
    message: "Invalid request. Request body must be a valid JSON.",
    status: 400,
  },
  ValidationError: {
    message: "Validation failed.",
    status: 400,
  },
  NotFoundError: {
    message: "Resource not found.",
    status: 404,
  },
  UnauthorizedError: {
    message: "Unauthorized access.",
    status: 401,
  },
  ForbiddenError: {
    message: "Forbidden access.",
    status: 403,
  },
};

export function handleValidationErrorResponse(errors: ZodError): NextResponse {
  const errorResponse: { [key: string]: string } = {};

  if (Array.isArray(errors.issues)) {
    errors.issues.forEach((error: ZodIssue) => {
      const field = error.path.join(".");
      errorResponse[field] = error.message;
    });
  } else {
    errorResponse.message = "Invalid validation errors";
  }

  return new NextResponse(JSON.stringify({ errors: errorResponse }), {
    status: 400,
  });
}

export function handleErrorResponse(error: Error): NextResponse {
  for (const [errorType, { message, status }] of Object.entries(
    errorMessages
  )) {
    if (error instanceof Error && error.constructor.name === errorType) {
      return new NextResponse(message, { status });
    }
  }
  return new NextResponse(`${error.message}Internal Server Error`, { status: 500 });
}