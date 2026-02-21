import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Labotur — A Primeira Empresa Júnior de Turismo do Brasil",
  description:
    "A Labotur é a Empresa Júnior do curso de Turismo da UFMA. Oferecemos consultoria, planejamento turístico, organização de eventos e pesquisas de mercado a preços acessíveis.",
  keywords: [
    "empresa júnior",
    "turismo",
    "UFMA",
    "São Luís",
    "Maranhão",
    "consultoria turística",
    "planejamento turístico",
    "organização de eventos",
  ],
  authors: [{ name: "Labotur — EJ Turismo UFMA" }],
  openGraph: {
    title: "Labotur — A Primeira Empresa Júnior de Turismo do Brasil",
    description:
      "Consultoria, planejamento turístico e organização de eventos com supervisão acadêmica e preços acessíveis.",
    url: "https://ejlabotur.com.br",
    siteName: "Labotur",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Labotur — EJ de Turismo da UFMA",
    description:
      "A primeira empresa júnior de turismo do Brasil. Soluções acessíveis com base acadêmica.",
  },
  metadataBase: new URL("https://ejlabotur.com.br"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  )
}
