import { baseUrl, repositoriesQuantity } from '../variables.js'

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}&sort=updated`)
    if (!response.ok) {
        console.error('Erro ao buscar repositórios:', response.status)
        return []
    }
    return await response.json()
}

export { getRepositories }