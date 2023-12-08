import { IconChevronDown } from "../icons/IconChevronDown";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import { DropDown } from "./Dropdown";
import { Search } from "./Search";


const itemsConfig = [
    {
        id : 1,
        label : 'Mi perfil',
        href : '/perfil'
    },
    {
        id : 2,
        label : 'Salir',
        href : '/auth/login'
    }
]

export function Header () {
    return (
        <header className="fixed top-0 left-0 w-full bg-white flex items-center gap-x-72 justify-between px-6 py-4 z-50">
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
                    <li >
                        <Link to='/pin-create' className="hover:bg-primary hover:text-white transition-all rounded-3xl px-4 py-2">
                            Crear
                        </Link>
                    </li>
                </ul>
             <Search />
            </nav>
            <div className="hidden lg:flex items-center gap-x-2">
                <Link to='/perfil'>
                    <img src='https://placehold.co/50x50' className='rounded-full'/>
                </Link>
                <DropDown icon={<IconChevronDown />} label='Opciones'>
                        {
                            itemsConfig.map(item => (
                                <Menu.Item key={item.id}>
                                {({ active }) => (
                                        <Link
                                            to={item.href}
                                            className={`${
                                            active ? 'bg-gray-200 text-gray-900' : 'text-gray-900'
                                            } group flex w-full items-center px-2 py-2 font-semibold text-base rounded-md`}
                                        >
                                            
                                            {item.label}
                                        </Link>
                                    )}
                                </Menu.Item>

                            ))
                        }
                </DropDown>
            </div>
        </header>
    )
}