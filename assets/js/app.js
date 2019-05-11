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
// registration
var register = document.getElementById('register');
var buyerSellerBox = document.getElementById('buyerSellerBox');

register.addEventListener('mouseenter',()=>{
  buyerSellerBoxShow();
  console.log('enter');
});

register.addEventListener('mouseleave',()=>{
  buyerSellerBoxHide();
  console.log('leave');
});

function buyerSellerBoxShow() {
  buyerSellerBox.style.height = "13vw";
  buyerSellerBox.style.bottom = "-13vw";
}

function buyerSellerBoxHide() {
  buyerSellerBox.style.height = "0vw";
  buyerSellerBox.style.bottom = "0vw";
}

// sellSomething sellerOnly

var sellSomething = document.getElementById('sellSomething');
var sellerOnly = document.getElementById('sellerOnly');

sellSomething.addEventListener('mouseenter',()=>{
  SellerBoxShow();
  console.log('enter');
});

sellSomething.addEventListener('mouseleave',()=>{
  SellerBoxHide();
  console.log('leave');
});

function SellerBoxShow() {
  sellerOnly.style.height = "12.56vw";
  sellerOnly.style.bottom = "-13vw";
}

function SellerBoxHide() {
  sellerOnly.style.height = "0vw";
  sellerOnly.style.bottom = "0vw";
}
