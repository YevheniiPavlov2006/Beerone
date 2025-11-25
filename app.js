new Swiper('.work-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    100: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    460: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,
    },
    1050: {
      slidesPerView: 4,
    }
  }
})



/*---------------------------burger-button-----------------------------*/

const burgerButton = document.getElementById('burger-button')
const sidebar = document.getElementById('sidebar')
const headerItems = document.querySelectorAll('.header-menu-item')

const burgerButtonActiveClass = 'active'
const sidebarActiveClass = 'opened'
const bodyFixedClass = 'body--fixed'

burgerButton.addEventListener('click', function(){
  burgerButton.classList.toggle(burgerButtonActiveClass)
  sidebar.classList.toggle(sidebarActiveClass)
  document.body.classList.toggle(bodyFixedClass)
})

headerItems.forEach(item => {
  item.addEventListener('click', () => {
    burgerButton.classList.remove(burgerButtonActiveClass)
    sidebar.classList.remove(sidebarActiveClass)
    document.body.classList.remove(bodyFixedClass)
  })
})