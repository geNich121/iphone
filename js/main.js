window.addEventListener("scroll", function() {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");

  burger.addEventListener("click", function () {
      menu.classList.toggle("open");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.querySelector(".scroll-to-top");


  window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight) {
          scrollToTopButton.classList.add("visible");
      } else {
          scrollToTopButton.classList.remove("visible");
      }
  });


  scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });
});

const colorItems = document.querySelectorAll('.color-item');

const selectedColorImg = document.getElementById('selected-color-img');
const selectedColorName = document.getElementById('selected-color-name');
const selectedColorDesc = document.getElementById('selected-color-description');

colorItems.forEach(item => {
    item.addEventListener('click', () => {

        const color = item.getAttribute('data-color');
        const imgSrc = item.getAttribute('data-img');
        const desc = item.getAttribute('data-desc');

        selectedColorImg.src = imgSrc;
        selectedColorName.textContent = color;
        selectedColorDesc.textContent = desc;
    });
});

window.onload = function() {

  document.getElementById('spinner').style.display = 'none';

  const images = document.querySelectorAll('.slider-img');
  images.forEach(image => {

  });
};

const images = document.querySelectorAll('.slider-img');
images.forEach(image => {
  image.style.display = 'none'; 
  image.onload = function() {
      image.style.display = 'block';
  }
});
