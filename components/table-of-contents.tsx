"use client"

import { useState, useEffect } from "react"

interface TocItem {
  id: string
  title: string
  level: number
}

const tocItems: TocItem[] = [
  { id: "gio-qua-truyen-thong", title: "Giỏ quà truyền thống", level: 3 },
  { id: "gio-qua-suc-khoe", title: "Giỏ quà sức khỏe", level: 3 },
  { id: "gio-qua-cao-cap", title: "Giỏ quà cao cấp", level: 3 },
  { id: "gio-qua-dac-san", title: "Giỏ quà đặc sản", level: 3 },
]

export default function TableOfContents() {
  const [activeId, setActiveId] = useState<string>(tocItems[0]?.id ?? "")

  useEffect(() => {
    const headings = tocItems
      .map((item) => document.getElementById(item.id))
      .filter((heading): heading is HTMLElement => Boolean(heading))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-50% 0px -50% 0px" },
    )

    headings.forEach((heading) => observer.observe(heading))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="sticky top-24 bg-card rounded-lg border border-border p-6">
      <h3 className="text-sm font-bold text-foreground mb-4 tracking-wide uppercase">Mục lục</h3>
      <nav className="space-y-2">
        {tocItems.map((item) => {
          const indentationClass = item.level === 2 ? "pl-0" : "pl-4"
          const stateClass =
            activeId === item.id ? "text-primary font-semibold" : "text-foreground/60 hover:text-foreground"

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left text-sm transition-colors py-2 ${indentationClass} ${stateClass}`}
            >
              {item.title}
            </button>
          )
        })}
      </nav>
    </div>
  )
}
