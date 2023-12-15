import { TabsList } from '../../components/User/Perfil/Tabs/TabsList'
import { PinsList } from '../../components/User/Perfil/PinsList'
import { Actions } from '../../components/User/Perfil/Actions'
import { LinkButton } from '../../components/UI/LinkButton'
import { useAuth } from '../../hooks/useAuth'


export function PerfilPage () {


    const { user } = useAuth()

    
    return (
        <section className='w-full flex flex-col items-center pb-12'>

            <div className='flex flex-col gap-y-2.5 items-center mb-4'>
                <img src='https://placehold.co/120x120' className='rounded-full'/>
                <h3 className='text-3xl font-semibold'>{user.user}</h3>
                <p className='text-gray-500'>#41234252564</p>
            </div>

            <div className='flex items-center gap-x-2 mb-10'>
                <LinkButton href='/settings-perfil'>
                    Editar perfil
                </LinkButton>
                <LinkButton href='/pin-create'>
                    Crear
                </LinkButton>
            </div>

            
            <TabsList />
        
            <Actions />

            
            <PinsList />

        </section>
    )
}

