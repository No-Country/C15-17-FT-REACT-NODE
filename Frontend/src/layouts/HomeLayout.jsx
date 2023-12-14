import { Header } from "../components/shared/Header";
import { NavBar } from "../components/shared/NavBar";
import { Outlet } from "react-router-dom";

const  isAuth = true // test auth

export function HomeLayout() {

  
  return (
    <>
        <Header />

        <main className={` pt-20  lg:pb-0 ${isAuth && 'container mx-auto pb-12'} `}>
            <Outlet />
        </main>

      {
        isAuth && <NavBar />
      }
    </>
  )
}
