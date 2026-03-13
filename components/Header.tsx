"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, Phone, ArrowRight, MapPin, Mail, Clock, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Trang chủ", href: "/" },
  { name: "Giới thiệu", href: "/about" },
  { name: "Dịch vụ", href: "/services" },
  { name: "Mạng lưới", href: "/network" },
  { name: "Tin tức", href: "/news" },
  { name: "Liên hệ", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const lastY = useRef(0);

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 20);
      // Hide header on scroll down, show on scroll up
      if (y > 400 && y > lastY.current + 5) setHidden(true);
      if (y < lastY.current - 5) setHidden(false);
      lastY.current = y;
      setProgress(max > 0 ? (y / max) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* ─── Top utility bar ─── */}
      <div className="bg-[#0B3D91] text-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-10 text-xs">
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-blue-200">
              <MapPin className="w-3 h-3" />
              Tầng 10, 123 Lê Lợi, Q.1, TP.HCM
            </span>
            <span className="flex items-center gap-1.5 text-blue-200">
              <Mail className="w-3 h-3" />
              info@bluestream.vn
            </span>
            <span className="flex items-center gap-1.5 text-blue-200">
              <Clock className="w-3 h-3" />
              T2–T6: 8:00 – 18:00
            </span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <a href="tel:19001234" className="flex items-center gap-1.5 text-white font-semibold hover:text-[#FF6B35] transition-colors">
              <Phone className="w-3 h-3" />
              1900 xxxx
            </a>
            <span className="hidden sm:inline text-blue-300">|</span>
            <span className="hidden sm:inline text-blue-200">Hỗ trợ 24/7</span>
          </div>
        </div>
      </div>

      {/* ─── Scroll progress bar ─── */}
      <div
        className="fixed top-0 left-0 h-[3px] z-[9999]"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #FF6B35, #ff9966, #FF6B35)",
          backgroundSize: "200%",
          transition: "width 60ms linear",
        }}
      />

      {/* ─── Main header ─── */}
      <motion.header
        className="sticky top-0 z-50"
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div
          className="transition-all duration-400"
          style={{
            background: scrolled ? "rgba(255,255,255,0.92)" : "#ffffff",
            backdropFilter: scrolled ? "saturate(180%) blur(20px)" : "none",
            WebkitBackdropFilter: scrolled ? "saturate(180%) blur(20px)" : "none",
            boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.08)" : "none",
            borderBottom: scrolled ? "none" : "1px solid #f1f5f9",
          }}
        >
          <div className="max-w-[1400px] mx-auto flex items-center justify-between px-5 sm:px-8 lg:px-12 h-[72px]">

            {/* ─── Logo ─── */}
            <Link href="/" className="flex-shrink-0 group">
              <motion.div
                className="relative flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative w-[48px] h-[48px] rounded-xl overflow-hidden ring-2 ring-gray-100/80 group-hover:ring-[#0B3D91]/20 transition-all duration-300">
                  <Image
                    src="/bluestream_logo.jpg"
                    alt="Bluestream"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="hidden sm:block leading-tight">
                  <span className="block text-[15px] font-extrabold text-[#0B3D91] tracking-tight">BLUESTREAM</span>
                  <span className="block text-[10px] font-semibold text-gray-400 tracking-[0.15em] uppercase">Logistics</span>
                </div>
              </motion.div>
            </Link>

            {/* ─── Desktop navigation ─── */}
            <nav className="hidden lg:flex items-center">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link key={item.name} href={item.href}>
                    <div className="relative group px-4 py-6 cursor-pointer">
                      <span className={`text-[13px] font-semibold tracking-wide uppercase transition-colors duration-200 ${
                        active ? "text-[#0B3D91]" : "text-gray-500 group-hover:text-[#0B3D91]"
                      }`}>
                        {item.name}
                      </span>
                      {/* Hover indicator */}
                      <span className={`absolute bottom-4 left-4 right-4 h-[2px] rounded-full transition-all duration-300 ${
                        active
                          ? "bg-[#FF6B35] scale-x-100"
                          : "bg-[#FF6B35] scale-x-0 group-hover:scale-x-100"
                      }`}
                        style={{ transformOrigin: "left" }}
                      />
                    </div>
                  </Link>
                );
              })}
            </nav>

            {/* ─── Right side ─── */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Hotline minimal */}
              <a href="tel:19001234" className="group flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-blue-50 transition-all duration-200">
                <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-[#0B3D91]/8 group-hover:bg-[#0B3D91]/15 transition-colors">
                  <Phone className="w-4 h-4 text-[#0B3D91]" />
                  {/* Ping animation */}
                  <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white" />
                </span>
                <div>
                  <div className="text-[10px] text-gray-400 font-medium leading-none">Gọi ngay</div>
                  <div className="text-sm font-bold text-[#0B3D91] leading-tight">1900 xxxx</div>
                </div>
              </a>

              {/* CTA */}
              <Link href="/contact">
                <motion.div
                  className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-[13px] text-white cursor-pointer overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #FF6B35 0%, #e04a0f 100%)" }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {/* Animated shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative">Báo giá miễn phí</span>
                  <ArrowRight className="relative w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </motion.div>
              </Link>
            </div>

            {/* ─── Mobile burger ─── */}
            <motion.button
              className="lg:hidden p-2.5 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              whileTap={{ scale: 0.88 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-6 h-6" />
                  </motion.span>
                ) : (
                  <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-6 h-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* ─── Mobile menu ─── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-gray-100 bg-white shadow-xl"
            >
              <div className="px-5 py-5 space-y-1">
                {navItems.map((item, i) => (
                  <motion.div key={item.name} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                        pathname === item.href
                          ? "bg-gradient-to-r from-blue-50 to-orange-50 text-[#0B3D91]"
                          : "text-gray-600 hover:bg-gray-50 hover:text-[#0B3D91]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {pathname === item.href && <span className="w-1.5 h-6 rounded-full bg-[#FF6B35]" />}
                        {item.name}
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-300" />
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 mt-2 space-y-3 border-t border-gray-100">
                  <Link href="/contact" onClick={() => setMenuOpen(false)}>
                    <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6B35] to-[#e04a0f] text-white font-bold py-4 rounded-xl text-sm">
                      Yêu cầu báo giá miễn phí
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                  <div className="flex items-center justify-center gap-3 py-2 text-sm text-gray-500">
                    <Phone className="w-4 h-4 text-[#FF6B35]" />
                    <span>Hotline: <strong className="text-[#0B3D91]">1900 xxxx</strong></span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
