"use client"

interface CategorySectionProps {
  onCategorySelect: (category: string | null) => void
}

const categories = [
  {
    id: "traditional",
    name: "Giỏ Quà Tết Truyền Thống",
    description: "Bánh mứt, trà, cà phê, rượu, các loại hạt mang lại cảm giác sum vầy.",
    badge: "Người thân",
    color: "bg-primary/10 border-primary/30",
  },
  {
    id: "health",
    name: "Giỏ Quà Sức Khỏe",
    description: "Yến sào, nhân sâm, hạt dinh dưỡng, mật ong – lời chúc sức khỏe dồi dào.",
    badge: "Ông bà, Cha mẹ",
    color: "bg-accent/10 border-accent/30",
  },
  {
    id: "premium",
    name: "Giỏ Quà Cao Cấp",
    description: "Rượu ngoại, bánh kẹo nhập khẩu, đặc sản cao cấp – sang trọng, chuyên nghiệp.",
    badge: "Đối tác, KH",
    color: "bg-secondary/20 border-secondary/40",
  },
  {
    id: "specialty",
    name: "Giỏ Quà Đặc Sản",
    description: "Mứt truyền thống, trái cây sấy, bánh Tết handmade – đậm hương vị Tết Việt.",
    badge: "Khác biệt",
    color: "bg-primary/5 border-primary/20",
  },
]

export default function CategorySection({ onCategorySelect }: CategorySectionProps) {
  return (
    <section id="basket-types" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-pretty">
            Các Loại Giỏ Quà Tết Phổ Biến
          </h2>
          <p className="text-lg text-foreground/70 text-pretty">Lựa chọn phù hợp cho mỗi đối tượng và dịp đặc biệt</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onCategorySelect(cat.id)}
              className={`p-6 rounded-xl border-2 cursor-pointer transition hover:shadow-lg ${cat.color}`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-foreground">{cat.name}</h3>
                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium whitespace-nowrap">
                  {cat.badge}
                </span>
              </div>
              <p className="text-foreground/80 leading-relaxed">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
