const linkExplorar = document.querySelector('a[href^="#"]')

function scrollToSection(event) {
  event.preventDefault()
  const section = document.querySelector('.container__hospedagem')

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

linkExplorar.addEventListener('click', scrollToSection)