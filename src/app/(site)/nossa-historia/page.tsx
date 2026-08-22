import React from 'react'
import Image from 'next/image'
import { Compass, Eye, Heart, BookOpen, Users, Building2, GraduationCap, Quote } from 'lucide-react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { ItemLinhaDoTempo } from '@/components/conteudo/ItemLinhaDoTempo'
import { GaleriaComLightbox } from '@/components/conteudo/GaleriaComLightbox'
import { BlocoCTA } from '@/components/conteudo/BlocoCTA'
import { getLinhaDoTempo, getPaginaHistoria } from '@/lib/sanity/queries'

export const metadata = {
  title: 'Nossa História e 70 Anos em Rio Grande - RS',
  description: 'Conheça a trajetória de 70 anos do Colégio Sagrado Coração de Jesus em Rio Grande - RS, com missão, visão, valores e tradição pedagógica.',
}

export default async function NossaHistoriaPage() {
  const [linhaTempo, pagina] = await Promise.all([getLinhaDoTempo(), getPaginaHistoria()])
  const fotosHistoricas = pagina.fotosHistoricas

  return (
    <div>
      <MigalhaDePao items={[{ label: 'Nossa História' }]} />

      {/* Header Banner */}
      <section className="bg-brand text-white py-16 px-4">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <Etiqueta variant="anniversary">Jubileu de Vinho (1956 - 2026)</Etiqueta>
          <h1 className="font-display text-h1 font-bold text-white">{pagina.tituloBanner}</h1>
          <p className="text-slate-200 text-body max-w-2xl mx-auto leading-relaxed">
            {pagina.subtituloBanner}
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 py-16 space-y-20">
        {/* Institutional Text */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-h2 font-bold text-slate-900">
              {pagina.tituloSecao}
            </h2>
            <p className="text-slate-600 text-body leading-relaxed">
              {pagina.textoInstitucional1}
            </p>
            <p className="text-slate-600 text-body leading-relaxed">
              {pagina.textoInstitucional2}
            </p>
          </div>

          <div className="lg:col-span-6 relative h-[380px] rounded-md overflow-hidden shadow-xl border-4 border-[#B8860B]/30">
            {pagina.imagemDestaqueUrl && (
              <Image
                src={pagina.imagemDestaqueUrl}
                alt="Alunos e fachada do Colégio Sagrado Coração de Jesus"
                fill
                className="object-cover"
              />
            )}
          </div>
        </section>

        {/* Philosophy */}
        <section className="bg-white border border-slate-200 rounded-md shadow-sm px-6 py-10 md:px-16 md:py-12">
          <div className="max-w-prose mx-auto text-center space-y-5">
            <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center mx-auto shadow">
              <Quote className="w-6 h-6 text-amber-400" />
            </div>
            <h2 className="font-display text-h2 font-bold text-slate-900">Nossa Filosofia</h2>
            <p className="text-slate-600 text-body-lead leading-relaxed">
              {pagina.filosofiaTexto1}
            </p>
            <p className="text-slate-600 text-body leading-relaxed">
              {pagina.filosofiaTexto2}
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-md border border-slate-200 shadow-sm hover:shadow-md transition-all text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-brand text-white flex items-center justify-center mx-auto shadow">
              <Compass className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900">Nossa Missão</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {pagina.missao}
            </p>
          </div>

          <div className="bg-white p-8 rounded-md border border-slate-200 shadow-sm hover:shadow-md transition-all text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-brand text-white flex items-center justify-center mx-auto shadow">
              <Eye className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900">Nossa Visão</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {pagina.visao}
            </p>
          </div>

          <div className="bg-white p-8 rounded-md border border-slate-200 shadow-sm hover:shadow-md transition-all text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-brand text-white flex items-center justify-center mx-auto shadow">
              <Heart className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900">Nossos Valores</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-1">
              {pagina.valoresIntroducao}
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-1">
              {pagina.valoresLista.map((valor) => (
                <Etiqueta key={valor} variant="brand" size="sm">{valor}</Etiqueta>
              ))}
            </div>
          </div>
        </section>

        {/* Educational Principles */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-display text-h2 font-bold text-slate-900">Como Enxergamos a Educação</h2>
            <p className="text-slate-600 text-body">
              Os princípios que orientam nossa prática pedagógica no dia a dia da escola.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pagina.principiosEducacionais.map((principio, idx) => {
              const Icone = [Users, BookOpen, Building2, GraduationCap, Compass][idx % 5]
              return (
                <div key={principio.titulo} className="bg-white p-6 rounded-md border border-slate-200 shadow-sm space-y-3">
                  <Icone className="w-8 h-8 text-brand" />
                  <h3 className="font-display font-bold text-base text-slate-900">{principio.titulo}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {principio.descricao}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Etiqueta variant="anniversary">Linha do Tempo</Etiqueta>
            <h2 className="font-display text-h1 font-bold text-slate-900">Marcos Históricos dos 70 Anos</h2>
            <p className="text-slate-600 text-body">
              Relembre os momentos emblemáticos que construíram a nossa história de 1956 até hoje.
            </p>
          </div>

          <div className="relative border-l-2 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:-translate-x-1/2 md:before:w-1 md:before:h-full md:before:bg-brand/20">
            {linhaTempo.map((item, idx) => (
              <ItemLinhaDoTempo key={item._id} item={item} isEven={idx % 2 === 0} />
            ))}
          </div>
        </section>

        {/* Photo Gallery (RF03 / RF12) */}
        <section className="space-y-6">
          <div className="border-b pb-4">
            <h2 className="font-display text-h2 font-bold text-slate-900">Galeria Histórica e Atual</h2>
            <p className="text-slate-600 text-sm">Registros fotográficos da evolução física e da comunidade escolar do Sagrado.</p>
          </div>
          <GaleriaComLightbox fotos={fotosHistoricas} />
        </section>

        <BlocoCTA />
      </div>
    </div>
  )
}
