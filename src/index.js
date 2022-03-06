import homePage from './home.js';

const componentHandler = {
  content: document.querySelector('#content'),
  
  updatePage: function(newComponent) {
    this.deleteContent();
    this.addContent(newComponent);
  },

  deleteContent: function() {
    while (content.firstChild) {
      content.removeChild(firstChild);
    }
  },

  addContent: function(component) {
    for (let i = 0; i < component.length; i++) {
      this.content.appendChild(component[i]);
    }
  },
}

componentHandler.addContent(homePage());