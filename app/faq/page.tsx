import { FAQClient } from "./faq-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Center | Sheepie.",
  description: "Find answers about our products, shipping, and care instructions. Everything you need to know to start your journey to better sleep.",
};

export default function FAQPage() {
  return <FAQClient />;
}
