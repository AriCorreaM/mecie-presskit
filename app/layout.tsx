import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Mecie | DJ & Producer - Santiago, Chile",
  description:
    "Press kit oficial de Mecie, DJ y productor chileno de techno, minimal y house. Booking, biografía, fotos y technical rider.",
  keywords: [
    "Mecie",
    "DJ",
    "Producer",
    "Techno",
    "Minimal",
    "House",
    "Santiago",
    "Chile",
    "Electronic Music",
  ],
  authors: [{ name: "Mecie" }],
  openGraph: {
    title: "Mecie | DJ & Producer",
    description:
      "Press kit oficial de Mecie, DJ y productor chileno de techno, minimal y house.",
    type: "website",
    locale: "es_CL",
    siteName: "Mecie Press Kit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mecie | DJ & Producer",
    description:
      "Press kit oficial de Mecie, DJ y productor chileno de techno, minimal y house.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
