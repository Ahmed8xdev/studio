"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
  message: z.string().trim().min(10),
});

export async function submitContactForm(data: z.infer<typeof formSchema>) {
  const validated = formSchema.safeParse(data);
  if (!validated.success) {
    return {
      success: false,
      message: "Please enter a valid name, email address, and message before continuing.",
    };
  }

  // This portfolio is currently a demo and has no email or message storage backend.
  // Do not claim a message was delivered until a real service is connected.
  return {
    success: false,
    message: "Demo preview only. No message was sent or stored. Please use the published contact links instead.",
  };
}
