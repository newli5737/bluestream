"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Shield, Clock, Globe, Award, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Đáng tin cậy 100%",
    description: "Cam kết bảo đảm hàng hóa an toàn, đúng hẹn với hợp đồng minh bạch.",
  },
  {
    icon: Clock,
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ chuyên viên sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi.",
  },
  {
    icon: Globe,
    title: "Mạng lưới toàn cầu",
    description: "Kết nối hơn 50 quốc gia với 200+ cảng biển và 100+ sân bay.",
  },
  {
    icon: Award,
    title: "Chứng nhận quốc tế",
    description: "ISO 9001:2015, AEO Certificate đảm bảo tiêu chuẩn dịch vụ.",
  },
  {
    icon: TrendingUp,
    title: "Tối ưu chi phí",
    description: "Giải pháp tiết kiệm chi phí logistics lên đến 30% so với thị trường.",
  },
  {
    icon: Users,
    title: "1000+ khách hàng",
    description: "Được tin tưởng bởi hơn 1000 doanh nghiệp lớn nhỏ trên cả nước.",
  },
];

function CountUp({ to, duration = 2 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = to / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #eef6f4 0%, #f2f8ec 40%, #e8f4f0 70%, #f0f7ed 100%)" }}>
      {/* Decorative circle */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-50 rounded-full opacity-60" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-50 rounded-full opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-orange-50 text-[#FF6B35] font-semibold text-sm uppercase tracking-wider rounded-full mb-4">
            Tại sao chọn chúng tôi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lý do doanh nghiệp tin tưởng{" "}
            <span className="text-[#0B3D91]">Bluestream</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            20 năm kinh nghiệm với đội ngũ chuyên nghiệp và công nghệ hiện đại
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#0B3D91]/20 transition-all duration-400 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-blue-50 group-hover:bg-[#0B3D91] transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-[#0B3D91] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#0B3D91] transition-colors">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl text-white"
          style={{ background: "linear-gradient(135deg, #0B3D91 0%, #1e5bb8 100%)" }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { value: 20, suffix: "+", label: "Năm kinh nghiệm" },
            { value: 50, suffix: "+", label: "Quốc gia" },
            { value: 1000, suffix: "+", label: "Khách hàng" },
            { value: 24, suffix: "/7", label: "Hỗ trợ" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl font-bold mb-1 text-[#FF6B35]">
                <CountUp to={stat.value} />{stat.suffix}
              </div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
