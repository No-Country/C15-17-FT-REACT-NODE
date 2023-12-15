import { useEffect, useState } from 'react';
import { Pin } from "./Pin";

export function PinList ({ pins }) {
    const [publicaciones, setPublicaciones] = useState([]);
    // fetch /publication/traer

    useEffect(() => {
      fetch("http://localhost:8080/api/publication/traer/")
        .then((response) => response.json())
        .then((data) => setPublicaciones(data))
    }, [])
    

    return (
        <section className="gallery ">
            {
                publicaciones.map((pin, i) => (
                    <Pin key={i} image={pin.image}/>
                ))
            }
        </section>
    )
}