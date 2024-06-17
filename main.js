import './style.css'
const prev = document.querySelector('#prev');
const div = document.querySelector('.carousselContainer');
const next = document.querySelector('#next');
let counter = 0;

const images = [
  {
      "nom": "V€nus",
      "img": "/public/images/venus.png",
      "alt": "Venus",
      "date": "Aujourd'hui je crois",
      "description": "Oh trop moche le boug! 😂"
  },
  {
      "nom": "Derow",
      "img": "/public/images/derow.jpg",
      "alt": "Derow",
      "date": "Hier le sang",
      "description": "BG sa mère le big 🍑"
  },
  {
      "nom": "Singe funambule",
      "img": "https://www.lepoint.fr/images/2021/11/17/22442307-22442297-g-jpg_8375297_1000x667.jpg",
      "alt": "Singe funambule",
      "date": "Je sais pas frelon",
      "description": "Oulah les baloches!"
  }
]

function inner(e) {
  div.innerHTML =`
  <h1>${images[e].nom}</h1>
    <img src="${images[e].img}" alt="${images[e].alt}" class="picture"/>
    
    <p class="date"><span>Date: </span>${images[e].date}</p>
    
    <p class="description"><span>Description: </span>${images[e].description}</p>
  `;
}
inner(counter);

next.addEventListener('click', () => {
  ++counter;
  
  if(counter === images.length) {
    counter = 0;
  }

  inner(counter);
});

prev.addEventListener('click', () => {
  if(counter === 0) {
    counter = images.length - 1;
  } else {
    --counter;
  }

  inner(counter);
});