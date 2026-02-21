// src/components/layout/Footer.tsx
import clsx from "clsx"
import { Instagram, Mail, MapPin } from "lucide-react"
import Image from "next/image"

const footerLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-labotur-azul-escuro text-white">
      <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-labotur-laranja/20 blur-3xl" />

      <div
        className={clsx(
          "relative z-10 mx-auto max-w-6xl px-6 py-12",
          "flex flex-col gap-10 md:flex-row md:items-start md:gap-8",
        )}
      >
        <div className="flex flex-col gap-3 md:w-1/3">
          <div className="inline-flex items-center gap-2.5">
            <Image
              src="/labotur-icon.png"
              alt="Labotur"
              width={30}
              height={30}
              className="size-7 object-contain"
            />
            <span className="text-xl font-semibold tracking-tight text-white">
              Labotur
            </span>
          </div>
          <p className="text-sm leading-relaxed text-white/75">
            A primeira empresa júnior de turismo do Brasil. Fundada em 1992,
            vinculada à UFMA.
          </p>
        </div>

        <nav className="flex flex-col gap-3 md:w-1/3">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Navegação
          </span>
          <div className="flex flex-col gap-2.5">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-sm text-white/75",
                  "transition-colors hover:text-white",
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex flex-col gap-3 md:w-1/3">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Contato
          </span>
          <a
            href="mailto:atendimento.labotur@gmail.com"
            className="flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
          >
            <Mail size={15} />
            atendimento.labotur@gmail.com
          </a>
          <a
            href="https://instagram.com/ejlabotur"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
          >
            <Instagram size={15} />
            @ejlabotur
          </a>
          <p className="flex items-start gap-2 text-sm text-white/75">
            <MapPin size={15} className="mt-0.5 shrink-0" />
            <span>
              Complexo Fábrica Santa Amélia
              <br />
              Centro — São Luís, MA
            </span>
          </p>
        </div>
      </div>

      <div
        className={clsx(
          "relative flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-10 z-10 mt-2 border-t border-white/10",
          "px-6 py-4 text-center text-xs text-white/45",
        )}
      >
        <p>
          © {new Date().getFullYear()} Labotur — Empresa Júnior de Turismo UFMA
        </p>
        <p className="">
          <a
            href="/privacidade"
            className="text-white/45 underline underline-offset-4 transition-colors hover:text-white"
          >
            Política de Privacidade
          </a>
        </p>
        <p className="">
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

      </div>
    </footer>
  )
}
