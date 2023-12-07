import { Link } from "react-router-dom";

const buttonColors = {
    blue: {
        color: 'bg-primary text-white',
        hover: 'hover:bg-blue-400'
    },
    gray: {
        color: 'bg-gray-100 text-black',
        hover: 'hover:bg-gray-200'
    }
}

export function LinkButton({ children, href, color, className }) {
    const colorFormat = !color ? buttonColors.gray : (color !== 'blue' && color !== 'gray') ? buttonColors.gray : buttonColors[color];

    return (
        <Link to={href} className={` px-4 py-2 rounded-xl ${colorFormat.color} ${colorFormat.hover} ${className} font-medium transition-all`}>
            {children}
        </Link>
    );
}
