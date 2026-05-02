import { defineField, defineType } from 'sanity'

export const manifiestoPage = defineType({
  name: 'manifiestoPage',
  title: 'Página Manifiesto',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      title: 'Contenido',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Texto del manifiesto — editor de texto completo'
    }),
  ],
})
