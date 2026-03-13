import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    template: "%s | Bluestream Logistics",
    default: "Bluestream Logistics – Giải pháp Vận chuyển & Logistics Toàn cầu",
  },
  description:
    "Bluestream Logistics – Đối tác tin cậy trong lĩnh vực vận chuyển quốc tế, kho bãi và chuỗi cung ứng. Kết nối 50+ quốc gia.",
  keywords: ["logistics", "vận chuyển", "xuất nhập khẩu", "hải quan", "kho bãi", "Việt Nam"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
