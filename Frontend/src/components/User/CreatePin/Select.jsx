import { useTeams } from "../../../hooks/useTeams"
import { useState, useMemo, Fragment } from "react"
import { Combobox, Transition } from "@headlessui/react"
import { IconSelector } from "../../icons/IconSelector"
import { IconCheck } from "../../icons/IconCheck"



export function Select({ onChange }) {

    const { data } = useTeams();

    const [selected, setSelected] = useState({
      teamName : ''
    });

    const [query, setQuery] = useState('');


    const handleSelect = (toSelected) => {
        setSelected(toSelected)
        onChange({
            name : 'team',
            value : toSelected._id
        })
    }

  
    
    const onFilter = (query, data) => {
      const filtered = query === '' ? data : data.filter((team) =>
        team.teamName
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      );
    
      return filtered;
    };
    
    const filteredTeams = useMemo(() => {
      return onFilter(query, data || []); 
    }, [query, data]);
    
    

  return (
    <div className="">
        <Combobox value={selected} onChange={handleSelect}>
        <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
                className={`border-border-box border-2 rounded-3xl px-4 py-2  focus:outline-sky-400 focus:outline-8 w-full ${!selected.teamName && 'text-gray-400'}`}
                displayValue={(team) => team.teamName ? team.teamName : 'Selecciona un equipo'}
                onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <IconSelector />
            </Combobox.Button>
            </div>
            <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
            >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                
              {
                  filteredTeams.map((team) => (
                    <Combobox.Option
                    key={team._id}
                    className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-primary text-white' : 'text-gray-900'
                        }`
                    }
                    value={team}
                    >
                    {({ selected, active }) => (
                        <>
                        <span
                            className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                            {team.teamName}
                        </span>
                        {selected ? (
                            <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? 'text-white' : 'text-primary'
                            }`}
                            >
                                <IconCheck />
                            </span>
                        ) : null}
                        </>
                    )}
                    </Combobox.Option>
                ))
              }
            </Combobox.Options>
            </Transition>
        </div>
        </Combobox>
    </div>
  )
}
