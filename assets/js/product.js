var categoryList = document.getElementsByClassName('categoryList');
var catArrowSpan = document.getElementsByClassName('catArrowSpan');

// console.log(categoryList[0].childNodes[1]);

for (var i = 0; i < categoryList.length; i++) {
  console.log(categoryList[i]);
  categoryList[i].addEventListener('click',(e)=>{
    closeAllCategoryAccordium();
  });

  categoryList[i].addEventListener('click',(e)=>{
    console.log(e.target.childNodes);
    if(e.target.dataset.swich === '0'){
      e.target.childNodes[1].childNodes[0].style.transform = 'rotate(90deg)';
      e.target.childNodes[3].style.maxHeight = '10vw';
      e.target.dataset.swich = 1;
    }else{
      e.target.dataset.swich = 0;
    }

  });
}

function closeAllCategoryAccordium() {
  for (var i = 0; i < categoryList.length; i++) {
    catArrowSpan[i].style.transform = "rotate(-90deg)";
    categoryList[i].childNodes[3].style.maxHeight = '0vw';
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
