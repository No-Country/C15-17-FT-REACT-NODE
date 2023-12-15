import { useState } from "react";
import { DetailPinForm } from "../../components/User/CreatePin/DetailsPinForm";
import { UploadPinForm } from "../../components/User/CreatePin/UploadPinForm";
import { Button } from "../../components/ui/Button";

export function CreatePinPage() {
    const [formData, setFormData] = useState({
        image: "",
        title: "",
        description: "",
        team: "",
        tags: "",
    });

    const handleUploadPinForm = (image) => {
        setFormData((prevData) => ({ ...prevData, image }));
    };

    const handleDetailPinForm = (name, value) => {
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Realiza la petición POST a la URL "/api/publication/"
          const response = await fetch("http://localhost:8080/api/publication/crear", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          console.log(formData)
          if (response.ok) {
            // Maneja la respuesta exitosa aquí, si es necesario
            console.log("Publicación creada exitosamente");
          } else {
            // Maneja el caso en el que la respuesta no sea exitosa
            console.error("Error al crear la publicación");
          }
        } catch (error) {
          console.error("Error en la petición:", error);
        }
      };

    return (
        <form
            className='space-y-8 lg:space-y-12 px-4 lg:px-0 w-full pb-4 lg:pb-0'
            onSubmit={handleSubmit}
        >
            <div className='border-b border-t border-border-box py-6 flex items-center justify-between w-full'>
                <h2 className='font-semibold text-xl px-6'>Crear Pin</h2>
                <Button type='submit' color='blue'>
                    Publicar
                </Button>
            </div>
            <section className='flex flex-col lg:flex-row w-full justify-center items-start gap-y-6 lg:gap-x-14'>
                <UploadPinForm handleUploadPinForm={handleUploadPinForm} />
                <DetailPinForm handleDetailPinForm={handleDetailPinForm} />
            </section>
        </form>
    );
}
