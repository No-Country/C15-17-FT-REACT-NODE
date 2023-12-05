export function Pin ({ image }) {
    return (
        <picture>
            <img src={image} className='h-full w-56 object-cover rounded-xl'/>
        </picture>
    )
}