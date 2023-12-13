import { Hero } from "../../components/Home/LandingPage/Hero";

export function LandingPage() {
  return (
    <section className="w-full flex flex-col justify-center items-center pt-20">
       
       <Hero />

        <section className="bg-yellow-300 h-screen w-full rounded-xl text-center pt-12">
            section-how-it-works
        </section>
    </section>

  )
}
