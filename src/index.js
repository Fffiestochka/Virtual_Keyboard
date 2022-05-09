console.log('Please use this Virtual Keyboard!');
import { Key } from './js/Key';
// console.log(Key);
const createNewElement = (element, ...classes) => {
  let newElement = document.createElement(element);
  newElement.classList.add(...classes);
  return newElement;
};
const addContainertoDom = () => {
  let container = createNewElement('div', 'container');
  document.body.append(container);
};
const addElementToContainer = (element, ...classes) => {
  let container = document.querySelector('.container');
  let newElement = document.createElement(element);
  container.append(newElement);
  newElement.classList.add(...classes);
};
const createDescription = () => {
  let description = createNewElement('div', 'description');
  let container = document.querySelector('.container');
  container.append(description);
};
const addContentToDescription = () => {
  let p1 = createNewElement('p', 'description-p');
  p1.innerHTML = 'Клавиатура создана в ОС Windows';
  let description = document.querySelector('.description');
  description.append(p1);
  let p2 = createNewElement('p', 'description-p');
  p2.innerHTML = 'Для переключения языка комбинация: левые shift + alt';
  description.append(p2);
};
// create massive of key objects
const keyboard = [
  '`',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace',
  'Tab',
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  '[',
  ']',
  '\\',
  'CapsLock',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  ';',
  "'",
  'Enter',
  'Shift',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  ',',
  '.',
  '/',
  'Upper',
  'Shift',
  'Ctrl',
  'Win',
  'Alt',
  ' ',
  'Alt',
  'Left',
  'Down',
  'Right',
  'Ctrl'
];
let keyboardObg = [];
for (let i = 0; i < keyboard.length; i += 1) {
  let keyObj = {};
  // keyObj.name = keyboard[i];
  keyObj.code = keyboard[i];
  keyObj.caps = false;
  keyboardObg.push(keyObj);
}
// console.log(keyboardObg);
const generateKeys = () => {
  let keys = [];
  keyboardObg.forEach((key) => {
    keys.push(new Key(key));
  });
  // console.log(keys);
  return keys;
};
// generateKeys();
const renderKeysToKeyboardContainer = () => {
  let keyboardContainer = document.querySelector('.keyboard-container');
  generateKeys().forEach(key => {
    // console.log(key);
    keyboardContainer.append(key.generateKey());
  });
};
window.onload = () => {
  addContainertoDom();
  addElementToContainer('textarea', 'output');
  addElementToContainer('div', 'keyboard-container');
  createDescription();
  addContentToDescription();
  renderKeysToKeyboardContainer();
};

// document.onkeydown = function (event) {
//   keyboard.push(event.key);
//   console.log(keyboard);
// };
