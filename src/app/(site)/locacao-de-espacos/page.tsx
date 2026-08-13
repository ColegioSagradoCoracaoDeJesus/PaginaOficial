import React from 'react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { LocacaoContent } from '@/components/conteudo/LocacaoContent'
import { getEspacosLocacao } from '@/lib/sanity/queries'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Locação de Espaços | Ginásio e Auditório',
  description: 'Conheça nossos espaços para eventos esportivos, culturais, formaturas e palestras no Colégio Sagrado Coração de Jesus.',
}

export default async function LocacaoDeEspacosPage() {
  const espacos = await getEspacosLocacao()

  return (
    <div>
      <MigalhaDePao items={[{ label: 'Locação de Espaços' }]} />

      <section className="bg-[#1E3A5F] text-white py-16 px-4">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <Etiqueta variant="anniversary">Infraestrutura Multiuso</Etiqueta>
          <h1 className="font-display text-h1 font-bold text-white">Locação de Ginásio & Auditório</h1>
          <p className="text-slate-200 text-body max-w-2xl mx-auto leading-relaxed">
            Estruturas completas para campeonatos esportivos, formaturas, convenções corporativas, apresentações artísticas e palestras.
          </p>
        </div>
      </section>

      <LocacaoContent espacos={espacos} />
    </div>
  )
}
