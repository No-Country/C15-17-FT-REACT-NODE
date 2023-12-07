import { Button } from "../../ui/Button";
import { Input } from "../../UI/Input";

export function EditPerfilForm () {
    return (
      <form className="pt-6 pb-4 w-full flex flex-col gap-y-4 items-start ">

        <div className="lg:mb-">
          <label className="text-sm">Foto</label>
          <div className="flex items-center gap-x-4">
            <img src='https://placehold.co/100x100' className='rounded-full'/>
            <Button>Cambiar</Button>
          </div>
        </div>

        <section className="flex flex-col gap-y-2 lg:gap-y-4 w-full">

          <div className="flex gap-x-4 items-center">

            <div className="flex flex-col gap-y-2">
              <label className="text-sm">Nombre(s)</label>
              <Input 
                type='text'
                placeholder='Agrega tu nombre'
                name='name'
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <label className="text-sm">Apellido</label>
              <Input 
                type='text'
                placeholder='Agrega tu apellido'
                name='name'
              />
            </div>

          </div>

          <div className="flex flex-col gap-y-2">
            <label className="text-sm">Descripción</label>
            <textarea 
                placeholder="Contá sobre vos"
                type='text' className="border-border-box border-2 rounded-3xl px-4 py-2 focus:outline-primary w-full resize-none h-24" name="description"/>
          </div>

          <div className="flex flex-col gap-y-2">
              <label className="text-sm">Nombre de usuario</label>
              <Input 
                type='text'
                placeholder='Agrega tu nombre de usuario'
                name='username'
              />
          </div>

        </section>

        <div className="w-full h-16 fixed bottom-0 left-0 flex items-center justify-center bg-white gap-x-4">
          <Button>Restablecer</Button>
          <Button type='submit' color='blue'>Guardar</Button>
        </div>

      </form>
    )
}