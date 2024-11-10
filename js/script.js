var checkbox = document.querySelector('.theme-switch__checkbox');
var PhotoBtn = document.querySelector('.show-photo__btn');
var PhotoWrapper = document.querySelector('.show-photo-img__wrapper');
var isPhotoShow = false;

function loadThemePreference() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    checkbox.checked = savedTheme === 'dark';
  }
}

checkbox.addEventListener('change', function() {
  transition();
  const theme = this.checked ? 'dark' : 'light';

  document.documentElement.setAttribute('data-theme', theme);

  localStorage.setItem('theme', theme);
});

function transition() {
  document.documentElement.classList.add('transition');
  window.setTimeout(function() {
    document.documentElement.classList.remove('transition');
  }, 250);
}

PhotoBtn.addEventListener("click", function() {
  if (PhotoWrapper.classList.contains('active')) {
    PhotoWrapper.classList.remove('active');
    PhotoBtn.textContent = 'Show Photo';
    isPhotoShow = false;
  } else {
    PhotoWrapper.classList.add('active');
    PhotoBtn.textContent = 'Hide Photo';
    isPhotoShow = true;
  }
});

loadThemePreference();