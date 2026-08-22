import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'paginaTecnologia',
  title: 'Página: Tecnologia Educacional',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título do Banner Principal',
      type: 'string',
    }),
    defineField({
      name: 'subtitulo',
      title: 'Subtítulo do Banner',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'plataformas',
      title: 'Plataformas e Aplicativos',
      type: 'array',
      description: 'Um cartão por plataforma/app (ex: Plataforma Iônica, Diário Escola para pais, Diário Escola para professores).',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'nome', type: 'string', title: 'Nome da Plataforma/App' },
            { name: 'publicoAlvo', type: 'string', title: 'Público-Alvo', description: 'Ex: Pais do 1º ao 9º Ano e Ensino Médio' },
            { name: 'descricao', type: 'text', title: 'Descrição', rows: 3 },
            {
              name: 'recursos',
              title: 'Lista de Recursos',
              type: 'array',
              of: [{ type: 'string' }],
            },
            { name: 'iconeTipo', type: 'string', title: 'Identificador do Ícone', description: 'Ex: Smartphone, Laptop, Users' },
            { name: 'linkWeb', type: 'url', title: 'Link de Acesso Web' },
            { name: 'linkAppStore', type: 'url', title: 'Link na App Store' },
            { name: 'linkPlayStore', type: 'url', title: 'Link na Play Store' },
            { name: 'ordem', type: 'number', title: 'Ordem de Exibição', initialValue: 0 },
            { name: 'ativo', type: 'boolean', title: 'Ativo', initialValue: true },
          ],
        },
      ],
    }),
    defineField({
      name: 'avisoTransparencia',
      title: 'Aviso de Transparência sobre Plataformas de Terceiros',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'textoSuporteWhats',
      title: 'Texto de Suporte via WhatsApp',
      type: 'text',
      rows: 2,
    }),
  ],
})
