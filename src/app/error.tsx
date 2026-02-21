// src/app/error.tsx
"use client"

import clsx from "clsx"
import { useEffect } from "react"

interface ErrorProps {
    error: Error & { digest?: string }
    reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <main
            className={clsx(
                "flex min-h-screen flex-col items-center justify-center",
                "bg-linear-to-br from-labotur-azul-escuro to-labotur-azul",
                "px-6 text-center"
            )}
        >
            <span className="text-8xl font-bold text-white/20">Ops</span>

            <h1 className="mt-4 text-2xl font-bold text-white">
                Algo deu errado
            </h1>

            <p className="mt-3 max-w-sm text-sm text-white/60">
                Ocorreu um erro inesperado. Tente novamente ou volte para o início.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                    type="button"
                    onClick={reset}
                    className={clsx(
                        "rounded-xl px-6 py-3",
                        "bg-labotur-laranja text-white",
                        "text-sm font-semibold",
                        "transition-opacity hover:opacity-90"
                    )}
                >
                    Tentar novamente
                </button>

                <a
                    href="/"
                    className={clsx(
                        "rounded-xl px-6 py-3",
                        "border border-white/30 text-white",
                        "text-sm font-semibold",
                        "transition-colors hover:bg-white/10"
                    )}
                >
                    Voltar para o início
                </a>
            </div>
        </main>
    )
}
