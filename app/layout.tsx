import type { Metadata } from "next";
import { Playfair_Display, Inter, Petit_Formal_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const petitFormalScript = Petit_Formal_Script({
  variable: "--font-petitFormalScript",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rufaro Ndhlovu",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${petitFormalScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
