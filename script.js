//  *-<((GLOBAL VARIABLES))>-*
const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
let deck = new Array();

// *-<((FUNCTIONS))>-*
const getDeck = () => {
  const deck = new Array();

  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < cards.length; x++) {
      let card = { Value: cards[x], Suit: suits[i] };
      deck.push(card);
    }
  }

  return deck;
};

const shuffleCards = () => {
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor(Math.random() * deck.length);
    let location2 = Math.floor(Math.random() * deck.length);
    let tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }

  renderDeck();
};

const renderDeck = () => {
  document.getElementById('deck').innerHTML = '';
  for (let i = 0; i < deck.length; i++) {
    let card = document.createElement('div');
    let value = document.createElement('h4');
    let suit = document.createElement('p');
    card.className = 'card';
    value.className = 'value';
    suit.innerText = deck[i].Suit;

    value.innerHTML = deck[i].Value;
    card.appendChild(value);
    card.appendChild(suit);

    document.getElementById('deck').appendChild(card);
  }
};

// *-<((WINDOW LOAD EVENT))>-*
window.addEventListener('load', () => {
  deck = getDeck();
  renderDeck();
});
