// Array of players with details
const Arsenal = [
    { name: 'Saka', age: 21, height: '178cm', foot: 'Left', position: 'Winger', number: 7, img: 'player images/Saka.jpg' },
    { name: 'Odegaard', age: 24, height: '178cm', foot: 'Left', position: 'Midfielder', number: 8, img: 'player images/Odegaard.jpg' },
    { name: 'Saliba', age: 22, height: '192cm', foot: 'Right', position: 'Defender', number: 2, img: 'player images/Saliba.jpg' },
    { name: 'Rice', age: 24, height: '185cm', foot: 'Right', position: 'Midfielder', number: 41, img: 'player images/Rice.jpg' }
];

const playersList = document.getElementById('players-list');


// Variable to keep track of the currently open details
let openDetailsDiv = null;

Arsenal.forEach((player) => {
    const p = document.createElement('p'); // Create a paragraph for the player name
    p.textContent = player.name; // Set the name as text
    p.className = 'player-name'; // Add a class for styling

    // Add click event listener to display player details
    p.addEventListener('click', () => {
        // Close previously opened details if any
        if (openDetailsDiv && openDetailsDiv !== p.nextElementSibling) {
            openDetailsDiv.style.display = 'none';
            openDetailsDiv = null;
        }

        // Check if the current player's details are already displayed
        let detailsDiv = p.nextElementSibling;

        if (detailsDiv && detailsDiv.classList.contains('player-details')) {
            // Toggle the display of the current details
            detailsDiv.style.display = detailsDiv.style.display === 'none' ? 'flex' : 'none';
            openDetailsDiv = detailsDiv.style.display === 'flex' ? detailsDiv : null;
            return;
        }

         // Create a div for player details
        detailsDiv = document.createElement('div');
        detailsDiv.className = 'player-details';

        // Add the player's image
        const img = document.createElement('img');
        img.src = player.img;
        img.alt = `${player.name}'s picture`;

        // Add player details as a list
        const details = document.createElement('ul');
        details.innerHTML = `
            <li><strong>Age:</strong> ${player.age}</li>
            <li><strong>Height:</strong> ${player.height}</li>
            <li><strong>Preferred Foot:</strong> ${player.foot}</li>
            <li><strong>Position:</strong> ${player.position}</li>
            <li><strong>Number:</strong> ${player.number}</li>
        `;

        detailsDiv.appendChild(img);
        detailsDiv.appendChild(details);
        p.insertAdjacentElement('afterend', detailsDiv);

        // Set the newly created details as the currently open details
        openDetailsDiv = detailsDiv;
    });

    playersList.appendChild(p);
});