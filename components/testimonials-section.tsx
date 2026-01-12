"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Anh Tuấn",
    role: "Độc giả thân thiết",
    content: "Bài viết giúp tôi hiểu sâu hơn về câu chuyện phía sau những giỏ quà Tết. Cảm giác như đang nghe một podcast chất lượng cao vậy.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tuan",
  },
  {
    name: "Chị Mai",
    role: "Biên tập viên blog",
    content: "Mạch nội dung rất mượt mà, thông tin được kiểm chứng và trình bày sinh động. Đây là nguồn tham khảo đáng tin cho bài viết của tôi.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mai",
  },
  {
    name: "Bạn Ngọc",
    role: "Sinh viên văn hóa",
    content: "Tôi dùng bài viết cho đề tài nghiên cứu về Tết. Các dẫn chứng lịch sử và hình ảnh minh họa cực kỳ hữu ích.",
    rating: 4.5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ngoc",
  },
]

const trustBadges = [
  { label: "50K+ lượt đọc", value: "mỗi kỳ Tết", icon: "📚" },
  { label: "4.9/5 ⭐", value: "đánh giá bài viết", icon: "⭐" },
  { label: "300+ lượt chia sẻ", value: "mỗi tháng", icon: "🔁" },
]

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Đánh Giá Từ Độc Giả</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance mb-4">
            Blog Được Độc Giả Tín Nhiệm
          </h2>
          <p className="text-lg text-foreground/60">Nhận xét chân thực từ những người đã đọc và chia sẻ bài viết</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Star rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent"
                    fill={i < Math.floor(testimonial.rating) ? "currentColor" : "none"}
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              {/* Quote mark decoration */}
              <div className="text-4xl text-accent/20 mb-2">"</div>

              {/* Content */}
              <p className="text-foreground/80 mb-8 leading-relaxed text-lg">{testimonial.content}</p>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border border-border"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-secondary/30 rounded-xl p-8 border border-border/50">
          {trustBadges.map((badge, idx) => (
            <div key={idx} className="text-center space-y-2">
              <div className="text-4xl mb-2">{badge.icon}</div>
              <p className="text-3xl md:text-4xl font-bold text-primary">{badge.label}</p>
              <p className="text-foreground/70 text-sm uppercase tracking-wide">{badge.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
