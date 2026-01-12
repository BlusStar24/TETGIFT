"use client"

import { useState } from "react"

export default function ArticleHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img
              src="/tetgift-logo.png"
              alt="TetGift Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("gioi-thieu")}
              className="text-sm text-foreground/70 hover:text-foreground font-medium transition"
            >
              Giới thiệu
            </button>
            <button
              onClick={() => scrollToSection("cac-loai-gio-qua")}
              className="text-sm text-foreground/70 hover:text-foreground font-medium transition"
            >
              Sản phẩm
            </button>
            <button
              onClick={() => scrollToSection("huong-dan")}
              className="text-sm text-foreground/70 hover:text-foreground font-medium transition"
            >
              Tự làm
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-sm text-foreground/70 hover:text-foreground font-medium transition"
            >
              Đánh giá
            </button>
            <button
              onClick={() => scrollToSection("happybox")}
              className="text-sm text-foreground/70 hover:text-foreground font-medium transition"
            >
              HappyBox
            </button>
            <button
              onClick={() => scrollToSection("ket-luan")}
              className="text-sm text-foreground/70 hover:text-foreground font-medium transition"
            >
              Kết luận
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-md transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-border pt-4">
            <button
              onClick={() => scrollToSection("gioi-thieu")}
              className="block w-full text-left px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-secondary rounded transition font-medium"
            >
              Giới thiệu
            </button>
            <button
              onClick={() => scrollToSection("cac-loai-gio-qua")}
              className="block w-full text-left px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-secondary rounded transition font-medium"
            >
              Sản phẩm
            </button>
            <button
              onClick={() => scrollToSection("huong-dan")}
              className="block w-full text-left px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-secondary rounded transition font-medium"
            >
              Tự làm
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="block w-full text-left px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-secondary rounded transition font-medium"
            >
              Đánh giá
            </button>
            <button
              onClick={() => scrollToSection("happybox")}
              className="block w-full text-left px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-secondary rounded transition font-medium"
            >
              HappyBox
            </button>
            <button
              onClick={() => scrollToSection("ket-luan")}
              className="block w-full text-left px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-secondary rounded transition font-medium"
            >
              Kết luận
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
