import { DetailPinForm } from "../../components/CreatePin/DetailsPinForm";
import { UploadPinForm } from "../../components/CreatePin/UploadPinForm";
import { Button } from "../../components/ui/Button";

export function CreatePinPage () {

    
    return (
        <form className="space-y-8 lg:space-y-12 px-4 lg:px-0">
            <div className="border-b border-t border-border-box py-6 flex items-center justify-between">
                <h2 className="font-semibold text-xl px-6">Crear Pin</h2>
                <Button type='submit' color='blue' >Publicar</Button>
            </div>
            <section className="flex flex-col lg:flex-row w-full justify-center items-start gap-y-6 lg:gap-x-14">
                <UploadPinForm />
                <DetailPinForm />
            </section>
        </form>
    )
}