import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import NetworkContent from "@/components/network/NetworkContent";

export const metadata: Metadata = { title: "Mạng lưới" };

export default function NetworkPage() {
  return (
    <>
      <HeroSection
        badge="🌐 Mạng lưới toàn cầu"
        title="Kết nối"
        highlight="50+ quốc gia"
        subtitle="Mạng lưới đối tác chiến lược rộng khắp đảm bảo hàng hóa của bạn được chuyển đến mọi ngóc ngách trên thế giới."
        imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=85"
        imageAlt="Bản đồ địa cầu kết nối toàn cầu"
        ctaText="Liên hệ tư vấn"
        ctaHref="/contact"
        height="large"
      />
      <NetworkContent />
    </>
  );
}
