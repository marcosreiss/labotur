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
    <div className="bg-transparent">
      <SectionWrapper id="numeros">
        <AnimatedSection>
          <div className="rounded-3xl border border-neutral-200/80 bg-white px-6 py-10 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:px-10">
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-labotur-azul">
                Resultados Labotur
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-neutral-900 md:text-3xl">
                Experiência comprovada em turismo e projetos locais
              </h2>
            </div>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <li
                  key={stat.label}
                  className="rounded-2xl border border-neutral-200 bg-linear-to-b from-white to-slate-50 p-5 text-center"
                >
                  <Counter suffix={stat.suffix} value={stat.value} />
                  <span className="mt-2 block text-sm font-medium text-neutral-700">
                    {stat.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </SectionWrapper>
    </div>
  )
}
