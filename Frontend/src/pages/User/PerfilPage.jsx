import { IconFilter } from '../../components/icons/IconFilter'
import { PinsList } from '../../components/Perfil/PinsList'
import { ButtonGray } from '../../components/ui/ButtonGray'
import { IconAdd } from '../../components/icons/IconAdd'

export function PerfilPage () {

    return (
        <section className='w-full flex flex-col items-center pt-24 pb-12'>

            <div className='flex flex-col gap-y-2.5 items-center mb-4'>
                <img src='https://placehold.co/140x140' className='rounded-full'/>
                <h3 className='text-3xl font-semibold'>Username</h3>
                <p className='text-gray-500'>#41234252564</p>
            </div>

            <div className='flex items-center gap-x-2 mb-10'>
                <ButtonGray>
                    Editar perfil
                </ButtonGray>
                <ButtonGray>
                    Crear
                </ButtonGray>
            </div>
            
            <div className='flex items-center gap-x-2 '>
                <button className='px-4 py-2 border-b-2 border-black'>
                    Creados
                </button>
                <ButtonGray className='text-base'>
                    Favoritos
                </ButtonGray>
            </div>

            <div className='w-full flex items-center justify-between mb-6'>
                <ButtonGray className='rounded-full'><IconFilter /></ButtonGray>
                <ButtonGray className='rounded-full'><IconAdd /></ButtonGray>
            </div>

            <PinsList />

        </section>
    )
}