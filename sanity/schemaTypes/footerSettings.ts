import { defineField, defineType } from 'sanity'

export const footerSettings = defineType({
  name: 'footerSettings',
  title: 'Footer — Aliados',
  type: 'document',
  fields: [
    defineField({
      name: 'allies',
      title: 'Aliados institucionales',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Nombre', type: 'string' },
          { name: 'description', title: 'Descripción corta', type: 'string' },
          { name: 'url', title: 'Enlace', type: 'url' },
        ]
      }]
    }),
  ],
})
