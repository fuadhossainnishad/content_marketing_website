import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ClientsAndDemand from '@/components/ClientsAndDemand'
import FeaturedWork from '@/components/FeaturedWork'
import Services from '@/components/Services'
import Pioneers from '@/components/Pioneers'
import WhatsNew from '@/components/WhatsNew'
import ReadyToRise from '@/components/ReadyToRise'
import Footer from '@/components/Footer'
import AnnouncementHeader from '@/components/AnnouncementHeader'
import Pioneer from '@/components/Pioneer'

export default function Home() {
  return (
    <main className='space-y-3 bg- px-4'>
      <AnnouncementHeader />
      <Navbar />
      <Hero />
      <ClientsAndDemand />
      <FeaturedWork />
      <Services />
      <Pioneers />
      <Pioneer />
      <WhatsNew />
      <ReadyToRise />
      <Footer />
    </main>
  )
}
