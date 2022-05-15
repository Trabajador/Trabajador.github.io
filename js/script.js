var checkbox = document.querySelector('.theme-switch__checkbox');
var PhotoCheckbox = document.querySelector('.show-photo__label');
var PhotoWrapper = document.querySelector('.show-photo-img__wrapper');
var isPhotoShow = false;

checkbox.addEventListener('change', function(){
  transition();
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})

function transition() {
  document.documentElement.classList.add('transition');
  setTimeout(function() {
    document.documentElement.classList.remove('transition');
  }, 250)
}

PhotoCheckbox.addEventListener("click", () => {
  if (PhotoWrapper.classList.contains ('active')) {
    PhotoWrapper.classList.remove('active');
    PhotoCheckbox.textContent = 'Show Photo';
    isMenuShow  = false;
  } else {
    PhotoWrapper.classList.add('active');
    PhotoCheckbox.textContent = 'Hide Photo';
    isMenuShow  = true;
  }
  
  
})