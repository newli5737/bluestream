"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  title: string;
  highlight?: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  badge?: string;
  ctaText?: string;
  ctaHref?: string;
  secondCtaText?: string;
  secondCtaHref?: string;
  height?: "full" | "large" | "medium";
}

export default function HeroSection({
  title,
  highlight,
  subtitle,
  imageUrl,
  imageAlt,
  badge,
  ctaText,
  ctaHref = "/contact",
  secondCtaText,
  secondCtaHref = "/services",
  height = "large",
}: HeroSectionProps) {
  const heightClass = {
    full: "min-h-screen",
    large: "min-h-[72vh]",
    medium: "min-h-[50vh]",
  }[height];

  return (
    <section className={`relative ${heightClass} flex items-end overflow-hidden`}>
      {/* ===== BACKGROUND IMAGE — fully visible, no heavy overlay ===== */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/*
          ONLY a very subtle bottom-dark gradient for text readability.
          The image is intentionally left very visible.
        */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(6,26,74,0.82) 0%, rgba(6,26,74,0.35) 40%, rgba(0,0,0,0.08) 75%, transparent 100%)",
          }}
        />
      </div>

      {/* Decorative top-right rings — purely cosmetic */}
      <div className="absolute top-8 right-10 w-48 h-48 border border-white/10 rounded-full pointer-events-none z-[1]" />
      <div className="absolute top-16 right-20 w-32 h-32 border border-[#FF6B35]/12 rounded-full pointer-events-none z-[1]" />

      {/* ===== CONTENT — positioned at the bottom left ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20 pt-40">
        <div className="max-w-2xl">
          {/* Badge */}
          {badge && (
            <motion.div
              className="inline-flex items-center gap-2 mb-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 bg-black/20 backdrop-blur-md text-white text-sm font-medium">
                <span className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full animate-pulse flex-shrink-0" />
                {badge}
              </span>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight drop-shadow-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            {title}
            {highlight && (
              <> <span className="text-[#FF6B35]">{highlight}</span></>
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base md:text-lg text-white/80 mb-8 leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          {(ctaText || secondCtaText) && (
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {ctaText && (
                <Link href={ctaHref}>
                  <motion.div
                    className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e85a20] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-xl shadow-black/30 cursor-pointer text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Link>
              )}
              {secondCtaText && (
                <Link href={secondCtaHref}>
                  <motion.div
                    className="inline-flex items-center gap-2 bg-white/12 hover:bg-white/22 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300 cursor-pointer text-sm"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {secondCtaText}
                  </motion.div>
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0 z-[3]">
        <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" fill="white" fillOpacity="0.97" />
        </svg>
      </div>
    </section>
  );
}
