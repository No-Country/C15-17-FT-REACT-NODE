import { IconChevronDown } from "../icons/IconChevronDown";
import { Link } from "react-router-dom";
import { Search } from "./Search";

export function Header () {
    return (
        <header className="fixed top-0 left-0 w-full bg-white flex items-center gap-x-72 justify-between px-6 py-4 z-50">
            <nav className="flex gap-x-6 items-center  w-full">
                <h3 className="font-semibold tracking-widest">LOGO</h3>
                <ul className="lg:flex gap-x-3 items-center hidden ">
                    <li className="bg-primary text-white px-4 py-2 rounded-3xl"><Link to='/' className="font-semibold">Inicio</Link></li>
                    <li className="py-2 px-4 hover:bg-primary hover:text-white transition-all rounded-3xl"><Link to='/' className="font-semibold">Explorar</Link></li>
                    <li className="py-2 px-4 hover:bg-primary hover:text-white transition-all rounded-3xl"><Link to='/pin-create' className="font-semibold">Crear</Link></li>
                </ul>
             <Search />
            </nav>
            <div className="hidden lg:flex items-center gap-x-2">
                <Link to='/perfil'>
                    <img src='https://placehold.co/50x50' className='rounded-full'/>
                </Link>
                <IconChevronDown />
            </div>
        </header>
    )
}