export default function ArticleHero() {
  const publishDate = new Date().toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <section className="bg-gradient-to-b from-card to-background border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">Văn hóa Tết Nguyên Đán</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance text-foreground">
              Tết Nguyên Đán – Nét đẹp văn hóa truyền thống của người Việt
            </h1>
          </div>

          <p className="text-xl text-foreground/70 leading-relaxed text-balance max-w-3xl">
            Bài viết chia sẻ về ý nghĩa sâu sắc của Tết Nguyên Đán, phong tục truyền thống, và vai trò của giỏ quà Tết
            trong việc gìn giữ nét đẹp văn hóa dân tộc.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-foreground/60 border-t border-border/50">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Ngày đăng: {publishDate}</span>
            </div>
            <span className="text-foreground/40">•</span>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.25S6.477 27.5 12 27.5s10-4.75 10-10.25S17.5 6.253 12 6.253z"
                />
              </svg>
              <span>Thời gian đọc: 4-5 phút</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
