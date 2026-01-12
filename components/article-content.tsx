const customs = [
  {
    title: "Dọn dẹp và trang hoàng",
    description:
      "Làm sạch từng góc nhà, treo câu đối đỏ và trang trí hoa mai, hoa đào để xua điều không may, mở ra nguồn năng lượng mới cho năm tới.",
  },
  {
    title: "Cúng ông bà tổ tiên",
    description:
      "Bàn thờ được chăm chút với mâm ngũ quả, bánh mứt, nhang đèn như lời nhắc ân nghĩa đối với thế hệ đi trước.",
  },
  {
    title: "Chúc Tết đầu năm",
    description:
      "Những lời chúc an khang, thịnh vượng giúp gắn kết họ hàng, bạn bè và gieo hy vọng cho một năm đủ đầy.",
  },
  {
    title: "Biếu tặng giỏ quà",
    description:
      "Món quà trọn vị tượng trưng cho sự quan tâm chân thành, gửi gắm may mắn, sức khỏe và sung túc đến người nhận.",
  },
]

const giftHighlights = [
  {
    title: "Sẻ chia",
    description:
      "Giỏ quà Tết khởi nguồn từ mong muốn san sẻ hương vị ngày xuân, đặc biệt với những người ở xa hoặc bận rộn.",
  },
  {
    title: "Tri ân",
    description:
      "Đây là món quà thay lời cảm ơn gửi đến ông bà, cha mẹ, thầy cô, đối tác đã đồng hành suốt một năm.",
  },
  {
    title: "Chăm sóc sức khỏe",
    description:
      "Các loại yến, nhân sâm, hạt dinh dưỡng hay mật ong được chọn kỹ lưỡng để chúc nhau một năm mới dồi dào sinh lực.",
  },
]

export default function ArticleContent() {
  return (
    <article className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Introduction Section */}
        <section id="gioi-thieu" className="space-y-6 scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold">
            Tết Nguyên - Đán Trao quà trao niềm vui

          </h2>

          <p className="text-base md:text-lg leading-relaxed text-foreground/90">
            Tết Nguyên Đán là ngày lễ truyền thống quan trọng và lâu đời nhất của dân tộc Việt Nam. Đây là dịp đánh dấu
            sự chuyển giao giữa năm cũ và năm mới, mang ý nghĩa khởi đầu cho một năm an khang, thịnh vượng và nhiều may
            mắn. Qua bao thế hệ, Tết vẫn luôn là biểu tượng của nền văn hóa Việt.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-secondary/30 border border-border/60 p-6 space-y-3">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest">Giữ gìn phong tục</p>
              <p className="text-base leading-relaxed text-foreground/90">
                Người Việt luôn dọn dẹp, trang hoàng nhà cửa, chuẩn bị mâm cỗ, cúng ông bà tổ tiên và chúc Tết đầu năm
                để thể hiện lòng biết ơn cùng mong ước một năm mới tốt đẹp.
              </p>
            </div>
          </div>
        </section>

        {/* Customs Section */}
        <section id="phong-tuc" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Phong tục truyền thống của Tết</h2>
          <p className="text-base md:text-lg leading-relaxed text-foreground/90">
            Những phong tục truyền thống gắn liền với Tết Nguyên Đán thể hiện lòng kính trọng, tấm lòng cảm ơn và mong
            ước may mắn của người Việt. Các hoạt động tiêu biểu bao gồm:
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {customs.map((custom) => (
              <div key={custom.title} className="rounded-xl border border-border p-5 bg-background">
                <h3 className="text-lg font-semibold mb-2 text-primary">{custom.title}</h3>
                <p className="text-base leading-relaxed text-foreground/80">{custom.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gift Basket Introduction */}
        <section id="cac-loai-gio-qua" className="space-y-6 pt-8 border-t border-border scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold">Giỏ Quà Tết Trong Dịp Tết Nguyên Đán</h2>

          <p className="text-base md:text-lg leading-relaxed text-foreground/90">
            Giỏ quà Tết là sản phẩm quà biếu truyền thống, xuất phát từ ý nghĩa sẻ chia và tri ân. Mỗi giỏ quà không chỉ
            mang giá trị vật chất mà còn gửi gắm lời chúc may mắn, sức khỏe và sung túc đến người nhận.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-foreground/90">
            Tùy theo đối tượng và mục đích biếu tặng, giỏ quà được thiết kế đa dạng, từ truyền thống, chăm sóc sức khỏe
            đến cao cấp, đặc sản vùng miền.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {giftHighlights.map((highlight) => (
              <div key={highlight.title} className="rounded-2xl bg-card border border-border/80 p-5 h-full">
                <h3 className="text-lg font-semibold text-primary mb-2">{highlight.title}</h3>
                <p className="text-base leading-relaxed text-foreground/80">{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gift Types Introduction */}
        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold">Các loại giỏ quà Tết phổ biến</h3>
          <p className="text-base md:text-lg leading-relaxed text-foreground/90">
            Bốn nhóm giỏ quà dưới đây là lựa chọn tiêu biểu trong dịp Tết Nguyên Đán, phù hợp cho từng đối tượng và thông
            điệp chúc xuân khác nhau.
          </p>
        </section>
      </div>
    </article>
  )
}
