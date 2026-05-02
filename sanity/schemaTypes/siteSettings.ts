import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Ajustes del sitio',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título del sitio', type: 'string' }),
    defineField({ name: 'description', title: 'Descripción (SEO)', type: 'text', rows: 3 }),
    defineField({ name: 'ogImageUrl', title: 'Imagen para redes sociales (URL)', type: 'url' }),
  ],
})
