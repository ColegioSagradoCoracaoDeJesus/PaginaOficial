import React from 'react'
import Image from 'next/image'
import {
  Laptop,
  Smartphone,
  ExternalLink,
  Download,
  HelpCircle,
  MessageSquare,
  Users,
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Info,
  ShieldCheck,
} from 'lucide-react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { Botao } from '@/components/ui/Botao'
import { BlocoCTA } from '@/components/conteudo/BlocoCTA'
import { getPaginaTecnologia, getSiteSettings, PlataformaAppItem } from '@/lib/sanity/queries'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Portal do Aluno & Plataformas Digitais | Aplicativos Oficiais',
  description: 'Acesse o Diário Escola (Pais e Mestres), Plataforma Iônica e ecossistema de aprendizagem do Colégio Sagrado Coração de Jesus. Links para Web, Play Store e App Store.',
}

function getAppIcon(type?: string) {
  switch (type?.toLowerCase()) {
    case 'laptop':
      return <Laptop className="w-7 h-7 text-[#D97706]" />
    case 'users':
      return <Users className="w-7 h-7 text-indigo-600" />
    case 'graduationcap':
      return <GraduationCap className="w-7 h-7 text-blue-600" />
    case 'bookopen':
      return <BookOpen className="w-7 h-7 text-amber-600" />
    case 'smartphone':
    default:
      return <Smartphone className="w-7 h-7 text-emerald-600" />
  }
}

