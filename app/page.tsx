import Navbar from '@/components/Navbar'
import Ticker from '@/components/Ticker'
import Hero from '@/components/Hero'
import CicloSection from '@/components/CicloSection'
import SectionCards from '@/components/SectionCards'
import FestivalBlock from '@/components/FestivalBlock'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Ticker />
      <main>
        <Hero />
        <CicloSection />
        <SectionCards />
        <FestivalBlock />
      </main>
      <Footer />
    </>
  )
}
