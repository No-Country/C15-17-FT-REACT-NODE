const buttonTypes = {
    BUTTON : 'button',
    SUBMIT : 'submit'
}

const buttonColors = {
    blue : {
        color : 'bg-primary text-white',
        hover : 'hover:bg-blue-500'
    },
    gray : {
        color : 'bg-gray-100 text-black',
        hover : 'hover:bg-gray-200'
    }
}

export function Button ({ children, type, className, color }) {

    const typeFormat = !type ? buttonTypes.BUTTON : (type !== 'button' && type !== 'submit') ? buttonTypes.BUTTON : buttonTypes[type];


    const colorFormat = !color ? buttonColors.gray : (color !== 'blue' && color !== 'gray') ? buttonColors.gray : buttonColors[color];



    return (
        <button type={typeFormat} className={`px-4 py-2 rounded-xl ${colorFormat.color} ${colorFormat.hover} ${className} font-medium transition-all`}>
            { children }
        </button>
    )
}