
import { Navigate, Outlet } from "react-router-dom";
import { IconArrowLeft } from "../components/icons/IconArrowLeft";
import { LinkIcon } from "../components/ui/LinkIcon";
import { useAuth } from "../hooks/useAuth";

export function AuthLayout () {

    const { isAuth } = useAuth()

    if(isAuth) return <Navigate to='/' />
    
    return (
        <main className="h-screen flex">
            
            <section className="bg-grid-players flex-1 bg-contain relative hidden lg:block">
                <div className="w-full h-full bg-black/70 flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-semibold text-white">Bienvenido de vuelta</h2>
                    <p></p>
                </div>
                <LinkIcon href='/' className='absolute top-4 left-4'>
                    <IconArrowLeft />
                </LinkIcon>
            </section>
            <section className="flex-1">

                <Outlet />
            </section>

        </main>
    )
}