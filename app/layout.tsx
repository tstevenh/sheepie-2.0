import type { Metadata } from "next";
import { Playfair_Display, Quicksand } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/lib/lenis"; 
import { BackgroundClouds } from "@/components/ui/background-clouds";
import { Analytics } from "@vercel/analytics/react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sheepiesleep.com"),
  title: "Sheepie. | Premium Sleep Essentials for Deep Rest",
  description: "Transform your night with Sheepie. Discover ergonomic pillows, 100% blackout masks, and moldable earplugs engineered for deep, restorative sleep.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://sheepie.co.id",
    title: "Sheepie | Premium Sleep Essentials",
    description: "Experience the cloud-like comfort of Sheepie.",
    siteName: "Sheepie",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${quicksand.variable} antialiased bg-background text-foreground font-body`}
      >
        <ReactLenis root>
          <BackgroundClouds />
          {children}
          <Analytics />
        </ReactLenis>
      </body>
    </html>
  );
}