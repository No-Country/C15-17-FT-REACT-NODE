import { Link } from "react-router-dom";
import { IconAdd } from "../icons/IconAdd";
import { IconGrid } from "../icons/IconGrid";
import { IconHome } from "../icons/IconHome";
import { IconUser } from "../icons/IconUser";

export function NavBar () {
    return (
        <div className="fixed lg:hidden bg-white bottom-0 left-0 w-full py-4 flex justify-center items-center gap-x-12 z-50">
            <Link to="/"><IconHome /></Link>
            <Link to="/"><IconGrid /></Link>
            <Link to="/pin-create"><IconAdd /></Link>
            <Link to='/perfil'>
                <IconUser />
            </Link>
        </div>
    )
}