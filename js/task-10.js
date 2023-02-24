function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputEl = document.querySelector('#controls');
const input = inputEl.querySelector('#controls input');


const createButton = inputEl.querySelector('[data-create]');
const destroyButton = inputEl.querySelector('[data-destroy]');
let boxes = document.querySelector('#boxes');



function createBoxes(amount) {
  let elements = [];
  for (let i = 1; i <= amount; i += 1){
    const element = document.createElement("div");
    console.log( `${30 + i*10}px`);
    element.style.width = `${30 + i*10}px`;
    element.style.height = `${30 + i*10}px`;
    element.style.backgroundColor = getRandomHexColor();
    console.log(element);
    elements.push(element);
  }
  return (boxes.prepend(...elements));

}


createButton.addEventListener('click', handleCreateButtonClick);

function handleCreateButtonClick(event) {
  const amount = input.value;
  console.log(amount);
  
  return (createBoxes(amount));
}

destroyButton.addEventListener('click', handleDestroyButtonClick);

function handleDestroyButtonClick() {
  boxes.innerHTML = "";
}
