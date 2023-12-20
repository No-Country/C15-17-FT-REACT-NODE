import { Link } from "react-router-dom";
import { ButtonSave } from "./ButtonSave";

export function Pin ({ pin, isSave=false }) {
    return (
        <article  style={{ breakInside: 'avoid' }}>
            <Link to={`/pin/${pin._id}`} className=" group  cursor-pointer flex flex-col">
                <picture className="relative">
                    <img src={pin.image.url} className=' rounded-xl block'/>
                    <div className={`${isSave && 'hidden'} w-full h-full absolute top-0 left-0 bg-black/40 rounded-xl flex justify-end items-start px-4 py-2 opacity-0 group-hover:opacity-100 transition-all`}>
                        <ButtonSave onClick={(e) => e.stopPropagation()} pinId={pin._id}/>
                    </div>
                </picture>
                <h4 className="text-sm font-medium w-full truncate pt-2">{pin?.title}</h4>
                <div className=" flex-col gap-y-2 py-2">
                    <div className="flex gap-x-1 items-center">
                        <img src={pin?.photographer?.avatar ? pin.photographer.avatar : '/images/placeholder.webp'} className='w-8 h-8 object-cover rounded-full'/>
                        <h5 className="text-sm">{pin.photographer.name} {pin.photographer?.lastName}</h5>
                    </div>
                </div>
            </Link>
        </article>
    )
}