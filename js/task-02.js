const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const elementsMaker = (array) =>{
//   const elements =[];
  
// for(const ingredient of array){
// const li = document.createElement('li');

// li.classList.add('item');
// li.textContent =`${ingredient}`;
// elements.push(li);
// }
// return elements;
// }

// console.log(elementsMaker(ingredients));
// const listEl = document.querySelector('#ingredients');
// listEl.append(...elementsMaker(ingredients));

const elements = ingredients.map((ingredient) =>{
const li = document.createElement('li');
li.classList.add('item');
li.textContent =`${ingredient}`
return li;
})
console.log(elements);
const listEl = document.querySelector('#ingredients');
listEl.append(...elements);