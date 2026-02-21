// src/components/sections/HeroSection.tsx
"use client"

import clsx from "clsx"
import { motion } from "framer-motion"

export default function HeroSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="inicio"
      className={clsx(
        "relative flex min-h-screen items-center",
        "bg-labotur-azul-escuro px-6 pt-16",
      )}
    >
      {/* Overlay decorativo */}
      <div
        className={clsx(
          "pointer-events-none absolute inset-0",
          "bg-linear-to-br from-labotur-azul/40 to-labotur-azul-escuro/90",
        )}
      />

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        <div className="flex flex-col gap-6 py-20 md:max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={clsx(
              "w-fit rounded-full px-3 py-1",
              "bg-labotur-laranja/20 text-labotur-laranja",
              "text-xs font-semibold uppercase tracking-widest",
            )}
          >
            Fundada em 1992 · Primeira EJ de Turismo do Brasil
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={clsx(
              "text-4xl font-bold leading-tight text-white",
              "md:text-6xl",
            )}
          >
            Turismo que transforma{" "}
            <span className="text-labotur-laranja">destinos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base leading-relaxed text-white/70 md:text-lg"
          >
            A Labotur é a Empresa Júnior de Turismo da UFMA. Oferecemos
            consultoria, planejamento e organização de eventos com supervisão
            acadêmica e preços acessíveis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <button
              type="button"
              onClick={() => scrollTo("#contato")}
              className={clsx(
                "rounded-lg px-6 py-3",
                "bg-labotur-laranja text-white",
                "text-sm font-semibold",
                "transition-opacity hover:opacity-90",
              )}
            >
              Solicitar orçamento
            </button>

            <button
              type="button"
              onClick={() => scrollTo("#servicos")}
              className={clsx(
                "rounded-lg px-6 py-3",
                "border border-white/30 text-white",
                "text-sm font-semibold",
                "transition-colors hover:bg-white/10",
              )}
            >
              Conheça nossos serviços
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
