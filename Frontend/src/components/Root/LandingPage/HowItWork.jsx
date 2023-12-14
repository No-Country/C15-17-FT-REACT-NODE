import { IconArrowLightDown } from "../../icons/IconArrowLightDown";
import { IconSearch } from "../../icons/IconSearch";
import { LinkButton } from "../../ui/LinkButton";

export function HowItWork() {
  return (
    <section className="bg-yellow-200 w-full h-screen rounded-xl flex flex-col items-center pt-4 overflow-hidden px-6 lg:px-12 relative">

    <h4 className="flex items-center gap-x-1 font-semibold">
      ¿Como funciona? <IconArrowLightDown />
    </h4>
    
    <section className="flex flex-col lg:flex-row lg: w-full items-center justify-center h-screen pt-6 lg:pt-0">
      
     
    
        <div className=" w-full flex-1 relative">
          <img src="/images/teams.svg"/>
          <div className="absolute top-1/2 -translate-1/2 bg-white shadow-lg text-primary px-4 lg:px-8 lg:py-4 py-2 rounded-full flex items-center gap-x-4 left-24">
            <IconSearch />
            <p className="text-xs lg:text-xl font-semibold">los grandes del <br/>
              futbol argentino
            </p>
          </div>
        </div>

        <div className="flex-1 text-primary flex flex-col lg:gap-y-6 gap-y-3 items-center text-center">
            <h2 className="text-3xl lg:text-6xl font-bold">Busca en grande</h2>
            <p className="w-auto lg:w-96 mx-auto lg:text-xl text-lg">¿Qué equipo es tu favorito? Encuentra a los grandes iconos del fútbol argentino y paseate por sus grandes historias, como "River Plate, Boca Juniors etc.". </p>
            <LinkButton color='blue' href='/auth/register' className='text-yellow-300 px-6 py-2'>
              Comenzar
            </LinkButton>
        </div>
    </section>

</section>
  )
}
