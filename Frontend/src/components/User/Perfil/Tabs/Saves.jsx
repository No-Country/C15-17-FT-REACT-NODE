import { useUserSaves } from "../../../../hooks/useUser"
import { useAuth } from "../../../../hooks/useAuth"
import { PinList } from "../../../shared/PinList"

export function Saves () {

    const { user } = useAuth()

    const { data, isLoading } = useUserSaves({ userId : user._id })

    if (isLoading) return <p>Cargando...</p>

    return (
        <section>
            <PinList pins={data} isSave={true}/>
        </section>
    )
}