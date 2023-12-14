const API_URL = 'http://localhost:8080/api/auth'

async function singin ({ credentials }) {

    const config = {
          method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
    }

    const data = await fetch(`${API_URL}/login`, config)
    const user = await data.json()

    return user
}


async function signup ({ credentials }) {

    const config = {
          method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
    }

    const data = await fetch(`${API_URL}/register`, config)
    const user = await data.json()

    return user
}

export const api = {
    signup,
    singin
}