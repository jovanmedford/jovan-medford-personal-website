import type { Metadata } from "next";
import { Asap, Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleAnalytics } from "@next/third-parties/google";

const asap = Asap({
  subsets: ["latin"],
  variable: "--font-asap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const gaId = process.env.GA_ID;

export const metadata: Metadata = {
  title: "Jovan Medford | Software Engineer",
  description:
    "Portfolio website for Toronto based Software Engineer - Jovan Medford",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${asap.variable} ${inter.variable}`}>
        <ChakraProvider>
          {children}
        </ChakraProvider>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
