import Collapsible from "./collapseModule";

const btn = document.querySelector('.btn');
const collapsibleElement = document.querySelector('.collapse');
console.log(collapsibleElement);

console.log(collapsibleElement.offsetHeight);


const example = new Collapsible(btn, collapsibleElement);