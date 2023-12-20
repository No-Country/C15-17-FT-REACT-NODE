
import { updateUser } from "../../../services/user.services";
import { useAuth } from "../../../hooks/useAuth";
import { useState } from "react";
import { Button } from "../../ui/Button";
import { toast } from "react-toastify";

export function EditPerfilForm () {
  
  const { user, onEditUser } = useAuth()


  const [data, setData] = useState(user)

  const [isLoad, setIsLoad] = useState(false)


  const handleChange = (e) => {
    setData((prevValues) => ({
      ...prevValues,
      [e.target.name] : e.target.value
    }))
  }

  const onFile = (e) => setData((prevValues) => ({
    ...prevValues,
    avatar : e.target.files[0]
  }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoad(true)
    try {
      const update = {
        id : user?._id,
        data
      }

      const response = await updateUser(update)
      onEditUser({ newCredentials : response })
      console.log(response)
      setData(response)
      toast.success('Perfil actualizado')

    } catch (error) {
      console.log(error)
      toast.error('Ocurrio un error en los servidores de PictureFlow')
    } finally {
      setIsLoad(false)
    }

  }


    return (
      <form className="pt-6 pb-4 w-full flex flex-col gap-y-4 items-start " onSubmit={handleSubmit}>

        <div className="relative group">
          <label className="rounded-full w-20 h-20 bg-transparent block  transition-all border-2  border-gray-200 cursor-pointer relative">
            <input
               id="dropzone-file" type="file" className="opacity-0 w-full h-full" onChange={onFile}/>
         
          </label>

            
            <img src={user?.avatar ? user.avatar : '/images/placeholder.webp'} alt={`${user?.username} avatar of PictureFlow`} className='w-full h-full object-cover absolute top-0 left-0 rounded-full -z-10 cursor-pinter'/>
            <div className="absolute w-full h-full top-0 left-0 bg-black/30 items-center justify-center hidden group-hover:flex rounded-full cursor-pointer -z-10">
                <span className="font-semibold text-white">Cambiar</span>
            </div>
   
    
        </div>

        <section className="flex flex-col gap-y-2 lg:gap-y-4 w-full">

          <div className="flex gap-x-4 items-center">

            <div className="flex flex-col gap-y-2">
              <label className="text-sm">Nombre(s)</label>
              <input 
                value={data.name}
                placeholder='Agregue su nombre'
                name='name'
                type={'text'} 
                className={`border-border-box border-2 rounded-3xl px-4 py-2  focus:outline-sky-400 focus:outline-8 w-full`} 
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <label className="text-sm">Apellido</label>
              <input 
                value={data.lastName}
                placeholder='Agregue su apellido'
                name='lastName'
                type={'text'} 
                className={`border-border-box border-2 rounded-3xl px-4 py-2  focus:outline-sky-400 focus:outline-8 w-full`} 
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="flex flex-col gap-y-2">
            <label className="text-sm">Descripción</label>
            <textarea 
                value={data.description}
                placeholder="Contá sobre vos"
                type='text' className="border-border-box border-2 rounded-3xl px-4 py-2 focus:outline-primary w-full resize-none h-24" name="description" 
                onChange={handleChange}
                />
          </div>

          <div className="flex flex-col gap-y-2">
              <label className="text-sm">Nombre de usuario</label>
              <input 
                value={data.username}
                placeholder='Agregue su nombre de usuario'
                name='username'
                type={'text'} 
                className={`border-border-box border-2 rounded-3xl px-4 py-2  focus:outline-sky-400 focus:outline-8 w-full`} 
                onChange={handleChange}
              />
          </div>

        </section>

        <div className="w-full h-16 fixed bottom-0 left-0 flex items-center justify-center bg-white gap-x-4">
          <Button isLoading={isLoad}>Restablecer</Button>
          <Button type='submit' color='blue'>Guardar</Button>
        </div>

      </form>
    )
}