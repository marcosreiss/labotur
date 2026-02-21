// src/components/sections/ServicesSection.tsx
import clsx from "clsx"
import {
  BarChart2,
  CalendarDays,
  GraduationCap,
  Hotel,
  Map as MapIcon,
} from "lucide-react"

import AnimatedSection from "@/components/ui/AnimatedSection"
import SectionWrapper from "@/components/ui/SectionWrapper"
import ServiceCard from "@/components/ui/ServiceCard"

const services = [
  {
    description:
      "Organização de roteiros, diagnóstico e inventário turístico para destinos e empresas.",
    icon: MapIcon,
    title: "Planejamento Turístico",
  },
  {
    description:
      "Treinamento de atendimento e boas práticas para hotéis, pousadas e restaurantes.",
    icon: Hotel,
    title: "Consultoria em Hospitalidade",
  },
  {
    description:
      "Planejamento e execução de eventos corporativos, acadêmicos e culturais.",
    icon: CalendarDays,
    title: "Organização de Eventos",
  },
  {
    description: "Análise de perfil do turista, demanda e nível de satisfação.",
    icon: BarChart2,
    title: "Pesquisas de Mercado",
  },
  {
    description:
      "Capacitações profissionais na área do turismo e atendimento ao cliente.",
    icon: GraduationCap,
    title: "Treinamentos",
  },
]

function chunkServices<T>(items: T[], size: number) {
  const rows: T[][] = []
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size))
  }
  return rows
}

export default function ServicesSection() {
  const serviceRows = chunkServices(services, 3)

  return (
    <SectionWrapper id="servicos">
      <AnimatedSection>
        <div className="mb-12 flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-labotur-laranja">
            O que fazemos
          </span>
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
            Nossos serviços
          </h2>
          <p className="max-w-2xl text-base text-neutral-700">
            Soluções baseadas em pesquisa acadêmica, supervisionadas por
            professores especialistas e a preços acessíveis.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="flex flex-col gap-4">
          {serviceRows.map((row, rowIndex) => {
            const isLastRow = rowIndex === serviceRows.length - 1
            const lgCols = isLastRow ? row.length : 3

            return (
              <ul
                key={`services-row-${row.length}-${rowIndex}`}
                className={clsx(
                  "grid grid-cols-1 gap-4 sm:grid-cols-2",
                  lgCols === 1 && "lg:grid-cols-1",
                  lgCols === 2 && "lg:grid-cols-2",
                  lgCols === 3 && "lg:grid-cols-3",
                )}
              >
                {row.map((service) => (
                  <li key={service.title}>
                    <ServiceCard
                      description={service.description}
                      icon={service.icon}
                      title={service.title}
                    />
                  </li>
                ))}
              </ul>
            )
          })}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  )
}
