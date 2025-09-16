import { baseUrl } from '../variables.js'

async function getUser(userName) {
    const response = await fetch(`${baseUrl}/${userName}`)
    if (!response.ok && response.status !== 404) {
        throw new Error(`Erro HTTP: ${response.status}`)
    }
    return await response.json()
}

export { getUser }