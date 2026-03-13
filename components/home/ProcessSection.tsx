"use client";

import { motion } from "framer-motion";
import { PackageSearch, FileCheck, Truck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: PackageSearch,
    step: "01",
    title: "Yêu cầu báo giá",
    description: "Gửi thông tin hàng hóa và tuyến đường mong muốn. Chúng tôi sẽ tư vấn giải pháp tối ưu nhất.",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Ký kết hợp đồng",
    description: "Xác nhận điều khoản, thanh toán và chuẩn bị hồ sơ hải quan theo quy định.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Vận chuyển hàng hóa",
    description: "Theo dõi lộ trình hàng hóa theo thời gian thực trên hệ thống tracking của chúng tôi.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Giao hàng tận nơi",
    description: "Hàng hóa được giao đúng địa chỉ, đúng thời gian và được bảo hiểm đầy đủ.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#0B3D91] font-semibold text-sm uppercase tracking-wider rounded-full mb-4">
            Quy trình làm việc
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Đơn giản – Nhanh chóng –{" "}
            <span className="text-[#FF6B35]">Hiệu quả</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            4 bước đơn giản để bắt đầu hành trình logistics cùng Bluestream
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-[#0B3D91] via-[#FF6B35] to-[#0B3D91] opacity-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="relative text-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {/* Step number + icon */}
                <div className="relative mx-auto mb-6">
                  <motion.div
                    className="w-24 h-24 rounded-2xl mx-auto flex flex-col items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500"
                    style={{ background: "linear-gradient(135deg, #0B3D91 0%, #1e5bb8 100%)" }}
                    whileHover={{ scale: 1.08, rotate: 3 }}
                  >
                    <step.icon className="w-8 h-8 text-white mb-1" />
                  </motion.div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#FF6B35] text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {i + 1}
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-[#0B3D91] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>

                {/* Arrow for desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 text-[#FF6B35] opacity-40 text-2xl">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
