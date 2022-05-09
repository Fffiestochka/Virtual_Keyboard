/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Key.js":
/*!***********************!*\
  !*** ./src/js/Key.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Key": () => (/* binding */ Key)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Key = /*#__PURE__*/function () {
  function Key(_ref) {
    var code = _ref.code,
        key = _ref.key,
        caps = _ref.caps,
        upper = _ref.upper;

    _classCallCheck(this, Key);

    this.code = code;
    this.key = key;
    this.caps = caps;
    this.upper = upper;
  } // Key generator


  _createClass(Key, [{
    key: "generateKey",
    value: function generateKey() {
      var newKey = document.createElement('div');
      newKey.className = 'key-button'; // let template = '';
      // newKey.className.add(`${this.code}`);
      // newKey.setAttribute('');

      newKey.innerHTML = "<div>".concat(this.code, "</div>");

      if (this.code === 'Backspace' || this.code === 'CapsLock' || this.code === 'Enter' || this.code === 'Shift') {
        newKey.classList.add('double');
      } else if (this.code === ' ') {
        newKey.classList.add('space');
      } else {
        newKey.classList.add('single');
      }

      return newKey;
    }
  }]);

  return Key;
}();

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_Key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Key */ "./src/js/Key.js");
console.log('Please use this Virtual Keyboard!');
 // console.log(Key);

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
}; // create massive of key objects


var keyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Left', 'Down', 'Right', 'Ctrl'];
var keyboardObg = [];

for (var i = 0; i < keyboard.length; i += 1) {
  var keyObj = {}; // keyObj.name = keyboard[i];

  keyObj.code = keyboard[i];
  keyObj.caps = false;
  keyObj.upper = keyObj.code.toUpperCase();
  keyboardObg.push(keyObj);
} // console.log(keyboardObg);


var generateKeys = function generateKeys() {
  var keys = [];
  keyboardObg.forEach(function (key) {
    keys.push(new _js_Key__WEBPACK_IMPORTED_MODULE_0__.Key(key));
  }); // console.log(keys);

  return keys;
}; // generateKeys();


var renderKeysToKeyboardContainer = function renderKeysToKeyboardContainer() {
  var keyboardContainer = document.querySelector('.keyboard-container');
  generateKeys().forEach(function (key) {
    // console.log(key);
    keyboardContainer.append(key.generateKey());
  });
};

var removeSelectedKeys = function removeSelectedKeys() {
  var keys = document.querySelectorAll('.key-button');
  keys.forEach(function (key) {
    key.classList.remove('active');
  });
};

var selectClickedKey = function selectClickedKey(clickedKey) {
  clickedKey.classList.add('active');
};

var addKeysClickHandler = function addKeysClickHandler() {
  document.querySelector('.keyboard-container').addEventListener('click', function (e) {
    if (e.target.classList.contains('key-button')) {
      var clickedKey = e.target; // console.log(e);

      removeSelectedKeys();
      selectClickedKey(clickedKey);
    }
  });
};

var addKeysKeydownHandler = function addKeysKeydownHandler() {
  document.addEventListener('keydown', function (e) {
    for (var _i = 0; _i < keyboardObg.length; _i += 1) {
      console.log(_i);
    } // if (e.target.classList.contains('key-button')) {
    //   let pressedKey = 1;
    //   console.log(e);
    //   removeSelectedKeys();
    //   selectClickedKey(pressedKey);
    // }

  });
}; // document.onkeypress = function (event) {
//   console.log(event.code);
//   console.log(event.key);
// };


window.onload = function () {
  addContainertoDom();
  addElementToContainer('textarea', 'output');
  addElementToContainer('div', 'keyboard-container');
  createDescription();
  addContentToDescription();
  renderKeysToKeyboardContainer();
  addKeysClickHandler();
  addKeysKeydownHandler();
}; // document.onkeydown = function (event) {
//   keyboard.push(event.key);
//   console.log(keyboard);
// };
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=script.js.map