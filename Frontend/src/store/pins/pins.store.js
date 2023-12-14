import { create } from "zustand";


export const usePins = create((get, set) => ({
    pins : [],

    totalPins : () => get().pins.length,

    getPins : async () => {
        try {
          const data = await fetch('http://localhost:5173/data.json')
          const pins = await data.json()
          set({ pins })
        } catch (error) {
            console.log(error)
        }
    } ,

    addPin : () => set((state) => ({
        pins : [...state.pins, {
            id : state.pins.length + 1,
            image : 'https://img.freepik.com/fotos-premium/hombre-patea-futbol-entrenamiento-futbol-campo-deportivo-al-aire-libre-juego-competencia-o-entrenamiento-motivacion-objetivo-ejercicio-fisico-piernas-fuertes-atleta-o-deporte-estilo-vida-cesped-estadio_590464-100054.jpg?w=740'
        }]
    })),

}))