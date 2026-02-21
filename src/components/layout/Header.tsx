// src/components/layout/Header.tsx
"use client"

import clsx from "clsx"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [onHero, setOnHero] = useState(true)

  useEffect(() => {
    const hero = document.querySelector("#inicio")
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setOnHero(entry.isIntersecting),
      { threshold: 0.2 }
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 sm:px-6">
      <div
        className={clsx(
          "mx-auto mt-3 max-w-6xl",
          "h-16 rounded-2xl flex items-center justify-between",
          "border shadow-[0_10px_30px_rgba(17,24,39,0.1)]",
          "transition-colors duration-500",
          onHero
            ? "border-white/20 bg-white/10 backdrop-blur-sm"
            : "border-labotur-azul-escuro bg-labotur-azul"
        )}
      >
        <button
          type="button"
          onClick={() => scrollTo("#inicio")}
          aria-label="Ir para o início"
          className="ml-4 inline-flex items-center gap-2.5 rounded-lg transition-opacity hover:opacity-90"
        >
          <Image
            src="/labotur-icon.png"
            alt="Labotur logo"
            width={36}
            height={36}
            priority
            className="size-9 object-contain"
          />
          <span className="text-xl font-semibold tracking-tight text-white">
            Labotur
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={clsx(
                "rounded-lg px-3 py-2 text-sm font-medium",
                "transition-all duration-200",
                "text-white/80 hover:bg-white/15 hover:text-white"
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => scrollTo("#contato")}
          className={clsx(
            "mr-4 hidden md:inline-flex",
            "rounded-xl px-4 py-2.5",
            "text-sm font-semibold text-white",
            "bg-labotur-laranja shadow-sm",
            "transition-all hover:-translate-y-0.5 hover:opacity-90"
          )}
        >
          Solicitar orçamento
        </button>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className={clsx(
            "mr-4 rounded-lg p-2 md:hidden",
            "text-white transition-colors hover:bg-white/15"
          )}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-6xl md:hidden"
          >
            <div
              className={clsx(
                "flex flex-col gap-2 rounded-2xl p-3",
                "border border-labotur-azul-escuro bg-labotur-azul",
                "shadow-[0_10px_30px_rgba(17,24,39,0.15)]"
              )}
            >
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={clsx(
                    "rounded-lg px-3 py-2 text-left",
                    "text-sm font-medium text-white/80",
                    "transition-colors hover:bg-white/15 hover:text-white"
                  )}
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => scrollTo("#contato")}
                className={clsx(
                  "mt-1 rounded-xl px-4 py-2.5",
                  "bg-labotur-laranja text-center",
                  "text-sm font-semibold text-white"
                )}
              >
                Solicitar orçamento
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
