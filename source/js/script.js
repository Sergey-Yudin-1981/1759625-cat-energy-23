const example = document.querySelector('.example');
const range = document.querySelector('.toggle-controls__scale');
const beforeWrap = document.querySelector('.example__pic-wrap--before');
const afterWrap = document.querySelector('.example__pic-wrap--after');

range.addEventListener('input', function (evt) {
  let value = range.value;

  afterWrap.style.width = `${value}%`;

  if (window.innerWidth >= 1440) {
    example.style.backgroundImage = `linear-gradient(to right, #F2F2F2 ${100 - 0.5*value}%, #EAEAEA ${0.5*value}%)`;
  }

});
