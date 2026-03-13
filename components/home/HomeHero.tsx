"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Globe, Shield, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const floatingCards = [
  {
    emoji: "🚢",
    title: "Vận chuyển biển",
    sub: "FCL / LCL",
    color: "from-blue-50 to-white",
    position: "top-[20%] left-[-60px]",
    delay: 0,
    duration: 4,
  },
  {
    emoji: "✈️",
    title: "Hàng không",
    sub: "24 – 48h",
    color: "from-orange-50 to-white",
    position: "bottom-[20%] left-[-55px]",
    delay: 0.8,
    duration: 3.5,
  },
  {
    emoji: "📦",
    title: "Kho bãi",
    sub: "100,000m²",
    color: "from-green-50 to-white",
    position: "top-[50%] right-[-60px]",
    delay: 1.5,
    duration: 4.5,
  },
];

export default function HomeHero() {
  return (
    <section
      className="relative flex overflow-hidden"
      style={{ minHeight: "calc(100vh - 82px)" }}
    >
      {/* ── LEFT PANEL: text ── */}
      <div
        className="relative z-10 flex flex-col justify-center w-full lg:w-[52%] px-8 sm:px-12 lg:px-16 xl:px-20 py-16"
        style={{
          background:
            "linear-gradient(135deg, #040e26 0%, #0B3D91 60%, #0d3488 100%)",
        }}
      >
        {/* Dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        {/* Glow sphere */}
        <motion.div
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #FF6B35, transparent 70%)" }}
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/6 text-white text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
              🌏 Kết nối toàn cầu – Giao hàng tận nơi
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.12] mb-5"
          >
            Giải pháp{" "}
            <span className="relative inline-block">
              <span className="text-[#FF6B35]">Logistics</span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-[#FF6B35]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.85 }}
              />
            </span>
            <br />toàn diện cho
            <br /><span className="text-blue-200">doanh nghiệp</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-blue-100/80 text-base md:text-lg leading-relaxed mb-8 max-w-md"
          >
            Vận chuyển quốc tế, kho bãi và chuỗi cung ứng chuyên nghiệp.
            Tối ưu chi phí, đảm bảo thời gian, cam kết chất lượng.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.33 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Link href="/contact">
              <motion.div
                className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e85a20] text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-xl shadow-orange-600/30 cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,107,53,0.45)" }}
                whileTap={{ scale: 0.97 }}
              >
                Nhận báo giá ngay <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
            <Link href="/services">
              <motion.div
                className="inline-flex items-center gap-2 border border-white/25 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Khám phá dịch vụ
              </motion.div>
            </Link>
          </motion.div>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {[
              { icon: Globe, text: "50+ Quốc gia" },
              { icon: TrendingUp, text: "20+ Năm KN" },
              { icon: Shield, text: "ISO 9001:2015" },
            ].map((b, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/6 text-blue-100 text-xs font-medium">
                <b.icon className="w-3.5 h-3.5 text-[#FF6B35]" />
                {b.text}
              </span>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10"
          >
            {[
              { value: "20+", label: "Năm kinh nghiệm" },
              { value: "1000+", label: "Khách hàng" },
              { value: "50+", label: "Quốc gia" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-[#FF6B35]">{s.value}</div>
                <div className="text-xs text-blue-300 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── RIGHT PANEL: full-height image ── */}
      <div className="hidden lg:block relative lg:w-[48%] overflow-hidden">
        <Image
          src="/hero-logistics.png"
          alt="Logistics Container Port"
          fill
          className="object-cover object-center"
          priority
          sizes="48vw"
        />
        {/* Subtle left blend so it merges with blue panel */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #0B3D91 0%, rgba(11,61,145,0.25) 25%, transparent 55%)",
          }}
        />
        {/* Very light bottom darkening */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(4,14,38,0.45) 0%, transparent 40%)",
          }}
        />

        {/* Floating cards on the image */}
        {floatingCards.map((card, i) => (
          <motion.div
            key={i}
            className={`absolute ${card.position} z-20 bg-gradient-to-br ${card.color} rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3 min-w-[140px]`}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
            transition={{
              opacity: { duration: 0.4, delay: 0.8 + i * 0.2 },
              scale: { duration: 0.4, delay: 0.8 + i * 0.2 },
              y: {
                duration: card.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: card.delay,
              },
            }}
          >
            <span className="text-2xl">{card.emoji}</span>
            <div>
              <div className="text-xs font-bold text-gray-800">{card.title}</div>
              <div className="text-xs font-semibold text-[#0B3D91]">{card.sub}</div>
            </div>
          </motion.div>
        ))}

        {/* 24/7 badge */}
        <motion.div
          className="absolute top-8 right-8 z-20 bg-[#FF6B35] rounded-2xl px-5 py-3 shadow-2xl shadow-orange-500/40"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.4, delay: 1.2 },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
        >
          <div className="text-white text-sm font-bold">Hỗ trợ 24/7</div>
          <div className="flex gap-0.5 mt-0.5">
            {[...Array(5)].map((_, j) => <span key={j} className="text-yellow-300 text-xs">★</span>)}
          </div>
        </motion.div>

        {/* Bottom label */}
        <div className="absolute bottom-8 left-8 z-20">
          <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-medium border border-white/15">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B35]" />
            Cam kết giao hàng đúng hẹn
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" fillOpacity="0.98" />
        </svg>
      </div>
    </section>
  );
}
