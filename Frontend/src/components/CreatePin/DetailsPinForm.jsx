export function DetailPinForm () {
    return (
        <section className="min-w-full lg:min-w-[38rem] space-y-6">
            <div className="flex flex-col gap-y-2">
                <label className="text-sm" htmlFor="title">Título</label>
                <input 
                placeholder="Agrega un título"
                type='text' className="border-border-box border-2 rounded-xl px-4 py-2 focus:border-border-box/40 w-full" name="title"/>
            </div>
            <div className="flex flex-col gap-y-2">
                <label className="text-sm" htmlFor="description">Descripción</label>
                <textarea 
                placeholder="Agrega una descripción detallada"
                type='text' className="border-border-box border-2 rounded-xl px-4 py-2 focus:border-border-box/40 w-full resize-none h-24" name="description"/>
            </div>
            <div className="flex flex-col gap-y-2">
                <label className="text-sm" htmlFor="team">Equipo</label>
                <input 
                placeholder="Agrega un enclace"
                type='text' className="border-border-box border-2 rounded-xl px-4 py-2 focus:border-border-box/40 w-full" name="team"/>
            </div>
            <div className="flex flex-col gap-y-2">
                <label className="text-sm" htmlFor="hastagh">Estiquetas</label>
                <input 
                placeholder="Agrega una estiqueta"
                type='text' className="border-border-box border-2 rounded-xl px-4 py-2 focus:border-border-box/40 w-full" name="hastagh"/>
            </div>
        </section>
    )
}