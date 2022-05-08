console.log('Hello World!');
// import { Article } from './js/Article';
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

window.onload = function () {
  addContainertoDom();
  addElementToContainer('textarea', 'output');
  addElementToContainer('div', 'keyboard');
  createDescription();
  addContentToDescription();
};
