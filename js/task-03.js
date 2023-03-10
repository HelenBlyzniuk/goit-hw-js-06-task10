const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const listEl = document.querySelector('.gallery');

const elements = images.map((option) => {

const liItem = document.createElement('li');
liItem.classList.add("gallery-item");
const imgEl = document.createElement('img');
imgEl.src = option.url;
imgEl.alt = option.alt;
  imgEl.classList.add("gallery-img");
  
  liItem.append(imgEl);
  return liItem;


}
)

listEl.append(...elements);