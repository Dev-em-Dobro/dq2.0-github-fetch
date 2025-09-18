export function showLoading(profileDataDiv) {
    profileDataDiv.innerHTML = '<p class="loading">Carregando...</p>';
    profileDataDiv.classList.remove('hidden');
}

export function showError(errorMessage, profileDataDiv) {
    errorMessage.textContent = "Ocorreu um erro ao buscar o usuário do GitHub";
    profileDataDiv.innerHTML = '';
}

export function renderProfileData(profileDataDiv, user, repositories) {
    profileDataDiv.classList.remove('hidden');

    const repositoriesHTML = repositories && repositories.length > 0
        ? repositories.map(repo => `
            <div class="repository-card">
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
                    <h3>${repo.name}</h3>
                    <div class="repository-stats">
                        <span>🍴 Forks: ${repo.forks_count}</span>
                        <span>⭐ Stars: ${repo.stargazers_count}</span>
                        <span>👀 Watchers: ${repo.watchers_count}</span>
                        <span>💻 Linguagem: ${repo.language || 'Não informada'}</span>
                    </div>
                </a>
            </div>
        `).join('')
        : '<p>Nenhum repositório encontrado</p>';

    profileDataDiv.innerHTML = `
    <div class="profile-data">
      
            <img src="${user.avatar_url}" alt="Foto de perfil" class="profile-avatar">
            <div>
                <h2>${user.name}</h2>
                <p>${user.bio ? user.bio : 'Não possui bio cadastrada <span>😢</span>'}</p>
            </div>
   
        </div>

        <div class="profile-counters">
            <div class="followers">
                <h4>👥 Seguidores</h4>
                <span>${user.followers}</span>
            </div>
            <div class="following">
                <h4>👥 Seguindo</h4>
                <span>${user.following}</span>
            </div>
        </div>
        <div class="profile-repositories">
            <h2>Repositórios</h2>
            <div class="repositories">
                ${repositoriesHTML}
            </div>
        </div>

    `;
}

