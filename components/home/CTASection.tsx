"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0B3D91 0%, #061a4a 100%)" }}>
      {/* Decorative rings */}
      <div className="absolute -top-20 -right-20 w-80 h-80 border border-white/5 rounded-full" />
      <div className="absolute -top-10 -right-10 w-60 h-60 border border-white/8 rounded-full" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 border border-white/5 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.span
              className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 text-orange-300 text-sm font-semibold rounded-full mb-5"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              ⚡ Bắt đầu ngay hôm nay
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Sẵn sàng tối ưu hóa{" "}
              <span className="text-[#FF6B35]">chuỗi cung ứng</span>{" "}
              của bạn?
            </motion.h2>
            <motion.p
              className="text-blue-200 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Nhận tư vấn miễn phí từ chuyên gia logistics của chúng tôi trong vòng 24 giờ.
            </motion.p>
            <motion.ul
              className="space-y-2 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {["Báo giá miễn phí trong 2 giờ", "Tư vấn giải pháp tối ưu", "Cam kết chất lượng dịch vụ", "Hỗ trợ 24/7 không ngừng nghỉ"].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-blue-100 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right CTA card */}
          <motion.div
            className="flex-shrink-0 w-full lg:w-auto lg:min-w-[360px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Liên hệ với chúng tôi</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0B3D91] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0B3D91] transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0B3D91] transition-colors"
                />
                <select className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm text-gray-600 focus:outline-none focus:border-[#0B3D91] transition-colors">
                  <option value="">-- Dịch vụ cần tư vấn --</option>
                  <option>Vận chuyển đường biển</option>
                  <option>Vận chuyển hàng không</option>
                  <option>Vận chuyển nội địa</option>
                  <option>Kho bãi & Phân phối</option>
                  <option>Khai báo hải quan</option>
                </select>
                <motion.button
                  className="w-full bg-[#FF6B35] hover:bg-[#e85a20] text-white py-4 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Gửi yêu cầu báo giá <ArrowRight className="w-4 h-4" />
                </motion.button>
                <p className="text-xs text-gray-400 text-center">Chúng tôi sẽ liên hệ lại trong vòng 2 giờ làm việc</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
