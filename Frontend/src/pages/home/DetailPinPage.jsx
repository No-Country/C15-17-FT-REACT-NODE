import { DetailPin } from "../../components/Root/DetailPin/DetailPin"
import { IconArrowLeft } from "../../components/icons/IconArrowLeft"
import { usePins, usePinsById } from "../../hooks/usePins"
import { PinList } from "../../components/shared/PinList"
import { LinkIcon } from "../../components/ui/LinkIcon"
import { Navigate, useParams } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { toast } from "react-toastify"


export function DetailPagePin () {

  const { id } = useParams()

  const { isAuth, isLoading : isLoad } = useAuth()
  
  const {data : pin, isLoading : isLoadPin} = usePinsById({ id })
  const {data, isLoading} = usePins()
  
    if(isLoading || isLoadPin) return <div>Loading...</div>

    if(!isLoad && !isAuth) {
        toast.error('Para acceder debes autenticarte')
        return <Navigate to='/auth/login'/>
      }

    return (
        <section className="relative px-4 lg:px-0">
            
            <LinkIcon className='fixed top-28 left-4 z-50 bg-gray-100/80 p-3 hover:bg-gray-100' href='/'>
                <IconArrowLeft />
            </LinkIcon>

            <DetailPin pin={pin}/>

            <section className="flex flex-col gap-y-4 items-center py-12">
                <h3 className="text-xl font-semibold">Más para explorar</h3>
                <PinList pins={data}/>
            </section>
        
        </section>
    )
}