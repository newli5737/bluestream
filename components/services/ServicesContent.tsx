"use client";

import { motion } from "framer-motion";
import { Ship, Plane, Truck, Warehouse, FileText, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Ship,
    title: "Vận chuyển đường biển",
    description: "Dịch vụ vận chuyển container FCL/LCL đến hơn 50 quốc gia với chi phí tối ưu và thời gian đảm bảo.",
    image: "https://images.unsplash.com/photo-1735047974891-df59713d8192?w=600&q=80",
    features: ["FCL & LCL", "Tracking thời gian thực", "Bảo hiểm hàng hóa", "50+ tuyến đường"],
  },
  {
    icon: Plane,
    title: "Vận chuyển hàng không",
    description: "Giao hàng nhanh chóng qua mạng lưới hàng không quốc tế, phù hợp với hàng hóa giá trị cao.",
    image: "https://images.unsplash.com/photo-1606768666853-403c90a981ad?w=600&q=80",
    features: ["Giao trong 24-48h", "Hàng lạnh & đặc biệt", "Security screening", "100+ sân bay"],
  },
  {
    icon: Truck,
    title: "Vận chuyển nội địa",
    description: "Mạng lưới vận tải nội địa rộng khắp, giao hàng từ cảng đến tận kho khách hàng.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
    features: ["FTL & LTL", "63 tỉnh thành", "GPS tracking", "Giao hàng door-to-door"],
  },
  {
    icon: Warehouse,
    title: "Kho bãi và phân phối",
    description: "Hệ thống kho bãi hiện đại, quản lý tồn kho và phân phối hàng hóa chuyên nghiệp.",
    image: "https://images.unsplash.com/photo-1684695749267-233af13276d0?w=600&q=80",
    features: ["100,000+ m² kho", "Nhiệt độ có kiểm soát", "WMS tích hợp", "Phân phối nhanh"],
  },
  {
    icon: FileText,
    title: "Khai báo hải quan",
    description: "Hỗ trợ làm thủ tục hải quan nhanh chóng, giảm thiểu thời gian thông quan.",
    image: "https://images.unsplash.com/photo-1619070284836-e850273d69ac?w=600&q=80",
    features: ["C/O & L/C", "HS code tư vấn", "Khai báo điện tử", "Hoàn thuế nhập khẩu"],
  },
  {
    icon: Globe,
    title: "Tư vấn logistics",
    description: "Đội ngũ chuyên gia tư vấn xây dựng chuỗi cung ứng tối ưu cho doanh nghiệp.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
    features: ["Phân tích chi phí", "Tối ưu lộ trình", "Báo cáo định kỳ", "Chuyên gia ngành"],
  },
];

export default function ServicesContent() {
  return (
    <div id="services-list" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tất cả <span className="text-[#FF6B35]">dịch vụ</span> của chúng tôi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Giải pháp logistics toàn diện cho mọi nhu cầu vận chuyển của doanh nghiệp</p>
        </motion.div>

        <div className="space-y-20">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl group">
                  <Image src={svc.image} alt={svc.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/60 to-transparent" />
                  <div className="absolute bottom-5 left-5 bg-white p-3 rounded-xl shadow-lg">
                    <svc.icon className="w-6 h-6 text-[#0B3D91]" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#0B3D91] text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
                  Dịch vụ 0{i + 1}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{svc.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{svc.description}</p>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {svc.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e85a20] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Tư vấn dịch vụ <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
