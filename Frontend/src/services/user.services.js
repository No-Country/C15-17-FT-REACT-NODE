const API_URL = 'http://localhost:8080/api/users'

export async function getUser({ id }) {
    const data = await fetch(`${API_URL}/${id}`)
    const user = await data.json()
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

export async function savePin ({ userId, pinId }) {
    const config = {
        method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pinId
          }),
    }

    const data = await fetch(`${API_URL}/saves/${userId}`, config)
    const response = await data.json()
    return response
}

export async function getSavesByUser ({ userId }) {
   
    const data = await fetch(`${API_URL}/saves/${userId}`)
    const response = await data.json()
    return response
}

export async function deleteSave ({ userId, saveId }) {
    
    const config = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    }
    const data = await fetch(`${API_URL}/saves/${userId}/${saveId}`, config)
    const response = await data.json()
    return response
}