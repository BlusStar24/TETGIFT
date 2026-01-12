import Image from "next/image"

import gioQuaTruyenThongImage from "@/image/truyenthong.jpg"
import gioQuaSucKhoeImage from "@/image/suckhoe.jpg"
import gioQuaCaoCapImage from "@/image/capcap.jpg"
import gioQuaDacSanImage from "@/image/dacsan.jpg"

const basketTypes = [
  {
    id: "gio-qua-truyen-thong",
    number: "01",
    title: "Giỏ quà Tết truyền thống",
    description:
      "Bánh mứt, trà ngon, cà phê và rượu vang nhẹ tạo nên món quà đậm đà hương vị tết Việt – phù hợp tặng người thân, hàng xóm để gửi gắm sự thân tình.",
    highlights: ["Bánh mứt handmade", "Trà và cà phê tuyển chọn", "Rượu vang nhẹ nhàng"],
    link: {
      label: "Xem gợi ý giỏ quả truyền thống",
      url: "https://happybox.vn/gio-qua-tet-happybox-hpg482",
    },
    image: gioQuaTruyenThongImage,
    imageAlt: "Giỏ quà Tết truyền thống với bánh mứt và trà",
  },
  {
    id: "gio-qua-suc-khoe",
    number: "02",
    title: "Giỏ quà Tết sức khỏe",
    description:
      "Yến sào, nhân sâm, mật ong và các loại hạt dinh dưỡng thay cho lời chúc sống khỏe, an nhiên. Đây là lựa chọn lý tưởng dành tặng ông bà, cha mẹ.",
    highlights: ["Yến sào/nhân sâm", "Hạt dinh dưỡng", "Mật ong nguyên chất"],
    link: {
      label: "HPG477 dành cho gia đình",
      url: "https://happybox.vn/gio-qua-tet-happybox-hpg477",
    },
    image: gioQuaSucKhoeImage,
    imageAlt: "Giỏ quà sức khỏe với yến và hạt dinh dưỡng",
  },
  {
    id: "gio-qua-cao-cap",
    number: "03",
    title: "Giỏ quà Tết cao cấp",
    description:
      "Thiết kế sang trọng với rượu ngoại, bánh kẹo nhập khẩu hoặc đặc sản cao cấp – món quà thể hiện sự trân trọng và chuyên nghiệp khi gửi đến đối tác, khách hàng.",
    highlights: ["Rượu vang/whisky ngoại", "Bánh kẹo nhập khẩu", "Hộp quà sang trọng"],
    link: {
      label: "HPH355 dành cho đối tác",
      url: "https://happybox.vn/hop-qua-tet-cao-cap-happybox-hph355",
    },
    image: gioQuaCaoCapImage,
    imageAlt: "Giỏ quà cao cấp với rượu ngoại và bánh kẹo nhập khẩu",
  },
  {
    id: "gio-qua-dac-san",
    number: "04",
    title: "Giỏ quà Tết đặc sản",
    description:
      "Các món đặc trưng vùng miền như mứt dừa Bến Tre, trái cây sấy Đà Lạt, bánh tét handmade giúp quảng bá hương vị Tết Việt và mang đậm dấu ấn văn hóa.",
    highlights: ["Đặc sản vùng miền", "Hương vị truyền thống", "Phù hợp tặng bạn bè quốc tế"],
    link: {
      label: "Phiên bản tiết kiệm HPG164",
      url: "https://happybox.vn/gio-qua-tet-gia-re-happybox-hpg164",
    },
    image: gioQuaDacSanImage,
    imageAlt: "Giỏ quà đặc sản với trái cây sấy và mứt",
  },
]

export default function GiftBasketTypes() {
  return (
    <section id="phan-loai" className="py-16 bg-secondary/20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">Các loại giỏ quà Tết phổ biến</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Chọn giỏ quà phù hợp với thông điệp bạn muốn gửi gắm
          </h2>
          <p className="text-base md:text-lg text-foreground/80">
            Mỗi giỏ quà là một câu chuyện – từ sum vầy truyền thống đến tri ân cao cấp – tùy theo người nhận và mục đích biếu tặng.
          </p>
        </div>

        <div className="space-y-6">
          {basketTypes.map((type) => (
            <div
              id={type.id}
              key={type.number}
              className="bg-background border border-border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow scroll-mt-28"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
                <div className="flex-1 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                      {type.number}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-foreground">{type.title}</h3>
                      <p className="text-base leading-relaxed text-foreground/80">{type.description}</p>
                    </div>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    {type.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                          ✓
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href={type.link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      {type.link.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-xs uppercase tracking-widest text-foreground/50">HappyBox gợi ý</span>
                  </div>
                </div>

                <div className="md:max-w-[260px] w-full">
                  <div className="relative h-56 md:h-full min-h-[220px] rounded-2xl overflow-hidden border border-border/60">
                    <Image
                      src={type.image}
                      alt={type.imageAlt}
                      fill
                      sizes="(min-width: 768px) 260px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
