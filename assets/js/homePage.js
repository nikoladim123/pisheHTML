var iter = 1;
function setDiv() {
  prodBoxInnerHTML =`
    <div class="productImageDiv">
      <img class="productImage" src="assets/images/law/${iter % 8}.jpg" alt="">
      <div class="imgShareLikeCallDiv">
        <div class="imgShareLikeCallDivIcon shareDropDown">
          <img class="share-icon" src="assets/images/share.png" alt="">

            <div class=" socialMediaDropDown">
              <img class="fb-icon" src="assets/images/fb-icon.png" alt="">
              <img class="twitter-icon" src="assets/images/twitter-icon.png" alt="">
              <img class="instagram-icon" src="assets/images/instagram-icon.png" alt="">
              <img class="linkedIn-icon" src="assets/images/linkedIn-icon.png" alt="">
            </div>

        </div>
        <div class="imgShareLikeCallDivIcon">
          <img class="call-icon" src="assets/images/call-icon.png" alt="">
        </div>
        <div id="loveFullContainer" class="imgShareLikeCallDivIcon">
          <img class="love loveEmpty" src="assets/images/love.png" alt="">
          <img id="loveFull" class="love loveFull" src="assets/images/loveFull.png" alt="">
        </div>
      </div>
      <div class="clientRatingBox">
        <p>Seller rating</p>
        <img class="sellerRating" src="assets/images/clientRating.png" alt="client rating">
        <img class="sellerCard" src="assets/images/card.png" alt="shoping cart">
      </div>
    </div>
    <div class="itemDescription">
      <!-- <img class="stars" src="assets/images/productImages/stars.jpg" alt=""> -->
      <p class="itemDescriptionText" >Lorem isspsum Lorem ipsum Lorem  Lorem ipsum</p>
      <p class="productPrice">$ 75.00</p>
    </div>
    <div class="itemTags">
      <div class="tag">
        WATCH
      </div>
      <div class="tag">
        GOLD
      </div>
      <div class="tag">
        WRIST
      </div>
      <div class="tag">
        JEWELERY
      </div>
    </div>
  `;
}
var prodBoxInnerHTML;


var nextButton = document.getElementsByClassName('nextButton')[0];
var leftSliderBox = document.getElementsByClassName('leftSliderBox')[0];


nextButton.addEventListener('click',()=>{
  opacityLastImage();
  setTimeout(function () {
    setDiv();
    deleteLastImage();
    insertFirstImage();
    addProdBoxListeners();
    iter++;
  }, 400);
})


function insertFirstImage() {
  var newDiv = document.createElement('div');
  newDiv.className = 'productBox';
  newDiv.innerHTML = prodBoxInnerHTML;
  leftSliderBox.insertAdjacentElement('afterbegin', newDiv);
}

function deleteLastImage() {
  leftSliderBox.removeChild(leftSliderBox.children[2]);
}

function opacityLastImage() {
  leftSliderBox.children[2].style.opacity = '0';
}

// right slider
// right slider
// right slider
// right slider
// right slider
var iterTwo = 1;
function setDivTwo() {
  prodBoxTwoInnerHTML =`
    <div class="productImageDiv">
      <img class="productImage" src="assets/images/jewelery/${iterTwo % 8}.jpg" alt="">
      <div class="imgShareLikeCallDiv">
        <div class="imgShareLikeCallDivIcon shareDropDown">
          <img class="share-icon" src="assets/images/share.png" alt="">

            <div class=" socialMediaDropDown">
              <img class="fb-icon" src="assets/images/fb-icon.png" alt="">
              <img class="twitter-icon" src="assets/images/twitter-icon.png" alt="">
              <img class="instagram-icon" src="assets/images/instagram-icon.png" alt="">
              <img class="linkedIn-icon" src="assets/images/linkedIn-icon.png" alt="">
            </div>

        </div>
        <div class="imgShareLikeCallDivIcon">
          <img class="call-icon" src="assets/images/call-icon.png" alt="">
        </div>
        <div id="loveFullContainer" class="imgShareLikeCallDivIcon">
          <img class="love loveEmpty" src="assets/images/love.png" alt="">
          <img id="loveFull" class="love loveFull" src="assets/images/loveFull.png" alt="">
        </div>
      </div>
      <div class="clientRatingBox">
        <p>Seller rating</p>
        <img class="sellerRating" src="assets/images/clientRating.png" alt="client rating">
        <img class="sellerCard" src="assets/images/card.png" alt="shoping cart">
      </div>
    </div>
    <div class="itemDescription">
      <!-- <img class="stars" src="assets/images/productImages/stars.jpg" alt=""> -->
      <p class="itemDescriptionText" >Lorem isspsum Lorem ipsum Lorem  Lorem ipsum</p>
      <p class="productPrice">$ 75.00</p>
    </div>
    <div class="itemTags">
      <div class="tag">
        WATCH
      </div>
      <div class="tag">
        GOLD
      </div>
      <div class="tag">
        WRIST
      </div>
      <div class="tag">
        JEWELERY
      </div>
    </div>
  `;
}
var prodBoxTwoInnerHTML;


