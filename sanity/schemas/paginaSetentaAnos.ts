import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'paginaSetentaAnos',
  title: 'Página: 70 Anos',
  type: 'document',
  fields: [
    defineField({
      name: 'etiquetaBanner',
      title: 'Etiqueta do Banner',
      type: 'string',
      description: 'Ex: 1956 — 2026 | Jubileu de Vinho',
    }),
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
      name: 'curiosidades',
      title: 'Curiosidades Históricas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'ano', type: 'string', title: 'Ano' },
            { name: 'texto', type: 'text', title: 'Curiosidade', rows: 3 },
          ],
        },
      ],
    }),
    defineField({
      name: 'programacao',
      title: 'Programação de Eventos Comemorativos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'data', type: 'string', title: 'Data' },
            { name: 'horario', type: 'string', title: 'Horário' },
            { name: 'titulo', type: 'string', title: 'Título do Evento' },
            { name: 'local', type: 'string', title: 'Local' },
            { name: 'descricao', type: 'text', title: 'Descrição', rows: 3 },
          ],
        },
      ],
    }),
  ],
})
