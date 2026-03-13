"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react";
import Image from "next/image";

const allPosts = [
  {
    title: "Xu hướng logistics 2026: Chuyển đổi số và bền vững",
    excerpt: "Khám phá những xu hướng mới nhất trong ngành logistics, từ công nghệ AI đến giải pháp xanh bền vững cho tương lai.",
    category: "Xu hướng",
    date: "15/03/2026",
    readTime: "5 phút",
    image: "https://images.unsplash.com/photo-1619070284836-e850273d69ac?w=600&q=80",
    featured: true,
  },
  {
    title: "Cách tối ưu hóa chi phí vận chuyển quốc tế",
    excerpt: "Hướng dẫn chi tiết giúp doanh nghiệp giảm thiểu chi phí logistics mà vẫn đảm bảo chất lượng dịch vụ.",
    category: "Hướng dẫn",
    date: "10/03/2026",
    readTime: "7 phút",
    image: "https://images.unsplash.com/photo-1735047974891-df59713d8192?w=600&q=80",
  },
  {
    title: "Quy trình nhập khẩu hàng hóa từ Trung Quốc",
    excerpt: "Tổng hợp quy trình, thủ tục và lưu ý quan trọng khi nhập khẩu hàng hóa từ Trung Quốc về Việt Nam.",
    category: "Thủ tục",
    date: "05/03/2026",
    readTime: "6 phút",
    image: "https://images.unsplash.com/photo-1684695749267-233af13276d0?w=600&q=80",
  },
  {
    title: "Top 5 cảng biển lớn nhất Đông Nam Á",
    excerpt: "Khám phá 5 cảng biển quan trọng nhất khu vực Đông Nam Á và tầm quan trọng của chúng trong chuỗi cung ứng.",
    category: "Thông tin",
    date: "01/03/2026",
    readTime: "4 phút",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80",
  },
  {
    title: "Hướng dẫn đóng gói hàng xuất khẩu đúng chuẩn",
    excerpt: "Những lưu ý quan trọng khi đóng gói hàng hóa để đảm bảo an toàn trong suốt hành trình vận chuyển quốc tế.",
    category: "Hướng dẫn",
    date: "28/02/2026",
    readTime: "5 phút",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
  },
  {
    title: "Bluestream mở rộng mạng lưới sang châu Phi",
    excerpt: "Bluestream Logistics chính thức khai trương văn phòng đại diện tại Nam Phi, mở rộng tuyến vận chuyển sang lục địa đen.",
    category: "Tin công ty",
    date: "25/02/2026",
    readTime: "3 phút",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
  },
];

const categories = ["Tất cả", "Xu hướng", "Hướng dẫn", "Thủ tục", "Thông tin", "Tin công ty"];

export default function NewsContent() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search + filter */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm bài viết..."
              className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#0B3D91] text-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <motion.button
                key={i}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  i === 0
                    ? "bg-[#0B3D91] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-[#0B3D91]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured post */}
        <motion.div
          className="mb-12 rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="relative lg:w-1/2 h-72 lg:h-auto">
              <Image
                src={allPosts[0].image}
                alt={allPosts[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-xs font-bold">Nổi bật</span>
              </div>
            </div>
            <div className="lg:w-1/2 p-8 flex flex-col justify-center bg-white">
              <span className="inline-block px-3 py-1 bg-blue-50 text-[#0B3D91] text-xs font-semibold rounded-full mb-3">{allPosts[0].category}</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0B3D91] transition-colors">{allPosts[0].title}</h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-sm">{allPosts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{allPosts[0].date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{allPosts[0].readTime}</span>
                </div>
                <motion.div className="flex items-center gap-1.5 text-[#FF6B35] font-semibold text-sm" whileHover={{ x: 4 }}>
                  Đọc tiếp <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.slice(1).map((post, i) => (
            <motion.article
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 cursor-pointer transition-all duration-400"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 1200px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-3 left-3 bg-[#FF6B35] text-white px-2.5 py-0.5 rounded-full text-xs font-semibold">{post.category}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#0B3D91] transition-colors text-sm">{post.title}</h3>
                <p className="text-gray-500 text-xs mb-3 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                <motion.div className="flex items-center gap-1 text-[#FF6B35] font-semibold text-xs" whileHover={{ x: 3 }}>
                  Đọc thêm <ArrowRight className="w-3.5 h-3.5" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          id="newsletter"
          className="mt-16 p-8 rounded-3xl text-white text-center"
          style={{ background: "linear-gradient(135deg, #0B3D91 0%, #1e5bb8 100%)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-2">Đăng ký nhận tin tức</h3>
          <p className="text-blue-100 mb-6 text-sm">Nhận thông tin mới nhất về logistics, ưu đãi đặc biệt hàng tuần</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input type="email" placeholder="Email của bạn" className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white text-sm" />
            <motion.button className="bg-[#FF6B35] hover:bg-[#e85a20] text-white px-7 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-colors" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              Đăng ký ngay
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
