const menu = document.querySelector('.header__menu')

const headerNav = document.querySelector('.header__nav')

headerNav.addEventListener('click', function (e) {
  if (e.target.closest('.btn--open')) {
    menu.classList.toggle('show--menu')
  }

  if (e.target.closest('.btn--close')) {
    menu.classList.remove('show--menu')
  }

  if (e.target.closest('.list__link')) {
    menu.classList.remove('show--menu')

    const links = document.querySelectorAll('.list__link')

    for (const link of links) {
      link.classList.remove('active')
    }

    e.target.classList.add('active')
  }
})

document.addEventListener('keydown', function (e) {
if (e.key === 'Escape') {
  menu.classList.remove('show--menu')
}
})


const html = document.documentElement


const progress = document.querySelector('.progress')

window.addEventListener('scroll', function (e) {
const alturaPagina = html.scrollHeight - html.clientHeight

const scrollActual = html.scrollTop

const progreso = scrollActual / alturaPagina

progress.style.width = Math.round(progreso * 100) + '%'

})

const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  const formData = new FormData(this)

  console.log({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  })

  const input = e.target.elements

  console.log({
    name: input.name.value,
    email: input.email.value,
    message: input.message.value
  })


})

const swiper = new Swiper('.reviews .swiper', {

  slidesPerView: 1,
  spaceBetween: 10,


  pagination: {
    el: '.swiper-pagination',
  },


  navigation: {
    nextEl: '.button--next',
    prevEl: '.button--prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
  },
})

const SR = ScrollReveal()

SR.reveal('.hero__img', {
  duration: 1000,
  origin: 'left',
  distance: '300px',

})

SR.reveal('.hero__content', {
    duration: 1000,
    origin: 'right',
    distance: '300px',

})

SR.reveal('.section__title', {
  duration: 1200,
  origin: 'left',
  distance: '300px',

})

SR.reveal('.about__text', {
  duration: 1200,
  origin: 'bottom',
  distance: '300px',

})

SR.reveal('.portfolio__item:nth-child(even)', {
  duration: 1200,
  origin: 'left',
  distance: '300px',

})

SR.reveal('.portfolio__item:nth-child(odd)', {
  duration: 1200,
  origin: 'right',
  distance: '300px',

})

SR.reveal('.swiper', {
  duration: 1200,
  origin: 'bottom',
  distance: '300px',

})

SR.reveal('.contact .container', {
  duration: 1200,
  origin: 'bottom',
  distance: '300px',

})

const loader = document.getElementById('loader')

window.addEventListener('load', function () {
  loader.classList.add('hidden')
})

