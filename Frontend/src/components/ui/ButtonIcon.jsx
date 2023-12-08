export function ButtonIcon ({ children }) {
    return (
        <button className="p-0.5 rounded-full box-content bg-gray-100 hover:bg-gray-200 transition-all">
            {children}
        </button>
    )
}