// src/components/sections/HowItWorksSection.tsx
"use client"

import clsx from "clsx"
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion"
import { useRef, useState } from "react"

import AnimatedSection from "@/components/ui/AnimatedSection"
import SectionWrapper from "@/components/ui/SectionWrapper"
import StepCard from "@/components/ui/StepCard"

const steps = [
  {
    description:
      "Entre em contato pelo formulário ou pelo nosso e-mail institucional.",
    title: "Entre em contato",
  },
  {
    description: "Realizamos uma reunião para entender sua demanda e contexto.",
    title: "Reunião de entendimento",
  },
  {
    description:
      "Elaboramos uma proposta personalizada com escopo, prazo e valor.",
    title: "Elaboração de proposta",
  },
  {
    description:
      "Nossa equipe executa o projeto com supervisão de professores especialistas.",
    title: "Execução do projeto",
  },
]

export default function HowItWorksSection() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [currentStep, setCurrentStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 30%", "end 90%"],
  })

  const progress = useSpring(scrollYProgress, {
    damping: 24,
    mass: 0.3,
    stiffness: 130,
  })

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const nextStep = Math.min(
      steps.length,
      Math.max(0, Math.ceil(value * steps.length)),
    )
    setCurrentStep((prev) => (prev === nextStep ? prev : nextStep))
  })

  return (
    <div className="bg-transparent">
      <SectionWrapper id="como-funciona">
        <AnimatedSection>
          <div className="mb-12 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-labotur-laranja">
              Processo
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
              Como funciona
            </h2>
            <p className="max-w-xl text-base text-neutral-700">
              Do primeiro contato à entrega final, em 4 etapas simples.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div ref={timelineRef} className="relative">

            {/* Barra de progresso sticky */}
            <div className="sticky top-20 z-30 mb-8">
              <div
                className={clsx(
                  "rounded-2xl border border-neutral-200/90 bg-white/95 p-3 backdrop-blur",
                  "shadow-[0_10px_25px_rgba(15,23,42,0.08)]",
                )}
              >
                <div className="h-2 w-full overflow-hidden rounded-full bg-labotur-azul/15">
                  <motion.div
                    className="h-full rounded-full bg-linear-to-r from-labotur-laranja to-labotur-azul"
                    style={{ scaleX: progress, transformOrigin: "left center" }}
                  />
                </div>
              </div>
            </div>

            {/* Steps — coluna única em todos os breakpoints */}
            <ul className="flex flex-col">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className={clsx(
                    "relative",
                    index < steps.length - 1 &&
                    "pb-8 after:absolute after:left-5.5 after:top-12 after:h-8 after:w-px after:bg-labotur-azul/20",
                  )}
                >
                  <StepCard
                    description={step.description}
                    isCompleted={currentStep > index + 1}
                    isVisible={currentStep >= index + 1}
                    step={index + 1}
                    total={steps.length}
                    title={step.title}
                  />
                </li>
              ))}
            </ul>

          </div>
        </AnimatedSection>
      </SectionWrapper>
    </div>
  )
}
