var productBox = document.getElementsByClassName('productBox');

for (var i = 0; i < productBox.length; i++) {
  productBox[i].addEventListener('mouseenter',(e)=>{
    e.target.childNodes[5].style.maxHeight= '10vw';
    // console.log(e.target.childNodes[1].childNodes[3]);
    e.target.childNodes[1].childNodes[3].style.opacity = '1';
    e.target.childNodes[1].childNodes[3].style.top = '0.2932vw';
  });
  productBox[i].addEventListener('mouseleave',(e)=>{
    e.target.childNodes[5].style.maxHeight= '0vw';
    e.target.childNodes[1].childNodes[3].style.opacity = '0';
    e.target.childNodes[1].childNodes[3].style.top = '-2.5vw';
  });
}
