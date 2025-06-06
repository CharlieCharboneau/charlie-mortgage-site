import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import LenderCarousel from "@/components/sections/LenderCarousel";
import ContactForm from "@/components/sections/ContactForm";
import GoogleReviews from "@/components/sections/GoogleReviews";

const SectionBgGradient = "bg-gradient-to-b from-neu-base to-slate-300";
const AltSectionBgGradient = "bg-gradient-to-b from-slate-300 to-neu-base";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero bgGradient={SectionBgGradient} />
      <About bgGradient={AltSectionBgGradient} />
      <GoogleReviews bgGradient={SectionBgGradient} />
      <LenderCarousel bgGradient={AltSectionBgGradient} />
      <Services bgGradient={SectionBgGradient} />
      <ContactForm bgGradient={AltSectionBgGradient} />
    </main>
  );
}
