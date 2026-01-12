"use client"

import type React from "react"

import { useState } from "react"

export default function ArticleFooter() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail("")
    alert("Cảm ơn bạn đã đăng ký!")
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="text-2xl font-bold">Giỏ Quà Tết</div>
            <p className="text-background/80 leading-relaxed">
              Kết nối truyền thống văn hóa với những món quà chất lượng cao, mang đậm ý nghĩa Tết Nguyên Đán.
            </p>
            <div className="space-y-3 pt-4">
              <p className="text-sm text-background/70">
                <strong>Email:</strong> contact@gioaquatet.vn
              </p>
              <p className="text-sm text-background/70">
                <strong>Hotline:</strong> 1800 xxxx
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-semibold uppercase tracking-widest text-sm">Thông tin</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#gioi-thieu" className="hover:text-background transition">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#cac-loai-gio-qua" className="hover:text-background transition">
                  Các loại giỏ quà
                </a>
              </li>
              <li>
                <a href="#huong-dan" className="hover:text-background transition">
                  Hướng dẫn tự làm
                </a>
              </li>
              <li>
                <a href="#y-nghia" className="hover:text-background transition">
                  Ý nghĩa
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-background transition">
                  Đánh giá
                </a>
              </li>
              <li>
                <a href="#happybox" className="hover:text-background transition">
                  HappyBox gợi ý
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter section */}
          <div className="space-y-4">
            <h4 className="font-semibold uppercase tracking-widest text-sm">Đăng ký nhận tin</h4>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="Email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-background/10 border border-background/30 text-background placeholder:text-background/50 focus:outline-none focus:border-background/70 transition text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition text-sm"
              >
                Đăng ký
              </button>
            </form>
            <p className="text-xs text-background/60">Chúng tôi sẽ gửi những thông tin mới nhất về Tết</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-background/70">
            <p>© 2026 Giỏ Quà Tết. Tất cả quyền được bảo lưu.</p>
            <div className="flex gap-6 md:justify-end">
              <a href="#" className="hover:text-background transition">
                Chính sách bảo mật
              </a>
              <a href="#" className="hover:text-background transition">
                Điều khoản sử dụng
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
