document.addEventListener('DOMContentLoaded', () => {
    const prophetSection = document.getElementById('prophet');

    prophetSection.addEventListener('click', () => {
        window.location.href = 'prophets.html';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const prophetSection = document.getElementById('pokeapi');

    prophetSection.addEventListener('click', () => {
        window.location.href = '../poke-api/poke.html';
    });
});