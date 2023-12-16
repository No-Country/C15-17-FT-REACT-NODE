import { getTeams } from '../services/teams.services'
import { useQuery } from 'react-query'

export function useTeams () {
    const { data, isLoading, isError } = useQuery(
        ['teams'],
        async () => await getTeams()
    )

    return {
        data : data,
        isLoading,
        isError
    }    

}