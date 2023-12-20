import { IconZoomScan } from "../../icons/IconZoomScan";
import { ButtonIcon } from "../../ui/ButtonIcon";
import { ModalPin } from "./ModalPin";
import { useState } from "react";


export function Pin({ pinImage }) {

  const [open, setOpen] = useState(false)

  const onOpen = () => setOpen(!open)

  return (
    <>
        <picture className="w-72 lg:w-[28rem] lg:rounded-tl-3xl lg:rounded-bl-3xl h-auto overflow-hidden mx-auto lg:mx-0 relative">
            <img src={pinImage} />
            <ButtonIcon onClick={onOpen} className='absolute bottom-4 right-4 p-3 bg-gray-100/80 hover:bg-gray-100'>
                <IconZoomScan />
            </ButtonIcon>
        </picture>
        <ModalPin isOpen={open} onModal={onOpen} pinImage={pinImage}/>
    </>
  )
}
