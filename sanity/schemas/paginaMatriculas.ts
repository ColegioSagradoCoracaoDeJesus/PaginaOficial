import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'paginaMatriculas',
  title: 'Página: Matrículas',
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
      name: 'etiquetaBanner',
      title: 'Etiqueta do Banner',
      type: 'string',
      description: 'Ex: Ano Letivo 2027 — Vagas Abertas',
    }),
    defineField({
      name: 'passos',
      title: 'Passo a Passo da Matrícula',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'titulo', type: 'string', title: 'Título do Passo' },
            { name: 'descricao', type: 'text', title: 'Descrição', rows: 3 },
          ],
        },
      ],
      description: 'O número de cada passo (01, 02...) é gerado automaticamente pela ordem da lista.',
    }),
    defineField({
      name: 'documentosNecessarios',
      title: 'Documentos Necessários',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'faq',
      title: 'Perguntas Frequentes sobre Matrículas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'pergunta', type: 'string', title: 'Pergunta' },
            { name: 'resposta', type: 'text', title: 'Resposta', rows: 3 },
          ],
        },
      ],
    }),
  ],
})
