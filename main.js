// toggle navbar
let menuIcon= document.querySelector('#menu-icon');
let navbar=  document.querySelector('.navbar');

menuIcon.onclick = () =>
{
      menuIcon.classList.toggle('fa-xmark');
      navbar.classList.toggle('active')
}
// scroll section active link
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.scroll =() =>
{
      sections.forEach(sec =>
      {
            let top = window.scrollBy;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if(top>=offset && top < offset + height)
            {
                  navLinks.forEach.apply(Links=>{
                        Links.classList.remove('active');
                        document.querySelector('header nav a[href*=' +id + ']').classList.add('active');             }

                  )};
      }
      );

// sticky navbar
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrolly>100);

/********************Remove toggle icon and navbar*/
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
}
/***********scroll reveal ***************/
ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200,
});
ScrollReveal().reveal('.home-content,heading', { orogin: 'top' });
ScrollReveal().reveal('.home-img,.services-container,.Experience-box,.contact-form', { origin: 'bottom  ' });
ScrollReveal().reveal('.home-contact h1,.about-img', { origin: left });
ScrollReveal().reveal('.home-contact p,.about-content', { origin: right });
/*********** typed Js ***************/
const typed = new Typed('.multiple-text', {
      strings: ['Full stack Developer'],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true
})
    
