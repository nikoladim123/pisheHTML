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
  e.target.childNodes[3].style.opacity = '1';
}

function titleHide(e){
  e.target.childNodes[3].style.opacity = '0.7';
}

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
