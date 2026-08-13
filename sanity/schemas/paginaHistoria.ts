import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'paginaHistoria',
  title: 'Página: Nossa História',
  type: 'document',
  fields: [
    defineField({
      name: 'tituloBanner',
      title: 'Título do Banner',
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
      rows: 3,
      initialValue: 'Fundado em 1956 com a missão de oferecer uma educação cristã humanizada, o Colégio Sagrado Coração de Jesus consolidou-se como referência pedagógica em Rio Grande - RS. Durante 70 anos, acompanhamos as profundas transformações da sociedade sem jamais abrir mão de nossos pilares fundacionais.',
    }),
    defineField({
      name: 'textoInstitucional2',
      title: 'Texto Institucional - Parágrafo 2',
      type: 'text',
      rows: 3,
      initialValue: 'Aqui, a tradição caminha lado a lado com a inovação: integrando recursos tecnológicos de ponta, laboratórios modernos e programa bilíngue ao acolhimento atento que faz cada aluno sentir-se único e valorizado.',
    }),
    defineField({
      name: 'imagemDestaque',
      title: 'Imagem de Destaque',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Texto Alternativo' }],
    }),
    defineField({
      name: 'missao',
      title: 'Nossa Missão',
      type: 'text',
      rows: 3,
      initialValue: 'Promover a formação humana integral por meio da excelência acadêmica, da evangelização e da vivência de valores cristãos, capacitando o estudante a agir no mundo de forma ética e solidária.',
    }),
    defineField({
      name: 'visao',
      title: 'Nossa Visão',
      type: 'text',
      rows: 3,
      initialValue: 'Ser reconhecido como um ecossistema educacional de excelência que alia tradição pedagógica, inovação metodológica e desenvolvimento socioemocional de alto nível.',
    }),
    defineField({
      name: 'valores',
      title: 'Nossos Valores',
      type: 'text',
      rows: 3,
      initialValue: 'Acolhimento afetivo, ética, respeito à diversidade, compromisso com o saber científico, responsabilidade ambiental e amor ao próximo em cada atitude.',
    }),
    defineField({
      name: 'fotosHistoricas',
      title: 'Fotos da Galeria Histórica',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Texto Alternativo' },
            { name: 'descricao', type: 'string', title: 'Legenda / Descrição da Foto' },
          ],
        },
      ],
    }),
  ],
})
