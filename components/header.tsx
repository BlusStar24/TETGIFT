"use client"

import { ShoppingCart, Menu, X } from "lucide-react"
import { useState } from "react"

interface HeaderProps {
  cartCount: number
}

export default function Header({ cartCount }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/tetgift-logo.png"
              alt="TetGift Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#categories" className="text-foreground hover:text-primary transition">
              Sản phẩm
            </a>
            <a href="#basket-types" className="text-foreground hover:text-primary transition">
              Loại giỏ quà
            </a>
            <a href="#meaning" className="text-foreground hover:text-primary transition">
              Ý nghĩa
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition">
              Review
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition">
              FAQ
            </a>
          </nav>

          {/* Cart and CTA */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium">
              Mua ngay
            </button>
            <div className="relative">
              <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-primary transition" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <a href="#categories" className="text-foreground hover:text-primary transition">
              Sản phẩm
            </a>
            <a href="#basket-types" className="text-foreground hover:text-primary transition">
              Loại giỏ quà
            </a>
            <a href="#meaning" className="text-foreground hover:text-primary transition">
              Ý nghĩa
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition">
              Review
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition">
              FAQ
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
