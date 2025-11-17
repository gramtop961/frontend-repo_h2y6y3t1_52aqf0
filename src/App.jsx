import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { TrendingStrip, TopFiveStrip, CTAReview } from './components/Sections'
import Footer from './components/Footer'
import GlobeExplorer from './components/Globe'
import CreateReviewModal from './components/CreateReviewModal'

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-[#0F1724]">
      <Header />
      <main>
        <section className="bg-gradient-to-b from-white to-[#F8FAFC]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="rounded-xl border border-[#E2E8F0] bg-white p-4 text-sm text-[#0F1724]">
              <p className="font-semibold">Design a modern, playful, highly shareable frontend for Rate the World — a global ratings & reviews site where people rate countries (and later cities/regions). The product must be mobile-first, fast, accessible (WCAG AA), and optimized for social virality. Include an interactive 3D globe explorer, detailed country pages, search, leaderboards, review flows, user auth (Google, Apple, GitHub + email), moderation UI, share-ready OG cards, and sponsor/affiliate placeholders. Provide pixel-perfect screens for all breakpoints + a clickable prototype showing every button state and full flows.</p>
            </div>
          </div>
          <Hero />
        </section>

        <TrendingStrip />
        <TopFiveStrip />
        <GlobeExplorer />
        <CTAReview />
      </main>
      <Footer />

      <CreateReviewModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
