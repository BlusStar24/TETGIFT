"use client"

import Header from "@/components/article-header"
import ArticleHero from "@/components/article-hero"
import ArticleContent from "@/components/article-content"
import GiftBasketTypes from "@/components/gift-basket-types"
import ArticleFooter from "@/components/article-footer"
import TableOfContents from "@/components/table-of-contents"
import DiyGuide from "@/components/diy-guide"
import HappyboxCta from "@/components/happybox-cta"
import MeaningSection from "@/components/meaning-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <ArticleHero />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with TOC */}
          <aside className="lg:col-span-1 lg:sticky lg:top-24 lg:h-fit">
            <TableOfContents />
          </aside>

          {/* Main content */}
          <main className="lg:col-span-3 space-y-12">
            <ArticleContent />
            <GiftBasketTypes />
            <DiyGuide />
            <MeaningSection />
            <HappyboxCta />
          </main>
        </div>
      </div>

      <ArticleFooter />
    </div>
  )
}
