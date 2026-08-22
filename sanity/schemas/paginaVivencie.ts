import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'paginaVivencie',
  title: 'Página: Vivencie o Sagrado',
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
      name: 'tituloIntroducao',
      title: 'Título da Introdução',
      type: 'string',
    }),
    defineField({
      name: 'textoIntroducao1',
      title: 'Introdução — Parágrafo 1',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'textoIntroducao2',
      title: 'Introdução — Parágrafo 2',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'imagemIntroducao',
      title: 'Foto da Introdução',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Texto Alternativo' }],
    }),
    defineField({
      name: 'pilares',
      title: 'Pilares da Vida Escolar',
      type: 'array',
      description: 'Os 4 cartões de pilares (Pastoral, Convivência, Cultura, Rotina), nesta ordem.',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'titulo', type: 'string', title: 'Título' },
            { name: 'descricao', type: 'text', title: 'Descrição', rows: 3 },
          ],
        },
      ],
      validation: (Rule) => Rule.max(4),
    }),
  ],
})
