const buttonTypes = {
    BUTTON : 'button',
    SUBMIT : 'submit'
}

const buttonColors = {
    blue : {
        color : 'bg-primary text-white',
        hover : 'bg-blue-900'
    },
    gray : {
        color : 'bg-gray-100 text-black',
        hover : 'bg-gray-200'
    }
}

export function Button ({ children, type, className, color }) {

    const typeFormat = !type ? buttonTypes.BUTTON : (type !== 'button' && type !== 'submit') ? buttonTypes.BUTTON : buttonTypes[type];


    const colorFormat = !color ? buttonColors.gray : (color !== 'blue' && color !== 'gray') ? buttonColors.gray : buttonColors[color];



    return (
        <button type={typeFormat} className={`px-4 py-2 rounded-xl ${colorFormat.color} hover:${colorFormat.hover} ${className} font-medium`}>
            { children }
        </button>
    )
}