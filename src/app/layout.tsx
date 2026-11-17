import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QARAT — Architectural Interior Execution & Luxury Decorator",
  description:
    "Specialized interior contracting by QARAT. Architectural precision across false ceilings, decorative wall surfaces, modular kitchens, and turnkey fit-outs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] flex flex-col font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
