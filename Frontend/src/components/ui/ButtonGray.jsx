
export function ButtonGray ({ children, className }) {
    return (
        <button className={` bg-gray-100 hover:bg-gray-200 te font-semibold px-4 py-2 rounded-2xl transition-all ${className}`}>
            { children }
        </button>
    )
}

