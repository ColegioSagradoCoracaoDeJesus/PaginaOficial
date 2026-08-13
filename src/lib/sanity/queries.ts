import { client, projectId } from './client'

export interface SiteSettings {
  title: string
  telefones: string[]
  whatsapp: string
  email: string
  emailVisita: string
  emailLocacao: string
  endereco: string
  linkMapaEmbed: string
  horarioAtendimento: string
  logoUrl?: string
  redesSociais: {
    instagram?: string
    facebook?: string
    youtube?: string
  }
}

export interface Noticia {
  _id: string
  titulo: string
  slug: { current: string }
  data: string
  categoria: string
  resumo: string
  imagemCapa?: any
  imageUrl?: string
  corpo?: any
  destaque?: boolean
  autorizacaoImagemConfirmada?: boolean
}

export interface GaleriaMes {
  _id: string
  titulo: string
  mes: string
  ano: number
  descricao: string
  fotos: Array<{
    url?: string
    asset?: any
    descricao?: string
    alt: string
  }>
}

export interface Diferencial {
  _id: string
  titulo: string
  icone: string
  textoCurto: string
  ordem: number
}

export interface ModalidadeEnsino {
  _id: string
  nome: string
  slug: { current: string }
  faixaEtaria: string
  resumo: string
  objetivos: string[]
  metodologia: string
  diferenciais: string[]
  projetos: Array<{ nome: string; descricao: string }>
  imageUrl?: string
}

export interface EspacoLocacao {
  _id: string
  nome: string
  capacidade: string
  descricao: string
  itensDisponiveis: string[]
  usosPossiveis: string[]
  condicoesGerais: string
  imageUrl?: string
}

export interface LinhaDoTempoItem {
  _id: string
  ano: string
  titulo: string
  descricao: string
  imageUrl?: string
  ordem: number
}

export interface Depoimento70Anos {
  _id: string
  nome: string
  relacao: string
  texto: string
  imageUrl?: string
}

export interface AmbienteEstrutura {
  _id: string
  ambiente: string
  descricao: string
  fotos: Array<{ url?: string; alt: string; legenda?: string }>
}

// AUTHENTIC DEFAULT SITE SETTINGS (RIO GRANDE - RS)
export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  title: 'Colégio Sagrado Coração de Jesus',
  telefones: ['(53) 3232-5531'],
  whatsapp: '555332325531',
  email: 'secretariacolegiosagrado@gmail.com',
  emailVisita: 'secretariacolegiosagrado@gmail.com',
  emailLocacao: 'secretariacolegiosagrado@gmail.com',
  endereco: 'Rua Doutor Augusto Duprat, 374 - Cidade Nova, Rio Grande - RS, CEP 96211-058',
  linkMapaEmbed: 'https://maps.google.com/maps?q=Rua+Doutor+Augusto+Duprat,+374+-+Cidade+Nova,+Rio+Grande+-+RS,+96211-058&t=&z=16&ie=UTF8&iwloc=&output=embed',
  horarioAtendimento: 'Segunda a Sexta, das 07h30 às 17h30',
  redesSociais: {
    instagram: 'https://instagram.com/colegiosagradocoracao',
    facebook: 'https://facebook.com/colegiosagradocoracao',
    youtube: 'https://youtube.com/@colegiosagradocoracao',
  },
}

