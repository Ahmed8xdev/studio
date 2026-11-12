"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().email(),
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
    success: true,
    message: "Demo preview only. Your input passed validation, but no message was sent or stored. Connect a contact service before publishing this as a live contact form.",
  };
}
