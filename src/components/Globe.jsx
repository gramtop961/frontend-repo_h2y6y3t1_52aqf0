import React, { useEffect, useMemo, useState } from 'react'
import Button from './Button'
import { Camera, Plus, Minus, RefreshCw, Share2 } from 'lucide-react'

// Lightweight fallback 2D map using SVG; replace with react-globe.gl in future
function Map2D({ data = [], onSelect }) {
  return (
    <div className="aspect-video bg-[#0F1724] rounded-2xl relative overflow-hidden">
      <div className="absolute inset-0 grid place-items-center text-white opacity-70">
        <p>2D map fallback — select a sample country below</p>
      </div>
      <div className="absolute bottom-3 left-3 flex gap-2">
        {data.map((c) => (
          <Button key={c.iso} variant="secondary" className="h-9 px-3" onClick={() => onSelect(c)} aria-label={`Open ${c.iso}`}>
            {c.iso} {c.avgRating}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default function GlobeExplorer() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/globe`)
        const json = await res.json()
        setItems(json)
      } catch (e) {
        setError('Failed to load globe data')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const onSelect = (c) => {
    window.location.href = `/country/${c.iso}`
  }

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#0F1724]">Explore the globe</h2>
          <div className="flex items-center gap-2">
            <Button variant="secondary" className="h-9 px-3" aria-label="Zoom in"><Plus className="h-4 w-4" /></Button>
            <Button variant="secondary" className="h-9 px-3" aria-label="Zoom out"><Minus className="h-4 w-4" /></Button>
            <Button variant="secondary" className="h-9 px-3" aria-label="Reset view"><RefreshCw className="h-4 w-4" /></Button>
            <Button variant="secondary" className="h-9 px-3" aria-label="Snapshot / Share"><Share2 className="h-4 w-4" /></Button>
          </div>
        </div>

        {loading ? (
          <div className="aspect-video rounded-2xl border border-gray-200 grid place-items-center">Loading globe…</div>
        ) : error ? (
          <div className="rounded-md bg-red-50 text-red-700 p-4">{error}</div>
        ) : (
          <Map2D data={items.slice(0,5)} onSelect={onSelect} />
        )}

        <p className="mt-3 text-sm text-[#64748B]">Performance‑friendly preview. Full 3D globe with heatmap and layers will load in production.</p>
      </div>
    </section>
  )
}
