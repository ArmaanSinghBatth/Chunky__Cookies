import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/lib/cartContext";

export const metadata: Metadata = {
  title: "Chunky Cookies 🍪 — Freshly Baked, Delivered to You",
  description: "Handcrafted cookies made with real butter, Belgian chocolate, and a whole lot of love. Order fresh cookies via WhatsApp.",
  keywords: "cookies, handcrafted, fresh baked, delivery, chocolate chip, chunky cookies",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main style={{ paddingTop: "var(--nav-h)" }}>{children}</main>
          <Footer />
          <FloatingWA />
        </CartProvider>
      </body>
    </html>
  );
}
