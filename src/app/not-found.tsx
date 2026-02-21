// src/app/not-found.tsx
import clsx from "clsx"
import Image from "next/image"

export default function NotFound() {
    return (
        <main
            className={clsx(
                "flex min-h-screen flex-col items-center justify-center",
                "bg-linear-to-br from-labotur-azul-escuro to-labotur-azul",
                "px-6 text-center"
            )}
        >
            <Image
                src="/labotur-icon.png"
                alt="Labotur logo"
                width={64}
                height={64}
                priority
                className="mb-8 opacity-90"
            />

            <span className="text-8xl font-bold text-white/20">404</span>

            <h1 className="mt-4 text-2xl font-bold text-white">
                Página não encontrada
            </h1>

            <p className="mt-3 max-w-sm text-sm text-white/60">
                A página que você está procurando não existe ou foi removida.
            </p>

            <a
                href="/"
                className={clsx(
                    "mt-8 rounded-xl px-6 py-3",
                    "bg-labotur-laranja text-white",
                    "text-sm font-semibold",
                    "transition-opacity hover:opacity-90"
                )}
            >
                Voltar para o início
            </a>
        </main>
    )
}
