const API_URL = 'http://localhost:8080/api/users'

export async function getUser({ id }) {
    const data = await fetch(`${API_URL}/${id}`)
    const user = data.json()
    return user
}