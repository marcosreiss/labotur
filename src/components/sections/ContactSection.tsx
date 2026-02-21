// src/components/sections/ContactSection.tsx
"use client"

import clsx from "clsx"
import { Mail, MapPin } from "lucide-react"
import { useState } from "react"

import AnimatedSection from "@/components/ui/AnimatedSection"
import SectionWrapper from "@/components/ui/SectionWrapper"

interface FormState {
  email: string
  message: string
  name: string
  organization: string
}

const initialState: FormState = {
  email: "",
  message: "",
  name: "",
  organization: "",
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState)
  const [sent, setSent] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: integrar com endpoint real
    setSent(true)
    setForm(initialState)
  }

  return (
    <div className="bg-neutral-100">
      <SectionWrapper id="contato">
        <AnimatedSection>
          <div className="mb-12 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-labotur-laranja">
              Fale conosco
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
              Solicite um orçamento
            </h2>
            <p className="max-w-xl text-base text-neutral-700">
              Preencha o formulário e entraremos em contato para entender sua
              demanda.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
          {/* Formulário */}
          <AnimatedSection delay={0.1}>
            {sent ? (
              <div
                className={clsx(
                  "flex flex-col gap-3 rounded-2xl p-8",
                  "border border-labotur-azul/20 bg-labotur-azul/5",
                  "text-center",
                )}
              >
                <span className="text-2xl">✅</span>
                <p className="font-semibold text-neutral-900">
                  Mensagem enviada!
                </p>
                <p className="text-sm text-neutral-700">
                  Em breve nossa equipe entrará em contato.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-2 text-sm font-medium text-labotur-azul underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium text-neutral-700"
                    >
                      Nome *
                    </label>
                    <input
                      required
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className={clsx(
                        "rounded-lg border border-neutral-200 bg-white px-4 py-2.5",
                        "text-sm text-neutral-900 placeholder:text-neutral-700/50",
                        "outline-none focus:border-labotur-azul",
                      )}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="organization"
                      className="text-xs font-medium text-neutral-700"
                    >
                      Organização
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      value={form.organization}
                      onChange={handleChange}
                      placeholder="Empresa ou prefeitura"
                      className={clsx(
                        "rounded-lg border border-neutral-200 bg-white px-4 py-2.5",
                        "text-sm text-neutral-900 placeholder:text-neutral-700/50",
                        "outline-none focus:border-labotur-azul",
                      )}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-neutral-700"
                  >
                    E-mail *
                  </label>
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className={clsx(
                      "rounded-lg border border-neutral-200 bg-white px-4 py-2.5",
                      "text-sm text-neutral-900 placeholder:text-neutral-700/50",
                      "outline-none focus:border-labotur-azul",
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium text-neutral-700"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Descreva brevemente sua demanda..."
                    className={clsx(
                      "resize-none rounded-lg border border-neutral-200 bg-white px-4 py-2.5",
                      "text-sm text-neutral-900 placeholder:text-neutral-700/50",
                      "outline-none focus:border-labotur-azul",
                    )}
                  />
                </div>

                <button
                  type="submit"
                  className={clsx(
                    "rounded-lg px-6 py-3",
                    "bg-labotur-laranja text-white",
                    "text-sm font-semibold",
                    "transition-opacity hover:opacity-90",
                  )}
                >
                  Enviar mensagem
                </button>
              </form>
            )}
          </AnimatedSection>

          {/* Informações de contato */}
          <AnimatedSection delay={0.2}>
            <ul className="flex flex-col gap-6">
              <li className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-labotur-azul">
                  <Mail size={16} />
                  <span className="text-xs font-semibold uppercase tracking-widest">
                    E-mail
                  </span>
                </div>
                <a
                  href="mailto:atendimento.labotur@gmail.com"
                  className="text-sm text-neutral-700 transition-colors hover:text-labotur-azul"
                >
                  atendimento.labotur@gmail.com
                </a>
              </li>

              <li className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-labotur-azul">
                  <MapPin size={16} />
                  <span className="text-xs font-semibold uppercase tracking-widest">
                    Localização
                  </span>
                </div>
                <p className="text-sm text-neutral-700">
                  Complexo Fábrica Santa Amélia
                  <br />
                  Centro — São Luís, MA
                </p>
              </li>

              <li
                className={clsx(
                  "flex flex-col gap-2 rounded-2xl p-5",
                  "border border-neutral-200 bg-white",
                )}
              >
                <p className="text-sm font-semibold text-neutral-900">
                  Prefere pelo Instagram?
                </p>
                <p className="text-sm text-neutral-700">
                  Nos chame diretamente pelo direct.
                </p>
                <a
                  href="https://instagram.com/ejlabotur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "w-fit rounded-lg px-4 py-2",
                    "border border-labotur-azul text-labotur-azul",
                    "text-sm font-semibold",
                    "transition-colors hover:bg-labotur-azul hover:text-white",
                  )}
                >
                  @ejlabotur
                </a>
              </li>
            </ul>
          </AnimatedSection>
        </div>
      </SectionWrapper>
    </div>
  )
}
