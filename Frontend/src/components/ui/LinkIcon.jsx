import { Link } from "react-router-dom";

export function LinkIcon ({ children, href, className }) {

    
    return (
        <Link to={href} className={`p-0.5 rounded-full  bg-gray-100 hover:bg-gray-200 transition-all ${className}`}>
            {children}
        </Link>
    )
}