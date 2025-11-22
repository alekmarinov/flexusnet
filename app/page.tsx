import HeroCarousel from '@/components/HeroCarousel'
import ServiceRequestForm from '@/components/ServiceRequestForm'
import Recommendations from '@/components/Recommendations'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ServiceRequestForm />
      <Recommendations />
      <ContactSection />
    </>
  )
}

