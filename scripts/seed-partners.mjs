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

const parceiros = [
  {
    _id: 'parceiro-positivo',
    _type: 'empresaParceira',
    nome: 'Sistema de Ensino Positivo / Plataforma Iônica',
    categoria: 'Material Didático & Tecnologia',
    descricao: 'Soluções pedagógicas completas, avaliações diagnósticas e ecossistema digital de aprendizagem.',
    linkSite: 'https://p21-ionica.com.br',
    ordem: 1,
    ativo: true,
  },
  {
    _id: 'parceiro-diario-escola',
    _type: 'empresaParceira',
    nome: 'Diário Escola',
    categoria: 'Comunicação Digital',
    descricao: 'Aplicativo oficial de comunicação e agenda digital entre a escola e as famílias.',
    linkSite: 'https://diarioescola.com.br',
    ordem: 2,
    ativo: true,
  },
  {
    _id: 'parceiro-bilingue',
    _type: 'empresaParceira',
    nome: 'Programa Bilíngue Internacional',
    categoria: 'Bilinguismo & Certificação',
    descricao: 'Imersão no idioma inglês com metodologia internacional e desenvolvimento de fluência.',
    ordem: 3,
    ativo: true,
  },
  {
    _id: 'parceiro-robotica',
    _type: 'empresaParceira',
    nome: 'Robótica & Cultura Maker',
    categoria: 'Tecnologia Educacional',
    descricao: 'Laboratório prático de robótica educacional e desenvolvimento do pensamento lógico.',
    ordem: 4,
    ativo: true,
  },
]

async function seedPartners() {
  console.log(`\n🚀 Cadastrando Empresas Parceiras no Sanity (Projeto: ${projectId})...`)
  const transaction = client.transaction()

  for (const p of parceiros) {
    transaction.createOrReplace(p)
    console.log(`  ✓ Preparando parceiro: [${p.categoria}] ${p.nome}`)
  }

  console.log('\n📦 Gravando no Sanity...')
  await transaction.commit()
  console.log('🎉 Sucesso! Empresas Parceiras cadastradas no Sanity!\n')
}

seedPartners().catch((err) => {
  console.error('\n❌ Erro:', err.message)
  process.exit(1)
})
