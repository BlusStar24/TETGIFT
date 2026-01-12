"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Nên chọn giỏ quà Tết như thế nào cho phù hợp với đối tượng?",
    answer:
      "Chúng tôi chia thành 4 loại chính: Truyền thống cho người thân/bạn bè, Sức khỏe cho ông bà/cha mẹ, Cao cấp cho đối tác/khách hàng, và Đặc sản cho những người yêu thích hương vị Tết Việt. Hãy liên hệ tư vấn nếu bạn chưa biết chọn loại nào.",
  },
  {
    question: "Giỏ quà sức khỏe gồm những gì?",
    answer:
      "Giỏ quà sức khỏe chứa yến sào, nhân sâm, các loại hạt dinh dưỡng (hạnh nhân, quả óc chó), mật ong tự nhiên, nấm linh chi và các sản phẩm bổ dưỡng khác. Mỗi thành phần được chọn lọc kỹ lưỡng.",
  },
  {
    question: "Có xuất hóa đơn và phù hợp cho biếu đối tác không?",
    answer:
      "Có, chúng tôi xuất hóa đơn đầy đủ cho mọi đơn hàng. Giỏ quà cao cấp của chúng tôi được thiết kế đặc biệt cho biếu tặng doanh nhân và đối tác kinh doanh, với gói bao bì sang trọng và chuyên nghiệp.",
  },
  {
    question: "Giao hàng dịp Tết có kịp không? Phí giao hàng là bao nhiêu?",
    answer:
      "Chúng tôi cam kết giao hàng nhanh chóng nội thành trong vòng 1-2 ngày. Phí giao hàng được tính dựa trên khoảng cách và khối lượng. Đơn hàng từ 500K trở lên được miễn phí giao hàng nội thành.",
  },
  {
    question: "Có thể tùy chỉnh thiệp chúc Tết không?",
    answer:
      "Có, chúng tôi cung cấp dịch vụ thiệp chúc Tết cá nhân hóa. Bạn có thể ghi lời chúc riêng, chọn mẫu thiệp và chúng tôi sẽ in và kèm trong giỏ quà của bạn.",
  },
  {
    question: "Chính sách đổi trả như thế nào?",
    answer:
      "Nếu sản phẩm bị hỏng trong quá trình giao, hoặc không đúng như mô tả, chúng tôi sẽ đổi hoặc hoàn tiền 100% trong vòng 7 ngày. Liên hệ hotline của chúng tôi để được hỗ trợ.",
  },
]

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 text-pretty">
          Các Câu Hỏi Thường Gặp
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-4 flex justify-between items-center bg-card hover:bg-muted transition"
              >
                <span className="font-semibold text-foreground text-left">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-foreground flex-shrink-0 transition ${openIdx === idx ? "rotate-180" : ""}`}
                />
              </button>
              {openIdx === idx && (
                <div className="px-6 py-4 bg-muted/50 text-foreground/80 leading-relaxed">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
