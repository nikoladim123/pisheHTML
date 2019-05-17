var categoryList = document.getElementsByClassName('categoryList');

// console.log(categoryList[0].childNodes[1]);

for (var i = 0; i < categoryList.length; i++) {
  console.log(categoryList[i]);
  categoryList[i].addEventListener('click',(e)=>{
    closeAllCategoryAccordium()
  });

  categoryList[i].addEventListener('click',(e)=>{
    e.target.childNodes[1].style.maxHeight = '10vw';
  });
}

function closeAllCategoryAccordium() {
  for (var i = 0; i < categoryList.length; i++) {
    categoryList[i].childNodes[1].style.maxHeight = '0vw';
  }
}

// lists fixed
var lists = document.getElementsByClassName('lists');
var colOneHolder = document.getElementsByClassName('colOneHolder');

function fixedLists() {
  if(colOneHolder[0].getBoundingClientRect().y < window.innerHeight /100 *2){
    lists[0].style.position = 'fixed';
    lists[0].style.top = '2vh';
  }else if(colOneHolder[0].getBoundingClientRect().y > window.innerHeight /100 *2){
    lists[0].style.position = 'relative';
    lists[0].style.top = '0vw';
  }
  // lists[0].getBoundingClientRect().y;
}

// win funcitons
// win funcitons
// win funcitons
window.onscroll = ()=>{
  fixedLists();
}
