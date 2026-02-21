// src/components/layout/Header.tsx
"use client"

import clsx from "clsx"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const scrollTo = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={clsx(
        "fixed left-0 right-0 top-0 z-50",
        "border-b border-neutral-200 bg-white/90 backdrop-blur-sm",
      )}
    >
      <div
        className={clsx(
          "mx-auto max-w-6xl px-6",
          "flex h-16 items-center justify-between",
        )}
      >
        <button
          type="button"
          onClick={() => scrollTo("#inicio")}
          className="text-xl font-bold text-labotur-azul"
        >
          Labotur
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={clsx(
                "text-sm font-medium text-neutral-700",
                "transition-colors duration-200 hover:text-labotur-azul",
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
            "hidden md:inline-flex",
            "rounded-lg px-4 py-2",
            "text-sm font-semibold text-white",
            "bg-labotur-laranja transition-opacity hover:opacity-90",
          )}
        >
          Solicitar orçamento
        </button>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="text-neutral-900 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          className={clsx(
            "flex flex-col gap-4",
            "border-t border-neutral-200 bg-white",
            "px-6 pb-6 pt-2 md:hidden",
          )}
        >
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left text-sm font-medium text-neutral-700"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollTo("#contato")}
            className={clsx(
              "mt-2 rounded-lg px-4 py-2",
              "bg-labotur-laranja text-center",
              "text-sm font-semibold text-white",
            )}
          >
            Solicitar orçamento
          </button>
        </div>
      )}
    </header>
  )
}