export const DEFAULT_MODALIDADES: ModalidadeEnsino[] = [
  {
    _id: 'm1',
    nome: 'Educação Infantil',
    slug: { current: 'educacao-infantil' },
    faixaEtaria: '2 a 5 anos (Maternal ao Infantil V)',
    resumo: 'Ambiente estimulante, seguro e acolhedor onde a criança descobre o mundo através do brincar guiado, da socialização e do desenvolvimento socioemocional.',
    objetivos: [
      'Desenvolver a autonomia, coordenação motora e expressão corporal',
      'Estimular a linguagem oral e o gosto inicial pela leitura e histórias',
      'Incentivar a convivência harmoniosa, empatia e compartilhamento',
      'Promover a curiosidade científica e o contato com a natureza'
    ],
    metodologia: 'Metodologia afetiva e investigativa, onde a criança é protagonista de suas descobertas. Utilizamos jogos pedagógicos, projetos temáticos e vivências ao ar livre.',
    diferenciais: [
      'Parque infantil exclusivo e arborizado',
      'Iniciação ao inglês de forma lúdica',
      'Acompanhamento nutricional e ambiente seguro',
      'Salas de aulas lúdicas e climatizadas'
    ],
    projetos: [
      { nome: 'Passaporte da Leitura', descricao: 'Incentivo diário ao contato com livros infantis com participação da família.' },
      { nome: 'Horta Pedagógica', descricao: 'Vivência prática sobre sustentabilidade, cultivo e alimentação saudável.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    _id: 'm2',
    nome: 'Ensino Fundamental I',
    slug: { current: 'ensino-fundamental-1' },
    faixaEtaria: '1º ao 5º ano (6 a 10 anos)',
    resumo: 'Consolidação da alfabetização, letramento matemático e raciocínio crítico em uma fase crucial para o desenvolvimento do pensamento lógico e colaborativo.',
    objetivos: [
      'Garantir a alfabetização plena e capacidade leitora crítica',
      'Construir a base matemática e o raciocínio lógico-dedutivo',
      'Desenvolver hábitos de estudo, organização e autonomia',
      'Estimular a consciência cidadã e valores éticos'
    ],
    metodologia: 'Aprendizagem significativa integrando disciplinas através de projetos interdisciplinares e resolução de problemas práticos do dia a dia.',
    diferenciais: [
      'Material Didático da FTD Educação',
      'Programa Bilíngue em parceria internacional',
      'Feiras de Ciências e Artes anuais',
      'Reforço escolar e acompanhamento individualizado'
    ],
    projetos: [
      { nome: 'Jovens Escritores', descricao: 'Produção e autoria de livros pelos próprios alunos com noite de autógrafos.' },
      { nome: 'Clube de Matemática Divertida', descricao: 'Jogos de tabuleiro e desafios lógicos estimulantes.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    _id: 'm3',
    nome: 'Ensino Fundamental II',
    slug: { current: 'ensino-fundamental-2' },
    faixaEtaria: '6º ao 9º ano (11 a 14 anos)',
    resumo: 'Aprofundamento científico, autonomia intelectual e preparação para os desafios do Ensino Médio em um período de profundas transformações interpessoais.',
    objetivos: [
      'Aprofundar os conhecimentos científicos e pensamento abstrato',
      'Estimular a responsabilidade social, liderança e protagonismo juvenil',
      'Desenvolver competências socioemocionais para a adolescência',
      'Introduzir metodologias ativas de estudo e pesquisa acadêmica'
    ],
    metodologia: 'Foco na autonomia intelectual com laboratórios práticos, debates temáticos e projetos de iniciação científica orientados por professores especialistas.',
    diferenciais: [
      'Laboratórios de Ciências equipados',
      'Olimpíadas de Conhecimento (Astronomia, Matemática, Linguagens)',
      'Acompanhamento de orientação educacional próximo aos alunos',
      'Projetos de voluntariado e pastoral escolar'
    ],
    projetos: [
      { nome: 'Mostra de Iniciação Científica', descricao: 'Pesquisa e apresentação de projetos inovadores para a comunidade escolar.' },
      { nome: 'Simulações da ONU / Debates', descricao: 'Desenvolvimento de oratória e geopolítica.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop',
  },
  {
    _id: 'm4',
    nome: 'Ensino Médio',
    slug: { current: 'ensino-medio' },
    faixaEtaria: '1ª à 3ª série (15 a 17 anos)',
    resumo: 'Excelência preparatória para os vestibulares mais concorridos e ENEM, aliada à formação ética, visão de futuro e consolidação do projeto de vida do estudante.',
    objetivos: [
      'Garantir alto rendimento no ENEM e vestibulares de excelência',
      'Consolidar a maturidade intelectual, discernimento moral e liderança',
      'Orientar o projeto de vida e escolhas profissionais com clareza',
      'Estimular o pensamento crítico diante dos desafios contemporâneos'
    ],
    metodologia: 'Itinerários formativos flexíveis, simulados diagnósticos frequentes com correção TRI (padrão ENEM) e mentoria individualizada para vestibulares de alta concorrência.',
    diferenciais: [
      'Simulados periódicos com devolutiva analítica detalhada',
      'Programa de Orientação Vocacional e Feira das Profissões',
      'Plantões de dúvidas e salas de estudo climatizadas',
      'Alto índice de aprovação nas principais universidades públicas e privadas'
    ],
    projetos: [
      { nome: 'Foco ENEM & Redação Nota Mil', descricao: 'Oficinas semanais de redação com correção personalizada.' },
      { nome: 'Mentorias de Carreira', descricao: 'Encontros com ex-alunos aprovados em Medicina, Direito, Engenharia e áreas de ponta.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
  },
]

export const DEFAULT_DIFERENCIAIS: Diferencial[] = [
  { _id: 'd1', titulo: 'Formação Humana e Valores', icone: 'Heart', textoCurto: 'Educação alicerçada no respeito, acolhimento, ética e responsabilidade social.', ordem: 1 },
  { _id: 'd2', titulo: 'Tradição dos 70 Anos', icone: 'Award', textoCurto: 'Sete décadas de história moldando cidadãos conscientes e preparados para o futuro.', ordem: 2 },
  { _id: 'd3', titulo: 'Programa Bilíngue e Global', icone: 'Globe', textoCurto: 'Imersão no idioma inglês com foco em fluência, cultura e certificações internacionais.', ordem: 3 },
  { _id: 'd4', titulo: 'Tecnologia Educacional FTD', icone: 'Cpu', textoCurto: 'Plataforma Iônica, recursos digitais e materiais de excelência da FTD Educação.', ordem: 4 },
  { _id: 'd5', titulo: 'Suporte Socioemocional', icone: 'Users', textoCurto: 'Equipe multidisciplinar de psicologia e orientação pedagógica permanente.', ordem: 5 },
  { _id: 'd6', titulo: 'Segurança e Estrutura Completa', icone: 'ShieldCheck', textoCurto: 'Monitoramento 24h, amplos espaços esportivos, auditório e ambientes climatizados.', ordem: 6 },
]

export const DEFAULT_ESPACOS: EspacoLocacao[] = [
  {
    _id: 'e1',
    nome: 'Ginásio Poliesportivo Sagrado',
    capacidade: 'Até 1.200 pessoas (arquibancadas e quadra)',
    descricao: 'Espaço multieventos coberto com piso esportivo oficial, tabela de basquete profissional, redes de vôlei/futsal, sonorização e vestiários completos.',
    itensDisponiveis: [
      'Quadra poliesportiva com marcação oficial',
      'Arquibancada coberta para 800 espectadores',
      'Sistema de som e microfones sem fio',
      'Vestiários masculino, feminino e adaptados',
      'Iluminação em LED de alta potência'
    ],
    usosPossiveis: [
      'Torneios e campeonatos esportivos',
      'Cerimônias de formatura e graduação',
      'Feiras comunitárias e exposições',
      'Apresentações culturais e musicais'
    ],
    condicoesGerais: 'Disponível para locação aos finais de semana e noites em dias úteis mediante agendamento prévio com a Secretaria.',
    imageUrl: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    _id: 'e2',
    nome: 'Auditório Principal Ir. Tereza',
    capacidade: 'Até 450 pessoas em poltronas estofadas',
    descricao: 'Ambiente climatizado com acústica profissional, palco elevado, camarim privado, projetor de alta resolução e mesa de controle multimídia.',
    itensDisponiveis: [
      '450 poltronas reclináveis estofadas com prancheta',
      'Palco modular iluminado com varanda técnica',
      'Projetor de alta definição e telão retrátil',
      'Mesa de som e microfones',
      'Camarim climatizado com banheiro privativo',
      'Foyer para recepção e coffee break'
    ],
    usosPossiveis: [
      'Palestras, simpósios e congressos',
      'Peças teatrais e recitais de música',
      'Reuniões corporativas e convenções',
      'Lançamentos de livros e exibições'
    ],
    condicoesGerais: 'Locação com acompanhamento técnico incluído. Reservas abertas mediante consulta de disponibilidade.',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop',
  },
]

export const DEFAULT_ESTRUTURA: AmbienteEstrutura[] = [
  {
    _id: 'est1',
    ambiente: 'Salas de Aula Climatizadas',
    descricao: 'Ambientes amplos, iluminados, equipados com lousas digitais, projetores e mobiliário ergonômico.',
    fotos: [{ url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop', alt: 'Sala de aula moderna' }]
  },
  {
    _id: 'est2',
    ambiente: 'Biblioteca Interativa',
    descricao: 'Acervo completo, salas de estudo individual e em grupo, e cantinhos de leitura infantil.',
    fotos: [{ url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop', alt: 'Biblioteca do colégio' }]
  },
  {
    _id: 'est3',
    ambiente: 'Laboratórios de Ciências e Informática',
    descricao: 'Bancadas equipadas para experimentos de Física, Química e Biologia, além de computadores atualizados para pesquisa e estudos digitais.',
    fotos: [{ url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop', alt: 'Laboratório de ciências' }]
  },
  {
    _id: 'est4',
    ambiente: 'Complexo Esportivo e Ginásio',
    descricao: 'Quadras externas e ginásio coberto preparados para modalidades coletivas e treinamentos.',
    fotos: [{ url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop', alt: 'Ginásio do colégio' }]
  },
  {
    _id: 'est5',
    ambiente: 'Auditório Principal',
    descricao: 'Estrutura completa com 450 lugares para palestras, teatro, concertos e formaturas.',
    fotos: [{ url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop', alt: 'Auditório principal' }]
  },
  {
    _id: 'est6',
    ambiente: 'Pátios Arborizados e Parque Infantil',
    descricao: 'Áreas de convivência ao ar livre cercadas por jardins e brinquedos seguros para o recreio.',
    fotos: [{ url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800&auto=format&fit=crop', alt: 'Parque infantil' }]
  },
]

export interface HomeBlocks {
  campanhaAtiva?: {
    ativo?: boolean
    titulo?: string
    subtitulo?: string
    badge?: string
    textoBotao?: string
    linkBotao?: string
    imageUrl?: string
  }
  avisos?: Array<{
    ativo?: boolean
    titulo: string
    descricao: string
    tipo: string
    dataValidade?: string
  }>
  proximosEventos?: Array<{
    titulo: string
    data: string
    horario?: string
    descricao?: string
  }>
}

const isSanityConfigured = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'placeholder-project')

const fetchOptions = { next: { revalidate: 0 }, cache: 'no-store' as RequestCache }

// QUERY FUNCTIONS (NO FICTITIOUS DATA - ONLY SANITY DATA)
export async function getSiteSettings(): Promise<SiteSettings> {
  if (!isSanityConfigured) return DEFAULT_SITE_SETTINGS
  try {
    const res = await client.fetch(
      `*[_type == "siteSettings"][0] {
        title,
        telefones,
        whatsapp,
        email,
        emailVisita,
        emailLocacao,
        endereco,
        linkMapaEmbed,
        horarioAtendimento,
        redesSociais,
        "logoUrl": logo.asset->url
      }`,
      {},
      fetchOptions
    )
    return res && res.title ? { ...DEFAULT_SITE_SETTINGS, ...res } : DEFAULT_SITE_SETTINGS
  } catch (err) {
    return DEFAULT_SITE_SETTINGS
  }
}

export async function getHomeBlocks(): Promise<HomeBlocks | null> {
  if (!isSanityConfigured) return null
  try {
    const res = await client.fetch(
      `*[_type == "homeBlocks"][0] {
        campanhaAtiva {
          ativo,
          titulo,
          subtitulo,
          badge,
          textoBotao,
          linkBotao,
          "imageUrl": imagem.asset->url
        },
        avisos[] {
          ativo,
          titulo,
          descricao,
          tipo,
          dataValidade
        },
        proximosEventos[] {
          titulo,
          data,
          horario,
          descricao
        }
      }`,
      {},
      fetchOptions
    )
    return res || null
  } catch (err) {
    return null
  }
}

export async function getNoticias(): Promise<Noticia[]> {
  if (!isSanityConfigured) return []
  try {
    const res = await client.fetch(
      `*[_type == "noticia"] | order(data desc) {
        _id,
        titulo,
        slug,
        data,
        categoria,
        resumo,
        imagemCapa,
        "imageUrl": imagemCapa.asset->url,
        destaque
      }`,
      {},
      fetchOptions
    )
    return Array.isArray(res) ? res : []
  } catch (err) {
    return []
  }
}

export async function getNoticiaBySlug(slug: string): Promise<Noticia | null> {
  if (!isSanityConfigured) return null
  try {
    const res = await client.fetch(
      `*[_type == "noticia" && slug.current == $slug][0] {
        _id,
        titulo,
        slug,
        data,
        categoria,
        resumo,
        corpo,
        imagemCapa,
        "imageUrl": imagemCapa.asset->url,
        destaque
      }`,
      { slug },
      fetchOptions
    )
    return res || null
  } catch (err) {
    return null
  }
}

export async function getDiferenciais(): Promise<Diferencial[]> {
  if (!isSanityConfigured) return []
  try {
    const res = await client.fetch(`*[_type == "diferencial"] | order(ordem asc)`, {}, fetchOptions)
    return Array.isArray(res) ? res : []
  } catch (err) {
    return []
  }
}

export async function getModalidades(): Promise<ModalidadeEnsino[]> {
  if (!isSanityConfigured) return []
  try {
    const res = await client.fetch(
      `*[_type == "modalidadeEnsino"] {
        _id,
        nome,
        slug,
        faixaEtaria,
        resumo,
        objetivos,
        metodologia,
        diferenciais,
        projetos,
        fotos,
        "imageUrl": fotos[0].asset->url
      }`,
      {},
      fetchOptions
    )
    return Array.isArray(res) ? res : []
  } catch (err) {
    return []
  }
}

export async function getEspacosLocacao(): Promise<EspacoLocacao[]> {
  if (!isSanityConfigured) return []
  try {
    const res = await client.fetch(
      `*[_type == "espacoLocacao"] {
        _id,
        nome,
        capacidade,
        descricao,
        itensDisponiveis,
        usosPossiveis,
        condicoesGerais,
        fotos,
        "imageUrl": fotos[0].asset->url
      }`,
      {},
      fetchOptions
    )
    return Array.isArray(res) ? res : []
  } catch (err) {
    return []
  }
}

export async function getLinhaDoTempo(): Promise<LinhaDoTempoItem[]> {
  if (!isSanityConfigured) return []
  try {
    const res = await client.fetch(
      `*[_type == "linhaDoTempoItem"] | order(ordem asc) {
        _id,
        ano,
        titulo,
        descricao,
        "imageUrl": imagem.asset->url,
        ordem
      }`,
      {},
      fetchOptions
    )
    return Array.isArray(res) ? res : []
  } catch (err) {
    return []
  }
}

export async function getDepoimentos(): Promise<Depoimento70Anos[]> {
  if (!isSanityConfigured) return []
  try {
    const res = await client.fetch(
      `*[_type == "depoimento70anos"] {
        _id,
        nome,
        relacao,
        texto,
        "imageUrl": foto.asset->url
      }`,
      {},
      fetchOptions
    )
    return Array.isArray(res) ? res : []
  } catch (err) {
    return []
  }
}

export async function getEstrutura(): Promise<AmbienteEstrutura[]> {
  if (!isSanityConfigured) return []
  try {
    const res = await client.fetch(
      `*[_type == "paginaEstrutura"] | order(ordem asc) {
        _id,
        ambiente,
        descricao,
        "fotos": fotos[] {
          "url": asset->url,
          alt,
          legenda
        },
        ordem
      }`,
      {},
      fetchOptions
    )
    return Array.isArray(res) ? res : []
  } catch (err) {
    return []
  }
}

export interface EmpresaParceira {
  _id: string
  nome: string
  categoria?: string
  logoUrl?: string
  descricao?: string
  linkSite?: string
  ordem?: number
  ativo?: boolean
}

export async function getEmpresasParceiras(): Promise<EmpresaParceira[]> {
  if (!isSanityConfigured) return []
  try {
    const res = await client.fetch(
      `*[_type == "empresaParceira" && ativo != false] | order(ordem asc) {
        _id,
        nome,
        categoria,
        "logoUrl": logo.asset->url,
        descricao,
        linkSite,
        ordem,
        ativo
      }`,
      {},
      fetchOptions
    )
    return Array.isArray(res) ? res : []
  } catch (err) {
    return []
  }
}

export async function getGaleriasMes(): Promise<GaleriaMes[]> {
  if (!isSanityConfigured) return []
  try {
    const res = await client.fetch(
      `*[_type == "galeriaMes"] | order(ano desc, mes desc) {
        _id,
        titulo,
        mes,
        ano,
        descricao,
        "fotos": fotos[] {
          "url": asset->url,
          alt,
          descricao
        }
      }`,
      {},
      fetchOptions
    )
    return Array.isArray(res) ? res : []
  } catch (err) {
    return []
  }
}

export interface PaginaHistoria {
  tituloBanner?: string
  subtituloBanner?: string
  tituloSecao?: string
  textoInstitucional1?: string
  textoInstitucional2?: string
  imageUrl?: string
  missao?: string
  visao?: string
  valores?: string
  fotosHistoricas?: Array<{ url?: string; alt?: string; descricao?: string }>
}

export async function getPaginaHistoria(): Promise<PaginaHistoria | null> {
  if (!isSanityConfigured) return null
  try {
    const res = await client.fetch(
      `*[_type == "paginaHistoria"][0] {
        tituloBanner,
        subtituloBanner,
        tituloSecao,
        textoInstitucional1,
        textoInstitucional2,
        "imageUrl": imagemDestaque.asset->url,
        missao,
        visao,
        valores,
        "fotosHistoricas": fotosHistoricas[] {
          "url": asset->url,
          alt,
          descricao
        }
      }`,
      {},
      fetchOptions
    )
    return res || null
  } catch (err) {
    return null
  }
}

export interface PaginaSetentaAnos {
  badge?: string
  titulo?: string
  subtitulo?: string
  curiosidades?: Array<{ ano: string; texto: string }>
  programacao?: Array<{
    data: string
    horario: string
    titulo: string
    local: string
    descricao: string
    ingresso: string
  }>
}

export async function getPaginaSetentaAnos(): Promise<PaginaSetentaAnos | null> {
  if (!isSanityConfigured) return null
  try {
    const res = await client.fetch(
      `*[_type == "paginaSetentaAnos"][0] {
        badge,
        titulo,
        subtitulo,
        curiosidades[] {
          ano,
          texto
        },
        programacao[] {
          data,
          horario,
          titulo,
          local,
          descricao,
          ingresso
        }
      }`,
      {},
      fetchOptions
    )
    return res || null
  } catch (err) {
    return null
  }
}

export interface PaginaVivencie {
  tituloBanner?: string
  subtituloBanner?: string
  tituloIntro?: string
  textoIntro1?: string
  textoIntro2?: string
  imageUrl?: string
  pilares?: Array<{
    titulo: string
    descricao: string
    icone: string
  }>
}

export async function getPaginaVivencie(): Promise<PaginaVivencie | null> {
  if (!isSanityConfigured) return null
  try {
    const res = await client.fetch(
      `*[_type == "paginaVivencie"][0] {
        tituloBanner,
        subtituloBanner,
        tituloIntro,
        textoIntro1,
        textoIntro2,
        "imageUrl": imagemDestaque.asset->url,
        pilares[] {
          titulo,
          descricao,
          icone
        }
      }`,
      {},
      fetchOptions
    )
    return res || null
  } catch (err) {
    return null
  }
}

export interface PaginaMatriculas {
  titulo?: string
  subtitulo?: string
  passos?: Array<{ numero: number; titulo: string; descricao: string }>
  documentosNecessarios?: string[]
  duvidasFrequentes?: Array<{ pergunta: string; resposta: string }>
}

export async function getPaginaMatriculas(): Promise<PaginaMatriculas | null> {
  if (!isSanityConfigured) return null
  try {
    const res = await client.fetch(
      `*[_type == "paginaMatriculas"][0] {
        titulo,
        subtitulo,
        passos[] {
          numero,
          titulo,
          descricao
        },
        documentosNecessarios,
        duvidasFrequentes[] {
          pergunta,
          resposta
        }
      }`,
      {},
      fetchOptions
    )
    return res || null
  } catch (err) {
    return null
  }
}

export interface PlataformaAppItem {
  nome: string
  publicoAlvo?: string
  descricao?: string
  linkWeb?: string
  linkPlayStore?: string
  linkAppStore?: string
  iconeTipo?: string
  recursos?: string[]
  ordem?: number
  ativo?: boolean
}

export interface PaginaTecnologia {
  titulo?: string
  subtitulo?: string
  avisoTransparencia?: string
  textoSuporteWhats?: string
  plataformas?: PlataformaAppItem[]
}

export async function getPaginaTecnologia(): Promise<PaginaTecnologia | null> {
  if (!isSanityConfigured) return null
  try {
    const res = await client.fetch(
      `*[_type == "paginaTecnologia"][0] {
        titulo,
        subtitulo,
        avisoTransparencia,
        textoSuporteWhats,
        plataformas[] {
          nome,
          publicoAlvo,
          descricao,
          linkWeb,
          linkPlayStore,
          linkAppStore,
          iconeTipo,
          recursos,
          ordem,
          ativo
        }
      }`,
      {},
      fetchOptions
    )
    return res || null
  } catch (err) {
    return null
  }
}
