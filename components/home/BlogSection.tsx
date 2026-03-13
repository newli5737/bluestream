"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "Xu hướng logistics 2026: Chuyển đổi số và bền vững",
    excerpt: "Khám phá những xu hướng mới nhất trong ngành logistics, từ công nghệ AI đến giải pháp xanh...",
    category: "Xu hướng",
    date: "15/03/2026",
    readTime: "5 phút",
    image: "https://images.unsplash.com/photo-1619070284836-e850273d69ac?w=600&q=80",
    color: "#0B3D91",
  },
  {
    title: "Cách tối ưu hóa chi phí vận chuyển quốc tế",
    excerpt: "Hướng dẫn chi tiết giúp doanh nghiệp giảm thiểu chi phí logistics mà vẫn đảm bảo chất lượng...",
    category: "Hướng dẫn",
    date: "10/03/2026",
    readTime: "7 phút",
    image: "https://images.unsplash.com/photo-1735047974891-df59713d8192?w=600&q=80",
    color: "#FF6B35",
  },
  {
    title: "Quy trình nhập khẩu hàng hóa từ Trung Quốc",
    excerpt: "Tổng hợp quy trình, thủ tục và lưu ý quan trọng khi nhập khẩu hàng hóa từ Trung Quốc...",
    category: "Thủ tục",
    date: "05/03/2026",
    readTime: "6 phút",
    image: "https://images.unsplash.com/photo-1684695749267-233af13276d0?w=600&q=80",
    color: "#0B3D91",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-[#0B3D91] font-semibold text-sm uppercase tracking-wider rounded-full mb-4">
            Tin tức & Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cập nhật thông tin{" "}
            <span className="text-[#FF6B35]">logistics</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kiến thức, xu hướng và hướng dẫn hữu ích về logistics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-white text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#0B3D91] transition-colors text-base">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                <motion.div className="flex items-center gap-1.5 text-[#FF6B35] font-semibold text-sm" whileHover={{ x: 4 }}>
                  Đọc thêm <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/news">
            <motion.div
              className="inline-flex items-center gap-2 border-2 border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Xem tất cả bài viết <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
