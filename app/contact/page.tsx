import { ContactClient } from "./contact-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Sheepie.",
  description: "Have a question? Reach out to our sleep experts or get support for your order. We're here to help you sleep better.",
};

export default function ContactPage() {
  return <ContactClient />;
}