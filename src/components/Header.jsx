import React, { useState } from 'react'
import { Globe2, Trophy, Star, Search, Menu, User, ChevronDown } from 'lucide-react'
import Button from './Button'

export default function Header() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)

  const onSearch = (e) => {
    e.preventDefault()
    window.location.href = `/search?q=${encodeURIComponent(query)}`
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/" aria-label="Home — Rate the World" className="flex items-center gap-2 font-extrabold text-[#0F1724] group">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#1E7AFC] text-white font-black">R</span>
            <span className="text-lg tracking-tight group-hover:underline group-hover:scale-[1.02] transition">Rate the World</span>
          </a>

          <nav className="hidden md:flex items-center gap-2 ml-4" aria-label="Primary">
            <a href="/explore" className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100" aria-label="Open globe explorer">
              <Globe2 className="h-4 w-4" aria-hidden="true" />
              Explore
            </a>
            <a href="/leaderboards" className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100" aria-label="Leaderboards">
              <Trophy className="h-4 w-4" aria-hidden="true" />
              Leaderboards
            </a>
          </nav>
        </div>

        <form onSubmit={onSearch} className="hidden md:flex items-center gap-2 w-[420px]" role="search" aria-label="Global">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" aria-hidden="true" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search country or city (e.g., France, Barcelona)"
              aria-label="Search country or city"
              className="w-full pl-9 pr-3 py-2 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E7AFC] focus:border-transparent"
            />
          </div>
        </form>

        <div className="flex items-center gap-2">
          <Button as="a" href="/create" aria-label="Write a review" className="h-10 px-4" iconLeft={Star}>
            Write a Review
          </Button>

          <button aria-label="Open account menu" className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
            <User className="h-4 w-4" aria-hidden="true" />
            <span>Sign in</span>
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </button>

          <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-gray-100" onClick={() => setOpen(!open)}>
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-4 py-3 space-y-3">
            <a href="/explore" className="block px-2 py-2 rounded-md hover:bg-gray-100" aria-label="Open globe explorer">Explore</a>
            <a href="/leaderboards" className="block px-2 py-2 rounded-md hover:bg-gray-100" aria-label="Leaderboards">Leaderboards</a>
            <form onSubmit={onSearch} className="flex items-center gap-2" role="search" aria-label="Mobile search">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search country or city"
                aria-label="Search country or city"
                className="w-full px-3 py-2 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1E7AFC] focus:border-transparent"
              />
              <Button type="submit" variant="secondary" className="h-10 px-3" aria-label="Search">
                <Search className="h-4 w-4" aria-hidden="true" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </header>
  )
}
