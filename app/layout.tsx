import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Giỏ Quà Tết Nguyên Đán - Nét Đẹp Văn Hóa Truyền Thống",
  description:
    "Tìm hiểu ý nghĩa sâu sắc của Tết Nguyên Đán và giỏ quà Tết trong văn hóa truyền thống người Việt. Bài viết chia sẻ kiến thức về phong tục, tập quán và ý nghĩa lễ Tết.",
  generator: "v0.app",
  icons: {
    icon: "/tetgift-logo.png",
    apple: "/tetgift-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
