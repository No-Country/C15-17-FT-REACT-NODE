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


export function ButtonIcon ({ children, type, className, color }) {



    const typeFormat = !type ? buttonTypes.BUTTON : (type !== 'button' && type !== 'submit') ? buttonTypes.BUTTON : buttonTypes[type];


    const colorFormat = !color ? buttonColors.gray : (color !== 'blue' && color !== 'gray') ? buttonColors.gray : buttonColors[color];

    console.log(colorFormat)

    return (
        <button type={typeFormat} className={`p-0.5 rounded-full  ${colorFormat.color} ${colorFormat.hover} transition-all ${className}`}>
            {children}
        </button>
    )
}