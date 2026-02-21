// src/app/loading.tsx
import clsx from "clsx"
import Image from "next/image"

export default function Loading() {
    return (
        <div
            className={clsx(
                "flex min-h-screen items-center justify-center",
                "bg-linear-to-br from-labotur-azul-escuro to-labotur-azul"
            )}
        >
            <Image
                src="/labotur-icon.png"
                alt="Labotur"
                width={96}
                height={96}
                priority
                className="animate-pulse"
            />
        </div>
    )
}
