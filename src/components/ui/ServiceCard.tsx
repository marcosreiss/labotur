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
        "group flex h-full flex-col gap-4 rounded-2xl p-6",
        "border border-neutral-200/90 bg-white",
        "shadow-[0_8px_24px_rgba(15,23,42,0.04)]",
        "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(15,23,42,0.10)]",
      )}
    >

      <div
        className={clsx(
          "flex size-11 items-center justify-center rounded-xl",
          "transition-colors duration-200",
          "bg-linear-to-br from-labotur-azul/15 to-labotur-azul/5 text-labotur-azul",
          "group-hover:from-labotur-laranja/15 group-hover:to-labotur-laranja/5 group-hover:text-labotur-laranja",
        )}
      >
        <Icon size={22} />
      </div>
      <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
      <p className="text-sm leading-relaxed text-neutral-700">{description}</p>
    </div>
  )
}
