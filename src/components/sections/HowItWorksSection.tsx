// src/components/sections/HowItWorksSection.tsx
import AnimatedSection from "@/components/ui/AnimatedSection"
import SectionWrapper from "@/components/ui/SectionWrapper"
import StepCard from "@/components/ui/StepCard"

const steps = [
    {
        description:
            "Entre em contato pelo formulário ou pelo nosso e-mail institucional.",
        title: "Entre em contato",
    },
    {
        description:
            "Realizamos uma reunião para entender sua demanda e contexto.",
        title: "Reunião de entendimento",
    },
    {
        description:
            "Elaboramos uma proposta personalizada com escopo, prazo e valor.",
        title: "Elaboração de proposta",
    },
    {
        description:
            "Nossa equipe executa o projeto com supervisão de professores especialistas.",
        title: "Execução do projeto",
    },
]

export default function HowItWorksSection() {
    return (
        <div className="bg-neutral-100">
            <SectionWrapper id="como-funciona">
                <AnimatedSection>
                    <div className="mb-12 flex flex-col gap-3">
                        <span className="text-xs font-semibold uppercase tracking-widest text-labotur-laranja">
                            Processo
                        </span>
                        <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
                            Como funciona
                        </h2>
                        <p className="max-w-xl text-base text-neutral-700">
                            Do primeiro contato à entrega final, em 4 etapas simples.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                    <div className="relative">

                        {/* Linha conectora — visível apenas em desktop */}
                        <div
                            className="absolute left-[22px] top-[22px] hidden h-[2px] w-[calc(100%-44px)]
              bg-labotur-azul/20 md:block"
                            style={{ top: "22px" }}
                        />

                        <ul className="grid grid-cols-1 gap-10 md:grid-cols-4">
                            {steps.map((step, index) => (
                                <li key={step.title} className="relative bg-transparent">
                                    <StepCard
                                        description={step.description}
                                        step={index + 1}
                                        title={step.title}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </AnimatedSection>
            </SectionWrapper>
        </div>
    )
}
