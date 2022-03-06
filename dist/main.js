/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenuPage)
/* harmony export */ });
function createMenuPage() {
  const header = document.createElement('h1');
  const copy = document.createElement('p');
  const contactForm = document.createElement('form');
  const nameLabel = document.createElement('label');
  const nameInput = document.createElement('input');
  const messageLabel = document.createElement('label');
  const messageInput = document.createElement('textarea');
  const send = document.createElement('a');

  header.textContent = 'Contact Us';
  copy.textContent = 'We love hearing from our clients!';
  nameLabel.textContent = 'Name:';
  nameLabel.htmlFor = 'name';
  nameInput.id = 'name';
  messageLabel.textContent = 'Message:';
  messageLabel.htmlFor = 'message';
  messageInput.id = 'message';
  send.textContent = 'Send Message';

  contactForm.append(nameLabel, nameInput, messageLabel, messageInput, send);

  return [header, copy, contactForm];
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHomePage)
/* harmony export */ });
/* harmony import */ var _homeimg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeimg.jpg */ "./src/homeimg.jpg");


function createHomePage() {
  const header = document.createElement('h1');
  const img = new Image();
  const copy = document.createElement('p');

  header.textContent = 'Bread Company';
  img.src = _homeimg_jpg__WEBPACK_IMPORTED_MODULE_0__;
  copy.textContent = 'Bread Company was created in 2022 to provide fresh products to you every day.';



  return [header, img, copy];
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenuPage)
/* harmony export */ });
function createMenuPage() {
  const header = document.createElement('h1');
  const copy = document.createElement('p');
  const cardsContainer = document.createElement('div.cardsContainer');
  const menuItems = [
    new menuItem('Bread', 'Delicious freshly baked bread.'),
    new menuItem('Cookie', 'Chocolate chip cookie'),
    new menuItem('Cheese', 'The perfect companion for our bread')
  ]


  header.textContent = 'Menu';
  copy.textContent = 'All our products are made with top quality ingredients.';

  menuItems.forEach(item => {cardsContainer.appendChild(appendCard(item))});

  return [header, copy, cardsContainer];
}

function appendCard(item) {
  const name = document.createElement('h2');
  const description = document.createElement('p');
  const card = document.createElement('div.card');

  name.textContent = item.name;
  description.textContent = item.description;

  card.append(name, description);

  return card;
}

class menuItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}




/***/ }),

