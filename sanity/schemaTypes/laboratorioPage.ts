import { defineField, defineType } from 'sanity'

export const laboratorioPage = defineType({
  name: 'laboratorioPage',
  title: 'Página Laboratorio',
  type: 'document',
  fields: [
    defineField({
      name: 'tools',
      title: 'Herramientas',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Nombre', type: 'string' },
          { name: 'description', title: 'Descripción', type: 'text', rows: 3 },
          { name: 'category', title: 'Categoría', type: 'string' },
          { name: 'url', title: 'Enlace', type: 'url' },
          { name: 'license', title: 'Licencia', type: 'string' },
        ]
      }]
    }),
  ],
})
