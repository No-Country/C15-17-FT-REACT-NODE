
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { IconArrowLeft } from "../components/icons/IconArrowLeft";
import { LinkIcon } from "../components/ui/LinkIcon";
import { useAuth } from "../hooks/useAuth";

export function AuthLayout () {

    const { isAuth } = useAuth()
    const { pathname } = useLocation();

    if(isAuth) return <Navigate to='/' />

    return (
        <main className="h-screen flex">
            
            <section className="bg-grid-players flex-1 bg-contain relative hidden lg:block">
                <div className="w-full h-full bg-black/60 flex flex-col items-start justify-center px-6">
                    <h2 className="text-5xl font-semibold text-white mb-3">
                        {
                            pathname.includes('register')
                            ? "Bienvenido a PictureFlow."
                            : "Bienvenido de vuelta."
                        }
                    </h2>
                    <p className="text-white text-lg w-96"><strong>PictureFlow</strong> te ofrece un recorrido por las grandes historias del futbol argentino. <br/> <strong>guarda, colecciona y crea</strong>y sigue a tu equipos favoritos.</p>
                </div>
                <LinkIcon href='/' className='absolute top-4 left-4'>
                    <IconArrowLeft />
                </LinkIcon>
            </section>
            <section className="flex-1 relative">
                <LinkIcon href='/' className='absolute top-4 left-4 block lg:hidden bg-black'>
                    <IconArrowLeft />
                </LinkIcon>
                <Outlet />
            </section>

        </main>
    )
}