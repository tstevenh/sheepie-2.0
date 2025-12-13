import { ProductsClient } from "./products-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Collection | Sheepie.",
  description: "Explore the triad of sleep essentials: CerviCloud Pillow, LumiCloud Mask, and CalmiCloud Earplugs. Crafted for silence, darkness, and alignment.",
};

export default function ProductsPage() {
  return <ProductsClient />;
}
