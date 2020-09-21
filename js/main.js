/* Comment


*/ 
AOS.init();

// Detect screen width, if in 'mobile mode'
// Ensure that when nav buttons are clicked the menu goes away.

let width1 = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;

// Define function that clicks the nav-toggle toggle button.
let clickNavToggle = function() {
    document.getElementById('nav-toggle').click()
    console.log('clicked');
}

// If the window width is less or equal to 864 px (e.g. mobile nav menu), attach event listener to nav links
// that closes the menu when clicked.
if (width1 <= 864){
    let navLinks= document.querySelectorAll('.nav-link');
    navLinks.forEach( (el) => {
        el.classList.add('nav-toggle-event');
        el.addEventListener('click', clickNavToggle);
    })
}

// If the screen is resized into mobile width, attach the same event listener. If it is resized above, remove
// that event lsitener.
window.addEventListener('resize', () => {
    let width = window.innerWidth || document.documentElement.clientWidth || 
    document.body.clientWidth;

    console.log(width);

    if (width <= 864){
        let navLinks= document.querySelectorAll('.nav-link');
        navLinks.forEach( (el) => {
            if(el.classList.contains('nav-toggle-event')){}
            else{
                el.classList.add('nav-toggle-event');
                el.addEventListener('click', clickNavToggle);
            }
           
        })
    }
    else {
        let navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach( (el) => {
            if (el.classList.contains('nav-toggle-event')){
                el.classList.remove('nav-toggle-event');
                console.log('removing event lsternr')
                el.removeEventListener('click', clickNavToggle);
            }
        })
    }

})

// When clicking on the top button scroll to top of page.

const topButton = document.getElementById('top-button');

topButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth', // or can get `auto` variable
      });
})