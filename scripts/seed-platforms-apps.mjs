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

const doc = {
  _id: 'paginaTecnologia-main',
  _type: 'paginaTecnologia',
  titulo: 'Portal do Aluno & Plataformas Digitais',
  subtitulo: 'Acesse os aplicativos oficiais de comunicação escolar, materiais didáticos e ambiente virtual de aprendizagem utilizados pelo Sagrado.',
  avisoTransparencia: 'O Colégio Sagrado Coração de Jesus utiliza e homologa essas plataformas especializadas de gestão e material didático para garantir segurança, acompanhamento pedagógico e comunicação eficiente com toda a comunidade escolar.',
  textoSuporteWhats: 'Dúvidas com usuário, primeiro acesso ou redefinição de senha? Fale diretamente com a Secretaria pelo WhatsApp oficial.',
  plataformas: [
    {
      _key: 'app-diario-pais-ef',
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
      _key: 'app-diario-pais-ei',
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
      _key: 'app-diario-mestres-ef',
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
      _key: 'app-diario-mestres-ei',
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
      _key: 'app-ionica',
      nome: 'Plataforma Iônica (Sistema de Ensino Positivo)',
      publicoAlvo: 'Alunos, Pais e Professores (Ensino Fundamental e Médio)',
      descricao: 'Ambiente virtual com livros digitais interativos, trilhas de aprendizagem, simulados ENEM e conteúdos multimídia 24 horas por dia.',
      linkWeb: 'https://p21-ionica.com.br',
      linkPlayStore: 'https://play.google.com/store/apps/details?id=br.com.ftd.ionica',
      linkAppStore: 'https://apps.apple.com/br/app/i%C3%B4nica/id1527783965',
      iconeTipo: 'Laptop',
      recursos: [
        'Livros didáticos digitais completos',
        'Simulados padrão ENEM com correção comentada',
        'Atividades complementares e videoaulas',
      ],
      ordem: 5,
      ativo: true,
    },
  ],
}

async function seedPlatforms() {
  console.log(`\n🚀 Gravando Portal do Aluno & Plataformas no Sanity (Projeto: ${projectId})...`)
  await client.createOrReplace(doc)
  console.log('🎉 Sucesso! Portal do Aluno e Aplicativos gravados e 100% editáveis no Sanity!\n')
}

seedPlatforms().catch((err) => {
  console.error('\n❌ Erro:', err.message)
  process.exit(1)
})
