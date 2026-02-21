// src/components/sections/AboutSection.tsx
import clsx from "clsx"

import AnimatedSection from "@/components/ui/AnimatedSection"
import SectionWrapper from "@/components/ui/SectionWrapper"

const highlights = [
  {
    description:
      "Fundada em 1992, a Labotur foi a primeira empresa júnior de turismo criada no Brasil.",
    title: "Pioneira no Brasil",
  },
  {
    description:
      "Todos os projetos são supervisionados por professores do curso de Turismo da UFMA.",
    title: "Base acadêmica",
  },
  {
    description:
      "Como associação sem fins lucrativos, oferecemos serviços de qualidade a preços acessíveis.",
    title: "Preço acessível",
  },
  {
    description:
      "Fazemos parte do Movimento Empresa Júnior, seguindo padrões nacionais de qualidade e gestão.",
    title: "Movimento EJ",
  },
]

export default function AboutSection() {
  return (
    <SectionWrapper id="sobre">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
        {/* Texto principal */}
        <AnimatedSection>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-labotur-laranja">
                Quem somos
              </span>
              <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
                Sobre a Labotur
              </h2>
            </div>

            <p className="text-base leading-relaxed text-neutral-700">
              A Labotur é a Empresa Júnior do curso de Turismo da Universidade
              Federal do Maranhão (UFMA). Somos uma associação sem fins
              lucrativos, formada e gerida por estudantes, que conecta a prática
              profissional às demandas reais do mercado.
            </p>

            <p className="text-base leading-relaxed text-neutral-700">
              Nosso objetivo é desenvolver o turismo local e regional enquanto
              formamos profissionais qualificados para o setor. Atuamos como um
              laboratório de lideranças para o turismo maranhense.
            </p>

            <div
              className={clsx(
                "flex items-center gap-4 rounded-2xl p-5",
                "border border-labotur-azul/20 bg-labotur-azul/5",
              )}
            >
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-labotur-azul">
                  1992
                </span>
                <span className="text-sm text-neutral-700">
                  Ano de fundação — a primeira EJ de turismo do Brasil
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Destaques */}
        <AnimatedSection delay={0.15}>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item.title}
                className={clsx(
                  "flex flex-col gap-2 rounded-2xl p-5",
                  "border border-neutral-200 bg-neutral-100",
                )}
              >
                <span className="text-sm font-semibold text-labotur-azul">
                  {item.title}
                </span>
                <p className="text-sm leading-relaxed text-neutral-700">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  )
}
