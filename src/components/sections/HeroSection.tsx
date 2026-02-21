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
        "overflow-hidden bg-labotur-azul-escuro px-6 pt-24",
      )}
    >
      <div
        className={clsx(
          "pointer-events-none absolute inset-0",
          "bg-linear-to-br from-labotur-azul/40 via-labotur-azul-escuro to-labotur-azul-escuro/95",
        )}
      />
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-labotur-laranja/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-16 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        <div className="grid items-center gap-10 py-20 md:grid-cols-12">
          <div className="flex flex-col gap-6 md:col-span-7">
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
              className="max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
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
                  "rounded-xl px-6 py-3",
                  "bg-labotur-laranja text-white",
                  "text-sm font-semibold",
                  "shadow-lg shadow-labotur-laranja/25 transition-all hover:-translate-y-0.5 hover:opacity-90",
                )}
              >
                Solicitar orçamento
              </button>

              <button
                type="button"
                onClick={() => scrollTo("#servicos")}
                className={clsx(
                  "rounded-xl px-6 py-3",
                  "border border-white/30 text-white",
                  "text-sm font-semibold",
                  "transition-colors hover:bg-white/10",
                )}
              >
                Conheça nossos serviços
              </button>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={clsx(
              "md:col-span-5",
              "rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm",
              "shadow-[0_20px_40px_rgba(2,12,27,0.35)]",
            )}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-labotur-laranja">
              Por que escolher a Labotur
            </p>
            <h2 className="mt-3 text-xl font-semibold text-white">
              Soluções com base acadêmica e execução profissional
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-3 text-white">
              <div className="rounded-xl bg-white/10 p-3">
                <p className="text-2xl font-bold">30+</p>
                <p className="text-xs text-white/75">anos de história</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <p className="text-2xl font-bold">UFMA</p>
                <p className="text-xs text-white/75">supervisão acadêmica</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <p className="text-2xl font-bold">360º</p>
                <p className="text-xs text-white/75">visão do projeto</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <p className="text-2xl font-bold">Acessível</p>
                <p className="text-xs text-white/75">
                  alto valor com menor custo
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
