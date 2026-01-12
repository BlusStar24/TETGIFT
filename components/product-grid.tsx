"use client"

import { Star, ShoppingCart } from "lucide-react"

interface ProductGridProps {
  selectedCategory: string | null
  sortBy: string
  onSortChange: (sort: string) => void
  onAddToCart: (id: number) => void
}

const mockProducts = [
  {
    id: 1,
    name: "Giỏ Quà Tết Truyền Thống Premium",
    category: "traditional",
    price: 450000,
    rating: 4.8,
    reviews: 124,
    tag: "Bán chạy",
    image: "Traditional%20gift%20basket%20with%20candies%20dried%20fruits",
  },
  {
    id: 2,
    name: "Giỏ Sức Khỏe Yến Sào",
    category: "health",
    price: 680000,
    rating: 4.9,
    reviews: 89,
    tag: "Mới",
    image: "Premium%20health%20gift%20basket%20with%20bird%20nest",
  },
  {
    id: 3,
    name: "Giỏ Quà Cao Cấp Rượu Vang",
    category: "premium",
    price: 950000,
    rating: 4.7,
    reviews: 56,
    tag: "Bán chạy",
    image: "Luxury%20gift%20basket%20with%20wine%20imported%20chocolates",
  },
  {
    id: 4,
    name: "Giỏ Đặc Sản Bánh Tết Handmade",
    category: "specialty",
    price: 320000,
    rating: 4.6,
    reviews: 142,
    tag: "Mới",
    image: "Traditional%20handmade%20Tet%20cakes%20and%20dried%20fruits",
  },
  {
    id: 5,
    name: "Giỏ Quà Tết Hạnh Phúc",
    category: "traditional",
    price: 580000,
    rating: 4.8,
    reviews: 98,
    tag: null,
    image: "Colorful%20Tet%20gift%20basket%20with%20tea%20coffee%20nuts",
  },
  {
    id: 6,
    name: "Giỏ Sức Khỏe Nhân Sâm Cao Cấp",
    category: "health",
    price: 750000,
    rating: 4.9,
    reviews: 67,
    tag: "Mới",
    image: "Health%20gift%20basket%20with%20ginseng%20honey%20nuts",
  },
  {
    id: 7,
    name: "Giỏ Quà Cao Cấp Whisky Ngoại",
    category: "premium",
    price: 1100000,
    rating: 4.8,
    reviews: 43,
    tag: "Bán chạy",
    image: "Elegant%20premium%20gift%20basket%20with%20whisky%20imported%20goods",
  },
  {
    id: 8,
    name: "Giỏ Quà Tết Hương Vị Miền",
    category: "specialty",
    price: 390000,
    rating: 4.7,
    reviews: 115,
    tag: null,
    image: "Regional%20specialty%20gift%20basket%20dried%20fruits%20local%20treats",
  },
]

export default function ProductGrid({ selectedCategory, sortBy, onSortChange, onAddToCart }: ProductGridProps) {
  const filtered = selectedCategory ? mockProducts.filter((p) => p.category === selectedCategory) : mockProducts

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    if (sortBy === "popular") return b.reviews - a.reviews
    return 0
  })

  return (
    <section id="categories" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-pretty">Sản Phẩm Nổi Bật</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background text-foreground"
            >
              <option value="newest">Mới nhất</option>
              <option value="popular">Bán chạy</option>
              <option value="price-low">Giá thấp</option>
              <option value="price-high">Giá cao</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sorted.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition"
            >
              <div className="relative h-48 bg-muted overflow-hidden">
                <img
                  src={`/.jpg?height=200&width=200&query=${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.tag && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-accent text-accent-foreground text-sm font-bold rounded">
                    {product.tag}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground line-clamp-2 mb-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5"
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-foreground/70">({product.reviews})</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">{(product.price / 1000).toFixed(0)}K</span>
                  <button
                    onClick={() => onAddToCart(product.id)}
                    className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
