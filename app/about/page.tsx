import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = { title: "Giới thiệu" };

export default function AboutPage() {
  return (
    <>
      <HeroSection
        badge="🏢 Về chúng tôi"
        title="Chúng tôi là"
        highlight="Bluestream Logistics"
        subtitle="20 năm kinh nghiệm trong lĩnh vực logistics và vận chuyển quốc tế. Đối tác tin cậy của hơn 1000 doanh nghiệp Việt Nam."
        imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85"
        imageAlt="Văn phòng hiện đại"
        ctaText="Liên hệ ngay"
        ctaHref="/contact"
        secondCtaText="Xem dịch vụ"
        secondCtaHref="/services"
        height="large"
      />
      <AboutContent />
    </>
  );
}
