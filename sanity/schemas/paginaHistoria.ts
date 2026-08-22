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
    }),
    defineField({
      name: 'subtituloBanner',
      title: 'Subtítulo do Banner',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'tituloSecao',
      title: 'Título da Seção Institucional',
      type: 'string',
    }),
    defineField({
      name: 'textoInstitucional1',
      title: 'Texto Institucional — Parágrafo 1',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'textoInstitucional2',
      title: 'Texto Institucional — Parágrafo 2',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'imagemDestaque',
      title: 'Foto Principal da Seção Histórica',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Texto Alternativo' }],
    }),
    defineField({
      name: 'filosofiaTexto1',
      title: 'Filosofia — Frase de Destaque',
      type: 'text',
      rows: 3,
      description: 'Citação curta exibida em destaque na seção "Nossa Filosofia".',
    }),
    defineField({
      name: 'filosofiaTexto2',
      title: 'Filosofia — Texto Complementar',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'missao',
      title: 'Missão do Colégio',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'visao',
      title: 'Visão do Colégio',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'valoresIntroducao',
      title: 'Valores — Texto de Introdução',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'valoresLista',
      title: 'Valores Institucionais (Etiquetas)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Ex: Verdade, Justiça, Amizade, Sinceridade...',
    }),
    defineField({
      name: 'principiosEducacionais',
      title: 'Objetivos do Colégio',
      type: 'array',
      description: 'Os cartões exibidos na seção de princípios/objetivos pedagógicos, nesta ordem. Use os "Objetivos do Colégio" registrados no documento institucional oficial.',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'titulo', type: 'string', title: 'Título' },
            { name: 'descricao', type: 'text', title: 'Descrição', rows: 3 },
          ],
        },
      ],
      validation: (Rule) => Rule.max(5),
    }),
    defineField({
      name: 'fotosHistoricas',
      title: 'Galeria de Fotos Históricas',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Título / Descrição da Foto' },
            { name: 'descricao', type: 'string', title: 'Legenda' },
          ],
        },
      ],
    }),
  ],
})
