import type { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import GlobalNetworkSection from "@/components/home/GlobalNetworkSection";
import BlogSection from "@/components/home/BlogSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Bluestream Logistics – Giải pháp Vận chuyển & Logistics Toàn cầu",
  description: "Bluestream Logistics – Đối tác tin cậy trong lĩnh vực vận chuyển quốc tế, kho bãi và chuỗi cung ứng. Kết nối 50+ quốc gia.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <GlobalNetworkSection />
      <BlogSection />
      <CTASection />
    </>
  );
}
