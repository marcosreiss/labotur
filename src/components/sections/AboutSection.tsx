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
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-stretch">
        <AnimatedSection className="md:col-span-7">
          <div
            className={clsx(
              "relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl p-7 md:p-9",
              "border border-neutral-200/90 bg-white",
              "shadow-[0_18px_40px_rgba(15,23,42,0.08)]",
            )}
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-labotur-azul/10 blur-3xl" />
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-labotur-laranja">
                Quem somos
              </span>
              <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
                Sobre a Labotur
              </h2>
            </div>

            <p className="relative text-base leading-relaxed text-neutral-700">
              A Labotur é a Empresa Júnior do curso de Turismo da Universidade
              Federal do Maranhão (UFMA). Somos uma associação sem fins
              lucrativos, formada e gerida por estudantes, que conecta a prática
              profissional às demandas reais do mercado.
            </p>

            <p className="relative text-base leading-relaxed text-neutral-700">
              Nosso objetivo é desenvolver o turismo local e regional enquanto
              formamos profissionais qualificados para o setor. Atuamos como um
              laboratório de lideranças para o turismo maranhense.
            </p>

            <div
              className={clsx(
                "relative mt-1 flex items-center gap-4 rounded-2xl p-5",
                "border border-labotur-azul/20 bg-linear-to-r from-labotur-azul/8 to-labotur-azul/3",
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

        <AnimatedSection delay={0.15} className="md:col-span-5">
          <ul className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item.title}
                className={clsx(
                  "group flex flex-col gap-3 rounded-2xl p-5",
                  "border border-neutral-200/90 bg-white",
                  "shadow-[0_8px_22px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-labotur-azul/30 hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]",
                )}
              >
                <span className="h-1 w-10 rounded-full bg-labotur-laranja/85 transition-all duration-200 group-hover:w-14" />
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
