import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google';
import { SessionProvider } from "next-auth/react";

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
}) 

export const metadata: Metadata = {
  title: "FixIA",
  description: "FixIA - Onde seu conhecimento em programação cresce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.className} antialiased`}
      >
        <SessionProvider >
        {children}
        </SessionProvider>
      </body>
    </html>
  );
}
