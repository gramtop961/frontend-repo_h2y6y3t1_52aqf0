import React from 'react'
import { ArrowRight, Share2, TrendingUp, Star, Globe2 } from 'lucide-react'
import Button from './Button'

export function TrendingStrip() {
  return (
    <section className="py-10 border-t border-gray-100 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#0F1724]">Trending now</h2>
          <a href="/leaderboards" className="text-[#1E7AFC] inline-flex items-center gap-1">See leaderboards <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Japan','Portugal','Mexico','Canada'].map((name, i) => (
            <article key={name} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[#0F1724]">{name}</h3>
                <div className="flex items-center gap-1 text-amber-500" aria-label="Average rating">
                  <Star className="h-4 w-4 fill-current" /><span className="text-sm font-bold">{(4.1 + i/10).toFixed(1)}</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-[#64748B]">“Amazing food and super friendly people.”</p>
              <div className="mt-4 flex items-center gap-2">
                <Button as="a" href={`/country/${name}`} variant="secondary" className="h-9 px-3" aria-label={`Open ${name}`}>Open</Button>
                <Button as="button" variant="ghost" className="h-9 px-3" aria-label={`Share ${name}`}><Share2 className="h-4 w-4" /></Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TopFiveStrip() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#0F1724]">Top 5 countries</h2>
          <a href="/leaderboards" className="text-[#1E7AFC] inline-flex items-center gap-1">Full list <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {['Iceland','Japan','New Zealand','Portugal','Canada'].map((name) => (
            <a key={name} href={`/country/${name}`} className="group rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition">
              <div className="h-24 rounded-md bg-gradient-to-br from-[#1E7AFC]/15 to-[#FF7A59]/20" />
              <div className="mt-3 flex items-center justify-between">
                <h3 className="font-semibold text-[#0F1724] group-hover:underline">{name}</h3>
                <TrendingUp className="h-4 w-4 text-emerald-500" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTAReview() {
  return (
    <section id="rate" className="py-14 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <Globe2 className="h-10 w-10 mx-auto text-[#1E7AFC]" aria-hidden="true" />
        <h2 className="mt-3 text-2xl font-bold text-[#0F1724]">Tell the world what you think</h2>
        <p className="mt-2 text-[#64748B]">Drop a quick rating — anonymous or signed in. Your hot take might end up on the leaderboard.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button as="a" href="/create" className="h-11 px-6" aria-label="Write a review">Write a Review</Button>
          <Button as="a" href="/explore" variant="secondary" className="h-11 px-6" aria-label="Explore the globe">Explore the globe</Button>
        </div>
      </div>
    </section>
  )
}
