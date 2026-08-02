import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
});

const mono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}