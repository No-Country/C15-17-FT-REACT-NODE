import { useAuth } from "../../../../hooks/useAuth"
import { usePinsByUser } from "../../../../hooks/usePins"
import { PinList } from "../../../shared/PinList"

export function Created () {

    const { user } = useAuth()


    const { data, isLoading } = usePinsByUser({ userId : user._id })
    
    
    if (isLoading ) return <p>Cargando...</p>

    return (
        <section>
            <PinList pins={data}/>
        </section>
    )
}