import { TabsList } from '../../components/User/Perfil/Tabs/TabsList'
import { PinsList } from '../../components/User/Perfil/PinsList'
import { Actions } from '../../components/User/Perfil/Actions'
import { LinkButton } from '../../components/UI/LinkButton'
import { useAuth } from '../../hooks/useAuth'
import { Navigate } from 'react-router-dom'
import { toast} from 'react-toastify'


export function PerfilPage () {


const { isAuth, isLoading, user } = useAuth()

  if(!isLoading && !isAuth) {
    toast.error('Para acceder debes autenticarte')
    return <Navigate to='/auth/login'/>
  }
    
    
    return (
        <section className='w-full flex flex-col items-center py-12 px-4 lg:px-0'>

            <div className='flex flex-col gap-y-2.5 items-center mb-4'>
                <img src={user?.avatar ? user.avatar : '/images/placeholder.webp'}  className='rounded-full w-32 h-32 object-cover'/>
                <h3 className='text-3xl font-semibold'>{user.name}</h3>
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

