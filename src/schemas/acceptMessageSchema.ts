import { z } from "zod";
export const acceptMessageSchema = z.object({
    content:z.string()
    .min(10, {message:"Content must be at least of 10 characters"})
    .max(300,{message :"Content must be al most 300 characters"})
})