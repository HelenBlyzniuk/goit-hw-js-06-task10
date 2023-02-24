const categoriesEl = document.querySelector('#categories');

const numberOfCategories = categoriesEl.children.length;

console.log(`Number of categories: ${numberOfCategories}`);

const titlesEl = document.querySelectorAll('.item');

const makeMessage = (titles)=>{
  let message ='';
    for(const title of titles){
        const heading = title.firstElementChild.textContent;
        const listElLength = title.lastElementChild.children.length;
        
        message += `Category: ${heading}   
 Elements: ${listElLength}

 `;
    }
   return message;
}

console.log(makeMessage(titlesEl));

