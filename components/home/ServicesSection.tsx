"use client";

import { motion } from "framer-motion";
import { Ship, Plane, Truck, Warehouse, FileText, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: Ship,
    title: "Vận chuyển đường biển",
    description: "Dịch vụ vận chuyển container FCL/LCL đến hơn 50 quốc gia với chi phí tối ưu và thời gian đảm bảo.",
    image: "https://images.unsplash.com/photo-1735047974891-df59713d8192?w=600&q=80",
    color: "#0B3D91",
  },
  {
    icon: Plane,
    title: "Vận chuyển hàng không",
    description: "Giao hàng nhanh chóng qua mạng lưới hàng không quốc tế, phù hợp với hàng hóa giá trị cao.",
    image: "https://images.unsplash.com/photo-1606768666853-403c90a981ad?w=600&q=80",
    color: "#1e5bb8",
  },
  {
    icon: Truck,
    title: "Vận chuyển nội địa",
    description: "Mạng lưới vận tải nội địa rộng khắp, giao hàng từ cảng đến tận kho khách hàng.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
    color: "#0B3D91",
  },
  {
    icon: Warehouse,
    title: "Kho bãi và phân phối",
    description: "Hệ thống kho bãi hiện đại, quản lý tồn kho và phân phối hàng hóa chuyên nghiệp.",
    image: "https://images.unsplash.com/photo-1684695749267-233af13276d0?w=600&q=80",
    color: "#1e5bb8",
  },
  {
    icon: FileText,
    title: "Khai báo hải quan",
    description: "Hỗ trợ làm thủ tục hải quan nhanh chóng, giảm thiểu thời gian thông quan.",
    image: "https://images.unsplash.com/photo-1619070284836-e850273d69ac?w=600&q=80",
    color: "#0B3D91",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#0B3D91] font-semibold text-sm uppercase tracking-wider rounded-full mb-4">
            Dịch vụ của chúng tôi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Giải pháp Logistics{" "}
            <span className="text-[#FF6B35]">toàn diện</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cung cấp đầy đủ các dịch vụ vận chuyển và logistics cho doanh nghiệp của bạn
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/80 to-transparent" />
                {/* Icon badge */}
                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-xl shadow-lg group-hover:bg-[#FF6B35] transition-colors duration-300">
                  <service.icon className="w-5 h-5 text-[#0B3D91] group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#0B3D91] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <motion.div
                  className="flex items-center gap-1.5 text-[#FF6B35] font-semibold text-sm"
                  whileHover={{ x: 4 }}
                >
                  Tìm hiểu thêm <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href="/services">
            <motion.div
              className="inline-flex items-center gap-2 border-2 border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Xem tất cả dịch vụ <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
