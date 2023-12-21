import { useQuery } from "react-query"
import { getSavesByUser, getUser } from "../services/user.services"


export function useUserById ({ userId }) {
    const { data, isLoading, isError } = useQuery(
        ['user'],
        async () => await getUser({ id : userId })
    )

    return {
        data : data,
        isLoading,
        isError
    } 
}

export function useUserSaves ({ userId }) {
    const { data, isLoading, isError } = useQuery(
        ['userSaves'],
        async () => await getSavesByUser({ userId })
    )

    return {
        data : data,
        isLoading,
        isError
    } 
}