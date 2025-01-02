import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({
  variable: "--font",
  subsets: ["latin"],
  weight: ["100", "400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CODERED - Admin Panel",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable} ${font.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}