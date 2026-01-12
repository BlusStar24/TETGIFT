export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-secondary/30 to-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground text-pretty">
              Giỏ Quà Tết – Trao Lộc Đầu Năm
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
              Mỗi giỏ quà Tết là lời chúc may mắn, sức khỏe và sung túc cho người thân. Sẻ chia yêu thương trong dịp
              khởi đầu năm mới, gìn giữ nét đẹp văn hóa truyền thống Việt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold">
                Xem giỏ quà
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition font-semibold">
                Tư vấn chọn quà
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="w-full h-96 bg-secondary/50 rounded-2xl overflow-hidden">
              <img
                src="/vietnamese-lunar-new-year-gift-basket-tet-basket.jpg"
                alt="Giỏ quà Tết truyền thống"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
