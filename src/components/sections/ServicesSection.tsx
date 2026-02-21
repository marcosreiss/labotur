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
  const lgRows = chunkServices(services, 3) // desktop: 3 por linha
  const smRows = chunkServices(services, 2) // tablet: 2 por linha

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

        {/* Mobile: 1 coluna */}
        <div className="flex flex-col gap-4 sm:hidden">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              description={service.description}
              icon={service.icon}
              title={service.title}
            />
          ))}
        </div>

        {/* Tablet: 2 colunas por linha — órfão ocupa linha inteira */}
        <div className="hidden flex-col gap-4 sm:flex lg:hidden">
          {smRows.map((row, rowIndex) => {
            const isLastRow = rowIndex === smRows.length - 1
            const isOrphan = isLastRow && row.length === 1

            return (
              <ul
                key={`sm-${row[0].title}`}
                className={clsx(
                  "grid gap-4",
                  isOrphan ? "grid-cols-1" : "grid-cols-2"
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

        {/* Desktop: 3 colunas por linha — órfãos ocupam largura proporcional */}
        <div className="hidden flex-col gap-4 lg:flex">
          {lgRows.map((row, rowIndex) => {
            const isLastRow = rowIndex === lgRows.length - 1
            const cols = isLastRow ? row.length : 3

            return (
              <ul
                key={`lg-${row[0].title}`}
                className={clsx(
                  "grid gap-4",
                  cols === 1 && "grid-cols-1",
                  cols === 2 && "grid-cols-2",
                  cols === 3 && "grid-cols-3",
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
