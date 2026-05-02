import { defineField, defineType } from 'sanity'

export const festivalPage = defineType({
  name: 'festivalPage',
  title: 'Página Infinite Reel',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Subtítulo', type: 'text', rows: 3 }),
    defineField({
      name: 'categories',
      title: 'Categorías',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Nombre', type: 'string' },
          { name: 'description', title: 'Descripción', type: 'text', rows: 2 },
        ]
      }]
    }),
  ],
})
