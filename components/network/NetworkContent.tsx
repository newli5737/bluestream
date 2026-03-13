"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import GlobalNetworkSection from "@/components/home/GlobalNetworkSection";

const regions = [
  {
    name: "Đông Nam Á",
    color: "#0B3D91",
    countries: ["Việt Nam", "Singapore", "Thái Lan", "Malaysia", "Indonesia", "Philippines", "Myanmar", "Campuchia"],
  },
  {
    name: "Đông Bắc Á",
    color: "#1e5bb8",
    countries: ["Trung Quốc", "Nhật Bản", "Hàn Quốc", "Đài Loan", "Hong Kong", "Macau"],
  },
  {
    name: "Châu Âu",
    color: "#FF6B35",
    countries: ["Hà Lan", "Đức", "Pháp", "Anh", "Bỉ", "Ý", "Tây Ban Nha", "Ba Lan"],
  },
  {
    name: "Bắc Mỹ",
    color: "#e85a20",
    countries: ["Mỹ", "Canada", "Mexico"],
  },
  {
    name: "Trung Đông & Nam Á",
    color: "#0B3D91",
    countries: ["UAE", "Ấn Độ", "Ả Rập Xê Út", "Qatar", "Kuwait"],
  },
  {
    name: "Châu Đại Dương",
    color: "#1e5bb8",
    countries: ["Úc", "New Zealand"],
  },
];

export default function NetworkContent() {
  return (
    <div className="bg-white">
      <GlobalNetworkSection />

      {/* Regions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Khu vực <span className="text-[#FF6B35]">hoạt động</span>
            </h2>
            <p className="text-gray-600">Mạng lưới đối tác chiến lược trên toàn cầu</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${region.color}15` }}
                >
                  <MapPin className="w-5 h-5" style={{ color: region.color }} />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-3 group-hover:text-[#0B3D91] transition-colors">
                  {region.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {region.countries.map((c, ci) => (
                    <span key={ci} className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-blue-50 hover:text-[#0B3D91] transition-colors">
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
