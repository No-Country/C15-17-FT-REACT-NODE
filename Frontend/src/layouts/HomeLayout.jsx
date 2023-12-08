import { Header } from "../components/shared/Header";
import { NavBar } from "../components/shared/NavBar";
import { Outlet } from "react-router-dom";

export function HomeLayout() {
  return (
    <>
        <Header />

        <main className="container mx-auto pt-20 pb-12 lg:pb-0">
            <Outlet />
        </main>

        <NavBar />

    </>
  )
}
