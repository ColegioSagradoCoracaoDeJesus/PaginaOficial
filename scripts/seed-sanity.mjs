import { createClient } from '@sanity/client'

const projectId = process.argv[2] || process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const token = process.argv[3] || process.env.SANITY_AUTH_TOKEN || process.env.SANITY_API_TOKEN
const dataset = process.argv[4] || process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

if (!projectId || projectId === 'placeholder-project' || !token) {
  console.error('\n❌ Erro: Por favor informe o Project ID e o Sanity API Token (com permissão de Editor ou Write).')
  console.log('Uso: node scripts/seed-sanity.mjs <PROJECT_ID> <API_TOKEN>\n')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

const documents = [
  // 1. Configurações Globais do Site
  {
    _id: 'siteSettings',
    _type: 'siteSettings',
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
  },

  // 2. Blocos Dinâmicos da Home
  {
    _id: 'homeBlocks',
    _type: 'homeBlocks',
    campanhaAtiva: {
      ativo: true,
      titulo: 'Matrículas & Rematrículas 2026/2027',
      subtitulo: 'Venha fazer parte da história do Colégio Sagrado Coração de Jesus. Agende sua visita pedagógica personalizada.',
      badge: 'Vagas Abertas',
      textoBotao: 'Saber Mais sobre Matrículas',
      linkBotao: '/matriculas',
    },
    avisos: [
      {
        ativo: true,
        titulo: 'Período de Rematrículas para Alunos Veteranos e Novas Vagas Abertas',
        descricao: 'Agende o atendimento na secretaria ou garanta a vaga do seu filho pelo portal de matrículas.',
        tipo: 'Informativo',
        dataValidade: '2026-12-31',
      },
    ],
    proximosEventos: [
      {
        titulo: 'Solenidade Comemorativa dos 70 Anos',
        data: '15 de Setembro de 2026',
        horario: '19h00',
        descricao: 'Missa em Ação de Graças no Auditório Principal Ir. Tereza.',
      },
    ],
  },

  // 3. Modalidades de Ensino
  {
    _id: 'modalidade-educacao-infantil',
    _type: 'modalidadeEnsino',
    nome: 'Educação Infantil',
    slug: { _type: 'slug', current: 'educacao-infantil' },
    faixaEtaria: '2 a 5 anos (Maternal ao Infantil V)',
    resumo: 'Ambiente estimulante, seguro e acolhedor onde a criança descobre o mundo através do brincar guiado, da socialização e do desenvolvimento socioemocional.',
    objetivos: [
      'Desenvolver a autonomia, coordenação motora e expressão corporal',
      'Estimular a linguagem oral e o gosto inicial pela leitura e histórias',
      'Incentivar a convivência harmoniosa, empatia e compartilhamento',
      'Promover a curiosidade científica e o contato com a natureza',
    ],
    metodologia: 'Metodologia afetiva e investigativa, onde a criança é protagonista de suas descobertas. Utilizamos jogos pedagógicos, projetos temáticos e vivências ao ar livre.',
    diferenciais: [
      'Parque infantil exclusivo e arborizado',
      'Iniciação ao inglês de forma lúdica',
      'Acompanhamento nutricional e ambiente seguro',
      'Salas de aulas lúdicas e climatizadas',
    ],
    projetos: [
      { nome: 'Passaporte da Leitura', descricao: 'Incentivo diário ao contato com livros infantis com participação da família.' },
      { nome: 'Horta Pedagógica', descricao: 'Vivência prática sobre sustentabilidade, cultivo e alimentação saudável.' },
    ],
  },
  {
    _id: 'modalidade-fundamental-1',
    _type: 'modalidadeEnsino',
    nome: 'Ensino Fundamental I',
    slug: { _type: 'slug', current: 'ensino-fundamental-1' },
    faixaEtaria: '1º ao 5º ano (6 a 10 anos)',
    resumo: 'Consolidação da alfabetização, letramento matemático e raciocínio crítico em uma fase crucial para o desenvolvimento do pensamento lógico e colaborativo.',
    objetivos: [
      'Garantir a alfabetização plena e capacidade leitora crítica',
      'Construir a base matemática e o raciocínio lógico-dedutivo',
      'Desenvolver hábitos de estudo, organização e autonomia',
      'Estimular a consciência cidadã e valores éticos',
    ],
    metodologia: 'Aprendizagem significativa integrando disciplinas através de projetos interdisciplinares, cultura maker e resolução de problemas práticos do dia a dia.',
    diferenciais: [
      'Aulas de Robótica e Raciocínio Lógico',
      'Programa Bilíngue em parceria internacional',
      'Feiras de Ciências e Artes anuais',
      'Reforço escolar e acompanhamento individualizado',
    ],
    projetos: [
      { nome: 'Jovens Escritores', descricao: 'Produção e autoria de livros pelos próprios alunos com noite de autógrafos.' },
      { nome: 'Clube de Matemática Divertida', descricao: 'Jogos de tabuleiro e desafios lógicos estimulantes.' },
    ],
  },
  {
    _id: 'modalidade-fundamental-2',
    _type: 'modalidadeEnsino',
    nome: 'Ensino Fundamental II',
    slug: { _type: 'slug', current: 'ensino-fundamental-2' },
    faixaEtaria: '6º ao 9º ano (11 a 14 anos)',
    resumo: 'Aprofundamento científico, autonomia intelectual e preparação para os desafios do Ensino Médio em um período de profundas transformações interpessoais.',
    objetivos: [
      'Aprofundar os conhecimentos científicos e pensamento abstrato',
      'Estimular a responsabilidade social, liderança e protagonismo juvenil',
      'Desenvolver competências socioemocionais para a adolescência',
      'Introduzir metodologias ativas de estudo e pesquisa acadêmica',
    ],
    metodologia: 'Foco na autonomia intelectual com laboratórios práticos, debates temáticos e projetos de iniciação científica orientados por professores especialistas.',
    diferenciais: [
      'Laboratórios de Ciências e Física equipados',
      'Olimpíadas de Conhecimento (Astronomia, Matemática, Robótica)',
      'Acompanhamento de orientação educacional próximo aos alunos',
      'Projetos de voluntariado e pastoral escolar',
    ],
    projetos: [
      { nome: 'Mostra de Iniciação Científica', descricao: 'Pesquisa e apresentação de projetos inovadores para a comunidade escolar.' },
      { nome: 'Simulações da ONU / Debates', descricao: 'Desenvolvimento de oratória e geopolítica.' },
    ],
  },
  {
    _id: 'modalidade-ensino-medio',
    _type: 'modalidadeEnsino',
    nome: 'Ensino Médio',
    slug: { _type: 'slug', current: 'ensino-medio' },
    faixaEtaria: '1ª à 3ª série (15 a 17 anos)',
    resumo: 'Excelência preparatória para os vestibulares mais concorridos e ENEM, aliada à formação ética, visão de futuro e consolidação do projeto de vida do estudante.',
    objetivos: [
      'Garantir alto rendimento no ENEM e vestibulares de excelência',
      'Consolidar a maturidade intelectual, discernimento moral e liderança',
      'Orientar o projeto de vida e escolhas profissionais com clareza',
      'Estimular o pensamento crítico diante dos desafios contemporâneos',
    ],
    metodologia: 'Itinerários formativos flexíveis, simulados diagnósticos frequentes com correção TRI (padrão ENEM) e mentoria individualizada para vestibulares de alta concorrência.',
    diferenciais: [
      'Simulados periódicos com devolutiva analítica detalhada',
      'Programa de Orientação Vocacional e Feira das Profissões',
      'Plantões de dúvidas e salas de estudo climatizadas',
      'Alto índice de aprovação nas principais universidades públicas e privadas',
    ],
    projetos: [
      { nome: 'Foco ENEM & Redação Nota Mil', descricao: 'Oficinas semanais de redação com correção personalizada.' },
      { nome: 'Mentorias de Carreira', descricao: 'Encontros com ex-alunos aprovados em Medicina, Direito, Engenharia e áreas de ponta.' },
    ],
  },

  // 4. Diferenciais Pedagógicos
  {
    _id: 'diferencial-1',
    _type: 'diferencial',
    titulo: 'Formação Humana e Valores',
    icone: 'Heart',
    textoCurto: 'Educação alicerçada no respeito, acolhimento, ética e responsabilidade social.',
    ordem: 1,
  },
  {
    _id: 'diferencial-2',
    _type: 'diferencial',
    titulo: 'Tradição dos 70 Anos',
    icone: 'Award',
    textoCurto: 'Sete décadas de história moldando cidadãos conscientes e preparados para o futuro.',
    ordem: 2,
  },
  {
    _id: 'diferencial-3',
    _type: 'diferencial',
    titulo: 'Programa Bilíngue e Global',
    icone: 'Globe',
    textoCurto: 'Imersão no idioma inglês com foco em fluência, cultura e certificações internacionais.',
    ordem: 3,
  },
  {
    _id: 'diferencial-4',
    _type: 'diferencial',
    titulo: 'Tecnologia Educacional Avançada',
    icone: 'Cpu',
    textoCurto: 'Laboratórios modernos, Plataforma Iônica e ecossistema digital integrado.',
    ordem: 4,
  },
  {
    _id: 'diferencial-5',
    _type: 'diferencial',
    titulo: 'Suporte Socioemocional',
    icone: 'Users',
    textoCurto: 'Equipe multidisciplinar de psicologia e orientação pedagógica permanente.',
    ordem: 5,
  },
  {
    _id: 'diferencial-6',
    _type: 'diferencial',
    titulo: 'Segurança e Estrutura Completa',
    icone: 'ShieldCheck',
    textoCurto: 'Monitoramento 24h, amplos espaços esportivos, auditório e ambientes climatizados.',
    ordem: 6,
  },

  // 5. Espaços para Locação
  {
    _id: 'espaco-ginasio',
    _type: 'espacoLocacao',
    nome: 'Ginásio Poliesportivo Sagrado',
    capacidade: 'Até 1.200 pessoas (arquibancadas e quadra)',
    descricao: 'Espaço multieventos coberto com piso esportivo oficial, tabela de basquete profissional, redes de vôlei/futsal, sonorização e vestiários completos.',
    itensDisponiveis: [
      'Quadra poliesportiva com marcação oficial',
      'Arquibancada coberta para 800 espectadores',
      'Sistema de som e microfones sem fio',
      'Vestiários masculino, feminino e adaptados',
      'Iluminação em LED de alta potência',
    ],
    usosPossiveis: [
      'Torneios e campeonatos esportivos',
      'Cerimônias de formatura e graduação',
      'Feiras comunitárias e exposições',
      'Apresentações culturais e musicais',
    ],
    condicoesGerais: 'Disponível para locação aos finais de semana e noites em dias úteis mediante agendamento prévio com a Secretaria.',
  },
  {
    _id: 'espaco-auditorio',
    _type: 'espacoLocacao',
    nome: 'Auditório Principal Ir. Tereza',
    capacidade: 'Até 450 pessoas em poltronas estofadas',
    descricao: 'Ambiente climatizado com acústica profissional, palco elevado, camarim privado, projetor de alta resolução e mesa de controle multimídia.',
    itensDisponiveis: [
      '450 poltronas reclináveis estofadas com prancheta',
      'Palco modular iluminado com varanda técnica',
      'Projetor de alta definição e telão retrátil',
      'Mesa de som e microfones',
      'Camarim climatizado com banheiro privativo',
      'Foyer para recepção e coffee break',
    ],
    usosPossiveis: [
      'Palestras, simpósios e congressos',
      'Peças teatrais e recitais de música',
      'Reuniões corporativas e convenções',
      'Lançamentos de livros e exibições',
    ],
    condicoesGerais: 'Locação com acompanhamento técnico incluído. Reservas abertas mediante consulta de disponibilidade.',
  },

  // 6. Ambientes da Estrutura Física
  {
    _id: 'estrutura-salas',
    _type: 'paginaEstrutura',
    ambiente: 'Salas de Aula Climatizadas',
    descricao: 'Ambientes amplos, iluminados, equipados com lousas digitais, projetores e mobiliário ergonômico.',
    ordem: 1,
  },
  {
    _id: 'estrutura-biblioteca',
    _type: 'paginaEstrutura',
    ambiente: 'Biblioteca Interativa',
    descricao: 'Acervo completo, salas de estudo individual e em grupo, e cantinhos de leitura infantil.',
    ordem: 2,
  },
  {
    _id: 'estrutura-labs',
    _type: 'paginaEstrutura',
    ambiente: 'Laboratórios de Ciências e Informática',
    descricao: 'Bancadas equipadas para experimentos de Física, Química e Biologia, além de computadores atualizados para robótica.',
    ordem: 3,
  },
  {
    _id: 'estrutura-ginasio',
    _type: 'paginaEstrutura',
    ambiente: 'Complexo Esportivo e Ginásio',
    descricao: 'Quadras externas e ginásio coberto preparados para modalidades coletivas e treinamentos.',
    ordem: 4,
  },
  {
    _id: 'estrutura-auditorio',
    _type: 'paginaEstrutura',
    ambiente: 'Auditório Principal',
    descricao: 'Estrutura completa com 450 lugares para palestras, teatro, concertos e formaturas.',
    ordem: 5,
  },
  {
    _id: 'estrutura-patio',
    _type: 'paginaEstrutura',
    ambiente: 'Pátios Arborizados e Parque Infantil',
    descricao: 'Áreas de convivência ao ar livre cercadas por jardins e brinquedos seguros para o recreio.',
    ordem: 6,
  },
]

async function seed() {
  console.log(`\n🚀 Conectando ao Sanity (Projeto: ${projectId}, Dataset: ${dataset})...`)
  const transaction = client.transaction()

  for (const doc of documents) {
    transaction.createOrReplace(doc)
    console.log(`  ✓ Preparando: [${doc._type}] ${doc.nome || doc.ambiente || doc.titulo || doc.title || doc._id}`)
  }

  console.log('\n📦 Gravando documentos no Sanity...')
  await transaction.commit()
  console.log('🎉 Sucesso! Todos os documentos foram cadastrados no Sanity!')
  console.log('Agora você pode abrir o Sanity Studio (/studio) e verá todos os itens listados para editar ou excluir.\n')
}

seed().catch((err) => {
  console.error('\n❌ Erro ao popular Sanity:', err.message)
  process.exit(1)
})
