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

async function cleanupAndSetFTD() {
  console.log('\n🧹 Limpando menções falsas de robótica e ajustando parceiros para FTD Educação...')

  // 1. Delete fake robotics partner if exists
  try {
    await client.delete('parceiro-robotica')
    console.log('  ✓ Removido documento [parceiro-robotica]')
  } catch (err) {
    console.log('  - parceiro-robotica não existia ou já foi removido')
  }

  // 2. Delete old positivo partner
  try {
    await client.delete('parceiro-positivo')
    console.log('  ✓ Removido documento [parceiro-positivo]')
  } catch (err) {
    console.log('  - parceiro-positivo já removido')
  }

  // 3. Create or replace FTD partner
  await client.createOrReplace({
    _id: 'parceiro-ftd',
    _type: 'empresaParceira',
    nome: 'FTD Educação & Plataforma Iônica',
    categoria: 'Material Didático & Plataforma Digital',
    descricao: 'Sistema de ensino e materiais didáticos adotados pelo Colégio Sagrado Coração de Jesus.',
    linkSite: 'https://p21-ionica.com.br',
    ordem: 1,
    ativo: true,
  })
  console.log('  ✓ Atualizado parceiro FTD Educação')

  // 4. Update paginaTecnologia
  await client.createOrReplace({
    _id: 'paginaTecnologia-main',
    _type: 'paginaTecnologia',
    titulo: 'Portal do Aluno & Plataformas Digitais',
    subtitulo: 'Acesse os aplicativos de comunicação escolar e materiais didáticos da FTD Educação utilizados pelo Colégio Sagrado Coração de Jesus.',
    avisoTransparencia: 'O Colégio Sagrado Coração de Jesus utiliza os sistemas e materiais didáticos da FTD Educação (Plataforma Iônica) e o aplicativo Diário Escola para acompanhamento e comunicação pedagógica com pais, alunos e professores.',
    textoSuporteWhats: 'Dúvidas com usuário, primeiro acesso ou redefinição de senha? Fale diretamente com a Secretaria pelo WhatsApp oficial.',
    plataformas: [
      {
        _key: 'app-ionica-ftd',
        nome: 'Plataforma Iônica (FTD Educação)',
        publicoAlvo: 'Alunos, Pais e Professores (Ensino Fundamental e Médio)',
        descricao: 'Ambiente virtual oficial da FTD Educação para acesso aos livros didáticos digitais, atividades complementares e simulados.',
        linkWeb: 'https://p21-ionica.com.br',
        linkPlayStore: 'https://play.google.com/store/apps/details?id=br.com.ftd.ionica',
        linkAppStore: 'https://apps.apple.com/br/app/i%C3%B4nica/id1527783965',
        iconeTipo: 'Laptop',
        recursos: [
          'Acesso aos livros didáticos digitais da FTD',
          'Atividades pedagógicas e recursos multimídia',
          'Acesso online pelo computador ou app no celular',
        ],
        ordem: 1,
        ativo: true,
      },
      {
        _key: 'app-diario-pais-ef',
        nome: 'Diário Escola — Pais & Responsáveis (Ensino Fundamental)',
        publicoAlvo: 'Pais do 1º ao 9º Ano e Ensino Médio',
        descricao: 'Aplicativo para acompanhamento de notas, comunicados da escola, tarefas de casa e avisos da coordenação.',
        linkWeb: 'https://diarioescola.com.br',
        linkPlayStore: 'https://play.google.com/store/search?q=diario%20escola&c=apps',
        linkAppStore: 'https://apps.apple.com/br/app/di%C3%A1rio-escola/id1111956637',
        iconeTipo: 'Smartphone',
        recursos: [
          'Avisos e circulares oficiais da escola',
          'Acompanhamento de notas e faltas',
          'Comunicação direta com a coordenação',
        ],
        ordem: 2,
        ativo: true,
      },
      {
        _key: 'app-diario-pais-ei',
        nome: 'Diário Escola — Pais & Responsáveis (Educação Infantil)',
        publicoAlvo: 'Famílias da Educação Infantil (Maternal ao Nível V)',
        descricao: 'Agenda digital para acompanhamento diário da rotina, alimentação e recados dos professores.',
        linkWeb: 'https://diarioescola.com.br',
        linkPlayStore: 'https://play.google.com/store/search?q=diario%20escola&c=apps',
        linkAppStore: 'https://apps.apple.com/br/app/di%C3%A1rio-escola/id1111956637',
        iconeTipo: 'Smartphone',
        recursos: [
          'Acompanhamento da rotina e alimentação',
          'Recados dos professores e avisos da escola',
          'Autorizações e comunicados rápidos',
        ],
        ordem: 3,
        ativo: true,
      },
      {
        _key: 'app-diario-mestres-ef',
        nome: 'Diário Escola — Mestres & Professores (Ensino Fundamental)',
        publicoAlvo: 'Professores do Ensino Fundamental e Médio',
        descricao: 'Painel do educador para lançamento de chamadas, notas e comunicação com turmas.',
        linkWeb: 'https://diarioescola.com.br',
        linkPlayStore: 'https://play.google.com/store/search?q=diario%20escola%20professor&c=apps',
        linkAppStore: 'https://apps.apple.com/br/app/di%C3%A1rio-escola-professor/id1453229864',
        iconeTipo: 'Users',
        recursos: [
          'Registro de presença e chamada online',
          'Lançamento de avaliações e notas',
        ],
        ordem: 4,
        ativo: true,
      },
      {
        _key: 'app-diario-mestres-ei',
        nome: 'Diário Escola — Mestres & Educadores (Educação Infantil)',
        publicoAlvo: 'Educadores da Educação Infantil',
        descricao: 'Registro da rotina e acompanhamento das turmas da Educação Infantil.',
        linkWeb: 'https://diarioescola.com.br',
        linkPlayStore: 'https://play.google.com/store/search?q=diario%20escola%20professor&c=apps',
        linkAppStore: 'https://apps.apple.com/br/app/di%C3%A1rio-escola-professor/id1453229864',
        iconeTipo: 'Users',
        recursos: [
          'Registro da rotina diária',
          'Comunicação direta com as famílias',
        ],
        ordem: 5,
        ativo: true,
      },
    ],
  })
  console.log('  ✓ Atualizado [paginaTecnologia-main] no Sanity com FTD Educação e Diário Escola')

  console.log('\n🎉 Concluído com sucesso!')
}

cleanupAndSetFTD().catch((err) => {
  console.error('\n❌ Erro:', err.message)
  process.exit(1)
})
