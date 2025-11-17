import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-[#64748B]">
        <div>
          <h3 className="font-semibold text-[#0F1724]">Rate the World</h3>
          <p className="mt-2">A playful, credible place to rate countries and spark good‑natured debates.</p>
        </div>
        <div>
          <h4 className="font-semibold text-[#0F1724]">Product</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="/explore" className="hover:underline">Explore</a></li>
            <li><a href="/leaderboards" className="hover:underline">Leaderboards</a></li>
            <li><a href="/countries" className="hover:underline">Countries</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[#0F1724]">Company</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy</a></li>
            <li><a href="/tos" className="hover:underline">Terms</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[#0F1724]">Social</h4>
          <p className="mt-2">Share your take — let the roasting begin.</p>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-[#64748B]">© {new Date().getFullYear()} Rate the World</div>
    </footer>
  )
}
