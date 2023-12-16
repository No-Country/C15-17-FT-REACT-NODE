import { LinkButton } from "../../ui/LinkButton";
import { NavLink } from "react-router-dom";


export function Nav () {
    return (
        <>
            <nav className="flex gap-x-6 items-center  w-full">
                <h3 className="font-semibold tracking-widest">LOGO</h3>
                <ul className="lg:flex gap-x-3 items-center hidden font-semibold ">
                    <li >
                        <NavLink 
                            to='/'    
                            className={({ isActive }) =>
                                isActive
                                ? "bg-primary text-white  transition-all rounded-3xl px-4 py-2"
                                : "hover:bg-primary hover:text-white text-black transition-all rounded-3xl px-4 py-2"
                            }>          
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/explore'    
                            className={({ isActive }) =>
                                isActive
                                ? "bg-primary text-white  transition-all rounded-3xl px-4 py-2"
                                : "hover:bg-primary hover:text-white text-black transition-all rounded-3xl px-4 py-2"
                            }>          
                            Explorar
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center gap-x-2">
               <LinkButton href='/auth/login' color='blue' className='whitespace-nowrap'>Iniciar sesión</LinkButton>
               <LinkButton href='/auth/register' className='whitespace-nowrap'>Registrarse</LinkButton>
            </div>
        </>
    
    )
}