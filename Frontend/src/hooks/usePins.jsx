import { getPins } from '../services/pins.services'
import { useQuery } from 'react-query'

export function usePins () {
    const { data, isLoading, isError } = useQuery(
        ['pins'],
        async () => await getPins()
    )

    return {
        data : data,
        isLoading,
        isError
    }    

}