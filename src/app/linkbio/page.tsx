// src/app/linkbio/page.tsx
import type { Metadata } from "next"
import clsx from "clsx"
import {
    ClipboardList,
    FileText,
    Globe,
} from "lucide-react"
import Image from "next/image"
import type { LucideIcon } from "lucide-react"

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
                "flex min-h-screen flex-col items-center justify-center",
                "bg-linear-to-br from-labotur-azul-escuro to-labotur-azul",
                "px-6 py-16"
            )}
        >
            <div className="flex w-full max-w-sm flex-col items-center gap-8">

                {/* Logo + handle */}
                <div className="flex flex-col items-center gap-4">
                    <div
                        className={clsx(
                            "flex size-24 items-center justify-center rounded-full",
                            "border-2 border-white/30 bg-white shadow-lg"
                        )}
                    >
                        <Image
                            src="/labotur-logo.png"
                            alt="Logo Labotur"
                            width={64}
                            height={64}
                            priority
                            className="object-contain"
                        />
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <span className="text-base font-bold text-white">
                            @ejlabotur
                        </span>
                        <span className="text-xs text-white/60">
                            A Primeira Empresa Júnior de Turismo do Brasil
                        </span>
                    </div>
                </div>

                {/* Links */}
                <ul className="flex w-full flex-col gap-3">
                    {links.map((link) => {
                        const Icon = link.icon
                        return (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    rel={link.external ? "noopener noreferrer" : undefined}
                                    target={link.external ? "_blank" : "_self"}
                                    className={clsx(
                                        "flex items-center gap-4 rounded-2xl px-5 py-4",
                                        "border border-white/20 bg-white/10 backdrop-blur-sm",
                                        "text-white transition-all duration-500",
                                        "hover:bg-labotur-laranja hover:border-labotur-laranja"
                                    )}
                                >
                                    <Icon size={20} className="shrink-0" />
                                    <span className="flex-1 text-center text-sm font-semibold uppercase tracking-wider">
                                        {link.label}
                                    </span>
                                </a>
                            </li>
                        )
                    })}
                </ul>

                {/* Rodapé */}
                <span className="text-xs text-white/30">
                    © {new Date().getFullYear()} Labotur — UFMA
                </span>

            </div>
        </main>
    )
}
