import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'paginaHistoria',
  title: 'Página: Nossa História',
  type: 'document',
  fields: [
    defineField({
      name: 'tituloBanner',
      title: 'Título do Banner Principal',
      type: 'string',
      initialValue: 'Nossa História & Propósito',
    }),
    defineField({
      name: 'subtituloBanner',
      title: 'Subtítulo do Banner',
      type: 'text',
      rows: 2,
      initialValue: 'Há sete décadas, o Colégio Sagrado Coração de Jesus dedica-se a formar cidadãos conscientes, éticos e preparados para transformar a sociedade.',
    }),
    defineField({
      name: 'tituloSecao',
      title: 'Título da Seção Institucional',
      type: 'string',
      initialValue: 'Sete Décadas Marcadas pelo Afeto, Rigor Acadêmico e Tradição',
    }),
    defineField({
      name: 'textoInstitucional1',
      title: 'Texto Institucional - Parágrafo 1',
      type: 'text',
      rows: 4,
      initialValue: 'Fundado em 1956 com a missão de oferecer uma educação humanizada e acolhedora, o Colégio Sagrado Coração de Jesus consolidou-se como referência pedagógica em Rio Grande - RS. Durante 70 anos, acompanhamos as profundas transformações da sociedade promovendo o respeito a todas as crenças, o acolhimento e a excelência no saber.',
    }),
    defineField({
      name: 'textoInstitucional2',
      title: 'Texto Institucional - Parágrafo 2',
      type: 'text',
      rows: 4,
      initialValue: 'Aqui, a tradição caminha lado a lado com a inovação: integrando recursos educacionais modernos ao acolhimento atento que faz cada aluno sentir-se único e valorizado.',
    }),
    defineField({
      name: 'imagemDestaque',
      title: 'Foto Principal da Seção Histórica',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Texto Alternativo da Foto' }],
    }),
    defineField({
      name: 'missao',
      title: 'Missão do Colégio',
      type: 'text',
      rows: 3,
      initialValue: 'Promover a formação humana integral por meio da excelência pedagógica, da ética, do respeito à diversidade e da vivência de valores humanos universais, capacitando o estudante a agir no mundo de forma ética e solidária.',
    }),
    defineField({
      name: 'visao',
      title: 'Visão do Colégio',
      type: 'text',
      rows: 3,
      initialValue: 'Ser reconhecido como um ecossistema educacional de excelência que alia tradição pedagógica, acolhimento humano e desenvolvimento socioemocional de alto nível.',
    }),
    defineField({
      name: 'valores',
      title: 'Valores Institucionais',
      type: 'text',
      rows: 3,
      initialValue: 'Acolhimento afetivo, ética, respeito à diversidade de crenças, compromisso com o saber científico, responsabilidade social e empatia em cada atitude.',
    }),
    defineField({
      name: 'fotosHistoricas',
      title: 'Galeria de Fotos Históricas (Linha do Tempo)',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Título / Descrição da Foto' },
            { name: 'descricao', type: 'string', title: 'Legenda / Ano' },
          ],
        },
      ],
    }),
  ],
})
