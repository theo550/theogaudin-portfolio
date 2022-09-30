
// handle projet images home page

const nextProjects = document.querySelector('.next')
const previousProjects = document.querySelector('.previous')
const projects = document.querySelector('.projects')


nextProjects?.addEventListener('click', () => {
  projects.style.marginLeft = '-67rem'
  previousProjects.style.display = 'flex'
  nextProjects.style.display = 'none'
})

previousProjects?.addEventListener('click', () => {
  projects.style.marginLeft = '0'
  nextProjects.style.display = 'flex'
  previousProjects.style.display = 'none'
})


// handle mobile menu

const burgerButton = document.querySelector('.burger__menu')
const mobileMenu = document.querySelector('.mobile__menu')
const cross = document.querySelector('.cross')

burgerButton.addEventListener('click', () => {
  mobileMenu.style.marginLeft = '0'
})

cross.addEventListener('click', () => {
  mobileMenu.style.marginLeft = '100vw'
})
