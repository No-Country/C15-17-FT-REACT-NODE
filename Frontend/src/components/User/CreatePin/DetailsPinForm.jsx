import { Input } from "../../UI/Input";

export function DetailPinForm () {
    return (
        <section className="min-w-full lg:min-w-[38rem] space-y-6">
            <div className="flex flex-col gap-y-2">
                <label className="text-sm" htmlFor="title">Título</label>
                <Input 
                    placeholder='Agrega un titulo'
                    type='text'
                    name='title'
                />
            </div>
            <div className="flex flex-col gap-y-2">
                <label className="text-sm" htmlFor="description">Descripción</label>
                <textarea 
                placeholder="Agrega una descripción detallada"
                type='text' className="border-border-box border-2 rounded-3xl px-4 py-2 focus:outline-primary w-full resize-none h-24" name="description"/>
            </div>
            <div className="flex flex-col gap-y-2">
                <label className="text-sm" htmlFor="team">Equipo</label>
                <Input 
                    placeholder='Agrega un enclace'
                    type='text'
                    name='team'
                />
            </div>
            <div className="flex flex-col gap-y-2">
                <label className="text-sm" htmlFor="hastagh">Estiquetas</label>
                <Input 
                    placeholder='Agrega una estiqueta'
                    type='text'
                    name='hastagh'
                />
            </div>
        </section>
    )
}