// src/components/sections/ContactSection.tsx
"use client"

import clsx from "clsx"
import { CircleCheckBig, Mail, MapPin } from "lucide-react"
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

  const fieldClassName = clsx(
    "rounded-xl border border-neutral-200/90 bg-white px-4 py-2.5",
    "text-sm text-neutral-900 placeholder:text-neutral-700/50",
    "outline-none transition-all focus:border-labotur-azul focus:ring-2 focus:ring-labotur-azul/15",
  )

  return (
    <div className="bg-transparent">
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start">
          <AnimatedSection delay={0.1} className="md:col-span-7">
            {sent ? (
              <div
                className={clsx(
                  "flex flex-col items-center gap-3 rounded-3xl p-8 md:p-10",
                  "border border-labotur-azul/20 bg-white text-center",
                  "shadow-[0_18px_40px_rgba(15,23,42,0.08)]",
                )}
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-labotur-azul/10 text-labotur-azul">
                  <CircleCheckBig size={22} />
                </div>
                <p className="font-semibold text-neutral-900">
                  Mensagem enviada!
                </p>
                <p className="text-sm text-neutral-700">
                  Em breve nossa equipe entrará em contato.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-2 text-sm font-medium text-labotur-azul underline underline-offset-4"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={clsx(
                  "flex flex-col gap-4 rounded-3xl border border-neutral-200/90 bg-white p-6 md:p-8",
                  "shadow-[0_18px_40px_rgba(15,23,42,0.08)]",
                )}
              >
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
                      className={fieldClassName}
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
                      className={fieldClassName}
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
                    className={fieldClassName}
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
                    className={clsx("resize-none", fieldClassName)}
                  />
                </div>

                <button
                  type="submit"
                  className={clsx(
                    "rounded-xl px-6 py-3",
                    "bg-labotur-laranja text-white",
                    "text-sm font-semibold",
                    "shadow-sm transition-all hover:-translate-y-0.5 hover:opacity-90",
                  )}
                >
                  Enviar mensagem
                </button>
              </form>
            )}
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="md:col-span-5">
            <ul
              className={clsx(
                "flex flex-col gap-4 rounded-3xl border border-neutral-200/90 bg-white p-6 md:p-7",
                "shadow-[0_18px_40px_rgba(15,23,42,0.08)]",
              )}
            >
              <li className="flex flex-col gap-2 rounded-2xl border border-neutral-200/90 bg-slate-50/60 p-4">
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

              <li className="flex flex-col gap-2 rounded-2xl border border-neutral-200/90 bg-slate-50/60 p-4">
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
                    "w-fit rounded-xl px-4 py-2",
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
