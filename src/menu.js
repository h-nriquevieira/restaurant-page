function createMenuPage() {
  const header = document.createElement('h1');
  const copy = document.createElement('p');
  const cardsContainer = document.createElement('div');
  const menuItems = [
    new menuItem('Bread', 'Delicious freshly baked bread.'),
    new menuItem('Cookie', 'Chocolate chip cookie'),
    new menuItem('Cheese', 'The perfect companion for our bread'),
    new menuItem('Coffee', '100% Arabica Coffee.')
  ]


  header.textContent = 'Menu';
  copy.textContent = 'All our products are made with top quality ingredients.';

  menuItems.forEach(item => {cardsContainer.appendChild(appendCard(item))});
  cardsContainer.classList.add('cards-container')

  return [header, copy, cardsContainer];
}

function appendCard(item) {
  const name = document.createElement('h2');
  const description = document.createElement('p');
  const card = document.createElement('div');

  name.textContent = item.name;
  description.textContent = item.description;

  card.append(name, description);
  card.classList.add('card');
  
  return card;
}

class menuItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}


export {createMenuPage as default};