import { Pin } from "./Pin";

export function PinList ({ pins, isSave = false }) {
    
    return (
        <section className="gallery">
            {
                pins?.map((pin) => (
                    <Pin key={pin._id} pin={pin} isSave={isSave}/>
                ))
            }
        </section>
    )
}