import { SavesSection } from "../../components/Root/LandingPage/SavesSection";
import { EndSection } from "../../components/Root/LandingPage/EndSection";
import { HowItWork } from "../../components/Root/LandingPage/HowItWork";
import { Hero } from "../../components/Root/LandingPage/Hero";


export function LandingPage() {


  return (
    <section className="w-full flex flex-col justify-center items-center pt-20 overflow-hidden">
       
       <Hero />

       <HowItWork />

       <SavesSection />
       
       <EndSection />

    </section>

  )
}
