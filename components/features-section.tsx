import { Package, Truck, Heart, Users } from "lucide-react"

const features = [
  {
    icon: Package,
    title: "Gói Quà Sang Trọng",
    description: "Mỗi giỏ quà được chuẩn bị với tỉ mỉ và độc đáo",
  },
  {
    icon: Truck,
    title: "Giao Nhanh Nội Thành",
    description: "Cam kết giao hàng nhanh chóng, an toàn",
  },
  {
    icon: Heart,
    title: "Thiệp Chúc Cá Nhân",
    description: "Tùy chỉnh thiệp chúc Tết theo ý của bạn",
  },
  {
    icon: Users,
    title: "Tư Vấn Theo Đối Tượng",
    description: "Chuyên gia hỗ trợ chọn quà phù hợp",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 text-pretty">
          Vì Sao Chọn Tết Gift
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
