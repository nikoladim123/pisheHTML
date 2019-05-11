var sellerImg = document.getElementById('sellerImg');
var sellerTemplate = document.getElementById('sellerTemplate');
var sellerContainer = document.getElementById('sellerContainer');
var closeBox = document.getElementById('closeBox');

sellerImg.addEventListener('click',()=>{
  sellerTemplate.style.width = '50vw';
  sellerTemplate.style.height = '50vw';
  sellerTemplate.style.opacity = '1';
  sellerImg.style.zIndex = '0';
});

closeBox.addEventListener('click',()=>{
  sellerTemplate.style.width = '12vw';
  sellerTemplate.style.height = '12vw';
  sellerTemplate.style.opacity = '0';
  setTimeout(function () {
    sellerImg.style.zIndex = '1';
  }, 1000);
})