var nextButtonTwo = document.getElementsByClassName('nextButton')[1];
var rightSliderBox = document.getElementsByClassName('rightSliderBox')[0];


nextButtonTwo.addEventListener('click',()=>{
  opacityLastImageTwo();
  setTimeout(function () {
    setDivTwo();
    deleteLastImageTwo();
    insertFirstImageTwo();
    addProdBoxListeners();
    iterTwo++;
  }, 400);
})


function insertFirstImageTwo() {
  var newDiv = document.createElement('div');
  newDiv.className = 'productBox';
  newDiv.innerHTML = prodBoxTwoInnerHTML;
  rightSliderBox.insertAdjacentElement('afterbegin', newDiv);
}

function deleteLastImageTwo() {
  rightSliderBox.removeChild(rightSliderBox.children[2]);
}

function opacityLastImageTwo() {
  rightSliderBox.children[2].style.opacity = '0';
}


// main carousel
// main carousel
// main carousel
// main carousel
// main carousel
var mainCarImage = document.getElementsByClassName('mainCarImage');
// var flashDiv = document.getElementsByClassName('flashDiv');
var leftCarArrowBox = document.getElementsByClassName('leftCarArrowBox');
var rightCarArrowBox = document.getElementsByClassName('rightCarArrowBox');

leftCarArrowBox[0].addEventListener('click',()=>{
  mainSlidBackBut();
});

rightCarArrowBox[0].addEventListener('click',()=>{
  mainSlidFun();
});


var mainSlidMod = 100;
function mainSlidFun() {
  if (mainSlidMod % 2 === 0) {
    mainCarImage[1].src = 'assets/images/homePage/'+ mainSlidMod%11 +'.jpg';
    setTimeout(function () {
      mainCarImage[0].style.opacity = '0';
      mainCarImage[1].style.opacity = '1';
    }, 300);
  }else{
    mainCarImage[0].src = 'assets/images/homePage/'+ mainSlidMod%11 +'.jpg';
    setTimeout(function () {
      mainCarImage[0].style.opacity = '1';
      mainCarImage[1].style.opacity = '0';
    }, 300);
  }
  mainSlidMod++;
  console.log('i runed');
}

function mainSlidBackBut() {
  // if(mainSlidMod > 1){
    mainSlidMod-=2;
    mainSlidFun();
  // }
}

setInterval(function () {
  mainSlidFun();
}, 3000);

// test
// test
// test
function textAnimMainSlider() {
  var text = document.getElementById('text');
  var newDom = '';
  var animationDelay = 100;

  for(let i = 0; i < text.innerText.length; i++)
  {
      newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
  }

  text.innerHTML = newDom;
  var length = text.children.length;

  for(let i = 0; i < length; i++)
  {
      text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
  }

  // test 1
  var textOne = document.getElementById('textOne');
  var newDom = '';
  var animationDelay = 40;

  for(let i = 0; i < textOne.innerText.length; i++)
  {
      newDom += '<span class="char">' + (textOne.innerText[i] == ' ' ? '&nbsp;' : textOne.innerText[i])+ '</span>';
  }

  textOne.innerHTML = newDom;
  var length = textOne.children.length;

  for(let i = 0; i < length; i++)
  {
      textOne.children[i].style['animation-delay'] = animationDelay * i + 'ms';
  }

  // testTwo
  var textTwo = document.getElementById('textTwo');
  var newDom = '';
  var animationDelay = 35;

  for(let i = 0; i < textTwo.innerText.length; i++)
  {
      newDom += '<span class="char">' + (textTwo.innerText[i] == ' ' ? '&nbsp;' : textTwo.innerText[i])+ '</span>';
  }

  textTwo.innerHTML = newDom;
  var length = textTwo.children.length;

  for(let i = 0; i < length; i++)
  {
      textTwo.children[i].style['animation-delay'] = animationDelay * i + 'ms';
  }

  document.getElementsByClassName('center')[0].style.opacity ='1';
}

window.onload = textAnimMainSlider();
