import { IconSearch } from "../icons/IconSearch";
import { Transition } from "@headlessui/react";
import { usePins } from "../../hooks/usePins";
import { Fragment, useMemo } from "react";
import { HistorialSearchedList } from "./HistorialSearchedList";


export function ModalSearch({ isFocus, search, onRedirect, historial, deleteSearchHistorial }) {

  const { data, isLoading } = usePins()

  const onSearch = (search, pins) => {
    const filterPins = pins.filter(pin => 
        pin.title
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(search.toLowerCase().replace(/\s+/g, '')))

    return filterPins    
  }

  const onDeleteSearched = (e, id) => {
    e.preventDefault();
    deleteSearchHistorial(id)
  }

  const searched = useMemo(() => {
    if (!search.length) return
    return onSearch(search, data)
  }, [data, search])


  return (
    <>
        <Transition appear show={isFocus} as={Fragment}>
            <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                <div className="w-[38rem] absolute top-10 left-1/2 -translate-x-1/2 h-[28rem] bg-white  rounded-br-3xl rounded-bl-3xl -z-10 py-4 px-6">
                    {
                        isLoading ? <p className="font-semibold">Cargando busquedas para ti</p>
                        :
                        <section className="grid gap-4">
                            {
                                !search.length ?
                                <HistorialSearchedList historial={historial} onDeleteSearched={onDeleteSearched}/>
                                : 
                                <>
                                    {
                                        searched.map(pin => (
                                            <button onClick={() => onRedirect(pin.title)} key={pin._id}  className='flex items-center gap-x-4 font-medium text-sm'><IconSearch /> {pin.title}</button>
                                        ))
                                    }
                                </>
                            }
                        </section>
                    }
                </div>


            </Transition.Child>
        </Transition> 

        {/* Black Background */}
        <Transition appear show={isFocus} as={Fragment}>

            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed top-[4.5rem]  left-0 w-screen h-screen bg-black/40 -z-20" />
            </Transition.Child>
        </Transition>
    </>
  )
}
