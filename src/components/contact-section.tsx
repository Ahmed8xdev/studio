"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { buildContactWhatsAppDraft } from "@/lib/contact-whatsapp";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().trim().min(2, {
    message: "Name must be at least 2 characters.",
  }).max(100),
  email: z.string().trim().email({
    message: "Please enter a valid email address.",
  }).max(254),
  message: z.string().trim().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(4000),
});

export function ContactSection() {
  const [draftUrl, setDraftUrl] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // The visitor decides when to open WhatsApp and send the prefilled message.
    setDraftUrl(buildContactWhatsAppDraft(values));
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline drop-shadow-lg">Get In Touch</h2>
          <p className="max-w-[700px] text-muted-foreground text-base md:text-lg leading-relaxed mt-4">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>
        <div className="mx-auto max-w-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} onChange={() => setDraftUrl(null)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell me about your project..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Prepare WhatsApp Message
              </Button>
              {draftUrl && (
                <div role="status" className="rounded-lg border border-border p-4 text-sm space-y-2">
                  <p>Nothing has been sent yet. Open WhatsApp to review and send your message.</p>
                  <a href={draftUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold underline">
                    Open WhatsApp to send
                  </a>
                </div>
              )}
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
