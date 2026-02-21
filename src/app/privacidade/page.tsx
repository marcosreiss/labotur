// src/app/privacidade/page.tsx
import type { Metadata } from "next"
import clsx from "clsx"

export const metadata: Metadata = {
    title: "Política de Privacidade — Labotur",
    description:
        "Saiba como a Labotur coleta, usa e protege seus dados pessoais em conformidade com a LGPD.",
}

const sections = [
    {
        content:
            "A Labotur — Empresa Júnior de Turismo da UFMA — está comprometida com a proteção dos seus dados pessoais. Esta política descreve como coletamos, usamos e protegemos as informações fornecidas por meio do nosso site, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).",
        title: "Sobre esta política",
    },
    {
        content:
            "Coletamos apenas os dados fornecidos voluntariamente por você por meio do formulário de contato: nome, e-mail, nome da organização e mensagem. Esses dados são utilizados exclusivamente para responder à sua solicitação e dar andamento a um eventual projeto ou consultoria.",
        title: "Dados coletados",
    },
    {
        content:
            "Suas informações são utilizadas somente para as finalidades informadas no momento da coleta. Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais. O acesso é restrito aos membros da Labotur responsáveis pelo atendimento.",
        title: "Uso das informações",
    },
    {
        content:
            "Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda ou divulgação indevida. Os dados coletados são armazenados em ambiente seguro e acessados somente por pessoas autorizadas.",
        title: "Segurança",
    },
    {
        content:
            "Você pode, a qualquer momento, solicitar acesso, correção ou exclusão dos seus dados pessoais que estejam em nossa posse. Para exercer esses direitos, entre em contato pelo e-mail atendimento.labotur@gmail.com.",
        title: "Seus direitos",
    },
    {
        content:
            "Podemos atualizar esta política periodicamente. Alterações relevantes serão comunicadas por meio do nosso site ou redes sociais. Recomendamos a leitura periódica desta página.",
        title: "Alterações nesta política",
    },
    {
        content:
            "Em caso de dúvidas sobre esta política ou sobre o tratamento dos seus dados, entre em contato:\n\nE-mail: atendimento.labotur@gmail.com\nInstagram: @ejlabotur\nLocalização: Complexo Fábrica Santa Amélia, Centro — São Luís, MA",
        title: "Contato",
    },
]

export default function PrivacidadePage() {
    return (
        <main className="min-h-screen bg-white">

            {/* Hero */}
            <div className="bg-linear-to-br from-labotur-azul-escuro to-labotur-azul px-6 pb-20 pt-32">
                <div className="mx-auto max-w-3xl flex flex-col gap-4">
                    <a
                        href="/"
                        className={clsx(
                            "w-fit text-sm font-medium text-white/50",
                            "transition-colors hover:text-white"
                        )}
                    >
                        ← Voltar para o início
                    </a>
                    <span className="text-xs font-semibold uppercase tracking-widest text-labotur-laranja">
                        Transparência
                    </span>
                    <h1 className="text-3xl font-bold text-white md:text-4xl">
                        Política de Privacidade
                    </h1>
                    <p className="max-w-xl text-base text-white/60">
                        Saiba como coletamos, usamos e protegemos seus dados em conformidade
                        com a LGPD.
                    </p>
                    <span className="text-xs text-white/30">
                        Última atualização: fevereiro de 2026
                    </span>
                </div>
            </div>

            {/* Conteúdo */}
            <div className="mx-auto max-w-3xl px-6 py-16">
                <div className="flex flex-col gap-1">
                    {sections.map((section, index) => (
                        <div
                            key={section.title}
                            className={clsx(
                                "flex flex-col gap-3 py-8",
                                index < sections.length - 1 && "border-b border-neutral-200"
                            )}
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    className={clsx(
                                        "flex size-7 shrink-0 items-center justify-center rounded-full",
                                        "bg-labotur-laranja text-white",
                                        "text-xs font-bold"
                                    )}
                                >
                                    {index + 1}
                                </span>
                                <h2 className="text-base font-semibold text-neutral-900">
                                    {section.title}
                                </h2>
                            </div>
                            <p className="whitespace-pre-line pl-10 text-sm leading-relaxed text-neutral-700">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Rodapé */}
                <div
                    className={clsx(
                        "mt-12 rounded-2xl p-6",
                        "border border-neutral-200 bg-neutral-100"
                    )}
                >
                    <p className="text-xs text-neutral-700">
                        © {new Date().getFullYear()} Labotur — Empresa Júnior de Turismo
                        da UFMA. Todos os direitos reservados.
                    </p>
                </div>
            </div>

        </main>
    )
}
