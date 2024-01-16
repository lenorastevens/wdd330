const url = "https://lenorastevens.github.io/wdd330/data/prophets.json";

document.addEventListener('DOMContentLoaded', () => {
    async function getProphetData() {
        const response = await fetch(url);
        const data = await response.json();
        console.table(data.prophets);
        showProphets(data.prophets);
    }
        
    const showProphets = (prophets) => {
        prophets.forEach((prophet) => {
            const template = document.getElementById('prophet-card');
            const card = document.importNode(template.content, true);

            card.querySelector('h2').textContent = `${prophet.name} ${prophet.lastname}`;
            card.querySelector('p:nth-of-type(1)').textContent = `Birthdate: ${prophet.birthdate}`;
            card.querySelector('p:nth-of-type(2)').textContent = `Death: ${prophet.death}`;
            card.querySelector('.profile').src = prophet.imageurl;

            document.body.appendChild(card);
        });
    }

    getProphetData()
});
