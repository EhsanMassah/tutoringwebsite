"use client"
import React, { useState, useEffect } from 'react'
import TestimonialCard from './TestimonialCard'
import testimonials from '../content/testimonials.json'

export default function TestimonialRotator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i: number) => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  const t = testimonials[index]

  return (
    <div>
      <TestimonialCard name={t.name} text={t.text} rating={t.rating} />
    </div>
  )
}
