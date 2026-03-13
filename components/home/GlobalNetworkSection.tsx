"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  { name: "Hà Nội", country: "Việt Nam", top: "45%", left: "75%" },
  { name: "TP.HCM", country: "Việt Nam", top: "52%", left: "76%" },
  { name: "Singapore", country: "Singapore", top: "56%", left: "73%" },
  { name: "Hong Kong", country: "Trung Quốc", top: "43%", left: "78%" },
  { name: "Tokyo", country: "Nhật Bản", top: "37%", left: "83%" },
  { name: "Seoul", country: "Hàn Quốc", top: "36%", left: "81%" },
  { name: "Bangkok", country: "Thái Lan", top: "50%", left: "72%" },
  { name: "Rotterdam", country: "Hà Lan", top: "31%", left: "45%" },
  { name: "Los Angeles", country: "Mỹ", top: "36%", left: "14%" },
  { name: "New York", country: "Mỹ", top: "33%", left: "22%" },
  { name: "Sydney", country: "Úc", top: "68%", left: "86%" },
  { name: "Dubai", country: "UAE", top: "48%", left: "58%" },
];

export default function GlobalNetworkSection() {
  return (
    <section id="network" className="py-24" style={{ background: "linear-gradient(135deg, #eef6f4 0%, #f0f7eb 40%, #e9f4ef 70%, #f2f8ed 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#0B3D91] font-semibold text-sm uppercase tracking-wider rounded-full mb-4">
            Mạng lưới toàn cầu
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kết nối{" "}
            <span className="text-[#FF6B35]">50+ quốc gia</span>{" "}
            trên thế giới
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mạng lưới đối tác rộng khắp giúp hàng hóa của bạn đến mọi nơi
          </p>
        </motion.div>

        {/* Map container */}
        <motion.div
          className="relative bg-white rounded-3xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Map bg */}
          <div className="relative h-[450px] md:h-[550px]">
            {/* Simple SVG world map bg */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #e8f0fe 0%, #dbeafe 50%, #e0f2fe 100%)",
              }}
            />

            {/* Grid lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              {[...Array(10)].map((_, i) => (
                <line key={`h${i}`} x1="0" y1={`${i * 10}%`} x2="100%" y2={`${i * 10}%`} stroke="#0B3D91" strokeWidth="0.5" strokeDasharray="4,4" />
              ))}
              {[...Array(14)].map((_, i) => (
                <line key={`v${i}`} x1={`${i * 7.5}%`} y1="0" x2={`${i * 7.5}%`} y2="100%" stroke="#0B3D91" strokeWidth="0.5" strokeDasharray="4,4" />
              ))}
            </svg>

            {/* Location pins */}
            {locations.map((loc, i) => (
              <motion.div
                key={i}
                className="absolute group cursor-pointer z-10"
                style={{ top: loc.top, left: loc.left, transform: "translate(-50%, -50%)" }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, delay: i * 0.08 }}
                whileHover={{ scale: 1.3, zIndex: 20 }}
              >
                <motion.div
                  className="w-7 h-7 bg-[#0B3D91] rounded-full border-2 border-white shadow-lg flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(11,61,145,0.4)",
                      "0 0 0 8px rgba(11,61,145,0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                >
                  <MapPin className="w-3.5 h-3.5 text-white" />
                </motion.div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  <div className="bg-[#061a4a] text-white px-3 py-1.5 rounded-lg text-xs shadow-xl">
                    <div className="font-semibold">{loc.name}</div>
                    <div className="text-blue-300">{loc.country}</div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#061a4a]" />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Connecting SVG lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-[5]">
              <motion.path
                d="M 75% 45% Q 78% 48% 73% 56%"
                stroke="#0B3D91" strokeWidth="1.5" fill="none" strokeDasharray="5,4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 1 }}
              />
              <motion.path
                d="M 75% 45% Q 60% 40% 45% 31%"
                stroke="#FF6B35" strokeWidth="1.5" fill="none" strokeDasharray="5,4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 1.3 }}
              />
              <motion.path
                d="M 75% 45% Q 50% 42% 22% 33%"
                stroke="#0B3D91" strokeWidth="1.5" fill="none" strokeDasharray="5,4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 1.6 }}
              />
            </svg>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border-t border-gray-100">
            {[
              { value: "50+", label: "Quốc gia" },
              { value: "200+", label: "Cảng biển" },
              { value: "100+", label: "Sân bay" },
              { value: "500+", label: "Đối tác" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center py-3"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.5 }}
              >
                <div className="text-2xl font-bold text-[#0B3D91] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
