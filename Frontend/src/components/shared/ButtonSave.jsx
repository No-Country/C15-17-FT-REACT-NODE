import { useMemo } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useAuth } from '../../hooks/useAuth'
import { deleteSave, savePin } from '../../services/user.services'
import { Button } from '../ui/Button'

export function ButtonSave({ pinId, ...props }) {
    
    const { user, onSave : onSaveUser } = useAuth()

    const isSaved = useMemo(() => {
       return user.saves.find(save => save.pinId === pinId)
    }, [pinId, user.saves])

    const [load, setIsLoad] = useState(false) 
    const onSave = async () => {
        
        setIsLoad(true)
        try {
            if (isSaved) {
                const response = await deleteSave({ userId : user._id, saveId : isSaved._id })
                onSaveUser({ saves : response.saves })
                
            } else {
                const response = await savePin({ userId : user._id,  pinId })
                onSaveUser({ saves : response.saves })
                
            }
        } catch (error) {
            console.log(error)
            toast.error('Algo a salido mal!')
        } finally {
            setIsLoad(false)
          
        }
    }

    return (
    <Button {...props} isLoading={load} color='blue' onClick={onSave}>{isSaved ? 'Guardado' : 'Guardar'}</Button>
  )
}
