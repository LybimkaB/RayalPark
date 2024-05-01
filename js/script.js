// Работа с формой
const conractForm = document.forms[1];

conractForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = conractForm.elements[0].value;
  const email = conractForm.elements[1].value;
  const message = conractForm.elements[2].value;

  alert("Ваши данные отправлены! Мы скоро свяжемся с Вами!");

  console.log(
    "Данные контактной формы:\r\n" +
      "Ваше имя: " +
      name +
      "\r\nВаша почта: " +
      email +
      "\r\nСообщение: " +
      message
  );

  conractForm.reset();
});

// Меню
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  // Добавляем определенный класс для смены кнопки
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Настройка анимации прокрутки
const scrollRevaelOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Раскрывающая анимация для элемента "р" в контейнере заголовка
ScrollReveal().reveal(".header-container p", {
  ...scrollRevaelOption,
});

// Раскрывающая анимация для элемента "h1" в контейнере заголовка
ScrollReveal().reveal(".header-container p", {
  ...scrollRevaelOption,
  // задержка
  delay: 500,
});

ScrollReveal().reveal(".about-container .section-header", {
  ...scrollRevaelOption,
  // задержка
  delay: 500,
});

ScrollReveal().reveal(".about-container .section-description", {
  ...scrollRevaelOption,
  // задержка
  delay: 1000,
});

ScrollReveal().reveal(".about-btn .room-card", {
  ...scrollRevaelOption,
  // задержка
  interval: 500,
});

ScrollReveal().reveal(".service-list li", {
  ...scrollRevaelOption,
  // задержка
  interval: 500,
  origin: "right",
});

// Слайдер
let testimonials = document.querySelectorAll(".testimonial");
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let currentIndex = 0;

testimonials[currentIndex].classList.add("active");

function showPrev() {
  testimonials[currentIndex].classList.remove("active");
  currentIndex =
    currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  testimonials[currentIndex].classList.add("active");
}

function showNext() {
  testimonials[currentIndex].classList.remove("active");
  currentIndex =
    currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
  testimonials[currentIndex].classList.add("active");
}

prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);
