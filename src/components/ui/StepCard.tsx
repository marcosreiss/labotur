// src/components/ui/StepCard.tsx
import clsx from "clsx"

interface StepCardProps {
  description: string
  step: number
  title: string
}

export default function StepCard({ description, step, title }: StepCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div
        className={clsx(
          "flex size-11 items-center justify-center rounded-full",
          "bg-labotur-laranja text-white",
          "text-sm font-bold",
        )}
      >
        {String(step).padStart(2, "0")}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
        <p className="text-sm leading-relaxed text-neutral-700">
          {description}
        </p>
      </div>
    </div>
  )
}
