document.addEventListener('DOMContentLoaded', () => {
    fetch('data/prophets.json')
        .then(response => response.json())
        .then(data => {
            data.prophets.forEach(prophet => {
                const template = document.getElementById('prophet-card');
                const card = document.importNode(template.contentEditable, true);

                card.querySelector('h2').textContent = `${prophet.name} ${prophet.lastname}`;
                card.querySelector('p:nth-of-type(1)').textContent = `Birthdate: ${prophet.birthdate}`;
                card.querySelector('p:nth-of-type(2)').textContent = `Death: ${prophet.death}`;
                card.querySelector('.profile').src = prophet.imageurl;

                document.body.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching JSon:', error));
});