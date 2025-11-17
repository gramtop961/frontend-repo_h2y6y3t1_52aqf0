import React from 'react'
import Button from './Button'
import { Globe2, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-[#E8F1FF] text-[#1E7AFC] px-3 py-1 text-sm font-semibold">Playful • Credible • Viral</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F1724]">Rate the World</h1>
          <p className="mt-4 text-lg text-[#64748B] max-w-xl">A modern, mobile‑first platform where anyone can rate countries — then cities and regions — with share‑ready cards, spicy leaderboards, and a gorgeous 3D globe.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button as="a" href="/explore" aria-label="Explore the globe" className="h-12 px-6" iconLeft={Globe2}>Explore the globe</Button>
            <Button as="a" href="#rate" variant="secondary" aria-label="Rate your country" className="h-12 px-6" iconLeft={Star}>Rate your country</Button>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#1E7AFC]/15 to-[#FF7A59]/20 border border-gray-200" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-40 w-40 rounded-full bg-[#1E7AFC]/20 blur-2xl" />
            <div className="h-32 w-32 rounded-full bg-[#FF7A59]/20 blur-2xl -ml-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
