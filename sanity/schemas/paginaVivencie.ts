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
      initialValue: 'Vivencie o Sagrado',
    }),
    defineField({
      name: 'subtituloBanner',
      title: 'Subtítulo do Banner',
      type: 'text',
      rows: 2,
      initialValue: 'Mais do que salas de aula: um espaço acolhedor de convivência, desenvolvimento de virtudes e memórias para toda a vida.',
    }),
    defineField({
      name: 'tituloIntro',
      title: 'Título da Seção Introdutória',
      type: 'string',
      initialValue: 'Um Ambiente Onde Cada Aluno se Sente em Casa',
    }),
    defineField({
      name: 'textoIntro1',
      title: 'Texto Introdutório - Parágrafo 1',
      type: 'text',
      rows: 3,
      initialValue: 'No Colégio Sagrado Coração de Jesus, o aprendizado vai além dos livros. Acreditamos que o conhecimento floresce em um ambiente seguro, acolhedor e repleto de afeto.',
    }),
    defineField({
      name: 'textoIntro2',
      title: 'Texto Introdutório - Parágrafo 2',
      type: 'text',
      rows: 3,
      initialValue: 'Nossa rotina é planejada para equilibrar qualidade acadêmica, práticas esportivas, manifestações culturais e momentos de reflexão e cidadania.',
    }),
    defineField({
      name: 'pilares',
      title: '4 Pilares da Vida Escolar',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icone', type: 'string', title: 'Ícone (Heart, Users, Music, Sun)' },
            { name: 'titulo', type: 'string', title: 'Título do Pilar' },
            { name: 'descricao', type: 'text', rows: 2, title: 'Descrição do Pilar' },
          ],
        },
      ],
    }),
  ],
})
