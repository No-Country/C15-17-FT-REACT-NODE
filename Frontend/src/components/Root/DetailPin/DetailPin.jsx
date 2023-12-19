import { IconArrowLightDown } from "../../icons/IconArrowLightDown";
import { IconZoomScan } from "../../icons/IconZoomScan";
import { ButtonIcon } from "../../ui/ButtonIcon";
import { Button } from "../../ui/Button";
import { Input } from "../../UI/Input";
import { useAuth } from "../../../hooks/useAuth";

export function DetailPin({ pin }) {

  const { user } = useAuth()

  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 w-full  pt-6 lg:px-44 gap-6  ">
                <picture className="w-72 lg:w-[28rem] lg:rounded-tl-3xl lg:rounded-bl-3xl overflow-hidden mx-auto lg:mx-0 relative">
                    <img src={pin.image.url} />
                    <ButtonIcon className='absolute bottom-4 right-4 p-3 bg-gray-100/80 hover:bg-gray-100'>
                        <IconZoomScan />
                    </ButtonIcon>
                </picture>
                <section className="flex flex-col gap-y-6  h-full">
                    
                    <div className="flex justify-between items-center w-full">
                        <div>...</div>
                        <Button color='blue' >Guardar</Button>
                    </div>

                    <div>
                        
                        <h2 className="text-2xl lg:text-3xl font-semibold mb-2">{pin.title}</h2>
                        <p className="w-auto lg:w-96 text-gray-600">{pin.description}</p>
                    </div>   

                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-x-2">
                        <img src={pin?.photographer?.avatar ? pin.photographer.avatar : '/images/placeholder.webp'} className='w-12 h-12 object-cover rounded-full'/>
                            <div>
                                <h3 className="font-semibold ">{pin.photographer.name} {pin.photographer?.lastName}</h3>
                                <p className="text-xs text-gray-600">@{pin.photographer.username}</p>
                            </div>
                        </div>
                        <Button>Seguir</Button>
                    </div>

                    <section className="w-full flex flex-col h-full justify-between gap-4">
                        <div className="flex justify-between items-center w-full">
                            <h3 className="font-semibold">Comentarios</h3>
                            <IconArrowLightDown />
                        </div>

                        <div className="flex gap-x-2 items-center">
                            <img src={user?.avatar ? user.avatar : '/images/placeholder.webp'} className='w-10 h-10 object-cover rounded-full'/>
                            <Input 
                                type='text'
                                name='comment'
                                placeholder='Agregar un comentario'
                            />
                        </div>

                    </section>


                    
                </section>
            </article>
  )
}
