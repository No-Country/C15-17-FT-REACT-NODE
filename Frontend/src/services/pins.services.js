export async function getPins () {
    const data = await fetch('http://localhost:5173/data.json')
    const pins = await data.json()
    return pins
}