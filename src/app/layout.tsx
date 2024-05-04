import type { Metadata } from "next";
import "./globals.css";
import {
  monument,
  satoshiBold,
  satoshiMedium,
  satoshiRegular,
} from "@/utils/globalFonts";
import Header from "@/components/Header";
import FooterHandler from "@/components/FooterHandler";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: {
    absolute: "Islam Belamri",
    template: "Islam Belamri | %s",
  },
  description: "This is my professional portfolio site.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monument.variable} ${satoshiBold.variable} ${satoshiMedium.variable} ${satoshiRegular.variable}`}
      >
        <Header />
        {children}
        <FooterHandler />
      </body>
    </html>
  );
}
