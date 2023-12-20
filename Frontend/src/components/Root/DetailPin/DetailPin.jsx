import { IconArrowLightDown } from "../../icons/IconArrowLightDown";
import { ButtonSave } from "../../shared/ButtonSave";
import { useAuth } from "../../../hooks/useAuth";
import { InputComment } from "./InputComment";
import { ButtonLike } from "./ButtonLike";
import { Button } from "../../ui/Button";
import { Comment } from "./Comment";
import { Pin } from "./Pin";

export function DetailPin({ pin }) {

  const { user } = useAuth()

  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 w-full  pt-6 lg:px-44 gap-6  ">

               
                <Pin pinImage={pin.image.url}/>

                <section className="flex flex-col gap-y-6   ">
                    
                    <div className="flex justify-between items-center w-full">
                        <div>...</div>
                        <ButtonSave pinId={pin._id}/>
                    </div>

                     
                    <section className="w-full flex flex-col  h-72 gap-y-4 overflow-y-auto">

                        {/* Details pin */}
                        <div>
                            
                            <h2 className="text-2xl lg:text-3xl font-semibold mb-2">{pin.title}</h2>
                            <p className="w-auto lg:w-96 text-gray-600">{pin.description}</p>
                        </div>  
                        
                        {/* Photographer */}
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

                        {/* Comentarios   */}
                        <div className="space-y-6">

                                <div className="flex justify-between items-center w-full">
                                    <h3 className="font-semibold">Comentarios</h3>
                                    <IconArrowLightDown />
                                </div>

                                <section className="grid grid-cols-1 gap-y-8 ">
                                {
                                    !pin.comments.length 
                                    ? <p className="text-gray-400">Todavía no hay comentarios. Agrega uno para iniciar la conversación.</p>
                                    :
                                    <>
                                        {
                                            pin.comments.map(comment => (
                                                <Comment key={comment._id} comment={comment}/>
                                            ))
                                        }
                                    </>
                                }
                                </section>
                        </div>

                    </section>

                    {/* Actions Pin */}
                    <div className="space-y-3">
                            <div className="flex w-full items-center justify-between">
                                <p className="text-xl font-medium">{pin.comments.length} comentarios</p>
                                <div className="flex  items-center">
                                    <p className="font-medium">{pin.likes.length} Me gustas</p>
                                    <ButtonLike likes={pin.likes}/>
                                </div>
                            </div>
                            <div className="flex gap-x-2 items-center">
                                <img src={user?.avatar ? user.avatar : '/images/placeholder.webp'} className='w-10 h-10 object-cover rounded-full'/>
                               <InputComment />
                            </div>
                        </div>
                </section>

            </article>
  )
}
