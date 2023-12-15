import { IconChevronDown } from "../../icons/IconChevronDown";
import { DropDown } from '../../shared/Dropdown'
import { Search } from "../../shared/Search";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";


export function Nav() {


  const { signout, user } = useAuth()

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
                    <li >
                        <Link to='/pin-create' className="hover:bg-primary hover:text-white transition-all rounded-3xl px-4 py-2">
                            Crear
                        </Link>
                    </li>
                </ul>
                <Search />
            </nav>
            <div className="hidden lg:flex items-center gap-x-2">
                <Link to='/perfil' className="w-8 h-8">
                    <img src={user?.avatar ? user.avatar : '/images/placeholder.webp'} className='rounded-full w-8 h-8 object-cover'/>
                </Link>
                <DropDown icon={<IconChevronDown />} label='Opciones'>
                            <Menu.Item >
                                {({ active }) => (
                                        <Link
                                            to='/perfil'
                                            className={`${
                                            active ? 'bg-gray-200 text-gray-900' : 'text-gray-900'
                                            } group flex w-full items-center px-2 py-2 font-semibold text-base rounded-md`}
                                        >
                                            
                                            Mi perfil
                                        </Link>
                                    )}
                                </Menu.Item>
                    
                                <Menu.Item >
                                {({ active }) => (
                                        <button
                                            onClick={signout}
                                            className={`${
                                            active ? 'bg-gray-200 text-gray-900' : 'text-gray-900'
                                            } group flex w-full items-center px-2 py-2 font-semibold text-base rounded-md`}
                                        >
                                            
                                            Salir
                                        </button>
                                    )}
                                </Menu.Item>
                    
                </DropDown>
            </div>
    </>
  )
}
