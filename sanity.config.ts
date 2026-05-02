import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'
import { apiVersion, dataset, projectId } from './sanity/env'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('CineXpress')
          .items([
            S.listItem().title('Página de inicio').child(
              S.document().schemaType('homePage').documentId('homePage')
            ),
            S.listItem().title('Ajustes del sitio').child(
              S.document().schemaType('siteSettings').documentId('siteSettings')
            ),
            S.divider(),
            S.listItem().title('Materiales del archivo').child(
              S.documentTypeList('archiveMaterial')
            ),
            S.divider(),
            S.listItem().title('Página Laboratorio').child(
              S.document().schemaType('laboratorioPage').documentId('laboratorioPage')
            ),
            S.listItem().title('Página Manifiesto').child(
              S.document().schemaType('manifiestoPage').documentId('manifiestoPage')
            ),
            S.listItem().title('Página Infinite Reel').child(
              S.document().schemaType('festivalPage').documentId('festivalPage')
            ),
            S.divider(),
            S.listItem().title('Footer — Aliados').child(
              S.document().schemaType('footerSettings').documentId('footerSettings')
            ),
          ])
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
