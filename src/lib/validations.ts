import * as z from 'zod';


export const userDetailsSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one digit'),
});

export interface IUser extends z.infer<typeof userDetailsSchema> {}
export const profileInfoSchema = z.object({
  bio: z.string().min(10,'Bio must have at least 10 characters ').max(50, 'Bio cannot exceed 50 characters'),
  // profile_picture: z.any().optional(),
});
export interface IProfile extends z.infer<typeof profileInfoSchema> {}

export const preferencesSchema = z.object({
  notification: z.boolean(), // Assuming it's optional
  privacy: z.boolean().refine((val) => val === true, 'You must except privacy policy'),
});
export interface IPreferences extends z.infer<typeof preferencesSchema> {}

// export const FormDataSchema = z.object({
//   name: z.string().min(3, 'Name must be at least 3 characters long'),
//   email: z.string().min(1, 'Email is required').email('Invalid email address'),
//   password: z.string()
//     .min(8, 'Password must be at least 8 characters long')
//     .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
//     .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
//     .regex(/[0-9]/, 'Password must contain at least one digit'),
//   bio: z.string().min(10,'Bio must have at least 10 characters ').max(50, 'Bio cannot exceed 50 characters'),
//   profile_picture: z
//     .any().optional(),
//   notification: z.boolean().optional(), // Assuming it's optional
//   privacy: z.boolean().refine((val) => val === true, 'You must except privacy policy'),
// });
export const FormDataSchema = userDetailsSchema
  .merge(profileInfoSchema)
  .merge(preferencesSchema);

export interface IFormData extends z.infer<typeof FormDataSchema> {}