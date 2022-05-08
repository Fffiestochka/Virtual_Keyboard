/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log('Hello World!'); // import { Article } from './js/Article';

var createNewElement = function createNewElement(element) {
  var _newElement$classList;

  var newElement = document.createElement(element);

  for (var _len = arguments.length, classes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    classes[_key - 1] = arguments[_key];
  }

  (_newElement$classList = newElement.classList).add.apply(_newElement$classList, classes);

  return newElement;
};

var addContainertoDom = function addContainertoDom() {
  var container = createNewElement('div', 'container');
  document.body.append(container);
};

var addElementToContainer = function addElementToContainer(element) {
  var _newElement$classList2;

  var container = document.querySelector('.container');
  var newElement = document.createElement(element);
  container.append(newElement);

  for (var _len2 = arguments.length, classes = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    classes[_key2 - 1] = arguments[_key2];
  }

  (_newElement$classList2 = newElement.classList).add.apply(_newElement$classList2, classes);
};

var createDescription = function createDescription() {
  var description = createNewElement('div', 'description');
  var container = document.querySelector('.container');
  container.append(description);
};

var addContentToDescription = function addContentToDescription() {
  var p1 = createNewElement('p', 'description-p');
  p1.innerHTML = 'Клавиатура создана в ОС Windows';
  var description = document.querySelector('.description');
  description.append(p1);
  var p2 = createNewElement('p', 'description-p');
  p2.innerHTML = 'Для переключения языка комбинация: левые shift + alt';
  description.append(p2);
};

window.onload = function () {
  addContainertoDom();
  addElementToContainer('textarea', 'output');
  addElementToContainer('div', 'keyboard');
  createDescription();
  addContentToDescription();
};
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=script.js.map