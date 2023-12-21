import { TabsList } from '../../components/User/Perfil/Tabs/TabsList'
import { LinkButton } from '../../components/UI/LinkButton'
import { useAuth } from '../../hooks/useAuth'
import { Navigate, useParams } from 'react-router-dom'
import { toast} from 'react-toastify'
import { useUserById } from '../../hooks/useUser'


export function PerfilPage () {

  const { isLoading, isAuth, user : userMe } = useAuth()  
  const { userId } = useParams()

  const { data : user, isLoading : isLoadUser, isError } = useUserById({ userId })


  
  if(isLoading || isLoadUser) return <p>Cargando...</p>
  
  if(!isLoading && !isAuth) {
      toast.error('Para acceder debes autenticarte')
      return <Navigate to='/auth/login'/>
  }
  
  if (isError) return <p>Hubo un error</p>
  
  const isPermited = userMe._id === user._id
   
    return (
        <section className='w-full flex flex-col items-center py-12 px-4 lg:px-0'>

            <div className='flex flex-col gap-y-2.5 items-center mb-4'>
                <img src={user?.avatar ? user.avatar : '/images/placeholder.webp'}  className='rounded-full w-32 h-32 object-cover'/>
                <div className='flex flex-col gap-y-1 items-center'>
                    <h3 className='text-3xl font-semibold'>{user?.name ? user.name : user.username}</h3>
                    <p className='text-gray-400'>@{user.username}</p>
                    <p className='text-gray-500'>#41234252564</p>
                </div>
            </div>

            {
                isPermited &&
                <div className='flex items-center gap-x-2 mb-10'>
                    <LinkButton href='/settings-perfil'>
                        Editar perfil
                    </LinkButton>
                    <LinkButton href='/pin-create'>
                        Crear
                    </LinkButton>
                </div>
            }

            
            <TabsList />
            

        </section>
    )
}

