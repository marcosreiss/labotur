// src/components/ui/SectionWrapper.tsx
import clsx from "clsx"

interface SectionWrapperProps {
    children: React.ReactNode
    className?: string
    id?: string
}

export default function SectionWrapper({ children, className, id }: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={clsx(
                "w-full px-6 py-20",
                "max-w-6xl mx-auto",
                className
            )}
        >
            {children}
        </section>
    )
}
