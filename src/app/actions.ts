"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(data: z.infer<typeof formSchema>) {
  try {
    const validatedData = formSchema.parse(data);

    // Here you would typically handle the form submission,
    // e.g., save to a database, send an email, etc.
    // We will simulate a delay for the AI response.
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate AI-powered confirmation message
    const aiConfirmationMessage = `Thank you, ${validatedData.name}! Your message regarding "${validatedData.message.substring(0, 20)}..." has been received. I've reviewed your request and will get back to you at ${validatedData.email} shortly.`;

    return {
      success: true,
      message: aiConfirmationMessage,
    };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
