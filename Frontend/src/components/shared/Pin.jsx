import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export function Pin ({ image }) {
    return (
        <Link to='/pin/1' className="block group relative cursor-pointer">
            <img src={image} className=' rounded-xl block mb-[0.6em]'/>
            <div className="w-full h-full absolute top-0 left-0 bg-black/40 rounded-xl flex justify-end items-start px-4 py-2 opacity-0 group-hover:opacity-100 transition-all">
                <Button color='blue' className='translate-y-4 group-hover:translate-y-2'>Guardar</Button>
            </div>
        </Link>
    )
}