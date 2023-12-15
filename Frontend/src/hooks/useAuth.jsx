import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export function useAuth () {
    const authContext = useContext(AuthContext)
    if(!authContext) throw new Error('Provider not used')
    return authContext
}