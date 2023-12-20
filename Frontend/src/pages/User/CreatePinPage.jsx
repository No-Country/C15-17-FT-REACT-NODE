import { DetailPinForm } from "../../components/User/CreatePin/DetailsPinForm";
import { UploadPinForm } from "../../components/User/CreatePin/UploadPinForm";
import { createPinValidate } from "../../utils/create-pin.validate";
import { createPin } from "../../services/pins.services";
import { Button } from "../../components/ui/Button";
import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { toast} from 'react-toastify'
import { useState } from "react";


export function CreatePinPage() {

  const { isAuth, user, isLoading : isLoad } = useAuth()

  const [formData, setFormData] = useState({
      image: null,
      title: "",
      description: "",
      team: "",
      tags: "",
  });

  const [error, setError] = useState({
    image: false,
    title: false,
    description: false,
    team: false,
    tags: false,
});

  const [isLoading, setIsLoading] = useState(false)

  if(!isLoad && !isAuth) {
    toast.error('Para acceder debes autenticarte')
    return <Navigate to='/auth/login'/>
  }

    const handleFocus = () => {
      setError({
        image: false,
        title: false,
        description: false,
        team: false,
        tags: false,
    })
    }

    const handleUploadPinForm = (image) => {
        setFormData((prevData) => ({ ...prevData, image }));
    };

    const handleDetailPinForm = (name, value) => {
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const resetFields = () => {
      setFormData({
        image: null,
        title: "",
        description: "",
        team: "",
        tags: "",
      })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {

          const { field, isError, messages } = createPinValidate(formData)

          if(isError)  {
            messages.forEach(message => {
                toast.error(message)
            })
            setError(prevState => ({...prevState, ...field}))
            setIsLoading(false)

            return
        }

          const formatData = {
            ...formData,
            photographer : user?._id

          }

          const result = await createPin({ newPin : formatData })
          toast.success('Su pin fue creado sastifactoriamente')
          //TODO : controlar los errores del formulario
          console.log(result)
        } catch (error) {
          console.error("Error en la petición:", error);
          toast.error('Hubo un error ala hora de su pin')

        } finally {
          setIsLoading(false)
          resetFields()
        }
      };

    return (
        <form
            className='space-y-8 lg:space-y-12 px-4 lg:px-0 w-full pb-12 lg:pb-0'
            onSubmit={handleSubmit}
        >
            <div className='border-b border-t border-border-box py-6 flex items-center justify-between w-full'>
                <h2 className='font-semibold text-xl px-6'>Crear Pin</h2>
                <Button isLoading={isLoading} type='submit' color='blue'>
                    Publicar
                </Button>
            </div>
            <section className='flex flex-col lg:flex-row w-full justify-center items-start gap-y-6 lg:gap-x-14'>
                <UploadPinForm handleUploadPinForm={handleUploadPinForm} isError={error.image}/>
                <DetailPinForm handleDetailPinForm={handleDetailPinForm} isError={error} onFocus={handleFocus}/>
            </section>
        </form>
    );
}
