import Collapsible from './Collapsible';

const link = document.querySelector('.link');
const collapsibleElement = document.querySelector('.collapse');

console.log(collapsibleElement.offsetHeight);

const example = new Collapsible(link, collapsibleElement, 0);
