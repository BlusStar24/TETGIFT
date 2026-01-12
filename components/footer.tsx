import { Facebook, Instagram, Phone, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Tết<span className="ml-1">Gift</span>
            </h3>
            <p className="text-background/80 mb-4">Giỏ quà Tết – Trao lộc đầu năm</p>
            <div className="flex gap-3">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-accent transition" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-accent transition" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Về Chúng Tôi</h4>
            <ul className="space-y-2 text-background/80 text-sm">
              <li>
                <a href="#" className="hover:text-background transition">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Quy trình
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Bảo hành
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Hỗ Trợ</h4>
            <ul className="space-y-2 text-background/80 text-sm">
              <li>
                <a href="#" className="hover:text-background transition">
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Chính sách đổi trả
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Thanh toán
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Giao hàng
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Liên Hệ</h4>
            <div className="space-y-3 text-background/80 text-sm">
              <div className="flex gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>0911 234 567</span>
              </div>
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>123 Đường Bà Triệu, Hà Nội</span>
              </div>
              <div className="flex gap-2">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>8h - 20h hàng ngày</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>&copy; 2025 Tết Gift. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
