// src/app/linkbio/page.tsx
import clsx from "clsx"
import type { LucideIcon } from "lucide-react"
import { ArrowUpRight, ClipboardList, FileText, Globe } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Labotur — Links",
  description:
    "Acesse os links oficiais da Labotur: inscrições, editais e site.",
}

const links: {
  external: boolean
  href: string
  icon: LucideIcon
  label: string
}[] = [
  {
    external: true,
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdD8ZlJPB-X08q2hRoz-4_4wAGwSFWPsr4WABkD2ekRMEPsMg/viewform",
    icon: ClipboardList,
    label: "Forms de Inscrição",
  },
  {
    external: true,
    href: "https://drive.google.com/file/d/13q4Ffm-CQEWEutcU7xyI4OthEL__fmtX/view",
    icon: FileText,
    label: "Edital PS 2024.2",
  },
  {
    external: false,
    href: "/",
    icon: Globe,
    label: "Acesse nosso site",
  },
]

export default function LinkBioPage() {
  return (
    <main
      className={clsx(
        "relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16",
        "bg-linear-to-b from-labotur-azul-escuro via-labotur-azul to-[#0a82bf]",
      )}
    >
      <div className="pointer-events-none absolute -left-20 top-8 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-6 h-64 w-64 rounded-full bg-labotur-laranja/25 blur-3xl" />

      <section
        className={clsx(
          "relative z-10 w-full max-w-md rounded-3xl border border-white/25 bg-white/10 p-6 backdrop-blur-md md:p-8",
          "shadow-[0_25px_60px_rgba(2,12,27,0.35)]",
        )}
      >
        <header className="mb-7 flex flex-col items-center gap-4 text-center">
          <div className="flex size-20 items-center justify-center rounded-2xl border border-white/25 bg-white/95 shadow-lg">
            <Image
              src="/labotur-icon.png"
              alt="Logo Labotur"
              width={54}
              height={54}
              priority
              className="object-contain"
            />
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-xl font-semibold tracking-tight text-white">
              @ejlabotur
            </p>
            <p className="text-xs text-white/75">
              A Primeira Empresa Júnior de Turismo do Brasil
            </p>
          </div>
        </header>

        <ul className="flex w-full flex-col gap-3.5">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  target={link.external ? "_blank" : "_self"}
                  className={clsx(
                    "group flex items-center gap-3 rounded-2xl px-4 py-3.5",
                    "border border-white/20 bg-white/10 text-white backdrop-blur-sm",
                    "transition-all duration-200 hover:-translate-y-0.5 hover:border-labotur-laranja/85 hover:bg-labotur-laranja",
                  )}
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Icon size={18} />
                  </span>
                  <span className="flex-1 text-sm font-semibold tracking-wide">
                    {link.label}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <footer className="mt-7 border-t border-white/15 pt-4 text-center">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Labotur — UFMA
          </p>
          <p className="mt-1 text-xs text-white/60">
            Feito por{" "}
            <a
              href="https://marcosreis.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 underline underline-offset-4 transition-colors hover:text-white"
            >
              Marcos Reis
            </a>
          </p>
        </footer>
      </section>
    </main>
  )
}
