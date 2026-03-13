import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesContent from "@/components/services/ServicesContent";

export const metadata: Metadata = { title: "Dịch vụ – Bluestream Logistics" };

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        badge="🚢 Dịch vụ logistics"
        title="Dịch vụ vận chuyển"
        highlight="toàn diện"
        subtitle="Đầy đủ giải pháp logistics từ vận chuyển đường biển, hàng không, nội địa đến kho bãi và khai báo hải quan."
        imageUrl="/hero-services.png"
        imageAlt="Tàu container cảng biển hoàng hôn"
        ctaText="Báo giá ngay"
        ctaHref="/contact"
        secondCtaText="Xem chi tiết"
        secondCtaHref="#services-list"
        height="large"
      />
      <ServicesContent />
    </>
  );
}
