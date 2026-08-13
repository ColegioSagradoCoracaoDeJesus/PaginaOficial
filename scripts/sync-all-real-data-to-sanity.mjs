import { createClient } from '@sanity/client'

const projectId = 'k5abziwi'
const token = 'sk822RhckC98u6n4n8a1yrs9s0IZFsZ5SCNUMgVypzaAC0XFynG9vMTEKD4Yp0ztqxZeDFvInK461j89FW7xKK3qn5KYWtEXTULOj7gglm0ozUKs1CqvJtUekwtpnQ0i2fVYvRcehFIaXQVg1d2aKKCNfvSjrTgpSV1oNrBG760LlX57e5s1'
const dataset = 'production'

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

async function syncAll() {
  console.log('\n🚀 Sincronizando todos os dados reais no Sanity...')
  const tx = client.transaction()

  // 1. Página Nossa História (Universal e Inclusiva)
  tx.createOrReplace({
    _id: 'paginaHistoria-main',
    _type: 'paginaHistoria',
    tituloBanner: 'Nossa História & Propósito',
    subtituloBanner: 'Há sete décadas, o Colégio Sagrado Coração de Jesus dedica-se a formar cidadãos conscientes, éticos e preparados para transformar a sociedade.',
    tituloSecao: 'Sete Décadas Marcadas pelo Afeto, Rigor Acadêmico e Tradição',
    textoInstitucional1: 'Fundado em 1956 com a missão de oferecer uma educação humanizada e acolhedora, o Colégio Sagrado Coração de Jesus consolidou-se como referência pedagógica em Rio Grande - RS. Durante 70 anos, acompanhamos as transformações da sociedade promovendo a ética, o respeito a todas as crenças e o saber.',
    textoInstitucional2: 'Aqui, a tradição caminha lado a lado com a formação integral: integrando propostas pedagógicas de qualidade ao acolhimento atento que faz cada aluno sentir-se único e valorizado.',
    missao: 'Promover a formação humana integral por meio da excelência pedagógica, da ética, do respeito à diversidade e da vivência de valores humanos universais, capacitando o estudante a agir no mundo de forma ética e solidária.',
    visao: 'Ser reconhecido como uma instituição de excelência que alia tradição pedagógica, acolhimento humano e desenvolvimento socioemocional.',
    valores: 'Acolhimento afetivo, ética, respeito à diversidade de crenças e culturas, compromisso com o saber, responsabilidade social e empatia.',
  })

  // 2. Página 70 Anos (Apenas o Espetáculo confirmado)
  tx.createOrReplace({
    _id: 'paginaSetentaAnos-main',
    _type: 'paginaSetentaAnos',
    badge: '1956 — 2026 | 70 Anos',
    titulo: '70 Anos Formando Gerações com Excelência, Acolhimento e Valores',
    subtitulo: 'Sete décadas construindo memórias, transformando vidas e reafirmando o compromisso com uma educação acolhedora e de qualidade.',
    curiosidades: [
      { ano: '1956', texto: 'Início das atividades em Rio Grande - RS acolhendo as primeiras turmas da comunidade.' },
      { ano: '1974', texto: 'Ampliação dos espaços esportivos e quadras de recreação.' },
      { ano: '2026', texto: 'Comemoração dos 70 anos de história e dedicação à educação em Rio Grande.' },
    ],
    programacao: [
      {
        data: 'A Definir / Em Breve',
        horario: 'A Definir',
        titulo: 'Espetáculo Comemorativo dos 70 Anos',
        local: 'Colégio Sagrado Coração de Jesus',
        descricao: 'Grande apresentação artística e cultural celebrando a história de sete décadas do colégio.',
        ingresso: 'Informações e ingressos na Secretaria do Colégio.',
      },
    ],
  })

  // 3. Página Vivencie o Sagrado (Secular e Cidadã)
  tx.createOrReplace({
    _id: 'paginaVivencie-main',
    _type: 'paginaVivencie',
    tituloBanner: 'Vivencie o Sagrado',
    subtituloBanner: 'Mais do que salas de aula: um espaço de convivência, desenvolvimento de virtudes e memórias inesquecíveis para toda a vida.',
    tituloIntro: 'Um Ambiente Onde Cada Aluno se Sente em Casa',
    textoIntro1: 'No Colégio Sagrado Coração de Jesus, o aprendizado vai além dos livros. Acreditamos que o conhecimento floresce em um ambiente seguro, acolhedor e repleto de afeto.',
    textoIntro2: 'Nossa rotina é planejada para equilibrar qualidade pedagógica, práticas esportivas, manifestações culturais e projetos de convivência e cidadania.',
    pilares: [
      {
        icone: 'Heart',
        titulo: 'Cidadania, Ética & Solidariedade',
        descricao: 'Ações solidárias, campanhas comunitárias e rodas de conversa que estimulam a empatia e o respeito ao próximo.',
      },
      {
        icone: 'Users',
        titulo: 'Projetos de Convivência',
        descricao: 'Desenvolvimento socioemocional, mediação de conflitos e assembleias de alunos para fortalecer o pertencimento.',
      },
      {
        icone: 'Music',
        titulo: 'Cultura, Arte & Esportes',
        descricao: 'Apresentações culturais, projetos artísticos, jogos esportivos e celebrações no ginásio poliesportivo.',
      },
      {
        icone: 'Sun',
        titulo: 'Rotina, Conforto & Segurança',
        descricao: 'Horários organizados, ambiente monitorado e acompanhamento atencioso para tranquilidade das famílias.',
      },
    ],
  })

  // 4. Modalidades de Ensino (Incluindo Recreação / Turno Inverso e apenas Feira de Ciências e Feira do Livro)
  const modalidades = [
    {
      _id: 'modalidade-recreacao',
      _type: 'modalidadeEnsino',
      nome: 'Recreação (Turno Inverso)',
      slug: { _type: 'slug', current: 'recreacao-turno-inverso' },
      faixaEtaria: 'Educação Infantil e Ensino Fundamental',
      resumo: 'Atividades lúdicas, momentos de descanso, brincadeiras orientadas e apoio às famílias no contraturno escolar.',
      objetivos: [
        'Proporcionar acolhimento seguro e atividades dinâmicas no contraturno',
        'Auxiliar no desenvolvimento da socialização e convivência',
        'Oferecer suporte prático para a rotina das famílias',
      ],
      metodologia: 'Brincadeiras dirigidas, oficinas culturais, momentos de leitura e convivência sadia.',
      diferenciais: [
        'Turno estendido e flexível',
        'Pátios arborizados e ambientes seguros',
        'Acompanhamento cuidadoso por monitoras e educadores',
      ],
      projetos: [
        { nome: 'Oficinas Recreativas', descricao: 'Jogos cooperativos, contação de histórias e brincadeiras tradicionais.' },
      ],
    },
    {
      _id: 'modalidade-infantil',
      _type: 'modalidadeEnsino',
      nome: 'Educação Infantil',
      slug: { _type: 'slug', current: 'educacao-infantil' },
      faixaEtaria: 'Maternal ao Nível V',
      resumo: 'Ambiente acolhedor onde a criança desenvolve suas primeiras habilidades sociais, linguagem e autonomia através do brincar.',
      objetivos: [
        'Desenvolver a coordenação motora, linguagem e expressão',
        'Estimular a socialização e o convívio em grupo',
        'Incentivar a curiosidade e o gosto pelas histórias',
      ],
      metodologia: 'Projetos lúdicos integrados a vivências cotidianas e materiais adequados para a primeira infância.',
      diferenciais: [
        'Pátio infantil seguro',
        'Salas preparadas e climatizadas',
        'Acompanhamento diário pelo Diário Escola',
      ],
      projetos: [
        { nome: 'Feira do Livro Infantil', descricao: 'Incentivo à leitura e contação de histórias com as famílias.' },
      ],
    },
    {
      _id: 'modalidade-fundamental1',
      _type: 'modalidadeEnsino',
      nome: 'Ensino Fundamental I',
      slug: { _type: 'slug', current: 'ensino-fundamental-1' },
      faixaEtaria: '1º ao 5º ano',
      resumo: 'Consolidação da alfabetização, raciocínio lógico e desenvolvimento de hábitos de estudo com acompanhamento pedagógico próximo.',
      objetivos: [
        'Desenvolver a alfabetização, leitura e interpretação de texto',
        'Construir a base do raciocínio matemático',
        'Estimular a responsabilidade e hábitos de estudo',
      ],
      metodologia: 'Aulas estruturadas com materiais didáticos da FTD Educação e projetos que conectam teoria e prática.',
      diferenciais: [
        'Material Didático da FTD Educação',
        'Acompanhamento pedagógico atencioso',
        'Participação na Feira do Livro e Feira de Ciências',
      ],
      projetos: [
        { nome: 'Feira do Livro Anual', descricao: 'Apresentação de trabalhos literários e incentivo à leitura.' },
        { nome: 'Feira de Ciências Anual', descricao: 'Experiências simples e curiosidades científicas apresentadas pelos alunos.' },
      ],
    },
    {
      _id: 'modalidade-fundamental2',
      _type: 'modalidadeEnsino',
      nome: 'Ensino Fundamental II',
      slug: { _type: 'slug', current: 'ensino-fundamental-2' },
      faixaEtaria: '6º ao 9º ano',
      resumo: 'Aprofundamento dos conteúdos curriculares, autonomia nos estudos e preparação para os desafios do Ensino Médio.',
      objetivos: [
        'Consolidar conhecimentos nas diversas áreas do saber',
        'Estimular o pensamento crítico e a capacidade de argumentação',
        'Desenvolver a responsabilidade pessoal e coletiva',
      ],
      metodologia: 'Aulas com professores especialistas em cada disciplina, com apoio da Plataforma Iônica e materiais da FTD.',
      diferenciais: [
        'Corpo docente qualificado',
        'Acesso à Plataforma Iônica da FTD Educação',
        'Ambientes climatizados e laboratório de informática',
      ],
      projetos: [
        { nome: 'Feira de Ciências Anual', descricao: 'Pesquisas e experimentos científicos conduzidos pelos estudantes.' },
        { nome: 'Feira do Livro', descricao: 'Atividades culturais e produções textuais.' },
      ],
    },
    {
      _id: 'modalidade-medio',
      _type: 'modalidadeEnsino',
      nome: 'Ensino Médio',
      slug: { _type: 'slug', current: 'ensino-medio' },
      faixaEtaria: '1ª à 3ª série',
      resumo: 'Preparação acadêmica e formação ética para o ingresso no ensino superior e vestibulares/ENEM.',
      objetivos: [
        'Aprofundar os conteúdos preparatórios para vestibulares e ENEM',
        'Consolidar a maturidade intelectual e visão de futuro',
        'Formar cidadãos éticos e responsáveis',
      ],
      metodologia: 'Foco no currículo do Ensino Médio com materiais didáticos da FTD Educação e simulados preparatórios.',
      diferenciais: [
        'Material FTD Educação voltado para o ENEM e vestibulares',
        'Salas de aula climatizadas',
        'Simulados periódicos',
      ],
      projetos: [
        { nome: 'Feira de Ciências e Mostra Cultural', descricao: 'Apresentação de projetos interdisciplinares.' },
      ],
    },
  ]

  for (const m of modalidades) {
    tx.createOrReplace(m)
  }

  // 5. Linha do tempo: ajustar primeiro item
  tx.patch('linha-tempo-1956', (p) =>
    p.set({
      descricao: 'Início da trajetória educacional acolhendo as primeiras turmas com dedicação, amor ao ensino e acolhimento humano.',
    })
  )

  await tx.commit()
  console.log('🎉 Sucesso! Todos os dados no Sanity foram atualizados de acordo com as instruções!\n')
}

syncAll().catch((err) => {
  console.error('\n❌ Erro:', err.message)
  process.exit(1)
})
