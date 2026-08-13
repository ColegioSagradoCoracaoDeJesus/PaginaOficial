import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'empresaParceira',
  title: 'Empresa Parceira & Convênio',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome da Empresa / Parceiro',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoria / Tipo de Parceria',
      type: 'string',
      description: 'Ex: Sistema de Ensino, Tecnologia, Bilinguismo, Convênio Corporativo, Uniformes',
      initialValue: 'Parceiro Educacional',
    }),
    defineField({
      name: 'logo',
      title: 'Logotipo do Parceiro',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Texto Alternativo' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descricao',
      title: 'Breve Descrição / Benefício para Alunos e Famílias',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'linkSite',
      title: 'Link do Site Oficial (Opcional)',
      type: 'url',
    }),
    defineField({
      name: 'ordem',
      title: 'Ordem de Exibição',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'ativo',
      title: 'Exibir no Site?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
