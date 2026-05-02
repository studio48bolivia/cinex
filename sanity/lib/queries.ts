export const homePageQuery = `*[_type == "homePage"][0]{
  heroVideoUrl,
  heroSupertitle,
  heroTitle,
  heroSubtitle,
  heroCta1Label,
  heroCta1Href,
  heroCta2Label,
  heroCta2Href,
}`

export const archiveMaterialsQuery = `*[_type == "archiveMaterial"] | order(_createdAt desc){
  _id,
  title,
  description,
  author,
  country,
  type,
  license,
  fileUrl,
}`

export const laboratorioPageQuery = `*[_type == "laboratorioPage"][0]{
  tools[]{
    name,
    description,
    category,
    url,
    license,
  }
}`

export const manifiestoPageQuery = `*[_type == "manifiestoPage"][0]{
  content,
}`

export const festivalPageQuery = `*[_type == "festivalPage"][0]{
  title,
  subtitle,
  categories[]{
    name,
    description,
  }
}`

export const footerSettingsQuery = `*[_type == "footerSettings"][0]{
  allies[]{
    name,
    description,
    url,
  }
}`

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  title,
  description,
  ogImageUrl,
}`
