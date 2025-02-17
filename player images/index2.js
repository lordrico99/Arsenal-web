/*const Fruit = [
    {name: 'apple',color: 'red', seed: 'small', img: ''},
    {name: 'orange',color: 'orange', seed: 'small', img: ''}
    {name: 'mango',color: 'green', seed: 'big', img: ''}
    {name: 'watermelon',color: 'green', seed: 'small', img: ''}
];

const fruitList = document.getElementbyId('fruit-list');

let openDetailsDiv = null;
Fruit.forEach((type) => {
    const p = document.createElement('p');
    p.textContent = typeList.name;
    p.classname = 'type-name';

    p.addEventListner('click', () =>{
    if(openDetailsDiv && openDetailsDiv !== p.nextElementSibling){
        openDetailsDiv.style.display = 'none';
        openDetailsDiv = null;
    }
let detailsDiv = p.nextElementSibling;
if (detailsDiv && detailsDiv.classList.contains('food-details')){
detailsDiv.style.display && detailsDiv.style.display === 'none' ? 'flex' : 'none';
openDetailsDiv = detailsDiv.style.display === 'flex' ? detailsDiv : 'null';
return;
     }
detailsDiv  = document.createElement('div');
detailsDiv.classname = 'food-details';    

const img = document.createElement('img');
img.src = type.img;
img.alt =`${type.name}'s image`

const details = document.createElement('ul');
details.innerHTML = `
<li><strong>name: </strong>${type.name}</li>
<li><strong>color: </strong>${type.color}</li>
<li><strong>seed: </strong>${type.seed}</li>
`

detailsDiv.appendChild(img);
detailsDiv.appendChild(details);
p.insertAdjacentElement('Afterend', detailsDiv);

openDetailsDiv = detailsDiv;
});

fruitList.appendChild(p);


});*/





/*const Club = [
    {name: 'arsenal', titles: '13', nickname: 'gunners', rivals: 'Tottenham', manager: 'Mikel Arteta', logo: ''},
    {name: 'Liverpool', titles: '19', nickname: 'The Reds', rivals: 'Everton', manager: 'Arne Slot', logo: ''},
    {name: 'Manchester City', titles: '6', nickname: 'Cityzens', rivals: 'Manchester United', manager: 'Pep Guardiola', logo: ''},
    {name: 'Chelsea', titles: '9', nickname: 'The blues', rivals: 'Manchester United', manager: 'Enzo Maresca', logo: ''}
]

const clubList = document.getElementById('club-list');

let openDetailsDiv = null;

Club.forEach((team) => {
const p = document.createElement('p');
p.textContent = team.name;
p.className = 'team-name';

p.addEventListener('click', () => {
    if (openDetailsDiv && openDetailsDiv !== p.nextElementSibling){
        openDetailsDiv.style.display = 'none';
        openDetailsDiv = null; 
}

let detailsDiv = p.nextElementSibling;
if(detailsDiv && detailsDiv.classList.contains('team-details')){
    detailsDiv.style.display = detailsDiv.style.display === 'none' ? 'flex':'none';
    openDetailsDiv = detailsDiv.style.display === 'flex' ? detailsDiv : null;
    return;
}

detailsDiv = document.createElement('div');
detailsDiv.className = 'team-details';

const img = document.createElement('img');
img.src = team.logo;
img.alt = `${team.name}'s logo`

const details = document.createElement('ul')
details.innerHTML = `
<li><strong> name: </strong>${team.name}</li>
<li><strong> titles: </strong>${team.titles}</li>
<li><strong> nickname: </strong>${team.nickname}</li>
<li><strong> rivals: </strong>${team.rivals}</li>
<li><strong> manager: </strong>${team.manager}</li>
`

detailsDiv.appendChild(img);
detailsDiv.appendChild(details)
p.insertAdjacentElement('Afterend', detailsDiv);

openDetailsDiv = detailsDiv;

})

clubList.appendChild(p); 

}
})


const Arsenal = [
    {name: 'saka', age: '21', foot: 'left', position: 'winger'},
    {name: 'Rice', age: '24', foot: 'left', position: 'midfielder'}

]

const playersList = document.getElementById('players-list')

let openDetailsDiv = null;

Arsenal.forEach(player => {
    const p = document.createElement('p');
    p.textContent = player.name;
    p.className = 'player-name';

    p.addEventListener('click', () =>{
        if(openDetailsDiv && openDetailsDiv !== p.nextElementSibling){
            openDetailsDiv.style.display = 'none'
            openDetailsDiv = null;
    
let detailsDiv = p.nextElementSibling;
if(detailsDiv && detailsDiv.classList.contains('player-details')){
    detailsDiv.style.display = detailsDiv.style.display === 'none'? flex :'none';
    openDetailsDiv = detailsDiv.style.display === 'flex' ? detailsDiv: null;
    return;
}     
detailsDiv.document.createElement('div');
detailsDiv.className = 'player-details';
     
const img = player.img;
img.src = '';
img.alt = `${player.img}'s picture`

const details = document.createElement('ul');
details.innerHTML = `

<li><strong>name: </stong> ${player.name}</li>
<li><strong>name: </stong> ${player.name}</li>
<li><strong>name: </stong> ${player.name}</li>
`

detailsDiv.appendChild(img);
detailsDiv.appendChild(details);
p.insertAdjacentElement('Afterend', detailsDiv);


openDetailsDiv = detailsDiv;

        }

    })
    playersList.appendChild(p);
});