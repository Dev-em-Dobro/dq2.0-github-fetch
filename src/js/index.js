import { renderProfileData, showLoading, showError } from './ui.js';
import { fetchUserData, fetchUserRepositories } from './api.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const errorMessage = document.getElementById('error-message');
const profileResultsDiv = document.querySelector('.profile-results');

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;

    if (userName.length === 0) {
        alert("Preencha o campo com o nome do usuário do GitHub");
        return;
    }

    showLoading(profileResultsDiv);

    try {
        const user = await fetchUserData(userName);
        const repositories = await fetchUserRepositories(userName);

        renderProfileData(profileResultsDiv, user, repositories);
    } catch (error) {
        console.error(error);
        showError(errorMessage, profileResultsDiv);
    }
});
