// Array of players with details
const Arsenal = [
    { name: 'Saka', age: 21, height: '178cm', foot: 'Left', position: 'Winger', number: 7, img: 'player images/Saka.jpg' },
    { name: 'Odegaard', age: 24, height: '178cm', foot: 'Left', position: 'Midfielder', number: 8, img: 'player images/Odegaard.jpg' },
    { name: 'Saliba', age: 22, height: '192cm', foot: 'Right', position: 'Defender', number: 2, img: 'player images/Saliba.jpg' },
    { name: 'Rice', age: 24, height: '185cm', foot: 'Right', position: 'Midfielder', number: 41, img: 'player images/Rice.jpg' }
];

const playersList = document.getElementById('players-list');

// Create player cards with hover details
Arsenal.forEach((player) => {
    const playerCard = document.createElement('div');
    playerCard.className = 'player-card';

    // Create an image for the player
    const img = document.createElement('img');
    img.src = player.img;
    img.alt = `${player.name}'s picture`;
    img.className = 'player-image';

    // Create a div for player details
    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'player-details';

    // Add player details inside the details div
    detailsDiv.innerHTML = `
        <p><strong>Name:</strong> ${player.name}</p>
        <p><strong>Age:</strong> ${player.age}</p>
        <p><strong>Height:</strong> ${player.height}</p>
        <p><strong>Foot:</strong> ${player.foot}</p>
        <p><strong>Position:</strong> ${player.position}</p>
        <p><strong>Number:</strong> ${player.number}</p>
    `;

    // Append elements to the player card
    playerCard.appendChild(img);
    playerCard.appendChild(detailsDiv);

    // Add the player card to the players list
    playersList.appendChild(playerCard);
});
