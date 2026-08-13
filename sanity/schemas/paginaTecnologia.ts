import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'paginaTecnologia',
  title: 'Página: Tecnologia Educacional',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título do Banner',
      type: 'string',
      initialValue: 'Tecnologia Educacional & Inovação',
    }),
    defineField({
      name: 'subtitulo',
      title: 'Subtítulo do Banner',
      type: 'text',
      rows: 2,
      initialValue: 'Conheça o ecossistema digital do Sagrado, plataformas integradas, laboratórios e recursos para alunos e professores.',
    }),
    defineField({
      name: 'recursos',
      title: 'Recursos e Plataformas Tecnológicas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'nome', type: 'string', title: 'Nome da Plataforma / Recurso' },
            { name: 'descricao', type: 'text', rows: 2, title: 'Descrição' },
            { name: 'linkAcesso', type: 'url', title: 'Link de Acesso (opcional)' },
          ],
        },
      ],
    }),
  ],
})
