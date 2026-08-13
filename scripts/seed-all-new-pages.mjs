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

const documents = [
  // 1. Página: Nossa História
  {
    _id: 'paginaHistoria-main',
    _type: 'paginaHistoria',
    tituloBanner: 'Nossa História & Propósito',
    subtituloBanner: 'Há sete décadas, o Colégio Sagrado Coração de Jesus dedica-se a formar cidadãos conscientes, éticos e preparados para transformar a sociedade.',
    tituloSecao: 'Sete Décadas Marcadas pelo Afeto, Rigor Acadêmico e Tradição',
    textoInstitucional1: 'Fundado em 1956 com a missão de oferecer uma educação cristã humanizada, o Colégio Sagrado Coração de Jesus consolidou-se como referência pedagógica em Rio Grande - RS. Durante 70 anos, acompanhamos as profundas transformações da sociedade sem jamais abrir mão de nossos pilares fundacionais.',
    textoInstitucional2: 'Aqui, a tradição caminha lado a lado com a inovação: integrando recursos tecnológicos de ponta, laboratórios modernos e programa bilíngue ao acolhimento atento que faz cada aluno sentir-se único e valorizado.',
    missao: 'Promover a formação humana integral por meio da excelência acadêmica, da evangelização e da vivência de valores cristãos, capacitando o estudante a agir no mundo de forma ética e solidária.',
    visao: 'Ser reconhecido como um ecossistema educacional de excelência que alia tradição pedagógica, inovação metodológica e desenvolvimento socioemocional de alto nível.',
    valores: 'Acolhimento afetivo, ética, respeito à diversidade, compromisso com o saber científico, responsabilidade ambiental e amor ao próximo em cada atitude.',
  },

  // 2. Página: 70 Anos
  {
    _id: 'paginaSetentaAnos-main',
    _type: 'paginaSetentaAnos',
    badge: '1956 — 2026 | Jubileu de Vinho',
    titulo: '70 Anos Formando Gerações com Excelência, Acolhimento e Valores',
    subtitulo: 'Sete décadas construindo memórias, transformando vidas e reafirmando o compromisso com uma educação integral de verdade.',
    curiosidades: [
      { ano: '1956', texto: 'A primeira turma contava com apenas 28 alunos e funcionava em um casarão adaptado em Rio Grande.' },
      { ano: '1974', texto: 'O Colégio formou seu primeiro time feminino de basquete, sagrando-se campeão municipal no ano seguinte.' },
      { ano: '1998', texto: 'Inauguração da cápsula do tempo no jardim central, que será aberta durante os festejos dos 70 anos.' },
      { ano: '2026', texto: 'Mais de 15.000 alunos já passaram pelas salas de aula do Sagrado ao longo de sete décadas.' },
    ],
    programacao: [
      {
        data: '15 de Setembro de 2026',
        horario: '19h00',
        titulo: 'Missa em Ação de Graças pelos 70 Anos',
        local: 'Auditório Principal Ir. Tereza',
        descricao: 'Celebração eucarística comemorativa presidida com participação do coral dos alunos.',
        ingresso: 'Entrada Franca mediante confirmação prévia na Secretaria.',
      },
      {
        data: '24 de Outubro de 2026',
        horario: '14h00 às 20h00',
        titulo: 'Grande Encontro dos Ex-Alunos & Feira Cultural 70 Anos',
        local: 'Ginásio Poliesportivo e Pátios do Colégio',
        descricao: 'Reencontro de turmas históricas, exposição de fotos antigas, música ao vivo e espaço gastronômico.',
        ingresso: 'Convite individual disponível na Secretaria ou via WhatsApp.',
      },
      {
        data: '20 de Novembro de 2026',
        horario: '20h00',
        titulo: 'Jantar Solene de Gala dos 70 Anos',
        local: 'Salão de Eventos Principal',
        descricao: 'Noite de homenagens a educadores históricos, ex-diretores e famílias fundadoras.',
        ingresso: 'Mesa reserva na Secretaria. (Consulte disponibilidade).',
      },
    ],
  },

  // 3. Página: Vivencie o Sagrado
  {
    _id: 'paginaVivencie-main',
    _type: 'paginaVivencie',
    tituloBanner: 'Vivencie o Sagrado',
    subtituloBanner: 'Mais do que salas de aula: um espaço de convivência, desenvolvimento de virtudes e memórias inesquecíveis para toda a vida.',
    tituloIntro: 'Um Ambiente Onde Cada Aluno se Sente em Casa',
    textoIntro1: 'No Colégio Sagrado Coração de Jesus, o aprendizado vai além dos livros. Acreditamos que o conhecimento floresce em um ambiente seguro, acolhedor e repleto de afeto.',
    textoIntro2: 'Nossa rotina é planejada para equilibrar rigor acadêmico, práticas esportivas, manifestações artísticas e momentos de pastoral que conectam a juventude a valores elevados.',
    pilares: [
      {
        icone: 'Heart',
        titulo: 'Pastoral & Espiritualidade',
        descricao: 'Ações de solidariedade, encontros de reflexão, celebrações eucarísticas e voluntariado que aquecem o coração e desenvolvem a empatia.',
      },
      {
        icone: 'Users',
        titulo: 'Projetos de Convivência',
        descricao: 'Rodas de conversa socioemocionais, mediação de conflitos e assembleias de alunos para fortalecer o sentimento de pertencimento.',
      },
      {
        icone: 'Music',
        titulo: 'Cultura, Arte & Esportes',
        descricao: 'Mostras culturais, festivais de música, peças teatrais e olimpíadas internas no ginásio poliesportivo.',
      },
      {
        icone: 'Sun',
        titulo: 'Rotina e Conforto',
        descricao: 'Horários organizados, ambiente seguro com monitoramento 24h e refeições acompanhadas por nutricionista.',
      },
    ],
  },

  // 4. Página: Matrículas
  {
    _id: 'paginaMatriculas-main',
    _type: 'paginaMatriculas',
    titulo: 'Matrículas & Rematrículas 2026/2027',
    subtitulo: 'Garanta a vaga do seu filho em uma instituição com 70 anos de tradição, inovação e acolhimento humano em Rio Grande - RS.',
    passos: [
      { numero: 1, titulo: 'Agende uma Visita Guiada', descricao: 'Conheça nossa estrutura física, proposta pedagógica e tire dúvidas com a equipe de coordenação.' },
      { numero: 2, titulo: 'Entrevista Pedagógica & Apresentação', descricao: 'Conversa acolhedora com os pais e apresentação das diretrizes de convivência do Sagrado.' },
      { numero: 3, titulo: 'Entrega de Documentos', descricao: 'Apresentação da documentação do aluno e dos responsáveis na Secretaria do Colégio.' },
      { numero: 4, titulo: 'Assinatura & Boas-Vindas', descricao: 'Assinatura do contrato de prestação de serviços educacionais e integração da família no Diário Escola.' },
    ],
    documentosNecessarios: [
      'Certidão de Nascimento do Aluno (cópia simples)',
      'RG e CPF do Aluno (se houver)',
      'RG, CPF e Comprovante de Residência dos Responsáveis Financeiros',
      'Declaração de Transferência ou Histórico Escolar da escola de origem',
      'Carteira de Vacinação atualizada (para Educação Infantil e Fundamental I)',
      'Declaração de Quitação de Débitos da escola anterior',
    ],
    duvidasFrequentes: [
      { pergunta: 'Qual é o horário de atendimento da Secretaria para matrículas?', resposta: 'A Secretaria atende presencialmente e por telefone de segunda a sexta-feira, das 07h30 às 17h30 sem fechar para o almoço.' },
      { pergunta: 'O Colégio oferece período integral ou turmas de contraturno?', resposta: 'Sim! Possuímos programas de permanência estendida e atividades extracurriculares no contraturno escolar para Educação Infantil e Ensino Fundamental.' },
      { pergunta: 'Como funciona a rematrícula de alunos veteranos?', resposta: 'Alunos veteranos possuem prioridade de renovação de vaga através do portal de rematrículas com condições especiais no período oficial de campanha.' },
    ],
  },

  // 5. Página: Tecnologia Educacional
  {
    _id: 'paginaTecnologia-main',
    _type: 'paginaTecnologia',
    titulo: 'Tecnologia Educacional & Inovação',
    subtitulo: 'Ferramentas digitais de última geração integradas ao cotidiano pedagógico e à comunicação transparente com as famílias.',
    recursos: [
      {
        nome: 'Diário Escola',
        descricao: 'Aplicativo oficial do Colégio para acompanhamento diário da rotina escolar dos alunos da Educação Infantil e Ensino Fundamental.',
        linkAcesso: 'https://diarioescola.com.br',
      },
      {
        nome: 'Plataforma Iônica',
        descricao: 'Ambiente virtual de aprendizagem utilizado do Ensino Fundamental ao Ensino Médio para materiais didáticos digitais e simulados.',
        linkAcesso: 'https://p21-ionica.com.br',
      },
    ],
  },
]

async function seedAllNewPages() {
  console.log(`\n🚀 Cadastrando todas as novas páginas no Sanity (Projeto: ${projectId})...`)
  const transaction = client.transaction()

  for (const doc of documents) {
    transaction.createOrReplace(doc)
    console.log(`  ✓ Preparando: [${doc._type}] ${doc.tituloBanner || doc.titulo || doc._id}`)
  }

  console.log('\n📦 Gravando documentos no Sanity...')
  await transaction.commit()
  console.log('🎉 Sucesso! Todas as páginas agora estão criadas e totalmente editáveis no Sanity!\n')
}

seedAllNewPages().catch((err) => {
  console.error('\n❌ Erro:', err.message)
  process.exit(1)
})
