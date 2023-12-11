
export function ButtonIcon ({ children, type, className }) {
    return (
        <button type={type ? type : 'button'} className={`p-0.5 rounded-full  bg-gray-100 hover:bg-gray-200 transition-all ${className}`}>
            {children}
        </button>
    )
}