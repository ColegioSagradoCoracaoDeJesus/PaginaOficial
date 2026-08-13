import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'paginaVivencie',
  title: 'Página: Vivencie o Sagrado',
  type: 'document',
  fields: [
    defineField({
      name: 'tituloBanner',
      title: 'Título do Banner',
      type: 'string',
      initialValue: 'Vivencie o Sagrado',
    }),
    defineField({
      name: 'subtituloBanner',
      title: 'Subtítulo do Banner',
      type: 'text',
      rows: 2,
      initialValue: 'Mais do que salas de aula: um espaço de convivência, desenvolvimento de virtudes e memórias inesquecíveis para toda a vida.',
    }),
    defineField({
      name: 'tituloIntro',
      title: 'Título da Introdução',
      type: 'string',
      initialValue: 'Um Ambiente Onde Cada Aluno se Sente em Casa',
    }),
    defineField({
      name: 'textoIntro1',
      title: 'Texto Introdução - Parágrafo 1',
      type: 'text',
      rows: 3,
      initialValue: 'No Colégio Sagrado Coração de Jesus, o aprendizado vai além dos livros. Acreditamos que o conhecimento floresce em um ambiente seguro, acolhedor e repleto de afeto.',
    }),
    defineField({
      name: 'textoIntro2',
      title: 'Texto Introdução - Parágrafo 2',
      type: 'text',
      rows: 3,
      initialValue: 'Nossa rotina é planejada para equilibrar rigor acadêmico, práticas esportivas, manifestações artísticas e momentos de pastoral que conectam a juventude a valores elevados.',
    }),
    defineField({
      name: 'imagemDestaque',
      title: 'Imagem de Destaque',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Texto Alternativo' }],
    }),
    defineField({
      name: 'pilares',
      title: 'Pilares da Vida Escolar',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'titulo', type: 'string', title: 'Título do Pilar' },
            { name: 'descricao', type: 'text', rows: 3, title: 'Descrição' },
            {
              name: 'icone',
              type: 'string',
              title: 'Ícone',
              description: 'Opções: Heart, Users, Music, Sun, Sparkles, BookOpen',
              initialValue: 'Heart',
            },
          ],
        },
      ],
    }),
  ],
})
