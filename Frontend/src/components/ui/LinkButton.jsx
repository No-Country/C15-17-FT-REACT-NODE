import { Link } from "react-router-dom";

const buttonColors = {
    blue: {
        color: 'bg-primary text-white',
        hover: 'hover:bg-blue-400'
    },
    gray: {
        color: 'bg-gray-100 text-black',
        hover: 'hover:bg-gray-200'
    },
    green : {
        color : 'bg-green-dark text-sky-light',
        hover : 'hover:bg-green-dark/30'
    },
    yellow : {
        color : 'bg-secondary text-black',
        hover : 'hover:bg-yellow-500'
    }
}

export function LinkButton({ children, href, color, className }) {
    const colorFormat = !color ? buttonColors.gray : (color !== 'blue' && color !== 'gray' && color !== 'green' && color !== 'yellow') ? buttonColors.gray : buttonColors[color];

    return (
        <Link to={href} className={` px-4 py-2 rounded-3xl ${colorFormat.color} ${colorFormat.hover} ${className} font-medium transition-all`}>
            {children}
        </Link>
    );
}
