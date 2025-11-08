import React from 'react'

export default function LogoCloud() {
  // Example logos — replace src with your logos in /public
  const logos = [
    { alt: 'AQA', src: '/logos/aqa.svg' },
    { alt: 'Edexcel', src: '/logos/edexcel.svg' },
    { alt: 'OCR', src: '/logos/ocr.svg' },
    { alt: 'IB', src: '/logos/ibo.svg' },
  ]

  return (
    <div className="py-6">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {logos.map((l, i) => (
            <img key={i} src={l.src} alt={l.alt} className="h-8 opacity-90" />
          ))}
        </div>
      </div>
    </div>
  )
}
