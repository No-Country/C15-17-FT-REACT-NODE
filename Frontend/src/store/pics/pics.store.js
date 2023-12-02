import { create } from "zustand";

const pics = [
    {
        id : 1,
        image : 'https://img.freepik.com/foto-gratis/jugador-futbol-mirando-porteria_23-2147813176.jpg?w=360&t=st=1701468770~exp=1701469370~hmac=37e78b902bb1c30840d4d5bacab52ceed0e4de5b19663dbb182cb4a9ddc0617c'
    },
    {
        id : 2,
        image : 'https://img.freepik.com/foto-gratis/hombre-deportivo-celebrando_23-2147644364.jpg?w=360&t=st=1701468796~exp=1701469396~hmac=bc8038ade936e81fb0690d3bdb73c22e51ccc128b5c0652897cb913236c35f39'
    },
    {
        id : 3,
        image : 'https://img.freepik.com/foto-gratis/jugador-futbol-entrenando_23-2147813237.jpg?w=360&t=st=1701468830~exp=1701469430~hmac=35d9bf8d2396e1d53de71c53fbc61d785d951f03acaea9b6ea6c4fd286d9cad9'
    }
] // pics test

export const usePics = create((get, set) => ({
    pics,

    totalPics : () => get().pics.length,

    addPic : () => set((state) => ({
        pics : [...state.pics, {
            id : state.pics.length + 1,
            image : 'https://img.freepik.com/fotos-premium/hombre-patea-futbol-entrenamiento-futbol-campo-deportivo-al-aire-libre-juego-competencia-o-entrenamiento-motivacion-objetivo-ejercicio-fisico-piernas-fuertes-atleta-o-deporte-estilo-vida-cesped-estadio_590464-100054.jpg?w=740'
        }]
    }))


}))