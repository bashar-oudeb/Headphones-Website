const navToggle = document.getElementById('toggle-btn');
const navClose = document.getElementById('close-btn');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navClose ) {
    navToggle.onclick = () => {
        navMenu.classList.toggle('show_menu');
    };

    navClose.onclick = () => {
        navMenu.classList.remove('show_menu');
   };
}

/*  remove menu for m => max-width: 1120 px*/

const navLink = document.querySelectorAll('.nav_list');
const removeShowMenu = ()=>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show_menu')
}

navLink.forEach(n=> n.addEventListener('click', removeShowMenu));

//CHANGE BACKGROUND HEADER

const scrollHeader= ()=>{
    const header = document.getElementById('header')
    this.scrollY >= 50? header.classList.add('scroll-header')
                        :header.classList.remove('scroll-header')
}
addEventListener('scroll',scrollHeader)

//swiper
const swiper = new Swiper('.favorite-swiper', {
    loop: true,
    slidesPerView:'auto',
    centeredSlides: 'auto',
    grabCursor: true,
    breakpoints:{
        768:{
            slidesPerView: 3,
        }
    }
});

/*=========== show & hidden Scroll up ==============*/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    window.scrollY >= 350
      ? scrollUp.classList.add('show-scrollup')
      : scrollUp.classList.remove('show-scrollup');
  };
  
  window.addEventListener('scroll', scrollUp);

/*=========== Scroll REVEAl ==============*/

const sr = ScrollReveal({
      origin : 'top',
      distance : '60px',
      duration : 2500,
      delay: 400,
})

sr.reveal(`.home-social, .favorite-container, .sponsor-container , .footer`)
sr.reveal(`.home_title span:nth-child(1)`, {origin : 'left' , opacity:1})
sr.reveal(`.home_title span:nth-child(3)`, {origin : 'right' , opacity:1})
sr.reveal(`.home-tooltip, .home-button .model-button`, {origin : 'bottom'})
sr.reveal(`.about-data`, {origin : 'left'})
sr.reveal(`.about-img , .model-tooltip`, {origin : 'right'})



/*  ========= nav link ==========*/
const section = document.querySelectorAll('section[id]')
const scrollActiveLink =()=>{
   const scrollDown = window.scrollY
   
   section.forEach( current =>{
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop -58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId +']')

            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
               sectionClass.classList.add('active-link')
            }else{
               sectionClass.classList.remove('active-link')
            }
   })

}