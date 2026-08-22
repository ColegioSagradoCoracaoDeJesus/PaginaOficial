import React from 'react'
import { GraduationCap, Calendar, FileCheck, Phone, CheckCircle2, MessageSquare, HelpCircle, ArrowRight } from 'lucide-react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { Botao } from '@/components/ui/Botao'
import { FormVisitaModal } from '@/components/conteudo/FormVisitaModal'
import { BlocoCTA } from '@/components/conteudo/BlocoCTA'
import { getSiteSettings, getPaginaMatriculas } from '@/lib/sanity/queries'

export const metadata = {
  title: 'Matrículas e Rematrículas 2027 | Vagas Abertas',
  description: 'Garanta a vaga do seu filho no Colégio Sagrado Coração de Jesus para o Ano Letivo 2027 em Rio Grande - RS. Documentação necessária, passo a passo e agendamento de visita.',
}

export default async function MatriculasPage() {
  const [settings, pagina] = await Promise.all([getSiteSettings(), getPaginaMatriculas()])
  const passosMatricula = pagina.passos
  const documentosNecessarios = pagina.documentosNecessarios
  const faqMatriculas = pagina.faq

  return (
    <div>
      <MigalhaDePao items={[{ label: 'Matrículas & Rematrículas 2027' }]} />

      <section className="bg-brand text-white py-16 px-4">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <Etiqueta variant="anniversary">{pagina.etiquetaBanner}</Etiqueta>
          <h1 className="font-display text-h1 font-bold text-white">{pagina.tituloBanner}</h1>
          <p className="text-slate-200 text-body max-w-2xl mx-auto leading-relaxed">
            {pagina.subtituloBanner}
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 py-16 space-y-16">
        {/* Step by step */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Etiqueta variant="brand">Passo a Passo</Etiqueta>
            <h2 className="font-display text-h2 font-bold text-slate-900">Como Funciona o Processo de Matrícula</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {passosMatricula.map((p, idx) => (
              <div key={idx} className="bg-white p-6 rounded-md border border-slate-200 shadow-sm relative space-y-3">
                <span className="font-display font-bold text-3xl text-[#D97706]">{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="font-display font-bold text-lg text-slate-900">{p.titulo}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{p.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Documentation checklist & Agende Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 bg-slate-50 p-8 rounded-lg border border-slate-200 space-y-6">
            <div className="space-y-2">
              <Etiqueta variant="brand">Documentação Exigida</Etiqueta>
              <h3 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-brand" />
                <span>Documentos para Matrícula</span>
              </h3>
            </div>

            <ul className="space-y-3 text-xs text-slate-700">
              {documentosNecessarios.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white p-3 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Botao href={`https://wa.me/${settings.whatsapp}`} external variant="outline" fullWidth size="md">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Tirar dúvidas sobre documentos</span>
              </Botao>
            </div>
          </div>

          <div className="lg:col-span-7">
            <FormVisitaModal />
          </div>
        </div>

        {/* FAQ Section */}
        <section className="space-y-6 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <Etiqueta variant="brand">Perguntas Frequentes</Etiqueta>
            <h2 className="font-display text-h2 font-bold text-slate-900">Dúvidas Comuns sobre Matrículas</h2>
          </div>

          <div className="space-y-4">
            {faqMatriculas.map((faq, idx) => (
              <div key={idx} className="bg-white p-5 rounded-md border border-slate-200 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>{faq.pergunta}</span>
                </h3>
                <p className="text-slate-600 text-sm pl-6 leading-relaxed">{faq.resposta}</p>
              </div>
            ))}
          </div>
        </section>

        <BlocoCTA />
      </div>
    </div>
  )
}
