import { PinList } from "../../components/shared/PinList"
import { IconAdd } from "../../components/icons/IconAdd"
import { LinkIcon } from "../../components/ui/LinkIcon"
import { usePins } from "../../hooks/usePins"
import { Loading } from "../../components/shared/Loading"

export function HomePage () {


    const { data, isLoading, isError } = usePins()


    if(isLoading) return <Loading title='¡Estamos agregando nuevas ideas para ti!'/>
    if(isError) return <p className="text-center text-xl font-semibold pt-12 text-gray-400">Hubo un error al traer los pines, intentalo de nuevo</p>
    
    return(
        <section className="pt-6 space-y-6 px-4 lg:px-0 pb-12 lg:pb-6">
            <h1 className="text-2xl lg:text-3xl font-semibold">Pines para tí</h1>
            <PinList pins={data}/>

            <div className="fixed bottom-4 right-12 hidden lg:block">
                <LinkIcon href='/pin-create' className='p-3 block '>
                    <IconAdd />
                </LinkIcon>
            </div>

        </section>
    )
}