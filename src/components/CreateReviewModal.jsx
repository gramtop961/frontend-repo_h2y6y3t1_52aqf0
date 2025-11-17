import React, { useState } from 'react'
import Button from './Button'
import { Star, X } from 'lucide-react'

export default function CreateReviewModal({ open, onClose, presetCountry }) {
  const [rating, setRating] = useState(5)
  const [title, setTitle] = useState('')
  const [comment, setComment] = useState('')
  const [anonymous, setAnonymous] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (!open) return null

  const submit = async () => {
    setLoading(true)
    setError('')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          country_iso: presetCountry || 'US',
          rating,
          title: title || null,
          comment: comment || null,
          contexts: [],
          anonymous
        })
      })
      if (!res.ok) throw new Error('Failed to publish')
      onClose(true)
      alert("Thanks — your review is live!")
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={() => onClose(false)} aria-hidden="true" />
      <div className="relative w-full max-w-lg rounded-xl bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-bold">Write a Review {presetCountry ? `— ${presetCountry}` : ''}</h3>
          <button onClick={() => onClose(false)} aria-label="Close"><X className="h-5 w-5" /></button>
        </div>
        <div className="p-4 space-y-3">
          <label className="block text-sm font-medium">Rating</label>
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(n => (
              <button key={n} onClick={() => setRating(n)} aria-label={`${n} stars`} className={`p-1 ${n <= rating ? 'text-amber-500' : 'text-gray-300'}`}>
                <Star className={`h-6 w-6 ${n <= rating ? 'fill-current' : ''}`} />
              </button>
            ))}
          </div>
          <div>
            <label className="block text-sm font-medium">Title (optional)</label>
            <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-md border" maxLength={100} />
          </div>
          <div>
            <label className="block text-sm font-medium">Comment</label>
            <textarea value={comment} onChange={e=>setComment(e.target.value)} className="w-full mt-1 px-3 py-2 rounded-md border" rows={4} placeholder="Tell us more" />
          </div>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={anonymous} onChange={e=>setAnonymous(e.target.checked)} />
            <span className="text-sm">Post anonymously</span>
          </label>
          {error && <div className="text-red-600 text-sm">{error}</div>}
        </div>
        <div className="p-4 border-t flex justify-end gap-2">
          <Button variant="secondary" onClick={() => onClose(false)} aria-label="Cancel">Cancel</Button>
          <Button onClick={submit} loading={loading} aria-label="Publish review">Publish review</Button>
        </div>
      </div>
    </div>
  )
}
