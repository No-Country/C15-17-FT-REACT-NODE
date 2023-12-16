import { Pin } from "./Pin";

export function PinList ({ pins }) {
    
    return (
        <section className="gallery ">
            {
                pins.map((pin) => (
                    <Pin key={pin._id} image={pin.image}/>
                ))
            }
        </section>
    )
}