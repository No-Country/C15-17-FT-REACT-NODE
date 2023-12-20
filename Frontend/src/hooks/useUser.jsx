import { useQuery } from "react-query"
import { getSavesByUser } from "../services/user.services"

export function useUserSaves ({ userId }) {
    const { data, isLoading, isError } = useQuery(
        ['pinsTeam'],
        async () => await getSavesByUser({ userId })
    )

    return {
        data : data,
        isLoading,
        isError
    } 
}