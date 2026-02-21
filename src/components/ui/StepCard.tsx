// src/components/ui/StepCard.tsx
import clsx from "clsx"
import { motion } from "framer-motion"

interface StepCardProps {
  description: string
  isCompleted: boolean
  isVisible: boolean
  step: number
  total: number
  title: string
}

export default function StepCard({
  description,
  isCompleted,
  isVisible,
  step,
  title,
  total,
}: StepCardProps) {
  const progressPercent = `${Math.round((step / total) * 100)}%`

  return (
    <motion.article
      initial={false}
      animate={{
        opacity: isVisible ? 1 : 0.35,
        scale: isVisible ? 1 : 0.97,
        y: isVisible ? 0 : 16,
      }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={clsx(
        "group flex h-full flex-col gap-4 rounded-2xl border border-neutral-200/90 bg-white p-5 md:p-6",
        "shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]",
        isVisible && "border-labotur-azul/35",
      )}
    >
      <div
        className={clsx(
          "flex size-11 items-center justify-center rounded-full",
          "bg-labotur-laranja text-white transition-transform duration-200 group-hover:scale-105",
          isCompleted && "bg-labotur-azul",
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
      <div className="mt-auto flex flex-col gap-2 pt-1">
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
          Etapa {String(step).padStart(2, "0")} de{" "}
          {String(total).padStart(2, "0")}
        </span>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-labotur-azul/10">
          <motion.div
            initial={false}
            animate={{ width: isVisible ? progressPercent : "0%" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="h-full rounded-full bg-linear-to-r from-labotur-laranja to-labotur-azul"
          />
        </div>
      </div>
    </motion.article>
  )
}
