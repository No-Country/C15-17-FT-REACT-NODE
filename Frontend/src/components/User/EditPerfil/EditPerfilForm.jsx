
import { updateUser } from "../../../services/user.services";
import { useAuth } from "../../../hooks/useAuth";
import { useState, useEffect } from "react";
import { Button } from "../../ui/Button";
import { Input } from "../../UI/Input";
import { toast } from "react-toastify";

export function EditPerfilForm () {
  
  const { user } = useAuth()


  const [data, setData] = useState({
    username : '',
    name : '',
    lastName : '',
    avatar : null,
    description : ''
  })

  useEffect(() => {
    if(user) {
      setData(user)
    }
  }, [user])


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
    try {
      
      const update = {
        id : user?._id,
        data
      }

      const response = await updateUser(update)

      console.log(response)

    } catch (error) {
      console.log(error)
      toast.error('Ocurrio un error en los servidores de PictureFlow')
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
              <Input
                value={data.name}
                onChange={handleChange} 
                type='text'
                placeholder='Agrega tu nombre'
                name='name'
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <label className="text-sm">Apellido</label>
              <Input
                value={data.lastName}
                onChange={handleChange} 
                type='text'
                placeholder='Agrega tu apellido'
                name='lastName'
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
              <Input
                value={data.username}
                onChange={handleChange} 
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