"use client";

import { motion } from "framer-motion";
import {
  MapPin, Phone, Mail, Facebook, Linkedin, Twitter, Instagram,
  Ship, ArrowUp, Globe, Clock, Award
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { name: "Trang chủ", href: "/" },
  { name: "Giới thiệu", href: "/about" },
  { name: "Dịch vụ", href: "/services" },
  { name: "Mạng lưới", href: "/network" },
  { name: "Tin tức", href: "/news" },
  { name: "Liên hệ", href: "/contact" },
];

const services = [
  "Vận chuyển đường biển",
  "Vận chuyển hàng không",
  "Vận chuyển nội địa",
  "Kho bãi & Phân phối",
  "Khai báo hải quan",
  "Tư vấn logistics",
];

const certifications = [
  { name: "ISO 9001:2015", icon: Award },
  { name: "AEO Certificate", icon: Globe },
  { name: "WCA Member", icon: Ship },
  { name: "FIATA", icon: Globe },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0B3D91 0%, #061a4a 100%)" }}>
        {/* Wave decoration top */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden h-16">
          <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0,32 C360,64 720,0 1080,32 C1260,48 1380,40 1440,32 L1440,0 L0,0 Z" fill="#f8fafc" />
          </svg>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">

          {/* Stats Bar */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 p-6 rounded-2xl border border-white/10"
            style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { value: "20+", label: "Năm kinh nghiệm" },
              { value: "50+", label: "Quốc gia" },
              { value: "1000+", label: "Khách hàng" },
              { value: "24/7", label: "Hỗ trợ" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-3xl font-bold text-[#FF6B35] mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-12 w-40 mb-5 overflow-hidden rounded-lg bg-white/10 p-1">
                <Image
                  src="/bluestream_logo.jpg"
                  alt="Bluestream Logistics"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-blue-200 text-sm leading-relaxed mb-6">
                Đối tác tin cậy trong lĩnh vực logistics và vận chuyển quốc tế.
                Kết nối doanh nghiệp Việt Nam với thế giới.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-blue-200 hover:text-white hover:bg-[#FF6B35] transition-all duration-300"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-white font-bold text-base mb-5 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#FF6B35]" />
                Menu nhanh
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, i) => (
                  <motion.li key={i} whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link
                      href={link.href}
                      className="text-blue-200 hover:text-[#FF6B35] transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-[#FF6B35] rounded-full flex-shrink-0" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-white font-bold text-base mb-5 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#FF6B35]" />
                Dịch vụ
              </h4>
              <ul className="space-y-2">
                {services.map((service, i) => (
                  <motion.li key={i} whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link
                      href="/services"
                      className="text-blue-200 hover:text-[#FF6B35] transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-[#FF6B35] rounded-full flex-shrink-0" />
                      {service}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-white font-bold text-base mb-5 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#FF6B35]" />
                Liên hệ
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#FF6B35] mt-1 flex-shrink-0" />
                  <span className="text-blue-200 text-sm">
                    Tầng 10, Tòa nhà ABC<br />
                    123 Đường Lê Lợi, Quận 1<br />
                    TP. Hồ Chí Minh, Việt Nam
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#FF6B35] flex-shrink-0" />
                  <a href="tel:1900xxxx" className="text-blue-200 hover:text-white transition-colors text-sm">
                    Hotline: 1900 xxxx
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#FF6B35] flex-shrink-0" />
                  <a href="mailto:info@bluestream.vn" className="text-blue-200 hover:text-white transition-colors text-sm">
                    info@bluestream.vn
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#FF6B35] flex-shrink-0" />
                  <span className="text-blue-200 text-sm">
                    T2 – T6: 8:00 – 18:00<br />
                    T7: 8:00 – 12:00
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Newsletter */}
          <motion.div
            className="rounded-2xl p-6 md:p-8 mb-12 border border-white/10"
            style={{ background: "rgba(255,255,255,0.05)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-1">Đăng ký nhận tin tức</h3>
                <p className="text-blue-200 text-sm">Cập nhật thông tin logistics, ưu đãi đặc biệt hàng tuần</p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="flex-1 md:w-64 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300 focus:outline-none focus:border-[#FF6B35] text-sm transition-colors"
                />
                <motion.button
                  className="bg-[#FF6B35] hover:bg-[#e85a20] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors whitespace-nowrap"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Đăng ký
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 pb-8 border-b border-white/10">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-blue-200 text-xs"
                style={{ background: "rgba(255,255,255,0.04)" }}
                whileHover={{ scale: 1.05, borderColor: "rgba(255,107,53,0.5)" }}
              >
                <cert.icon className="w-4 h-4 text-[#FF6B35]" />
                {cert.name}
              </motion.div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-300 text-xs text-center md:text-left">
              © 2026 Bluestream Logistics. All rights reserved.
            </p>
            <div className="flex gap-5 text-xs">
              {["Điều khoản dịch vụ", "Chính sách bảo mật", "Cookie Policy"].map((item, i) => (
                <a key={i} href="#" className="text-blue-300 hover:text-[#FF6B35] transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center shadow-lg shadow-orange-500/40 z-50 hover:bg-[#e85a20] transition-colors"
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.15, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </motion.button>
    </>
  );
}
