import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = { title: "Liên hệ" };

export default function ContactPage() {
  return (
    <>
      <HeroSection
        badge="📞 Liên hệ với chúng tôi"
        title="Hãy để chúng tôi"
        highlight="hỗ trợ bạn"
        subtitle="Đội ngũ chuyên gia luôn sẵn sàng 24/7. Nhận báo giá miễn phí trong vòng 2 giờ làm việc."
        imageUrl="/hero-contact.png"
        imageAlt="Đội ngũ chuyên gia logistics"
        height="medium"
      />
      <ContactContent />
    </>
  );
}
