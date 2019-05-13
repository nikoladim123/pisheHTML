var productBox = document.getElementsByClassName('productBox');

for (var i = 0; i < productBox.length; i++) {
  productBox[i].addEventListener('mouseenter',(e)=>{
    e.target.childNodes[5].style.maxHeight= '10vw';
    console.log(e.target.childNodes[1].childNodes[5]);
    e.target.childNodes[1].childNodes[3].style.opacity = '1';
    e.target.childNodes[1].childNodes[3].style.top = '0.2932vw';
    e.target.childNodes[1].childNodes[5].style.bottom = '0vw';
  });
  productBox[i].addEventListener('mouseleave',(e)=>{
    e.target.childNodes[5].style.maxHeight= '0vw';
    e.target.childNodes[1].childNodes[3].style.opacity = '0';
    e.target.childNodes[1].childNodes[3].style.top = '-2.5vw';
    e.target.childNodes[1].childNodes[5].style.bottom = '-2.5vw';
  });
}

// register drop down
// register drop down
// register drop down
var iconBox = document.getElementsByClassName('iconBox')[0];
var register = document.getElementById('register');
var closeBox = document.getElementsByClassName('closeBox')[0];


register.addEventListener('click',(e)=>{
  e.preventDefault();
  iconBox.style.height = '100vh';
  iconBox.style.opacity = '1';
  iconBox.style.filter = 'blur(0px)'
})

closeBox.addEventListener('click',(e)=>{
  iconBox.style.height = '0vh';
  iconBox.style.opacity = '0';
  iconBox.style.filter = 'blur(10px)'
})
