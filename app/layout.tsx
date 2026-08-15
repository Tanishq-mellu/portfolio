import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import { Background } from "@/components/background/Background";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Tanishq Meshram",
    template: "%s | Tanishq Meshram",
  },
  description:
    "Research portfolio focused on Quantum Cybersecurity, Quantum Cryptography, Open Source Software, and Secure Systems Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable}`}>
        <Background />
        {children}
      </body>
    </html>
  );
}