const steps = [
  {
    title: "Chọn chủ đề giỏ quà",
    description:
      "Xác định người nhận và thông điệp chúc Tết (sum vầy, sức khỏe hay đối tác). Điều này giúp bạn chọn màu sắc và chất liệu phù hợp.",
    detail: "Chủ đề truyền thống nên ưu tiên tông đỏ vàng, trong khi giỏ cao cấp có thể chuyển sang nâu gỗ, đen nhung sang trọng.",
  },
  {
    title: "Chuẩn bị nguyên liệu",
    description:
      "Lựa chọn bánh mứt, trà, cà phê, các loại hạt hoặc yến sào – dựa trên nội dung mà file gợi ý về từng nhóm giỏ quà.",
    detail: "Kết hợp thêm đặc sản vùng miền để tạo dấu ấn riêng, chẳng hạn mứt dừa Bến Tre hay cà phê Tây Nguyên.",
  },
  {
    title: "Sắp xếp và trang trí",
    description:
      "Đặt sản phẩm lớn ở giữa, sản phẩm nhỏ xung quanh, cố định bằng dây ruy băng, giấy lụa và cành mai giả để tạo bố cục vững vàng.",
    detail: "Đừng quên một tấm thiệp chúc Tết viết tay để hoàn thiện thông điệp gửi trao.",
  },
]

const tips = [
  "Ưu tiên sản phẩm có hạn sử dụng dài để đảm bảo chất lượng khi trao tặng.",
  "Sử dụng rổ tre, hộp gỗ hoặc túi cói thân thiện môi trường để tăng tính thẩm mỹ.",
  "Phủ thêm lớp giấy kiếng trong suốt giúp giữ form nhưng vẫn khoe trọn các sản phẩm bên trong.",
]

export default function DiyGuide() {
  return (
    <section id="huong-dan" className="py-16 border-y border-border bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">Hướng dẫn DIY</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Tự làm giỏ quà Tết truyền thống tại nhà
          </h2>
          <p className="text-base md:text-lg text-foreground/80">
            Làm theo các bước đơn giản dưới đây để tạo nên món quà mang đậm dấu ấn cá nhân nhưng vẫn giữ trọn tinh thần mà nội dung bài viết đề cập.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col md:flex-row gap-6 rounded-2xl border border-border p-6 bg-secondary/10">
              <div className="md:w-24 flex items-start justify-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-base leading-relaxed text-foreground/80">{step.description}</p>
                <p className="text-sm text-foreground/70">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-card border border-border/60 p-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Những lưu ý nhỏ giúp giỏ quà thêm tinh tế</h3>
          <ul className="space-y-2 text-sm md:text-base text-foreground/80 list-disc list-inside">
            {tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
