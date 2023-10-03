/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Collapsible.js
class Collapsible {
  constructor(element, animatedElement, counter) {
    this.element = element;
    this.animatedElement = animatedElement;
    this.counter = counter;
    this.collapseElement = this.collapseElement.bind(this);
    this.element.addEventListener('click', this.collapseElement);
  }
  collapseElement(e) {
    e.preventDefault();
    this.counter += 1;
    console.log(this.counter);
    if (this.counter % 2 > 0) {
      if (this.animatedElement.classList.contains('collapse-animation-reverse')) {
        this.animatedElement.classList.remove('collapse-animation-reverse');
      }
      this.animatedElement.classList.add('collapse-animation');
    } else {
      this.animatedElement.classList.toggle('collapse-animation');
      this.animatedElement.classList.add('collapse-animation-reverse');
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const app_link = document.querySelector('.link');
const collapsibleElement = document.querySelector('.collapse');
console.log(collapsibleElement.offsetHeight);
const example = new Collapsible(app_link, collapsibleElement, 0);

//     "test": "echo \"Error: no test specified\" && exit 1"
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;