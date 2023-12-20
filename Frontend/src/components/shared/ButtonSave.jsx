import { useMemo } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useAuth } from '../../hooks/useAuth'
import { deleteSave, savePin } from '../../services/user.services'
import { Button } from '../ui/Button'

export function ButtonSave({ pinId, ...props }) {
    
    const { user } = useAuth()

    const isSaved = useMemo(() => {
       return user.saves.find(save => save.pinId === pinId)
    }, [pinId, user.saves])

    const [save, setSave] = useState({
        isSaved : isSaved,
        isLoad : false
    }) 
    const onSave = async () => {

        setSave(prevValue => ({
            ...prevValue,
            isLoad : true
        }))

        try {
            if (isSaved) {
                await deleteSave({ userId : user._id, saveId : isSaved._id })
                setSave(prevValue => ({
                    ...prevValue,
                    isSaved : false
                }))
            } else {
                await savePin({ userId : user._id,  pinId })
                setSave(prevValue => ({
                    ...prevValue,
                    isSaved : true
                }))
            }
        } catch (error) {
            console.log(error)
            toast.error('Algo a salido mal!')
        } finally {
            setSave(prevValue => ({
                ...prevValue,
                isLoad : false
            }))
        }
    }

    return (
    <Button {...props} isLoading={save.isLoad} color='blue' onClick={onSave}>{save.isSaved ? 'Guardado' : 'Guardar'}</Button>
  )
}
