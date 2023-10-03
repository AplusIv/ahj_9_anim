// import Collapsible from './collapseModule';
import Collapsible from './CollapseModule';

const link = document.querySelector('.link');
const collapsibleElement = document.querySelector('.collapse');

console.log(collapsibleElement.offsetHeight);

const example = new Collapsible(link, collapsibleElement, 0);
