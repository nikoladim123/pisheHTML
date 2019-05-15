var regClassBox = document.getElementsByClassName('regClassBox');

// console.log(regClassBox.length);
for (var i = 0; i < regClassBox.length; i++) {
  regClassBox[i].addEventListener('mouseenter',function(e){
    titleShow(e);
  });
  regClassBox[i].addEventListener('mouseleave',function(e){
    titleHide(e);
  });
}

function titleShow(e) {
  e.target.childNodes[3].style.bottom = '0vw';
  e.target.childNodes[3].style.opacity = '1';
}

function titleHide(e){
  e.target.childNodes[3].style.bottom = '-3.4vw';
  e.target.childNodes[3].style.opacity = '0';
}

// function rotationStartAnim() {
//   for (var i = 0; i < regClassBox.length; i++) {
//     setTimeout(function(){
//       console.log(i);
//       },2000)
//   }
// }
var myi = 0;
function myLoop() {
  setTimeout(function () {
    regClassBox[myi].style.transform = 'rotateY(0deg)';
    myi++;
    if(myi < regClassBox.length){
      myLoop();
    }
  }, 50);

}

window.onload = ()=>{
  myLoop();
}
