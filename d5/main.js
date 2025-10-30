import countries from './countries.js';
import webTechs from './web_techs.js';

//2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.replace(/[.,]/g, '').split(' ');
console.log(words);
console.log(words.length);

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';

console.log(shoppingCart);

//4
if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia');
}

//5
if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push('Sass');
}
console.log(webTechs);

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);