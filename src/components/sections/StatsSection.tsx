// src/components/sections/StatsSection.tsx
"use client"

import { useEffect, useRef, useState } from "react"

import AnimatedSection from "@/components/ui/AnimatedSection"
import SectionWrapper from "@/components/ui/SectionWrapper"

interface Stat {
  label: string
  suffix: string
  value: number
}

const stats: Stat[] = [
  { label: "Anos de história", suffix: "+", value: 32 },
  { label: "Projetos realizados", suffix: "+", value: 50 },
  { label: "Municípios atendidos", suffix: "+", value: 10 },
  { label: "Profissionais formados", suffix: "+", value: 200 },
]

function Counter({ value, suffix }: { suffix: string; value: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1200
          const steps = 40
          const increment = value / steps
          const interval = duration / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, interval)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <span
      ref={ref}
      className="text-4xl font-bold text-labotur-azul md:text-5xl"
    >
      {count}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <div className="bg-neutral-100">
      <SectionWrapper id="numeros">
        <AnimatedSection>
          <ul className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="flex flex-col items-center gap-2 text-center"
              >
                <Counter suffix={stat.suffix} value={stat.value} />
                <span className="text-sm text-neutral-700">{stat.label}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </SectionWrapper>
    </div>
  )
}
