import Image from "next/image"

import happybox437 from "@/image/437.png"
import happybox477 from "@/image/477.png"
import happybox503 from "@/image/503.png"
import happybox164 from "@/image/164.png"

const reasons = [
  {
    title: "Sản phẩm chọn lọc",
    description: "Mỗi giỏ đều được phối hợp bởi đội ngũ chuyên gia ẩm thực, đảm bảo hương vị chuẩn Tết và an toàn sức khỏe.",
  },
  {
    title: "Thiết kế tinh tế",
    description: "Bao bì đồng bộ màu sắc, phụ kiện trang trí giữ được diện mạo sang trọng khi trao tặng.",
  },
  {
    title: "Giao hàng nhanh",
    description: "HappyBox hỗ trợ giao tận nơi, đóng gói kèm thiệp chúc để bạn gửi trọn yêu thương đúng hẹn.",
  },
]

const products = [
  {
    name: "Giỏ quà Tết HappyBox HPG437",
    description: "Tone đỏ vàng truyền thống, phù hợp biếu tặng gia đình và người thân.",
    url: "https://happybox.vn/gio-qua-tet-happybox-hpg437",
    image: happybox437,
    imageAlt: "Giỏ quà HappyBox HPG437 tông đỏ vàng",
  },
  {
    name: "Giỏ quà Tết HappyBox HPG477",
    description: "Kết hợp yến, hạt dinh dưỡng và trà thảo mộc chăm sóc sức khỏe.",
    url: "https://happybox.vn/gio-qua-tet-happybox-hpg477",
    image: happybox477,
    imageAlt: "Giỏ quà HappyBox HPG477 tập trung sức khỏe",
  },
  {
    name: "Giỏ quà Tết HappyBox HPG503",
    description: "Phiên bản cao cấp với rượu ngoại và bánh kẹo nhập khẩu sang trọng.",
    url: "https://happybox.vn/gio-qua-tet-happybox-hpg503",
    image: happybox503,
    imageAlt: "Giỏ quà HappyBox HPG503 cao cấp",
  },
  {
    name: "Giỏ quà Tết giá rẻ HappyBox HPG164",
    description: "Giải pháp tiết kiệm mà vẫn đầy đủ hương vị đặc sản vùng miền.",
    url: "https://happybox.vn/gio-qua-tet-gia-re-happybox-hpg164",
    image: happybox164,
    imageAlt: "Giỏ quà HappyBox HPG164 tiết kiệm",
  },
]

export default function HappyboxCta() {
  return (
    <section id="happybox" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">HappyBox Gợi Ý</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Chọn mua giỏ quà Tết tại HappyBox – Trao quà sức khỏe, gửi trọn yêu thương
          </h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-3xl mx-auto">
            HappyBox mang đến đa dạng mẫu giỏ quà dựa trên nội dung bài viết: từ truyền thống, sức khỏe đến cao cấp và đặc sản.
            Bạn chỉ cần chọn thông điệp, phần còn lại đã được chuẩn bị chu đáo.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {reasons.map((reason) => (
              <div key={reason.title} className="min-w-[220px] rounded-2xl border border-border/60 bg-background px-5 py-4 text-left shadow-sm">
                <p className="text-sm font-semibold text-primary uppercase tracking-widest">{reason.title}</p>
                <p className="text-sm text-foreground/70 mt-2">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product.name} className="rounded-2xl border border-border/70 bg-background p-6 space-y-4">
              <a href={product.url} target="_blank" rel="noreferrer" className="block">
                <div className="relative w-full h-60 rounded-xl overflow-hidden border border-border/60">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </a>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-foreground/50 mb-1">Gợi ý</p>
                <h3 className="text-2xl font-semibold text-foreground">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {product.name}
                  </a>
                </h3>
              </div>
              <p className="text-base text-foreground/80 leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-3">
          <p className="text-sm text-foreground/60">Còn nhiều phiên bản khác tại HappyBox dành riêng cho doanh nghiệp, gia đình và bạn bè.</p>
          <a
            href="https://happybox.vn/gio-qua-tet"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:opacity-90 transition"
          >
            Khám phá tất cả giỏ quà Tết
          </a>
        </div>
      </div>
    </section>
  )
}
