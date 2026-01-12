"use client"

import type React from "react"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function CTAForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", notes: "" })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Thành công!",
      description: "Chúng tôi sẽ liên hệ bạn trong 24 giờ để tư vấn chi tiết.",
    })
    setFormData({ name: "", phone: "", notes: "" })
  }

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8 text-pretty">
          Nhận Tư Vấn Miễn Phí
        </h2>
        <p className="text-center text-foreground/70 mb-12">
          Đội ngũ chuyên gia của chúng tôi sẽ giúp bạn chọn giỏ quà Tết hoàn hảo
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Họ và tên"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/50"
          />
          <input
            type="tel"
            placeholder="Số điện thoại"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/50"
          />
          <textarea
            placeholder="Ghi chú / Yêu cầu đặc biệt"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/50"
          />
          <button
            type="submit"
            className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-semibold text-lg"
          >
            Gửi Yêu Cầu Tư Vấn
          </button>
        </form>
      </div>
    </section>
  )
}
