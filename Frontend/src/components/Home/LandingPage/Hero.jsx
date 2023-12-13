import { IconArrowLightDown } from "../../icons/IconArrowLightDown";
import { ButtonIcon } from "../../ui/ButtonIcon";

export function Hero() {
  return (
    <section className="h-[calc(100vh-190px)] overflow-hidden relative">
        <h1 className="text-5xl font-semibold text-center flex flex-col gap-y-3">
            Explora la Grandeza del Fútbol Argentino <br/>
            <span className="text-primary">
                Tu Plataforma Social Exclusiva
            </span>
        </h1>
        <section className="flex gap-x-4">
            <picture className="rounded-3xl overflow-hidden mt-16 ">
                <img className="h-[28rem] object-cover" src="/images/carp.webp"/>
            </picture>
            <picture className="rounded-3xl overflow-hidden mt-36">
                <img className="h-[28rem] object-cover" src="/images/cai.webp"/>
            </picture>
            <picture className="rounded-3xl overflow-hidden mt-56">
                <img className="h-[28rem] object-cover" src="/images/messi-player.webp"/>
            </picture>
            <picture className="rounded-3xl overflow-hidden mt-36">
                <img className="h-[28rem] object-cover" src="/images/carc.webp"/>
            </picture>
            <picture className="rounded-3xl overflow-hidden mt-16">
                <img className="h-[28rem] object-cover" src="/images/cabj.webp"/>
            </picture>
        </section>
        <div className="bg-radial-white w-full h-[160px] absolute bottom-0 left-0">

        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-pulse">
            <ButtonIcon color='blue' className='p-3'>
                <IconArrowLightDown />
            </ButtonIcon>
        </div>

    </section>
  )
}
