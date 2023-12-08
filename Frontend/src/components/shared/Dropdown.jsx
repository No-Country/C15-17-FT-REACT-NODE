import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const addressMenu = {
  left : 'left-0 origin-top-left',
  right : 'right-0 origin-top-right'
}

export function DropDown ({ children, label, icon, to, className }) {

    const address = !to ? addressMenu.right : (to !== 'left' && to !== 'right') ? addressMenu.right : addressMenu[to]

    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="p-0.5 focus:ring focus:ring-black rounded-full box-content bg-gray-100 hover:bg-gray-200 transition-all focus:bg-gray-200">
              {icon}
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className={`absolute  mt-2 w-44  divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none ${address} ${className}`}>
                <h4 className="px-2 py-4 text-xs">{label}</h4>

                <div className="pb-2 px-2">
                    {
                      children
                    }
                 
                </div>
                
              </Menu.Items>
            </Transition>
        </Menu>
      )
}