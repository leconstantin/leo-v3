import z from 'zod';

export const SubFormSchema = z.object({
  email: z.email().min(5, { error: 'Email must be at least 5 characters.' }),
});
