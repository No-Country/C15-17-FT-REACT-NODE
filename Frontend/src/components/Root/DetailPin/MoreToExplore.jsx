import { usePins } from "../../../hooks/usePins"
import { Loading } from "../../shared/Loading"
import { PinList } from "../../shared/PinList"

export function MoreToExplore() {

  const { data : pins, isLoading } = usePins()

  if (isLoading) return  <Loading title="Cargando mas ideas..."/>

  const somePins = pins?.splice(0, 8)

  return (
    <section className="flex flex-col gap-y-4 items-center py-12">
    <h3 className="text-xl font-semibold">Más para explorar</h3>
        {
            <PinList pins={somePins}/>
        }
    </section>
  )


}
