import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import NewsContent from "@/components/news/NewsContent";

export const metadata: Metadata = { title: "Tin tức – Bluestream Logistics" };

export default function NewsPage() {
  return (
    <>
      <HeroSection
        badge="📰 Tin tức mới nhất"
        title="Tin tức &"
        highlight="Blog Logistics"
        subtitle="Cập nhật xu hướng mới nhất về logistics, vận chuyển, xuất nhập khẩu và quản lý chuỗi cung ứng từ đội ngũ chuyên gia."
        imageUrl="/hero-news.png"
        imageAlt="Trung tâm logistics hiện đại"
        ctaText="Đăng ký nhận tin"
        ctaHref="#newsletter"
        height="large"
      />
      <NewsContent />
    </>
  );
}
