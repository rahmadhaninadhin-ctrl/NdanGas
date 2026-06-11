import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NdanGas - Studi Kasus Portofolio UI/UX",
  description: "Portofolio Design Thinking Aplikasi Transportasi NdanGas oleh Nadhin Ayudya Rahmadhani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}