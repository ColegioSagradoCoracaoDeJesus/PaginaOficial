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

const items = [
  // 1. Itens da Linha do Tempo (70 Anos)
  {
    _id: 'linha-tempo-1956',
    _type: 'linhaDoTempoItem',
    ano: '1956',
    titulo: 'Fundação do Colégio em Rio Grande',
    descricao: 'Início da trajetória educacional acolhendo as primeiras turmas com dedicação, amor ao ensino e valores cristãos do Sagrado Coração.',
    ordem: 1,
  },
  {
    _id: 'linha-tempo-1975',
    _type: 'linhaDoTempoItem',
    ano: '1975',
    titulo: 'Expansão da Infraestrutura e Salas',
    descricao: 'Construção da nova ala pedagógica, ampliação das salas de aula, biblioteca central e espaços de convivência.',
    ordem: 2,
  },
  {
    _id: 'linha-tempo-1995',
    _type: 'linhaDoTempoItem',
    ano: '1995',
    titulo: 'Ginásio Poliesportivo e Inovação',
    descricao: 'Inauguração do Ginásio Poliesportivo coberto e implementação do primeiro laboratório de informática.',
    ordem: 3,
  },
  {
    _id: 'linha-tempo-2012',
    _type: 'linhaDoTempoItem',
    ano: '2012',
    titulo: 'Auditório Principal e Programa Bilíngue',
    descricao: 'Inauguração do Auditório com 450 lugares para eventos culturais e implantação do programa bilíngue.',
    ordem: 4,
  },
  {
    _id: 'linha-tempo-2026',
    _type: 'linhaDoTempoItem',
    ano: '2026',
    titulo: 'Celebração dos 70 Anos (Jubileu de Vinho)',
    descricao: 'Sete décadas de história viva, formando gerações de cidadãos éticos, preparados para os desafios contemporâneos.',
    ordem: 5,
  },

  // 2. Depoimentos 70 Anos
  {
    _id: 'depoimento-ex-aluno',
    _type: 'depoimento70anos',
    nome: 'Maria Helena Silveira',
    relacao: 'Ex-aluna do Colégio Sagrado Coração',
    texto: 'O Sagrado foi a base não apenas da minha formação escolar, mas dos princípios de ética, amizade e responsabilidade que carrego por toda a vida.',
  },
  {
    _id: 'depoimento-familia',
    _type: 'depoimento70anos',
    nome: 'Carlos Eduardo Santos',
    relacao: 'Pai de Alunos (Ensino Fundamental e Médio)',
    texto: 'Confiar a educação dos meus filhos ao Colégio Sagrado Coração foi a decisão mais acertada. O acolhimento humano da equipe faz toda a diferença.',
  },
  {
    _id: 'depoimento-educador',
    _type: 'depoimento70anos',
    nome: 'Profª. Ana Beatriz Mendes',
    relacao: 'Professora e Educadora',
    texto: 'Fazer parte dessa história de 70 anos é ver crianças chegarem tímidas e saírem jovens brilhantes, preparados e comprometidos com a sociedade.',
  },
]

async function seedTimelineAndTestimonials() {
  console.log(`\n🚀 Cadastrando Linha do Tempo e Depoimentos no Sanity (Projeto: ${projectId})...`)
  const transaction = client.transaction()

  for (const item of items) {
    transaction.createOrReplace(item)
    console.log(`  ✓ Preparando: [${item._type}] ${item.titulo || item.nome}`)
  }

  console.log('\n📦 Gravando no Sanity...')
  await transaction.commit()
  console.log('🎉 Sucesso! Linha do Tempo e Depoimentos cadastrados no Sanity!\n')
}

seedTimelineAndTestimonials().catch((err) => {
  console.error('\n❌ Erro:', err.message)
  process.exit(1)
})
