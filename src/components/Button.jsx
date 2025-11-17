import React from 'react'
import { Loader2 } from 'lucide-react'

const base = 'inline-flex items-center justify-center rounded-full font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'

const variants = {
  primary:
    'bg-[#1E7AFC] text-white hover:bg-[#1765cf] active:bg-[#155bb9] focus-visible:ring-[#1E7AFC] ring-offset-white dark:ring-offset-gray-900',
  secondary:
    'bg-white text-[#0F1724] hover:bg-gray-50 active:bg-gray-100 border border-gray-200 focus-visible:ring-[#1E7AFC] ring-offset-white',
  ghost:
    'bg-transparent text-[#0F1724] hover:bg-gray-100 active:bg-gray-200 focus-visible:ring-[#1E7AFC] ring-offset-white',
  danger:
    'bg-[#E74C3C] text-white hover:bg-[#d84233] active:bg-[#c73a2d] focus-visible:ring-[#E74C3C] ring-offset-white',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  loading = false,
  iconLeft: IconLeft,
  iconRight: IconRight,
  as: Tag = 'button',
  ...props
}) {
  return (
    <Tag
      className={`${base} ${variants[variant]} ${className} ${loading ? 'pointer-events-none' : ''}`}
      aria-busy={loading ? 'true' : 'false'}
      {...props}
    >
      {loading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
      ) : IconLeft ? (
        <IconLeft className="mr-2 h-4 w-4" aria-hidden="true" />
      ) : null}
      {children}
      {IconRight ? <IconRight className="ml-2 h-4 w-4" aria-hidden="true" /> : null}
    </Tag>
  )
}
