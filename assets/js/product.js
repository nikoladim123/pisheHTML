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
