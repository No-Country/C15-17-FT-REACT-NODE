import { LinkButton } from "../../ui/LinkButton";

export function SavesSection() {
  return (
        <section className="h-auto lg:h-screen bg-sky-light w-full flex  flex-col lg:flex-row items-center justify-between gap-y-6 lg:gap-x-12 px-6 py-6 lg:py-0">
          <div className="flex flex-col gap-y-2 lg:gap-y-8 text-center items-center justify-center flex-1">
            <h3 className="text-3xl lg:text-6xl text-green-dark font-bold">Guarda a tus equipos/jugadores que te gusten</h3>
            <p className="text-lg lg:text-2xl text-green-dark">Colecciona a tus favoritos para <br/>  poder compartirlos</p>
            <LinkButton href='/auth/register' color='green'>Empezar</LinkButton>
          </div>
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">

              
                <picture className="relative lg:w-96 lg:h-96">
                  <img src="/images/teams-save.webp" className=" object-cover rounded-3xl "/>
                  <div className="absolute top-0 left-0 w-full h-full bg-black/30 px-6 flex items-center rounded-3xl">
                    <p className="text-gray-100 text-4xl lg:text-5xl font-semibold">Mis jugadores favoritos del momento</p>
                  </div>
                </picture>
                
                <picture className="relative w-56 h-56 ml-24 overflow-hidden ">
                  <img src="/images/fields-save.webp" className=" object-cover rounded-3xl "/>
                  <div className="absolute top-0 left-0 w-full h-full bg-black/30 px-6 flex items-center rounded-3xl ">
                    <p className="text-gray-100 text-4xl font-semibold">Mis equipos</p>
                  </div>
                </picture>
              
                <picture className="relative w-48 h-48">
                  <img src="/images/iconic-save.webp" className=" object-cover rounded-3xl"/>
                  <div className="absolute top-0 left-0 w-full h-full bg-black/30 px-6 flex items-center rounded-3xl">
                    <p className="text-gray-100 text-2xl font-semibold">Arqueros inolvidables</p>
                  </div>
                </picture>
              
                <picture className="relative w-56 h-56 ml-24 md:ml-0">
                  <img src="/images/goalkeper-save.webp" className=" object-cover rounded-3xl"/>
                  <div className="absolute top-0 left-0 w-full h-full bg-black/30 px-6 flex items-center rounded-3xl">
                    <p className="text-gray-100 text-3xl font-semibold">Iconos del futbol argentino</p>
                  </div>
                </picture>
            </div>
       </section>

  )
}
