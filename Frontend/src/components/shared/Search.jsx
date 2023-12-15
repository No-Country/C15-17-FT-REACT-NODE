import { IconSearch } from "../icons/IconSearch";
import { Input } from "../UI/Input";

export function Search () {
    return (
        <fieldset className="w-full relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
                <IconSearch />
            </div>
            <Input placeholder='Buscar tus Pines' className='pl-12 '/>
        </fieldset>
    )
}