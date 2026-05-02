import { defineField, defineType } from 'sanity'

export const archiveMaterial = defineType({
  name: 'archiveMaterial',
  title: 'Material del archivo',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string', validation: r => r.required() }),
    defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 4 }),
    defineField({ name: 'author', title: 'Autor / Cineasta', type: 'string' }),
    defineField({ name: 'country', title: 'País', type: 'string' }),
    defineField({ name: 'type', title: 'Tipo', type: 'string',
      options: { list: [
        { title: 'Metraje', value: 'footage' },
        { title: 'Proyecto', value: 'project' },
        { title: 'Película', value: 'film' },
      ]}
    }),
    defineField({ name: 'license', title: 'Licencia', type: 'string',
      options: { list: ['CC BY-SA 4.0', 'CC BY 4.0', 'CC BY-NC-SA 4.0'] }
    }),
    defineField({ name: 'fileUrl', title: 'Enlace al archivo', type: 'url' }),
  ],
})
