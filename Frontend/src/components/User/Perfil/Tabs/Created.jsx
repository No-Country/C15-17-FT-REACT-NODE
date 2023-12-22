import { useAuth } from "../../../../hooks/useAuth"
import { usePinsByUser } from "../../../../hooks/usePins"
import { Loading } from "../../../shared/Loading"
import { PinList } from "../../../shared/PinList"

export function Created () {

    const { user } = useAuth()

    const { data, isLoading, isError } = usePinsByUser({ userId : user._id })
    
    if (isLoading) return <Loading title='¡Cargando las ideas creadas!'/>

    if (isError) return <p className="text-center text-xl font-semibold pt-12 text-gray-400">Hubo un error al traer las ideas creadas del usuario, intentalo de nuevo</p>   

    return (
        <section>
            <PinList pins={data}/>
        </section>
    )
}