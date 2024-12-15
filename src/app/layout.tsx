import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google';
import { SessionProvider } from "next-auth/react";

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
}) 

export const metadata: Metadata = {
  title: "Quizzma",
  description: "Página Principal do Quizzma",
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
