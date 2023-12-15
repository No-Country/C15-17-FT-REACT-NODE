const API_URL = 'http://localhost:8080/api/users'

export async function getUser({ id }) {
    const data = await fetch(`${API_URL}/${id}`)
    const user = data.json()
    return user
}

export async function updateUser ({ id, data }) {
    const form = new FormData()

    for(let key in data) {
        form.append(key, data[key])
    }

    const config = {
        method: "PATCH",
        body: form,  
    };

    const response = await fetch(`${API_URL}/${id}`, config)

    const result = await response.json()

    return result

}