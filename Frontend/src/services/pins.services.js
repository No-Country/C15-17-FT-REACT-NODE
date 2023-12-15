const API_URL = 'http://localhost:8080/api/publication'

export async function getPins () {
    const data = await fetch('http://localhost:5173/data.json')
    const pins = await data.json()
    return pins
}

export async function createPin ({ newPin }) {
    const form = new FormData()

    for (let key in newPin) {
        form.append(key, newPin[key])
    }

    console.log(newPin)

    const config = {
        method: "POST",
        body: form,  
      };

    const data = await fetch(`${API_URL}/crear`, config)

    const result = await data.json()

    return result

}