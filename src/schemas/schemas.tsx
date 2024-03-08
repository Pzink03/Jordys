import { z } from "zod";

export const contactFormSchema = z.object({
    fullName: z.string(),
    email: z.string(),
    subject: z.string(),
    message: z.string(),
})
