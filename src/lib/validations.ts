import * as z from 'zod';

export const FormDataSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one digit'),
  bio: z.string().min(10,'Bio must have at least 10 characters ').max(50, 'Bio cannot exceed 50 characters'),
  profile_picture: z
    .any()
    .refine((file) => {
      // Check if it's a file
      if (!(file instanceof File)) return false;

      // Check file type
      const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
      if (!allowedTypes.includes(file.type)) return false;

      // Check file size
      const maxSize = 1024 * 1024; // 1MB in bytes
      if (file.size > maxSize) return false;

      return true;
    }, 'Profile picture must be a PNG or JPG image and not exceed 1MB'),
  notification: z.boolean().optional(), // Assuming it's optional
  privacy: z.boolean().refine((val) => val === true, 'You must except privacy policy'),
});

export interface IFormData extends z.infer<typeof FormDataSchema> {}