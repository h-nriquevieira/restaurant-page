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

  header.textContent = 'Bread Company';
  copy.textContent = 'Bread Company was created in 2022 to provide fresh products to you every day.';



  return [header, copy];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSx5Q0FBUztBQUNyQjs7OztBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsNkJBQTZCLDZDQUE2Qzs7QUFFMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZpQztBQUNBO0FBQ007O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9EQUFRO0FBQzVDO0FBQ0E7QUFDQSxvQ0FBb0Msb0RBQVE7QUFDNUM7QUFDQTtBQUNBLG9DQUFvQyx1REFBVztBQUMvQztBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLG9EQUFRLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjb25zdCBjb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGhlYWRlci50ZXh0Q29udGVudCA9ICdCcmVhZCBDb21wYW55JztcbiAgY29weS50ZXh0Q29udGVudCA9ICdCcmVhZCBDb21wYW55IHdhcyBjcmVhdGVkIGluIDIwMjIgdG8gcHJvdmlkZSBmcmVzaCBwcm9kdWN0cyB0byB5b3UgZXZlcnkgZGF5Lic7XG5cblxuXG4gIHJldHVybiBbaGVhZGVyLCBjb3B5XTtcbn1cblxuZXhwb3J0IHtjcmVhdGVNZW51UGFnZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgaG9tZUltYWdlIGZyb20gJy4vaG9tZWltZy5qcGcnO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGNvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0JyZWFkIENvbXBhbnknO1xuICBpbWcuc3JjID0gaG9tZUltYWdlO1xuICBjb3B5LnRleHRDb250ZW50ID0gJ0JyZWFkIENvbXBhbnkgd2FzIGNyZWF0ZWQgaW4gMjAyMiB0byBwcm92aWRlIGZyZXNoIHByb2R1Y3RzIHRvIHlvdSBldmVyeSBkYXkuJztcblxuXG5cbiAgcmV0dXJuIFtoZWFkZXIsIGltZywgY29weV07XG59XG5cbmV4cG9ydCB7Y3JlYXRlSG9tZVBhZ2UgYXMgZGVmYXVsdH07IiwiZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnN0IGNvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2LmNhcmRzQ29udGFpbmVyJyk7XG4gIGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICBuZXcgbWVudUl0ZW0oJ0JyZWFkJywgJ0RlbGljaW91cyBmcmVzaGx5IGJha2VkIGJyZWFkLicpLFxuICAgIG5ldyBtZW51SXRlbSgnQ29va2llJywgJ0Nob2NvbGF0ZSBjaGlwIGNvb2tpZScpLFxuICAgIG5ldyBtZW51SXRlbSgnQ2hlZXNlJywgJ1RoZSBwZXJmZWN0IGNvbXBhbmlvbiBmb3Igb3VyIGJyZWFkJylcbiAgXVxuXG5cbiAgaGVhZGVyLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBjb3B5LnRleHRDb250ZW50ID0gJ0FsbCBvdXIgcHJvZHVjdHMgYXJlIG1hZGUgd2l0aCB0b3AgcXVhbGl0eSBpbmdyZWRpZW50cy4nO1xuXG4gIG1lbnVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge2NhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFwcGVuZENhcmQoaXRlbSkpfSk7XG5cbiAgcmV0dXJuIFtoZWFkZXIsIGNvcHksIGNhcmRzQ29udGFpbmVyXTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kQ2FyZChpdGVtKSB7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Rpdi5jYXJkJyk7XG5cbiAgbmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuXG4gIGNhcmQuYXBwZW5kKG5hbWUsIGRlc2NyaXB0aW9uKTtcblxuICByZXR1cm4gY2FyZDtcbn1cblxuY2xhc3MgbWVudUl0ZW0ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG59XG5cblxuZXhwb3J0IHtjcmVhdGVNZW51UGFnZSBhcyBkZWZhdWx0fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBtZW51UGFnZSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmNvbnN0IGNvbXBvbmVudEhhbmRsZXIgPSB7XG4gIFxuICB1cGRhdGVQYWdlOiBmdW5jdGlvbihuZXdDb21wb25lbnQpIHtcbiAgICBjb21wb25lbnRIYW5kbGVyLmRlbGV0ZUNvbnRlbnQoKTtcbiAgICBjb21wb25lbnRIYW5kbGVyLmFkZENvbnRlbnQobmV3Q29tcG9uZW50KTtcbiAgfSxcblxuICBkZWxldGVDb250ZW50OiBmdW5jdGlvbigpIHtcbiAgICB3aGlsZSAocGFnZS5jb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBhZ2UuY29udGVudC5yZW1vdmVDaGlsZChwYWdlLmNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9LFxuXG4gIGFkZENvbnRlbnQ6IGZ1bmN0aW9uKGNvbXBvbmVudCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcG9uZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBwYWdlLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY29tcG9uZW50W2ldKTtcbiAgICB9XG4gIH0sXG5cbiAgY2hhbmdlUGFnZTogZnVuY3Rpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLnRleHRDb250ZW50KSB7XG4gICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgY29tcG9uZW50SGFuZGxlci51cGRhdGVQYWdlKGhvbWVQYWdlKCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ01lbnUnOlxuICAgICAgICBjb21wb25lbnRIYW5kbGVyLnVwZGF0ZVBhZ2UobWVudVBhZ2UoKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQ29udGFjdCc6XG4gICAgICAgIGNvbXBvbmVudEhhbmRsZXIudXBkYXRlUGFnZShjb250YWN0UGFnZSgpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LFxufVxuXG5jb25zdCBwYWdlID0ge1xuICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLFxuICBoZWFkZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLFxuXG4gIGNyZWF0ZUhlYWRlcjogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBob21lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIG1lbnUudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICAgIGNvbnN0IGhlYWRlckNvbnRlbnQgPSBbaG9tZSwgbWVudSwgY29udGFjdF07XG4gICAgdGhpcy5pbnNlcnRIZWFkZXJUb1BhZ2UoaGVhZGVyQ29udGVudCk7XG4gIH0sXG5cbiAgYWRkRXZlbnRzOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb21wb25lbnRIYW5kbGVyLmNoYW5nZVBhZ2UpKTtcbiAgfSxcblxuICBpbnNlcnRIZWFkZXJUb1BhZ2U6IGZ1bmN0aW9uKGNvbXBvbmVudCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcG9uZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBwYWdlLmhlYWRlci5hcHBlbmRDaGlsZChjb21wb25lbnRbaV0pO1xuICAgIH1cbiAgfSxcbn1cblxucGFnZS5jcmVhdGVIZWFkZXIoKTtcbnBhZ2UuYWRkRXZlbnRzKCk7XG5jb21wb25lbnRIYW5kbGVyLmFkZENvbnRlbnQoaG9tZVBhZ2UoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9