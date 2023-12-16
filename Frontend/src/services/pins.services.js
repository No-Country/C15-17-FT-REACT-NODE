const API_URL = 'http://localhost:8080/api/publication'

export async function getPins () {
    const data = await fetch(`${API_URL}/traer`)
    const pins = await data.json()
    return pins
}

export async function createPin ({ newPin }) {
    const form = new FormData()

    for (let key in newPin) {
        form.append(key, newPin[key])
    }


    const config = {
        method: "POST",
        body: form,  
      };

    const data = await fetch(`${API_URL}/crear`, config)

    const result = await data.json()

    return result

}