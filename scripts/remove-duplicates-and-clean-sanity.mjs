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

async function removeDuplicates() {
  console.log('\n🧹 Limpando todos os documentos duplicados e antigos no Sanity...')

  // 1. Fetch all modalidade documents
  const allModalidades = await client.fetch('*[_type == "modalidadeEnsino"]{ _id }')
  console.log(`Encontradas ${allModalidades.length} modalidades no Sanity. Apagando duplicatas...`)

  for (const m of allModalidades) {
    try {
      await client.delete(m._id)
      console.log(`  ✓ Removido ID: ${m._id}`)
    } catch (e) {
      console.log(`  - Erro ao remover ${m._id}: ${e.message}`)
    }
  }

  // 2. Insert ONLY the exact 5 official modalities
  const realModalidades = [
    {
      _id: 'mod-recreacao',
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
      _id: 'mod-infantil',
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
      _id: 'mod-fundamental1',
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
      _id: 'mod-fundamental2',
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
      _id: 'mod-medio',
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

  console.log('\n📦 Cadastrando as 5 modalidades oficiais únicas...')
  const tx = client.transaction()
  for (const m of realModalidades) {
    tx.createOrReplace(m)
    console.log(`  ✓ Gravando: ${m.nome}`)
  }
  await tx.commit()

  console.log('\n🎉 Concluído! Agora existem EXATAMENTE 5 modalidades sem nenhuma duplicata!')
}

removeDuplicates().catch((err) => {
  console.error('\n❌ Erro:', err.message)
  process.exit(1)
})
