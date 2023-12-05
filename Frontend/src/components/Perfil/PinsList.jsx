import { usePins } from "../../store/pins/pins.store"
import { Pin } from "./Pin"

export function PinsList () {

    const pins = usePins(state => state.pins)

    return (
        <section className="px-14 flex self-start items-start gap-x-4">
            {
                pins.map(pin => (
                    <Pin key={pin.id} image={pin.image}/>
                ))
            }
        </section>
    )
}