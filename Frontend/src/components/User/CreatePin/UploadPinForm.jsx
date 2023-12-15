import { useState } from "react";
import { IconArrowUp } from "../../icons/IconArrowUp";

export function UploadPinForm ({handleUploadPinForm}) {
    const [file, setFile] = useState(null);


    function handleInput(e) {
        setFile(e.target.files[0])
        handleUploadPinForm(e.target.files[0])
        
      }

    
    return (
        <section className="flex w-full lg:w-auto items-center justify-center ">
            {
                file ? <img src={URL.createObjectURL(file)} className='w-80 lg:w-[28rem] h-[28rem]  rounded-xl object-cover'/>
                :
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-80 lg:w-96  h-[28rem] border-2 border-gray-200 border-dashed rounded-xl cursor-pointer bg-gray-100 dark:hover:bg-bray-800  hover:bg-gray-200 px-12 ">

                    <div className="flex flex-col items-center justify-center space-y-4 h-full">
                        <IconArrowUp />
                        <p className="mb-2  text-gray-600 text-center"><span className="font-semibold">Elige un archivo</span> o arrástralo y <br/> colócalo aqui</p>
                        <p className="text-xs  text-gray-500 ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={handleInput}/>
                </label>
            }
    </section> 
    )
}

