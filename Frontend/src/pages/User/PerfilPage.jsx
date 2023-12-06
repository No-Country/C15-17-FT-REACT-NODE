import { IconFilter } from '../../components/icons/IconFilter'
import { PinsList } from '../../components/Perfil/PinsList'
import { IconAdd } from '../../components/icons/IconAdd'
import { Button } from '../../components/ui/Button'

export function PerfilPage () {

    return (
        <section className='w-full flex flex-col items-center '>

            <div className='flex flex-col gap-y-2.5 items-center mb-4'>
                <img src='https://placehold.co/140x140' className='rounded-full'/>
                <h3 className='text-3xl font-semibold'>Username</h3>
                <p className='text-gray-500'>#41234252564</p>
            </div>

            <div className='flex items-center gap-x-2 mb-10'>
                <Button>
                    Editar perfil
                </Button>
                <Button>
                    Crear
                </Button>
            </div>
            
            <div className='flex items-center gap-x-2 '>
                <button className='px-4 py-2 border-b-2 border-black'>
                    Creados
                </button>
                <Button className='text-base'>
                    Favoritos
                </Button>
            </div>

            <div className='w-full flex items-center justify-between mb-6'>
                <Button><IconFilter /></Button>
                <Button><IconAdd /></Button>
            </div>

            <PinsList />

        </section>
    )
}