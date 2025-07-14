import type z from "zod";
import type { SubFormSchema } from "./schema";

export type TSubFormSchema = z.infer<typeof SubFormSchema>;
