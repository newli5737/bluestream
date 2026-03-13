"use client";

import { motion } from "framer-motion";
import { Target, Eye, Users, Award, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const values = [
  { icon: Target, title: "Sứ mệnh", desc: "Kết nối doanh nghiệp Việt Nam với thị trường quốc tế thông qua các giải pháp logistics tối ưu." },
  { icon: Eye, title: "Tầm nhìn", desc: "Trở thành công ty logistics hàng đầu Đông Nam Á vào năm 2030." },
  { icon: Users, title: "Giá trị cốt lõi", desc: "Uy tín – Chuyên nghiệp – Sáng tạo – Bền vững trong từng hành động." },
];

const team = [
  { name: "Nguyễn Văn An", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80" },
  { name: "Trần Thị Bình", role: "COO", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80" },
  { name: "Lê Minh Cường", role: "Head of Operations", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80" },
  { name: "Phạm Thị Dung", role: "Head of Customer Service", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80" },
];

export default function AboutContent() {
  return (
    <div className="py-16">
      {/* Story section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#0B3D91] font-semibold text-sm uppercase tracking-wider rounded-full mb-4">Câu chuyện của chúng tôi</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">Hành trình <span className="text-[#FF6B35]">20 năm</span> kiến tạo giá trị</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Được thành lập năm 2005, Bluestream Logistics bắt đầu với một văn phòng nhỏ tại TP.HCM và đội ngũ 5 người với đam mê kết nối Việt Nam với thế giới.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sau 20 năm, chúng tôi đã phát triển thành một trong những công ty logistics uy tín nhất Việt Nam với hơn 500 nhân viên, 12 văn phòng và kết nối 50+ quốc gia.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2005", label: "Năm thành lập" },
                  { value: "500+", label: "Nhân viên" },
                  { value: "12", label: "Văn phòng" },
                  { value: "1000+", label: "Khách hàng" },
                ].map((s, i) => (
                  <div key={i} className="bg-blue-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-[#0B3D91]">{s.value}</div>
                    <div className="text-sm text-gray-600">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80" alt="Team meeting" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D91]/40 to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-bold text-[#0B3D91]">20+</div>
                <div className="text-xs text-gray-600">Năm kinh nghiệm</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #fff5f0 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Sứ mệnh & <span className="text-[#FF6B35]">Giá trị</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-blue-50 group-hover:bg-[#0B3D91] transition-colors duration-300">
                  <v.icon className="w-6 h-6 text-[#0B3D91] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Đội ngũ <span className="text-[#FF6B35]">lãnh đạo</span></h2>
            <p className="text-gray-600 max-w-xl mx-auto">Những con người đam mê và tài năng đứng sau thành công của Bluestream Logistics</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                className="group text-center"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden border-4 border-gray-100 group-hover:border-[#FF6B35] transition-colors duration-300">
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="128px" />
                </div>
                <h4 className="font-bold text-gray-900 text-sm">{member.name}</h4>
                <p className="text-[#0B3D91] text-xs mt-0.5">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h3 className="text-xl font-bold text-gray-900">Chứng nhận & Giải thưởng</h3>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {["ISO 9001:2015", "AEO Certificate", "WCA Member", "FIATA", "Top 10 Logistics Vietnam 2025", "Best Service Award"].map((cert, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-gray-200 shadow-sm hover:border-[#0B3D91] hover:shadow-md transition-all"
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle2 className="w-4 h-4 text-[#FF6B35]" />
                <span className="text-sm font-medium text-gray-700">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
