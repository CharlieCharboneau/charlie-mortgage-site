import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import LenderCarousel from '@/components/sections/LenderCarousel';
import ContactForm from '@/components/sections/ContactForm'
import GoogleReviews from '@/components/sections/GoogleReviews';


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <GoogleReviews />
      <LenderCarousel />
      <Services />
      <ContactForm />
    </main>
  )
}