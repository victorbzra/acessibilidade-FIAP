const iconHamburger = document.querySelector('.hamburger');

const menuLink = document.querySelector('.menu__link');



// Get the modal
const ibis = document.querySelectorAll('#ibis')

const comfort = document.querySelectorAll('#comfort')
const comfortModal = document.querySelector('#comfort-modal')

const btMorumbi = document.querySelectorAll('#bt-morumbi')
const btMorumbiModal = document.querySelector('#btMorumbi-modal')

const mercure = document.querySelectorAll('#mercure')
const mercureModal = document.querySelector('#mercure-modal')

const sheraton = document.querySelectorAll('#sheraton')
const sheratonModal = document.querySelector('#sheraton-modal')

const bourbon = document.querySelectorAll('#bourbon')
const bourbonModal = document.querySelector('#bourbon-modal')

const btPaulista = document.querySelectorAll('#btPaulista')
const btPaulistaModal = document.querySelector('#btPaulista-modal')

const gt = document.querySelectorAll('#gt')
const gtModal = document.querySelector('#gt-modal')

const rena = document.querySelectorAll('#rena')
const renaModal = document.querySelector('#rena-modal')

const modal = document.querySelector('.modal-overlay')

const body = document.querySelector('body')

const close = document.querySelectorAll('.close')


// IBIS 
function openIBISModal() {
  modal.classList.add('active')
  body.style.overflow = 'hidden'
}

ibis.forEach((item) => {
    item.addEventListener('click', () => {
      event.preventDefault()
      openIBISModal()
    })
})
 

// Comfort 
function openComfortModal() {
    comfortModal.classList.add('active')
    body.style.overflow = 'hidden'
  }

comfort.forEach((item) => {
    item.addEventListener('click', () => {
      event.preventDefault()
      openComfortModal()
    })
})

// Morumbi 
function openBTMorumbi() {
    btMorumbiModal.classList.add('active')
    body.style.overflow = 'hidden'
  }

btMorumbi.forEach((item) => {
    item.addEventListener('click', () => {
      event.preventDefault()
      openBTMorumbi()
    })
})

// BT Morumbi 
function openMercureModal() {
    mercureModal.classList.add('active')
    body.style.overflow = 'hidden'
  }

mercure.forEach((item) => {
    item.addEventListener('click', () => {
      event.preventDefault()
      openMercureModal()
    })
})

// Sheraton 
function openSheratonModal() {
    sheratonModal.classList.add('active')
    body.style.overflow = 'hidden'
  }

sheraton.forEach((item) => {
    item.addEventListener('click', () => {
      event.preventDefault()
      openSheratonModal()
    })
})

// Bourbon 
function openBourbonModal() {
    bourbonModal.classList.add('active')
    body.style.overflow = 'hidden'
  }

bourbon.forEach((item) => {
    item.addEventListener('click', () => {
      event.preventDefault()
      openBourbonModal()
    })
})

// BT Paulista 
function openPaulistaModal() {
    btPaulistaModal.classList.add('active')
    body.style.overflow = 'hidden'
  }

btPaulista.forEach((item) => {
    item.addEventListener('click', () => {
      event.preventDefault()
      openPaulistaModal()
    })
})

// GT
function openGTMODAL() {
    gtModal.classList.add('active')
    body.style.overflow = 'hidden'
  }

gt.forEach((item) => {
    item.addEventListener('click', () => {
      event.preventDefault()
      openGTMODAL()
    })
})

// Rena
function openRenaModal() {
    renaModal.classList.add('active')
    body.style.overflow = 'hidden'
  }

rena.forEach((item) => {
    item.addEventListener('click', () => {
      event.preventDefault()
      openRenaModal()
    })
})





// Fechar Modal 
function closeModal() {
    modal.classList.remove('active')
    comfortModal.classList.remove('active')
    btMorumbiModal.classList.remove('active')
    mercureModal.classList.remove('active')
    sheratonModal.classList.remove('active')
    bourbonModal.classList.remove('active')
    btPaulistaModal.classList.remove('active')
    gtModal.classList.remove('active')
    renaModal.classList.remove('active')
    body.style.overflow = 'auto'
  }
  
  close.forEach((item) => {
      item.addEventListener('click', () => {
        event.preventDefault()
        closeModal()
      })
  })


  const acessibilidade = document.querySelector('.acessibilidade')
  const optionsAcessibilidade = document.querySelector('.optionsAcessibilidade')

  acessibilidade.addEventListener('click', () => {
    optionsAcessibilidade.classList.toggle('disable')
  })

  const dislexia = document.querySelector('.dislexia')
  dislexia.addEventListener('click', () => {
    body.classList.toggle('dislexy')
  })

  const font1 = document.querySelector('.font1')
  const font2 = document.querySelector('.font2')
  const font3 = document.querySelector('.font3')

  font1.addEventListener('click', () => {
    body.style.fontSize = '16px'
  })

  font2.addEventListener('click', () => {
    body.style.fontSize = '20px'
  })

  font3.addEventListener('click', () => {
    body.style.fontSize = '30px'
  })