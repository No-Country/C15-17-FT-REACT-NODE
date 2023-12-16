import { Input } from "../../UI/Input";
import { Select } from "./Select";

export function DetailPinForm({ handleDetailPinForm, isError, onFocus }) {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Llama a la función proporcionada desde CreatePinPage para actualizar el estado allí
        handleDetailPinForm(name, value);
    };

    const handleSelectChange = (values) => {
        const { name, value } = values
        handleDetailPinForm(name, value)
    }


    return (
        <section className='min-w-full lg:min-w-[38rem] space-y-6'>
            <div className='flex flex-col gap-y-2'>
                <label className='text-sm' htmlFor='title'>
                    Título
                </label>
                <Input
                    onFocus={onFocus}
                    placeholder='Agrega un titulo'
                    type='text'
                    name='title'
                    onChange={handleInputChange}
                    className={isError.title ? ' border-red-400' : 'border-border-box'}
                />
            </div>
            <div className='flex flex-col gap-y-2'>
                <label className='text-sm' htmlFor='description'>
                    Descripción
                </label>
                <textarea
                    placeholder='Agrega una descripción detallada'
                    type='text'
                    onFocus={onFocus}
                    className={`${isError.description ? 'border-red-400' : 'border-border-box'}  border-2 rounded-3xl px-4 py-2 focus:outline-primary w-full resize-none h-24`}
                    name='description'
                    onChange={handleInputChange}
                />
            </div>
            <div className='flex flex-col gap-y-2'>
                <label className='text-sm' htmlFor='team'>
                    Equipo
                </label>
                <Select onChange={handleSelectChange}/>
            </div>
            <div className='flex flex-col gap-y-2'>
                <label className='text-sm' htmlFor='hastagh'>
                    Etiquetas
                </label>
                <Input
                    placeholder='Agrega una etiqueta'
                    type='text'
                    onFocus={onFocus}
                    name='tags'
                    onChange={handleInputChange}
                    className={isError.tags ? 'border-red-400' : 'border-border-box'}
                />
            </div>
        </section>
    );
}
