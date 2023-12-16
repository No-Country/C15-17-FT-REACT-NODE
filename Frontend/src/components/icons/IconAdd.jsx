const colors  = {
    white : '#fff',
    black : '#000'
}

export function IconAdd({ color }) {

    const colorType = !color ? 'currentColor' : (color !== 'white' && color !== 'black') ? 'currentColor' : colors[color]

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke={colorType} fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
    )
}