/***/ "./src/homeimg.jpg":
/*!*************************!*\
  !*** ./src/homeimg.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9af14c5322dec46d763c.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




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
        componentHandler.updatePage((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
        break;
      case 'Menu':
        componentHandler.updatePage((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
        break;
      case 'Contact':
        componentHandler.updatePage((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
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
componentHandler.addContent((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVkseUNBQVM7QUFDckI7Ozs7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBLDZCQUE2Qiw2Q0FBNkM7O0FBRTFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNmaUM7QUFDQTtBQUNNOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxvREFBUTtBQUM1QztBQUNBO0FBQ0Esb0NBQW9DLG9EQUFRO0FBQzVDO0FBQ0E7QUFDQSxvQ0FBb0MsdURBQVc7QUFDL0M7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixvREFBUSxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY29uc3QgY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IG1lc3NhZ2VMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGNvbnN0IHNlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xuICBjb3B5LnRleHRDb250ZW50ID0gJ1dlIGxvdmUgaGVhcmluZyBmcm9tIG91ciBjbGllbnRzISc7XG4gIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdOYW1lOic7XG4gIG5hbWVMYWJlbC5odG1sRm9yID0gJ25hbWUnO1xuICBuYW1lSW5wdXQuaWQgPSAnbmFtZSc7XG4gIG1lc3NhZ2VMYWJlbC50ZXh0Q29udGVudCA9ICdNZXNzYWdlOic7XG4gIG1lc3NhZ2VMYWJlbC5odG1sRm9yID0gJ21lc3NhZ2UnO1xuICBtZXNzYWdlSW5wdXQuaWQgPSAnbWVzc2FnZSc7XG4gIHNlbmQudGV4dENvbnRlbnQgPSAnU2VuZCBNZXNzYWdlJztcblxuICBjb250YWN0Rm9ybS5hcHBlbmQobmFtZUxhYmVsLCBuYW1lSW5wdXQsIG1lc3NhZ2VMYWJlbCwgbWVzc2FnZUlucHV0LCBzZW5kKTtcblxuICByZXR1cm4gW2hlYWRlciwgY29weSwgY29udGFjdEZvcm1dO1xufVxuXG5leHBvcnQge2NyZWF0ZU1lbnVQYWdlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBob21lSW1hZ2UgZnJvbSAnLi9ob21laW1nLmpwZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBoZWFkZXIudGV4dENvbnRlbnQgPSAnQnJlYWQgQ29tcGFueSc7XG4gIGltZy5zcmMgPSBob21lSW1hZ2U7XG4gIGNvcHkudGV4dENvbnRlbnQgPSAnQnJlYWQgQ29tcGFueSB3YXMgY3JlYXRlZCBpbiAyMDIyIHRvIHByb3ZpZGUgZnJlc2ggcHJvZHVjdHMgdG8geW91IGV2ZXJ5IGRheS4nO1xuXG5cblxuICByZXR1cm4gW2hlYWRlciwgaW1nLCBjb3B5XTtcbn1cblxuZXhwb3J0IHtjcmVhdGVIb21lUGFnZSBhcyBkZWZhdWx0fTsiLCJmdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY29uc3QgY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYuY2FyZHNDb250YWluZXInKTtcbiAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgIG5ldyBtZW51SXRlbSgnQnJlYWQnLCAnRGVsaWNpb3VzIGZyZXNobHkgYmFrZWQgYnJlYWQuJyksXG4gICAgbmV3IG1lbnVJdGVtKCdDb29raWUnLCAnQ2hvY29sYXRlIGNoaXAgY29va2llJyksXG4gICAgbmV3IG1lbnVJdGVtKCdDaGVlc2UnLCAnVGhlIHBlcmZlY3QgY29tcGFuaW9uIGZvciBvdXIgYnJlYWQnKVxuICBdXG5cblxuICBoZWFkZXIudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIGNvcHkudGV4dENvbnRlbnQgPSAnQWxsIG91ciBwcm9kdWN0cyBhcmUgbWFkZSB3aXRoIHRvcCBxdWFsaXR5IGluZ3JlZGllbnRzLic7XG5cbiAgbWVudUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7Y2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoYXBwZW5kQ2FyZChpdGVtKSl9KTtcblxuICByZXR1cm4gW2hlYWRlciwgY29weSwgY2FyZHNDb250YWluZXJdO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRDYXJkKGl0ZW0pIHtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2LmNhcmQnKTtcblxuICBuYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgY2FyZC5hcHBlbmQobmFtZSwgZGVzY3JpcHRpb24pO1xuXG4gIHJldHVybiBjYXJkO1xufVxuXG5jbGFzcyBtZW51SXRlbSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cbn1cblxuXG5leHBvcnQge2NyZWF0ZU1lbnVQYWdlIGFzIGRlZmF1bHR9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBob21lUGFnZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSAnLi9jb250YWN0LmpzJztcblxuY29uc3QgY29tcG9uZW50SGFuZGxlciA9IHtcbiAgXG4gIHVwZGF0ZVBhZ2U6IGZ1bmN0aW9uKG5ld0NvbXBvbmVudCkge1xuICAgIGNvbXBvbmVudEhhbmRsZXIuZGVsZXRlQ29udGVudCgpO1xuICAgIGNvbXBvbmVudEhhbmRsZXIuYWRkQ29udGVudChuZXdDb21wb25lbnQpO1xuICB9LFxuXG4gIGRlbGV0ZUNvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuICAgIHdoaWxlIChwYWdlLmNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgcGFnZS5jb250ZW50LnJlbW92ZUNoaWxkKHBhZ2UuY29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH0sXG5cbiAgYWRkQ29udGVudDogZnVuY3Rpb24oY29tcG9uZW50KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wb25lbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBhZ2UuY29udGVudC5hcHBlbmRDaGlsZChjb21wb25lbnRbaV0pO1xuICAgIH1cbiAgfSxcblxuICBjaGFuZ2VQYWdlOiBmdW5jdGlvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMudGV4dENvbnRlbnQpIHtcbiAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICBjb21wb25lbnRIYW5kbGVyLnVwZGF0ZVBhZ2UoaG9tZVBhZ2UoKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnTWVudSc6XG4gICAgICAgIGNvbXBvbmVudEhhbmRsZXIudXBkYXRlUGFnZShtZW51UGFnZSgpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdDb250YWN0JzpcbiAgICAgICAgY29tcG9uZW50SGFuZGxlci51cGRhdGVQYWdlKGNvbnRhY3RQYWdlKCkpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sXG59XG5cbmNvbnN0IHBhZ2UgPSB7XG4gIGNvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JyksXG4gIGhlYWRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyksXG5cbiAgY3JlYXRlSGVhZGVyOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gICAgY29uc3QgaGVhZGVyQ29udGVudCA9IFtob21lLCBtZW51LCBjb250YWN0XTtcbiAgICB0aGlzLmluc2VydEhlYWRlclRvUGFnZShoZWFkZXJDb250ZW50KTtcbiAgfSxcblxuICBhZGRFdmVudHM6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbXBvbmVudEhhbmRsZXIuY2hhbmdlUGFnZSkpO1xuICB9LFxuXG4gIGluc2VydEhlYWRlclRvUGFnZTogZnVuY3Rpb24oY29tcG9uZW50KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wb25lbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBhZ2UuaGVhZGVyLmFwcGVuZENoaWxkKGNvbXBvbmVudFtpXSk7XG4gICAgfVxuICB9LFxufVxuXG5wYWdlLmNyZWF0ZUhlYWRlcigpO1xucGFnZS5hZGRFdmVudHMoKTtcbmNvbXBvbmVudEhhbmRsZXIuYWRkQ29udGVudChob21lUGFnZSgpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=