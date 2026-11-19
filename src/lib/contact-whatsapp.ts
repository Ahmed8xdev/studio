/** Shared with the existing public WhatsApp popup. */
export const PORTFOLIO_WHATSAPP_NUMBER = "201111356327";

export type ContactDraft = { name: string; email: string; message: string };

/** Prepare a reviewable message without transmitting personal data automatically. */
export function buildContactWhatsAppDraft(values: ContactDraft): string {
  const text = [
    "Hello, I am contacting you from your portfolio.",
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    "",
    values.message.trim(),
  ].join("\n");
  return `https://wa.me/${PORTFOLIO_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
