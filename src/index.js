import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

const componentHandler = {
  
  updatePage: function(newComponent) {
    componentHandler.deleteContent();
    componentHandler.addContent(newComponent);
  },

  deleteContent: function() {
    while (page.content.firstChild) {
      page.content.removeChild(page.content.firstChild);
    }
  },

  addContent: function(component) {
    for (let i = 0; i < component.length; i++) {
      page.content.appendChild(component[i]);
    }
  },

  changePage: function() {
    switch (this.textContent) {
      case 'Home':
        componentHandler.updatePage(homePage());
        break;
      case 'Menu':
        componentHandler.updatePage(menuPage());
        break;
      case 'Contact':
        componentHandler.updatePage(contactPage());
        break;
    }
  },
}

const page = {
  content: document.querySelector('#content'),
  header: document.querySelector('header'),

  createHeader: function() {
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    const headerContent = [home, menu, contact];
    this.insertHeaderToPage(headerContent);
  },

  addEvents: function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', componentHandler.changePage));
  },

  insertHeaderToPage: function(component) {
    for (let i = 0; i < component.length; i++) {
      page.header.appendChild(component[i]);
    }
  },
}

page.createHeader();
page.addEvents();
componentHandler.addContent(homePage());