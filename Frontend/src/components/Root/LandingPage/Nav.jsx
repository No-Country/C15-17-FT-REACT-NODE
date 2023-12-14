import { LinkButton } from "../../ui/LinkButton";
import { Link } from "react-router-dom";


export function Nav () {
    return (
        <>
            <nav className="flex gap-x-6 items-center  w-full">
                <h3 className="font-semibold tracking-widest">LOGO</h3>
                <ul className="lg:flex gap-x-3 items-center hidden font-semibold ">
                    <li >
                        <Link to='/' className=" bg-primary text-white hover:text-white transition-all rounded-3xl px-4 py-2">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className="hover:bg-primary hover:text-white transition-all rounded-3xl px-4 py-2">
                            Explorar
                        </Link>
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