import { z } from "zod";

export const createQuizSchema = z.object({
  topic: z
    .string()
    .min(4, {
      message: "Topic must be at least 4 characters long",
    })
    .max(50, {
      message: "Topic must be less than 50 characters long",
    }),
  type: z.enum(["mcq", "open_ended"]),
  amount: z
    .number()
    .min(1, {
      message: "Number of questions must be at least 1",
    })
    .max(10, {
      message: "Number of questions must be less than 10",
    }),
});

export type CreateQuizValidator = z.infer<typeof createQuizSchema>;
