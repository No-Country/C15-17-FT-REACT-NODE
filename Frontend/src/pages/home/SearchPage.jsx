/* eslint-disable react/no-unescaped-entities */
import { PinList } from "../../components/shared/PinList";
import { LinkIcon } from "../../components/ui/LinkIcon";
import { IconAdd } from "../../components/icons/IconAdd";
import { Navigate, useLocation } from "react-router-dom";
import { usePinsBySearch } from "../../hooks/usePins"
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";

export function SearchPage() {

  const { isAuth, isLoading : isLoad } = useAuth()
    
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get('q');    

  
  const { data, isLoading } = usePinsBySearch({ search })  
  
  
  if (isLoading || isLoading) return <p>Cargando...</p>
  if (!search) return <Navigate to='/'/>
  if(!isLoad && !isAuth) {
    toast.error('Para acceder debes autenticarte')
    return <Navigate to='/auth/login'/>
  }


  return (
    <section className="pt-6 space-y-6 px-4 lg:px-0 pb-12 lg:pb-6">
        <h1 className="text-2xl  font-semibold">"{search}"</h1>

        <PinList pins={data}/>

        <div className="fixed bottom-4 right-12 hidden lg:block">
            <LinkIcon href='/pin-create' className='p-3 block '>
                <IconAdd />
            </LinkIcon>
        </div>
    </section>

  )
}