export default async function TecnologiaEducacionalPage() {
  const data = await getPaginaTecnologia()
  const settings = await getSiteSettings()

  const tituloBanner = data?.titulo || 'Portal do Aluno & Plataformas Digitais'
  const subtituloBanner = data?.subtitulo || 'Acesse os aplicativos oficiais de comunicação escolar, materiais didáticos e ambiente virtual de aprendizagem utilizados pelo Sagrado.'
  const avisoTransparencia = data?.avisoTransparencia || 'O Colégio Sagrado Coração de Jesus utiliza e homologa essas plataformas especializadas de gestão e material didático para garantir segurança, acompanhamento pedagógico e comunicação eficiente com toda a comunidade escolar.'
  const textoSuporteWhats = data?.textoSuporteWhats || 'Dúvidas com usuário, primeiro acesso ou redefinição de senha? Fale diretamente com a Secretaria pelo WhatsApp oficial.'

  const fallbackPlataformas: PlataformaAppItem[] = [
    {
      nome: 'Diário Escola — Pais & Responsáveis (Ensino Fundamental)',
      publicoAlvo: 'Pais do 1º ao 9º Ano e Ensino Médio',
      descricao: 'Aplicativo para acompanhamento de notas, comunicados, tarefas de casa, ocorrências pedagógicas e canal direto com a coordenação.',
      linkWeb: 'https://diarioescola.com.br',
      linkPlayStore: 'https://play.google.com/store/search?q=diario%20escola&c=apps',
      linkAppStore: 'https://apps.apple.com/br/app/di%C3%A1rio-escola/id1111956637',
      iconeTipo: 'Smartphone',
      recursos: [
        'Avisos e circulares oficiais em tempo real',
        'Registro de notas, faltas e tarefas',
        'Mensagens diretas com a coordenação',
      ],
      ordem: 1,
      ativo: true,
    },
    {
      nome: 'Diário Escola — Pais & Responsáveis (Educação Infantil)',
      publicoAlvo: 'Famílias da Educação Infantil (Maternal ao Nível V)',
      descricao: 'Agenda digital diária para acompanhamento da rotina, alimentação, sono, momentos de recreação e recados dos professores.',
      linkWeb: 'https://diarioescola.com.br',
      linkPlayStore: 'https://play.google.com/store/search?q=diario%20escola&c=apps',
      linkAppStore: 'https://apps.apple.com/br/app/di%C3%A1rio-escola/id1111956637',
      iconeTipo: 'Smartphone',
      recursos: [
        'Relatório diário de rotina e alimentação',
        'Galeria de fotos das atividades pedagógicas',
        'Autorizações de saída e recados rápidos',
      ],
      ordem: 2,
      ativo: true,
    },
    {
      nome: 'Diário Escola — Mestres & Professores (Ensino Fundamental)',
      publicoAlvo: 'Corpo Docente do Ensino Fundamental e Médio',
      descricao: 'Painel do educador para lançamento de frequência, avaliações, planos de aula e envio de comunicados.',
      linkWeb: 'https://diarioescola.com.br',
      linkPlayStore: 'https://play.google.com/store/search?q=diario%20escola%20professor&c=apps',
      linkAppStore: 'https://apps.apple.com/br/app/di%C3%A1rio-escola-professor/id1453229864',
      iconeTipo: 'Users',
      recursos: [
        'Chamada e registro de faltas online',
        'Lançamento de notas e descritivos',
        'Planejamento de conteúdos curriculares',
      ],
      ordem: 3,
      ativo: true,
    },
    {
      nome: 'Diário Escola — Mestres & Educadores (Educação Infantil)',
      publicoAlvo: 'Professores e Monitoras da Educação Infantil',
      descricao: 'Ferramenta de registro em tempo real das vivências, alimentação e relatórios de desenvolvimento infantil.',
      linkWeb: 'https://diarioescola.com.br',
      linkPlayStore: 'https://play.google.com/store/search?q=diario%20escola%20professor&c=apps',
      linkAppStore: 'https://apps.apple.com/br/app/di%C3%A1rio-escola-professor/id1453229864',
      iconeTipo: 'Users',
      recursos: [
        'Registro de rotina diária das turmas',
        'Envio de fotos e registros do dia a dia',
        'Comunicação direta com as famílias',
      ],
      ordem: 4,
      ativo: true,
    },
    {
      nome: 'Plataforma Iônica (FTD Educação)',
      publicoAlvo: 'Alunos, Pais e Professores (Ensino Fundamental e Médio)',
      descricao: 'Ambiente virtual oficial da FTD Educação para livros didáticos digitais, trilhas de aprendizagem e simulados.',
      linkWeb: 'https://p21-ionica.com.br',
      linkPlayStore: 'https://play.google.com/store/apps/details?id=br.com.ftd.ionica',
      linkAppStore: 'https://apps.apple.com/br/app/i%C3%B4nica/id1527783965',
      iconeTipo: 'Laptop',
      recursos: [
        'Livros didáticos digitais completos da FTD',
        'Simulados e atividades complementares',
        'Acesso online pelo computador ou app no celular',
      ],
      ordem: 5,
      ativo: true,
    },
  ]

  const plataformasAtivas = data?.plataformas && data.plataformas.length > 0
    ? data.plataformas.filter((p) => p.ativo !== false)
    : fallbackPlataformas

  const whatsappNum = settings.whatsapp ? settings.whatsapp.replace(/\D/g, '') : '555332325531'

  return (
    <div>
      <MigalhaDePao items={[{ label: 'Portal do Aluno & Plataformas' }]} />

      {/* Header Banner */}
      <section className="bg-[#1E3A5F] text-white py-16 px-4">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <Etiqueta variant="anniversary">Acesso a Plataformas & Aplicativos</Etiqueta>
          <h1 className="font-display text-h1 font-bold text-white">{tituloBanner}</h1>
          <p className="text-slate-200 text-body max-w-2xl mx-auto leading-relaxed">
            {subtituloBanner}
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 py-16 space-y-12">
        {/* Transparency note & WhatsApp Support Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Note */}
          <div className="lg:col-span-7 bg-amber-50/70 p-6 rounded-lg border border-amber-200 flex items-start gap-4">
            <div className="p-2 bg-amber-100 text-amber-800 rounded-md shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-amber-900 text-sm">Transparência & Utilização de Ferramentas</h4>
              <p className="text-amber-800 text-xs leading-relaxed">{avisoTransparencia}</p>
            </div>
          </div>

          {/* WhatsApp Support Box */}
          <div className="lg:col-span-5 bg-[#152A47] text-white p-6 rounded-lg border border-slate-700 shadow-md flex flex-col justify-between space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-md shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-white">Suporte com Login ou Senha?</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{textoSuporteWhats}</p>
              </div>
            </div>

            <Botao
              href={`https://wa.me/${whatsappNum}?text=${encodeURIComponent('Olá! Preciso de ajuda com o acesso ao aplicativo/portal do Sagrado.')}`}
              external
              variant="accent"
              size="sm"
              fullWidth
            >
              <MessageSquare className="w-4 h-4 text-emerald-900" />
              <span>Chamar Secretaria no WhatsApp</span>
            </Botao>
          </div>
        </div>

        {/* Dynamic App & Platform Cards Grid */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="font-display font-bold text-2xl text-slate-900">Aplicativos e Plataformas Disponíveis</h2>
            <p className="text-slate-600 text-sm mt-1">Escolha como deseja acessar: online pelo navegador do computador ou baixando o app no seu smartphone.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plataformasAtivas.map((p, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border-2 border-slate-200 hover:border-[#1E3A5F] shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Top header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                      {getAppIcon(p.iconeTipo)}
                    </div>
                    {p.publicoAlvo && (
                      <span className="text-[11px] font-semibold text-[#1E3A5F] bg-[#1E3A5F]/10 px-2.5 py-1 rounded-full text-right">
                        {p.publicoAlvo}
                      </span>
                    )}
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 leading-snug">{p.nome}</h3>
                    {p.descricao && (
                      <p className="text-slate-600 text-xs mt-2 leading-relaxed">{p.descricao}</p>
                    )}
                  </div>

                  {/* Features */}
                  {p.recursos && p.recursos.length > 0 && (
                    <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                      {p.recursos.map((rec, rIdx) => (
                        <li key={rIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-2 pt-4 border-t border-slate-200">
                  {p.linkWeb && (
                    <Botao href={p.linkWeb} external variant="primary" size="sm" fullWidth>
                      <span>Acessar Online (Web / PC)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Botao>
                  )}

                  <div className="grid grid-cols-2 gap-2">
                    {p.linkPlayStore && (
                      <Botao href={p.linkPlayStore} external variant="outline" size="sm" className="text-xs px-2 py-1.5">
                        <Download className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Google Play</span>
                      </Botao>
                    )}

                    {p.linkAppStore && (
                      <Botao href={p.linkAppStore} external variant="outline" size="sm" className="text-xs px-2 py-1.5">
                        <Download className="w-3.5 h-3.5 text-slate-800" />
                        <span>App Store</span>
                      </Botao>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <BlocoCTA />
      </div>
    </div>
  )
}

