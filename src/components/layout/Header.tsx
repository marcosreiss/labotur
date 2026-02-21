// src/components/layout/Header.tsx
"use client"

import clsx from "clsx"
import { Menu, X } from "lucide-react"
import Image from "next/image"
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
    <header className={clsx("fixed left-0 right-0 top-0 z-50 ")}>
      <div
        className={clsx(
          "mx-auto mt-3 max-w-6xl px-4 sm:px-6",
          "h-16 rounded-2xl border border-labotur-laranja/10 bg-white/95 shadow-[0_10px_30px_rgba(17,24,39,0.07)]",
          "flex items-center justify-between",
        )}
      >
        <button
          type="button"
          onClick={() => scrollTo("#inicio")}
          className={clsx(
            "ml-3 inline-flex items-center rounded-lg",
            "gap-2.5",
            "transition-opacity hover:opacity-90",
          )}
          aria-label="Ir para o início"
        >
          <Image
            src="/labotur-icon.png"
            alt="Labotur logo"
            width={36}
            height={36}
            priority
            className="size-9 object-contain"
          />
          <span className="text-xl font-semibold tracking-tight text-labotur-azul">
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
                "rounded-lg px-3 py-2 text-sm font-medium text-neutral-700",
                "transition-all duration-200 hover:bg-labotur-azul/8 hover:text-labotur-azul",
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
            "mr-3 hidden md:inline-flex",
            "rounded-xl px-4 py-2.5",
            "text-sm font-semibold text-white",
            "bg-labotur-laranja shadow-sm transition-all hover:-translate-y-0.5 hover:opacity-90",
          )}
        >
          Solicitar orçamento
        </button>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className={clsx(
            "mr-3 rounded-lg p-2 text-neutral-900 md:hidden",
            "transition-colors hover:bg-neutral-100",
          )}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className={clsx("mx-auto mt-2 max-w-6xl px-4 sm:px-6 md:hidden")}>
          <div
            className={clsx(
              "flex flex-col gap-2 rounded-2xl border border-neutral-200 bg-white p-3",
              "shadow-[0_10px_30px_rgba(17,24,39,0.07)]",
            )}
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={clsx(
                  "rounded-lg px-3 py-2 text-left text-sm font-medium text-neutral-700",
                  "transition-colors hover:bg-neutral-100 hover:text-labotur-azul",
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
                "text-sm font-semibold text-white",
              )}
            >
              Solicitar orçamento
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
