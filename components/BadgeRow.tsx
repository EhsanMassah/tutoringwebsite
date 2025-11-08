import React from 'react'

export default function BadgeRow({ badges }: { badges: { alt: string; src: string }[] }) {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      {badges.map((b, i) => (
        <img key={i} src={b.src} alt={b.alt} className="h-8 opacity-90" />
      ))}
    </div>
  )
}
