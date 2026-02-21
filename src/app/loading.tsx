// src/app/loading.tsx
import clsx from "clsx"
import Image from "next/image"

export default function Loading() {
    return (
        <div
            className={clsx(
                "flex min-h-screen items-center justify-center",
                "bg-white"
            )}
        >
            <Image
                src="/labotur-icon.png"
                alt="Labotur"
                width={64}
                height={64}
                priority
                className="animate-pulse"
            />
        </div>
    )
}
