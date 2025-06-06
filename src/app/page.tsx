import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import LenderCarousel from '@/components/sections/LenderCarousel';


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <LenderCarousel />
      <Services />
    </main>
  )
}