document.addEventListener('DOMContentLoaded', () => {
    const prophetSection = document.getElementById('prophet');
    const pokeapi = document.getElementById('pokeapi');
    const cpForm = document.getElementById('cp-form');

    prophetSection.addEventListener('click', () => {
        window.location.href = 'prophets.html';
    });
    pokeapi.addEventListener('click', () => {
        window.location.href = '../poke-api/poke.html';
    });
    cpForm.addEventListener('click', () => {
        window.location.href = 'https://codepen.io/Lenora-Stevens/pen/Babdobp';
    });
});
