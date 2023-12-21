import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { IconAdd } from "../icons/IconAdd";
import { IconGrid } from "../icons/IconGrid";
import { IconHome } from "../icons/IconHome";
import { IconUser } from "../icons/IconUser";

const navItems = [
    {
        id : 1,
        label : 'Inicio',
        href : '/',
        icon : <IconHome />
    },
    {
        id : 2,
        label : 'Explorar',
        href : '/explore',
        icon : <IconGrid />
    },
    {
        id : 3,
        label : 'Crear',
        href : '/pin-create',
        icon : <IconAdd />
    },
]


export function NavBar () {

    const { user } = useAuth()

    return (
        <div className="fixed lg:hidden bg-gray-100 bottom-0 left-0 w-full py-4 flex justify-center items-center gap-x-12 z-50 shadow-lg rounded-tr-lg rounded-tl-lg">
            {
                navItems.map(item => (
                    <NavLink 
                        key={item.id}
                        to={item.href} 
                        className={({isActive}) => 
                            isActive ? 'flex flex-col items-center text-primary'
                            : 'flex flex-col items-center text-gray-500 hover:text-white transition-colors'
                        }>
                        {item.icon}
                        <p className="font-semibold text-sm">{item.label}</p>
                    </NavLink>
                ))
            }
             <NavLink 
                to={`/perfil/${user._id}`} 
                className={({isActive}) => 
                    isActive ? 'flex flex-col items-center text-primary'
                    : 'flex flex-col items-center text-gray-500 hover:text-white transition-colors'}>
                    <IconUser />
                    <p className="font-semibold text-sm">Perfil</p>
            </NavLink>
            
        </div>
    )
}