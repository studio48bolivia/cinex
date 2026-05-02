import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Página de inicio',
  type: 'document',
  fields: [
    defineField({ name: 'heroVideoUrl', title: 'Vídeo de inicio (URL)', type: 'url',
      description: 'URL de YouTube, Vimeo o enlace directo al vídeo' }),
    defineField({ name: 'heroSupertitle', title: 'Supertítulo', type: 'string',
      description: 'Texto pequeño encima del título principal' }),
    defineField({ name: 'heroTitle', title: 'Título principal', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'Subtítulo', type: 'text', rows: 3 }),
    defineField({ name: 'heroCta1Label', title: 'Botón 1 — texto', type: 'string' }),
    defineField({ name: 'heroCta1Href', title: 'Botón 1 — enlace', type: 'string' }),
    defineField({ name: 'heroCta2Label', title: 'Botón 2 — texto', type: 'string' }),
    defineField({ name: 'heroCta2Href', title: 'Botón 2 — enlace', type: 'string' }),
  ],
})
