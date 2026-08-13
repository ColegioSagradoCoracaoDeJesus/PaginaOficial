import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'paginaSetentaAnos',
  title: 'Página: 70 Anos (Comemorações)',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge Superior',
      type: 'string',
      initialValue: '1956 — 2026 | Jubileu de Vinho',
    }),
    defineField({
      name: 'titulo',
      title: 'Título Principal do Banner',
      type: 'string',
      initialValue: '70 Anos Formando Gerações com Excelência, Acolhimento e Valores',
    }),
    defineField({
      name: 'subtitulo',
      title: 'Subtítulo do Banner',
      type: 'text',
      rows: 2,
      initialValue: 'Sete décadas construindo memórias, transformando vidas e reafirmando o compromisso com uma educação integral de verdade.',
    }),
    defineField({
      name: 'curiosidades',
      title: 'Curiosidades / Fatos Marcantes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'ano', type: 'string', title: 'Ano / Época' },
            { name: 'texto', type: 'text', rows: 2, title: 'Fato Marcante' },
          ],
        },
      ],
    }),
    defineField({
      name: 'programacao',
      title: 'Programação de Eventos dos 70 Anos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'data', type: 'string', title: 'Data do Evento (Ex: 15 de Setembro de 2026)' },
            { name: 'horario', type: 'string', title: 'Horário (Ex: 19h00)' },
            { name: 'titulo', type: 'string', title: 'Título do Evento' },
            { name: 'local', type: 'string', title: 'Local (Ex: Auditório Principal Ir. Tereza)' },
            { name: 'descricao', type: 'text', rows: 2, title: 'Descrição do Evento' },
            { name: 'ingresso', type: 'string', title: 'Informação sobre Convite / Ingresso' },
          ],
        },
      ],
    }),
  ],
})
