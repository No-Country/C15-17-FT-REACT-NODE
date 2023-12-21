import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Button } from '../../ui/Button'

export function ModalDownload({ isOpen, onOpen, pin }) {

    const downloadImage = (imageSrc, imageName) => {
        fetch(imageSrc)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
      
            const contentType = response.headers.get('content-type') || 'application/octet-stream';
            return response.blob().then((blob) => ({ blob, contentType }));
          })
          .then(({ blob, contentType }) => {
            const url = window.URL.createObjectURL(new Blob([blob], { type: contentType }));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', imageName);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          })
          .catch((error) => console.error('Error al descargar la imagen:', error));

        onOpen()
      };

  return (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[9999]" onClose={onOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Descargar Imagen
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                        ¿Realmente desea descargar la Imagen?
                    </p>
                  </div>

                  <div className="flex w-full justify-between items-center pt-4">
                    <Button
                      onClick={onOpen}
                    >
                      Cancelar
                    </Button>
                    <Button color='blue' onClick={() => downloadImage(pin.image.url, pin.title)}>
                        Descargar
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
    </Transition>

  )
}
