import {
  handleErrorResponse,
    handleValidationErrorResponse,
  } from "@/lib/apiResponses";
import { FormDataSchema } from "@/lib/validations";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import { writeFile } from 'fs/promises'
import path from "path";
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    let notification:any = formData.get('notification')? formData.get('notification') : '';
    let privacy:any = formData.get('privacy')? formData.get('privacy') : '';
    privacy = privacy == 'true';
    notification = notification == 'true';
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        bio: formData.get('bio'),
        // profile_picture: formData.get('profile_picture'),
        privacy: privacy,
        notification: notification,
    }
    const response = FormDataSchema.safeParse(data);
    // const image:any = formData.get('profile_picture');

    // if (!image) {
    //     If no file is received, return a JSON response with an error and a 400 status code
    //     return NextResponse.json({ error: "No Image received." }, { status: 400 });
    //   }
    
    if (!response.success) {
        return handleValidationErrorResponse(response.error);
      }

      // Convert the file data to a Buffer
      // const buffer = Buffer.from(await image.arrayBuffer());
    
      // Replace spaces in the file name with underscores
      // const filename = `${Date.now()}-${image.name.replaceAll(" ", `_`)}`;
      // const filepath = `public/uploads/${filename}`;
      // await writeFile(
      //   path.join(process.cwd(), filepath),
      //   buffer
      // );

    //   encrypt it using bcryptjs and do not return it back to client. Comment for modern ui client
      data.password = "";
    return new NextResponse(JSON.stringify({data}), { status: 200 });
  } catch (error: any) {
    return handleErrorResponse(error as Error);
  }
}
