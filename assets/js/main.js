/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalSViews = document.querySelectorAll('.services__modal'),
      modalSBtns = document.querySelectorAll('.services__button'),
      modalSClose = document.querySelectorAll('.services__modal-close');

let openModalS = function (modalClick) {
  modalSViews[modalClick].classList.add('active-modal');
};

let closeModalS = function () {
  modalSViews.forEach((mv) => {
    mv.classList.remove('active-modal');
  });
};

modalSBtns.forEach((mb, i) => {
  mb.addEventListener('click', () => {
    openModalS(i);
  });
});

modalSClose.forEach((mc) => {
  mc.addEventListener('click', () => {
    closeModalS();
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('services__modal')) {
    closeModalS();
  }
});


/*=============== WORK MODAL ===============*/
const modalWViews = document.querySelectorAll('.work__modal'),
      modalWBtns = document.querySelectorAll('.work__button2'),
      modalWClose = document.querySelectorAll('.work__modal-close');

let openModalW = function (modalClick) {
  modalWViews[modalClick].classList.add('active-modal');
};

let closeModalW = function () {
  modalWViews.forEach((mv) => {
    mv.classList.remove('active-modal');
  });
};

modalWBtns.forEach((mb, i) => {
  mb.addEventListener('click', () => {
    openModalW(i);
  });
});

modalWClose.forEach((mc) => {
  mc.addEventListener('click', () => {
    closeModalW();
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('work__modal')) {
    closeModalW();
  }
});


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr =  ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal('.home__data')
sr.reveal('.home__handle', {delay: 700})
sr.reveal('.home__social', '.home__scroll', {delay: 900, origin: 'bottom'})