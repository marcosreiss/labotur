// src/components/layout/Footer.tsx
import clsx from "clsx"

const footerLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
]

export default function Footer() {
  return (
    <footer className="bg-labotur-azul-escuro text-white">
      <div
        className={clsx(
          "mx-auto max-w-6xl px-6 py-12",
          "flex flex-col gap-10 md:flex-row md:justify-between",
        )}
      >
        {/* Marca */}
        <div className="flex flex-col gap-3">
          <span className="text-xl font-bold text-white">Labotur</span>
          <p className="max-w-xs text-sm text-white/70">
            A primeira empresa júnior de turismo do Brasil. Fundada em 1992,
            vinculada à UFMA.
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Navegação
          </span>
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm text-white/70",
                "transition-colors hover:text-white",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contato */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Contato
          </span>
          <a
            href="mailto:atendimento.labotur@gmail.com"
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            atendimento.labotur@gmail.com
          </a>
          <a
            href="https://instagram.com/ejlabotur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            @ejlabotur
          </a>
          <p className="text-sm text-white/70">
            Complexo Fábrica Santa Amélia
            <br />
            Centro — São Luís, MA
          </p>
        </div>
      </div>

      <div
        className={clsx(
          "border-t border-white/10",
          "px-6 py-4 text-center",
          "text-xs text-white/40",
        )}
      >
        © {new Date().getFullYear()} Labotur — Empresa Júnior de Turismo UFMA
      </div>
    </footer>
  )
}
