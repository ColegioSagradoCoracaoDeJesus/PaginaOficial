import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'paginaTecnologia',
  title: 'Portal do Aluno & Plataformas',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título do Banner Principal',
      type: 'string',
      initialValue: 'Portal do Aluno & Plataformas Digitais',
    }),
    defineField({
      name: 'subtitulo',
      title: 'Subtítulo do Banner',
      type: 'text',
      rows: 2,
      initialValue: 'Acesse os aplicativos oficiais de comunicação escolar, materiais didáticos e ambiente virtual de aprendizagem utilizados pelo Sagrado.',
    }),
    defineField({
      name: 'avisoTransparencia',
      title: 'Aviso Institucional sobre os Aplicativos',
      type: 'text',
      rows: 2,
      initialValue: 'O Colégio Sagrado Coração de Jesus utiliza e homologa essas plataformas especializadas para garantir segurança, acompanhamento pedagógico e comunicação eficiente com toda a comunidade escolar.',
    }),
    defineField({
      name: 'textoSuporteWhats',
      title: 'Texto de Apoio / Suporte via WhatsApp',
      type: 'string',
      initialValue: 'Dúvidas com usuário, primeiro acesso ou redefinição de senha? Fale diretamente com a Secretaria pelo WhatsApp oficial.',
    }),
    defineField({
      name: 'plataformas',
      title: 'Aplicativos e Plataformas Cadastradas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'nome', type: 'string', title: 'Nome do Aplicativo / Plataforma (Ex: Diário Escola — Pais EF)' },
            { name: 'publicoAlvo', type: 'string', title: 'Público-Alvo (Ex: Pais e Responsáveis - Ensino Fundamental)' },
            { name: 'descricao', type: 'text', rows: 2, title: 'Descrição / Finalidade' },
            { name: 'linkWeb', type: 'url', title: 'Link de Acesso Online no Navegador (Web)' },
            { name: 'linkPlayStore', type: 'url', title: 'Link na Google Play Store (Android)' },
            { name: 'linkAppStore', type: 'url', title: 'Link na App Store (iPhone / iOS)' },
            {
              name: 'iconeTipo',
              type: 'string',
              title: 'Tipo de Ícone',
              description: 'Opções: Smartphone, Laptop, Users, GraduationCap, BookOpen',
              initialValue: 'Smartphone',
            },
            {
              name: 'recursos',
              type: 'array',
              of: [{ type: 'string' }],
              title: 'Recursos / Funcionalidades do App (Lista de itens)',
            },
            { name: 'ordem', type: 'number', title: 'Ordem de Exibição', initialValue: 0 },
            { name: 'ativo', type: 'boolean', title: 'Exibir no Site?', initialValue: true },
          ],
        },
      ],
    }),
  ],
})
