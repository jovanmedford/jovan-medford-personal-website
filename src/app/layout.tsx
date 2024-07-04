import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from '@chakra-ui/react'

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jovan Medford | Software Enginerer",
  description: "Portfolio website for Toronto based Software Engineer - Jovan Medford",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kumbh.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
