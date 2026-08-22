import React from 'react'
import { Laptop, Smartphone, Users, ExternalLink, MessageSquare } from 'lucide-react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { Botao } from '@/components/ui/Botao'
import { BlocoCTA } from '@/components/conteudo/BlocoCTA'
import { getPaginaTecnologia, getSiteSettings } from '@/lib/sanity/queries'

export const metadata = {
  title: 'Tecnologia Educacional | Diário Escola e Plataforma Iônica',
  description: 'Conheça as plataformas digitais e ecossistema de aprendizagem da Plataforma Iônica e Diário Escola.',
}

// Ícone por identificador cadastrado no Sanity (campo iconeTipo) — com fallback
// genérico para qualquer valor não mapeado.
const iconesPorTipo: Record<string, React.ElementType> = {
  Smartphone,
  Laptop,
  Users,
}

export default async function TecnologiaEducacionalPage() {
  const [pagina, settings] = await Promise.all([getPaginaTecnologia(), getSiteSettings()])

  return (
    <div>
      <MigalhaDePao items={[{ label: 'Tecnologia Educacional' }]} />

      <section className="bg-brand text-white py-16 px-4">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <Etiqueta variant="anniversary">Ecossistema Digital</Etiqueta>
          <h1 className="font-display text-h1 font-bold text-white">{pagina.titulo}</h1>
          <p className="text-slate-200 text-body max-w-2xl mx-auto leading-relaxed">
            {pagina.subtitulo}
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 py-16 space-y-16">
        {/* Plataformas e Aplicativos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pagina.plataformas.map((plataforma) => {
            const Icone = iconesPorTipo[plataforma.iconeTipo || ''] || Smartphone
            return (
              <div key={plataforma.nome} className="bg-white p-8 rounded-lg border-2 border-slate-200 shadow-md hover:shadow-lg transition-all flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="p-3 rounded-lg border bg-amber-50 text-[#D97706] border-amber-200">
                      <Icone className="w-8 h-8" />
                    </div>
                    {plataforma.publicoAlvo && (
                      <Etiqueta variant="brand">{plataforma.publicoAlvo}</Etiqueta>
                    )}
                  </div>

                  <h2 className="font-display font-bold text-2xl text-slate-900">{plataforma.nome}</h2>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {plataforma.descricao}
                  </p>

                  {plataforma.recursos?.length > 0 && (
                    <ul className="space-y-2 text-xs text-slate-700">
                      {plataforma.recursos.map((recurso) => (
                        <li key={recurso} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                          <span>{recurso}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
                  {plataforma.linkWeb && (
                    <Botao href={plataforma.linkWeb} external variant="accent" fullWidth size="md">
                      <span>Acessar pelo Site</span>
                      <ExternalLink className="w-4 h-4" />
                    </Botao>
                  )}
                  {(plataforma.linkAppStore || plataforma.linkPlayStore) && (
                    <div className="grid grid-cols-2 gap-2">
                      {plataforma.linkAppStore && (
                        <Botao href={plataforma.linkAppStore} external variant="outline" fullWidth size="sm">
                          App Store
                        </Botao>
                      )}
                      {plataforma.linkPlayStore && (
                        <Botao href={plataforma.linkPlayStore} external variant="outline" fullWidth size="sm">
                          Play Store
                        </Botao>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Aviso de transparência */}
        <section className="bg-blue-50 p-8 rounded-lg border-l-4 border-brand space-y-4">
          <div className="space-y-3">
            <h3 className="font-display font-bold text-lg text-slate-900">💡 Nota Importante</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              {pagina.avisoTransparencia}
            </p>
          </div>

          {pagina.textoSuporteWhats && (
            <div className="pt-4 border-t border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-xs text-slate-600">{pagina.textoSuporteWhats}</p>
              <Botao href={`https://wa.me/${settings.whatsapp}`} external variant="outline" size="sm" className="shrink-0">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Falar com a Secretaria</span>
              </Botao>
            </div>
          )}
        </section>

        <BlocoCTA />
      </div>
    </div>
  )
}
