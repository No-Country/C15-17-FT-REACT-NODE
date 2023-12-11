import { IconZoomScan } from "../../components/icons/IconZoomScan"
import { IconArrowLeft } from "../../components/icons/IconArrowLeft"
import { ButtonIcon } from "../../components/ui/ButtonIcon"
import { PinList } from "../../components/shared/PinList"
import { LinkIcon } from "../../components/ui/LinkIcon"
import { Button } from "../../components/ui/Button"
import { usePins } from "../../hooks/usePins"

const pin =  {
    "id": 2,
    "username": "usuario2",
    "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "title" : "Lionel Andres Messi",
    "hora": "09:45:00",
    "image": "https://i.pinimg.com/originals/b9/02/4b/b9024be8871f4d37803b35d260f92986.jpg",
    user : {
        name : 'Ricardo Pepe',
        username : 'ricardopepe23',
        avatar : 'https://placehold.co/80x80'
    }    
  } //Test pin
  
//TODO: refactorizar componente.  

export function DetailPagePin () {

    const {data, isLoading} = usePins()

    if(isLoading) return <div>Loading...</div>

    return (
        <section className="relative px-4 lg:px-0">
            
            <LinkIcon className='fixed top-28 left-4 z-50 bg-gray-100/80 p-3 hover:bg-gray-100' href='/'>
                <IconArrowLeft />
            </LinkIcon>

            <article className="flex flex-col lg:flex-row items-start w-full  pt-6 justify-center gap-8">
                <picture className="w-72 lg:w-[28rem] lg:rounded-tl-3xl lg:rounded-bl-3xl overflow-hidden mx-auto lg:mx-0 relative">
                    <img src={pin.image} />
                    <ButtonIcon className='absolute bottom-4 right-4 p-3 bg-gray-100/80 hover:bg-gray-100'>
                        <IconZoomScan />
                    </ButtonIcon>
                </picture>
                <section className="flex flex-col gap-y-6  h-full">
                    
                    <div className="flex justify-between items-center w-full">
                        <div>...</div>
                        <Button color='blue' >Guardar</Button>
                    </div>

                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-x-2">
                            <img src={pin.user.avatar} className='rounded-full'/>
                            <div>
                                <h3 className="font-semibold text-sm">{pin.user.name}</h3>
                                <p className="text-xs text-gray-600">@{pin.user.username}</p>
                            </div>
                        </div>
                        <Button>Seguir</Button>
                    </div>

                    <div>
                        
                        <h2 className="text-3xl font-semibold mb-2">{pin.title}</h2>
                        <p className="w-auto lg:w-96 text-gray-600">{pin.descripcion}</p>
                    </div>   

                    

                </section>
            </article>

            <section className="flex flex-col gap-y-4 items-center py-12">
                <h3 className="text-xl font-semibold">Más para explorar</h3>
                <PinList pins={data}/>
            </section>
        
        </section>
    )
}