import { LinkButton } from "../../ui/LinkButton";

export function EndSection() {
  return (
    <section className='h-screen bg-grid-players w-full bg-center bg-contain relative '>
        <div className="absolute w-full h-full bg-black/70 px-4 lg:px-0">
          <div className="flex h-full items-center justify-center flex-col gap-y-4">
            <h3 className="text-white text-4xl lg:text-6xl font-semibold text-center">Registrate para <br />comenzar tu aventura</h3>
            <LinkButton href='/auth/register' color='blue' className='px-6 text-xl'>Comenzar ahora</LinkButton>
          </div>
        </div>
      </section>
  )
}
