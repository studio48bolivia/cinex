import Navbar from '@/components/Navbar'
import Ticker from '@/components/Ticker'
import Hero from '@/components/Hero'
import CicloSection from '@/components/CicloSection'
import SectionCards from '@/components/SectionCards'
import FestivalBlock from '@/components/FestivalBlock'
import Footer from '@/components/Footer'
import { client } from '@/sanity/lib/client'
import { homePageQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export default async function HomePage() {
  const homeData = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    ? await client.fetch(homePageQuery).catch(() => null)
    : null

  return (
    <>
      <Navbar />
      <Ticker />
      <main>
        <Hero
          videoUrl={homeData?.heroVideoUrl}
          title={homeData?.heroTitle}
          subtitle={homeData?.heroSubtitle}
          supertitle={homeData?.heroSupertitle}
          cta1Label={homeData?.heroCta1Label}
          cta1Href={homeData?.heroCta1Href}
          cta2Label={homeData?.heroCta2Label}
          cta2Href={homeData?.heroCta2Href}
        />
        <CicloSection />
        <SectionCards />
        <FestivalBlock />
      </main>
      <Footer />
    </>
  )
}
