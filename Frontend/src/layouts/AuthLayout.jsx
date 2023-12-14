
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function AuthLayout () {

    const { isAuth } = useAuth()

    if(isAuth) return <Navigate to='/home' />
    console.log(isAuth)
    return (
        <main>
            <Outlet />
        </main>
    )
}