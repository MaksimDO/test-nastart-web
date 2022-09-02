const size = window.innerWidth
let slides
if (size <= 360) {slides = 2} else {slides = 4}
const swiper = new Swiper('.swiper', {
  grid: {
    rows: 2,
  },
  autoHeight: false,
  slidesPerView: slides,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

  const basket = document.querySelectorAll('.catalog__cards-card')
  const sum = document.querySelector('#backet-sum')
  let score = 0

  basket.forEach((basket) => {
    basket.addEventListener('click', () => {
      summarize()
    })
  })

  function summarize() {
  score++
  sum.innerHTML= `<span>${score}</span>`
  }

  const burger = document.querySelector('#burger')
  const collaps = document.querySelector('#collaps')

  burger.addEventListener('click', () => {
    collaps.classList.toggle('display-none')
  })