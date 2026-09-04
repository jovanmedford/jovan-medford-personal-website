import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleAnalytics } from "@next/third-parties/google";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

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
      <body className={kumbh.className}>
        <ChakraProvider>
          {children}
        </ChakraProvider>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
