// src/components/ui/ServiceCard.tsx
import clsx from "clsx"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
    description: string
    icon: LucideIcon
    title: string
}

export default function ServiceCard({
    description,
    icon: Icon,
    title,
}: ServiceCardProps) {
    return (
        <div
            className={clsx(
                "flex flex-col gap-4 rounded-2xl p-6",
                "border border-neutral-200 bg-white",
                "transition-shadow hover:shadow-md"
            )}
        >
            <div
                className={clsx(
                    "flex size-11 items-center justify-center rounded-xl",
                    "bg-labotur-azul/10 text-labotur-azul"
                )}
            >
                <Icon size={22} />
            </div>
            <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
            <p className="text-sm leading-relaxed text-neutral-700">{description}</p>
        </div>
    )
}
