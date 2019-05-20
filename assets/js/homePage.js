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
