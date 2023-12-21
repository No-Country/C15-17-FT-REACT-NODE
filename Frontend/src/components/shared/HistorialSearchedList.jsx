import { IconClose } from '../icons/IconClose'
import { ButtonIcon } from '../ui/ButtonIcon'
import { LinkButton } from '../ui/LinkButton'

export function HistorialSearchedList({ historial, onDeleteSearched }) {
  return (
    <div className="flex flex-col gap-y-1 ">
        <p className="font-medium">Busquedas recientes</p>
        <div className="flex items-center gap-2 flex-wrap">
            {
            
                historial?.slice(0, 4).map((searched) => (
                    <LinkButton key={searched.id} href={`/search?q=${searched.searched}`} className='font-normal text-sm flex items-center gap-x-2'>{searched.searched} <ButtonIcon onClick={(e) => onDeleteSearched(e, searched.id)}><IconClose /></ButtonIcon> </LinkButton>
                ))
            }
        </div>
    </div> 
  )
}
