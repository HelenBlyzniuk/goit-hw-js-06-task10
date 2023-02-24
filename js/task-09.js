function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const button = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

button.addEventListener('click', handleClick);

function handleClick (event) {
  console.log(getRandomHexColor());
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorName.textContent = `${getRandomHexColor()}`;

}