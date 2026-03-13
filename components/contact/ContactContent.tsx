"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Địa chỉ",
    lines: ["Tầng 10, Tòa nhà ABC", "123 Đường Lê Lợi, Quận 1", "TP. Hồ Chí Minh, Việt Nam"],
  },
  {
    icon: Phone,
    title: "Điện thoại",
    lines: ["Hotline: 1900 xxxx", "Fax: +84 28 xxxx xxxx"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@bluestream.vn", "sales@bluestream.vn"],
  },
  {
    icon: Clock,
    title: "Giờ làm việc",
    lines: ["Thứ 2 – Thứ 6: 8:00 – 18:00", "Thứ 7: 8:00 – 12:00", "Hotline: 24/7"],
  },
];

export default function ContactContent() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#0B3D91] font-semibold text-sm uppercase tracking-wider rounded-full mb-4">
              Thông tin liên hệ
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hãy nói chuyện với{" "}
              <span className="text-[#FF6B35]">chúng tôi</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Đội ngũ chuyên gia logistics của chúng tôi luôn sẵn sàng lắng nghe và tư vấn giải pháp tốt nhất cho doanh nghiệp của bạn.
            </p>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-[#0B3D91]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{info.title}</h4>
                    {info.lines.map((line, li) => (
                      <p key={li} className="text-gray-600 text-sm">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map embed placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 h-60">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.448896788483!2d106.69607347454876!3d10.776710489369694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f40a3b49e59%3A0xa1bd14e483a602db!2zMTIzIMSQLiBMw6ogTOG7o2ksIELhur9uIE5naMOpLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Gửi yêu cầu tư vấn</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Họ và tên *</label>
                  <input type="text" placeholder="Nguyễn Văn A" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0B3D91] transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Tên công ty</label>
                  <input type="text" placeholder="ABC Company" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0B3D91] transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Email *</label>
                <input type="email" placeholder="email@example.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0B3D91] transition-colors" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Số điện thoại *</label>
                <input type="tel" placeholder="0901 234 567" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0B3D91] transition-colors" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Dịch vụ cần tư vấn</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-600 focus:outline-none focus:border-[#0B3D91] transition-colors">
                  <option value="">-- Chọn dịch vụ --</option>
                  <option>Vận chuyển đường biển</option>
                  <option>Vận chuyển hàng không</option>
                  <option>Vận chuyển nội địa</option>
                  <option>Kho bãi & Phân phối</option>
                  <option>Khai báo hải quan</option>
                  <option>Tư vấn logistics</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1.5 block">Nội dung yêu cầu</label>
                <textarea
                  rows={4}
                  placeholder="Mô tả chi tiết nhu cầu vận chuyển của bạn..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#0B3D91] transition-colors resize-none"
                />
              </div>
              <motion.button
                className="w-full bg-[#FF6B35] hover:bg-[#e85a20] text-white py-4 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-4 h-4" />
                Gửi yêu cầu tư vấn
              </motion.button>

              <div className="flex items-start gap-2 pt-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-gray-500">
                  Chúng tôi cam kết phản hồi trong vòng <strong>2 giờ làm việc</strong>. Thông tin của bạn được bảo mật tuyệt đối.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
