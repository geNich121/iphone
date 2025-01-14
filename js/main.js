// Header scrolling effect
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
  
  // Burger menu toggle
  document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");
  
    burger.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  });
  
  // Scroll to top button functionality
  document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopButton = document.querySelector(".scroll-to-top");
  
    window.addEventListener("scroll", () => {
      scrollToTopButton.classList.toggle("visible", window.scrollY > window.innerHeight);
    });
  
    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
  
  // Color selection functionality
  document.addEventListener("DOMContentLoaded", () => {
    const colorList = document.querySelector(".color-list");
    const selectedColorImg = document.getElementById("selected-color-img");
    const selectedColorName = document.getElementById("selected-color-name");
    const selectedColorDescription = document.getElementById("selected-color-description");
  
    if (!colorList) return;
  
    colorList.addEventListener("click", (event) => {
      const colorItem = event.target.closest(".color-item");
      if (!colorItem) return;
  
      selectedColorImg.src = colorItem.dataset.img;
      selectedColorName.textContent = colorItem.dataset.color;
      selectedColorDescription.textContent = colorItem.dataset.desc;
    });
  });
  
  // Spinner handling on page load
  window.onload = () => {
    const spinner = document.getElementById("spinner");
    spinner.style.display = "none";
  
    const images = document.querySelectorAll(".slider-img");
    images.forEach((image) => {
      image.style.display = "none";
      image.onload = () => {
        image.style.display = "block";
      };
    });
  };
  
  // Slider functionality
  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".slider-button.prev");
    const nextButton = document.querySelector(".slider-button.next");
    let currentSlide = 0;
  
    const showSlide = (index) => {
      slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
    };
  
    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    };
  
    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    };
  
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
  
    setInterval(nextSlide, 5000);
    showSlide(currentSlide);
  });
  
  // Button animations using Anime.js
  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".headline-btn, .burger, .slider-button, .contacts-form button");
  
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        anime({
          targets: button,
          scale: 1.1,
          rotate: "5deg",
          translateY: -5,
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          opacity: 0.8,
          duration: 400,
          easing: "easeInOutQuad",
        });
      });
  
      button.addEventListener("mouseleave", () => {
        anime({
          targets: button,
          scale: 1,
          rotate: "0deg",
          translateY: 0,
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          opacity: 1,
          duration: 400,
          easing: "easeInOutQuad",
        });
      });
  
      button.addEventListener("click", () => {
        anime({
          targets: button,
          scale: 0.95,
          rotate: "-5deg",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          duration: 200,
          easing: "easeOutQuad",
          complete: () => {
            anime({
              targets: button,
              scale: 1,
              rotate: "0deg",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              duration: 200,
              easing: "easeInOutQuad",
            });
          },
        });
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const accessories = document.querySelectorAll(".accessory");
    const totalPriceElement = document.getElementById("total-price");
  
    const calculateTotal = () => {
      const total = Array.from(accessories).reduce((sum, item) => sum + parseInt(item.value || 0, 10), 0);
      totalPriceElement.textContent = total;
    };
  
    accessories.forEach((item) => item.addEventListener("change", calculateTotal));
    calculateTotal();
  });
  
  document.getElementById("contacts-form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const errors = [];
    const nameInput = document.getElementById("name");
    const surnameInput = document.getElementById("surname");
    const emailInput = document.querySelector("input[type='email']");
    const phoneInput = document.querySelector("input[type='tel']");
  
    if (!nameInput.value.trim()) {
      errors.push("Поле ім'я обов'язкове");
    } else if (!/^[A-Za-zА-Яа-я'\-]{3,}$/.test(nameInput.value.trim())) {
      errors.push("Поле ім'я містить некоректні символи або занадто коротке");
    }
  
    if (!surnameInput.value.trim()) {
      errors.push("Поле прізвище обов'язкове");
    } else if (!/^[A-Za-zА-Яа-я'\-]{3,}$/.test(surnameInput.value.trim())) {
      errors.push("Поле прізвище містить некоректні символи або занадто коротке");
    }
  
    if (!emailInput.value.trim()) {
      errors.push("Поле email обов'язкове");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      errors.push("Поле email має некоректний формат");
    }
  
    if (!phoneInput.value.trim()) {
      errors.push("Поле телефон обов'язкове");
    } else if (!/^(\+380\d{9}|0\d{9})$/.test(phoneInput.value.trim())) {
      errors.push("Поле телефон має некоректний формат");
    }
  
    const errorContainer = document.querySelector(".error-messages");
    if (errorContainer) errorContainer.remove();
  
    if (errors.length) {
      const errorList = document.createElement("ul");
      errorList.className = "error-messages";
  
      errors.forEach((error) => {
        const errorItem = document.createElement("li");
        errorItem.textContent = error;
        errorList.appendChild(errorItem);
      });
  
      document.getElementById("contacts-form").prepend(errorList);
    } else {
      alert("Форма успішно відправлена!");
      document.getElementById("contacts-form").reset();
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.image-buttons button');
    const displayedImage = document.getElementById('displayed-image');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const imgPath = button.getAttribute('data-img');
            displayedImage.src = imgPath;
        });
    });
});
