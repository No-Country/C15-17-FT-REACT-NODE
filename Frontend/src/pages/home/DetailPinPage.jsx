import { IconArrowLeft } from "../../components/icons/IconArrowLeft"
import { PinList } from "../../components/shared/PinList"
import { Button } from "../../components/ui/Button"
import { LinkButton } from "../../components/UI/LinkButton"
import { usePins } from "../../hooks/usePins"

const pin =  {
    "id": 2,
    "username": "usuario2",
    "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "title" : "Lionel Andres Messi",
    "hora": "09:45:00",
    "image": "https://i.pinimg.com/originals/b9/02/4b/b9024be8871f4d37803b35d260f92986.jpg"
  } 

export function DetailPagePin () {

    const {data, isLoading} = usePins()

    if(isLoading) return <div>Loading...</div>

    return (
        <section className="relative px-4 lg:px-0">
            
            <LinkButton className='fixed top-28 rounded-full px-0 py-0 p-0.5 left-4 z-50' href='/'>
                <IconArrowLeft />
            </LinkButton>

            <article className="flex flex-col lg:flex-row items-start w-full  pt-6 justify-center gap-8">
                <picture className="w-72 lg:w-[28rem] lg:rounded-tl-3xl lg:rounded-bl-3xl overflow-hidden mx-auto lg:mx-0">
                    <img src={pin.image} />
                </picture>
                <section className="flex flex-col gap-y-6  h-full">
                    <div className="flex justify-between items-center w-full">
                        <div>...</div>
                        <Button color='blue' >Guardar</Button>
                    </div>
                    <h2 className="text-3xl font-semibold">{pin.title}</h2>
                    <p className="w-auto lg:w-96 text-gray-600">{pin.descripcion}</p>
                </section>
            </article>

            <section className="flex flex-col gap-y-4 items-center py-12">
                <h3 className="text-xl font-semibold">Más para explorar</h3>
                <PinList pins={data}/>
            </section>
        
        </section>
    )
}