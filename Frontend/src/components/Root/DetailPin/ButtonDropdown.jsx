import { useDeleteComment } from "../../../hooks/usePins";
import { Menu, Transition } from "@headlessui/react";
import { IconDots } from "../../icons/IconDots";
import { Fragment } from "react";
import { useParams } from 'react-router-dom'
import { toast } from "react-toastify";

export function ButtonDropdown({ commentId }) {

  const { id } = useParams()

    
  const commentMutation = useDeleteComment();

  const onDeleteComment = async () => {
    try {
        
        await commentMutation.mutateAsync({ pinId : id, commentId });
        
    } catch (error) {
        console.log(error)
        toast.error('Ocurrio un error en el servidor')
    }
  }


  return (
    <Menu as="div" className="relative inline-block text-right">
        <Menu.Button className="focus:ring focus:ring-black rounded-full box-content bg-gray-100 hover:bg-gray-200 transition-all opacity-25 focus:bg-gray-200 hover:opacity-100">
            <IconDots />
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
        <Menu.Items className={`absolute  w-40  divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none right-0 origin-top-right`}>
            <Menu.Item>
                {({ active }) => (
                    <button
                     onClick={onDeleteComment}
                     className={`${
                         active ? 'bg-gray-200 text-gray-900' : 'text-gray-900'
                        } group flex w-full items-center px-2 py-2 font-semibold text-sm rounded-md `} >
                         Eliminar comentario
                    </button>
                )}
            </Menu.Item>
            </Menu.Items>
        </Transition>
    </Menu>
  )
}
