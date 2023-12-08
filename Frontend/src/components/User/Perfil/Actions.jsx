
import { IconFilter } from '../../icons/IconFilter'
import { DropDown } from '../../shared/Dropdown'
import { LinkButton } from '../../UI/LinkButton'
import { IconAdd } from '../../icons/IconAdd'
import { Menu } from '@headlessui/react'


const items = [
    {
        id : 1,
        label : 'De la A ala Z'
    },
    {
        id : 2,
        label : 'Personalizado'
    },
    {
        id : 3,
        label : 'Última vez guardado'
    }
]

export function Actions () {
    return (
        <div className='w-full flex items-center justify-between mb-6'>
                <DropDown icon={<IconFilter />} label='Ordenar por' to='left' className='w-56'>
                    {
                            items.map(item => (
                                <Menu.Item key={item.id}>
                                {({ active }) => (
                                        <button
                                            className={`${
                                            active ? 'bg-gray-200 text-gray-900' : 'text-gray-900'
                                            } group flex w-full items-center px-2 py-2 font-semibold text-base rounded-md `}
                                        >
                                            
                                            {item.label}
                                        </button>
                                    )}
                                </Menu.Item>

                            ))
                        }
                </DropDown>
                <LinkButton href='/pin-create' className='px-0.5 py-0.5 box-content rounded-full'><IconAdd /></LinkButton>
        </div>

    )
}