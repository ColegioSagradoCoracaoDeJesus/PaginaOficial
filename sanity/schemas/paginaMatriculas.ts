import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'paginaMatriculas',
  title: 'Página: Matrículas & Vagas',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título do Banner',
      type: 'string',
      initialValue: 'Matrículas & Rematrículas 2026/2027',
    }),
    defineField({
      name: 'subtitulo',
      title: 'Subtítulo do Banner',
      type: 'text',
      rows: 2,
      initialValue: 'Garanta a vaga do seu filho em uma instituição com 70 anos de tradição, valores e excelência educacional.',
    }),
    defineField({
      name: 'passos',
      title: 'Etapas do Processo de Matrícula',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'numero', type: 'number', title: 'Número do Passo' },
            { name: 'titulo', type: 'string', title: 'Título do Passo' },
            { name: 'descricao', type: 'text', rows: 2, title: 'Descrição' },
          ],
        },
      ],
    }),
    defineField({
      name: 'documentosNecessarios',
      title: 'Documentos Necessários',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'duvidasFrequentes',
      title: 'Dúvidas Frequentes (FAQ)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'pergunta', type: 'string', title: 'Pergunta' },
            { name: 'resposta', type: 'text', rows: 3, title: 'Resposta' },
          ],
        },
      ],
    }),
  ],
})
