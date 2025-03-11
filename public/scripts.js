// Hent og vis dyrene
async function getAnimals() {
    try {
        const response = await fetch(API_URL);
        const animals = await response.json();
        const animalsContainer = document.getElementById('animalsContainer');
        animalsContainer.innerHTML = '';

        animals.forEach(animal => {
            const animalCard = document.createElement('div');
            animalCard.classList.add('animalCard');

            animalCard.innerHTML = `
                <h3>${animal.name}</h3>
                <p>Art: ${animal.species}</p>
                <p>Alder: ${animal.age}</p>
                <p>${animal.description}</p>
                ${animal.image ? `<img src="${animal.image}" alt="${animal.name}" class="animal-image">` : ''}  <!-- Vis billede, hvis det findes -->
                <button class="delete" onclick="deleteAnimal('${animal._id}')">Slet Dyr</button>
            `;

            animalsContainer.appendChild(animalCard);
        });
    } catch (error) {
        console.error('Fejl ved hentning af dyr:', error);
    }
}
