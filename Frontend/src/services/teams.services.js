const API_URL = 'http://localhost:8080/api/teams'

export async function getTeams () {
    const data = await fetch(API_URL)
    const teams = await data.json()

    return teams
}