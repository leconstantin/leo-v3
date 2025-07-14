import z from "zod";

export const SubFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(5, { message: "Email must be at least 5 characters." })
    .email({ message: "Please enter a valid email address." }),
});
