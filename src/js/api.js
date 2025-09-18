const BASE_URL = 'https://api.github.com';

export async function fetchUserData(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}`);
    if (!response.ok) {
        throw new Error('Usuário não encontrado');
    }
    return await response.json();
}

export async function fetchUserRepositories(userName) {
    try {
        const response = await fetch(`${BASE_URL}/users/${userName}/repos?per_page=10&sort=updated`);

        if (!response.ok) {
            throw new Error('Erro ao buscar repositórios');
        }

        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
        throw error;
    }
}

