import { getPin, getPins, getPinsByTeam } from '../services/pins.services'
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

export function usePinsByTeam ({ team }) {
    const { data, isLoading, isError } = useQuery(
        ['pinsTeam'],
        async () => await getPinsByTeam({ team })
    )

    return {
        data : data,
        isLoading,
        isError
    }    

}

export function usePinsById ({ id }) {
    const { data, isLoading, isError } = useQuery({
        queryFn : () => getPin({ id }),
        queryKey: ['pin', id],
        enabled : !!id
    })

    return {
        data : data,
        isLoading,
        isError
    }    

}