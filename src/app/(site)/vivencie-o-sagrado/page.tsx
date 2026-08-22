import React from 'react'
import Image from 'next/image'
import { Heart, Sun, Users, BookOpen, Music, Shield, Sparkles } from 'lucide-react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { BlocoCTA } from '@/components/conteudo/BlocoCTA'
import { getPaginaVivencie } from '@/lib/sanity/queries'

export const metadata = {
  title: 'Vivencie o Sagrado | Vida Escolar e Pastoral',
  description: 'Conheça o dia a dia, projetos pastorais, convivência comunitária e rotina acolhedora do Colégio Sagrado Coração de Jesus.',
}

// Ícone por posição do cartão (a ordem dos 4 pilares no Sanity define qual ícone usa).
const iconesPilares = [Heart, Users, Music, Sun]

export default async function VivencieOSagradoPage() {
  const pagina = await getPaginaVivencie()

  return (
    <div>
      <MigalhaDePao items={[{ label: 'Vivencie o Sagrado' }]} />

      <section className="bg-brand text-white py-16 px-4">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <Etiqueta variant="anniversary">Vida em Comunidade</Etiqueta>
          <h1 className="font-display text-h1 font-bold text-white">{pagina.tituloBanner}</h1>
          <p className="text-slate-200 text-body max-w-2xl mx-auto leading-relaxed">
            {pagina.subtituloBanner}
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 py-16 space-y-16">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="font-display text-h2 font-bold text-slate-900">
              {pagina.tituloIntroducao}
            </h2>
            <p className="text-slate-600 text-body leading-relaxed">
              {pagina.textoIntroducao1}
            </p>
            <p className="text-slate-600 text-body leading-relaxed">
              {pagina.textoIntroducao2}
            </p>
          </div>

          <div className="lg:col-span-6 relative h-80 rounded-md overflow-hidden shadow-lg border-2 border-slate-200">
            {pagina.imagemIntroducaoUrl && (
              <Image
                src={pagina.imagemIntroducaoUrl}
                alt="Alunos convivendo no pátio do colégio"
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>

        {/* Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pagina.pilares.map((p, idx) => {
            const Icone = iconesPilares[idx % iconesPilares.length]
            return (
              <div key={p.titulo} className="bg-white p-6 rounded-md border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4">
                <div className="w-14 h-14 rounded-lg bg-amber-50 flex items-center justify-center border border-amber-200">
                  <Icone className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">{p.titulo}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.descricao}</p>
              </div>
            )
          })}
        </div>

        <BlocoCTA />
      </div>
    </div>
  )
}
