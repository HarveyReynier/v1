/* Comment


*/ 
AOS.init();

// Detect screen width, if in 'mobile mode'
// Ensure that when nav buttons are clicked the menu goes away.

let width1 = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;

if (width1 <= 864){
    let navLinks= document.querySelectorAll('.nav-link');
    navLinks.forEach( (el) => {
        el.classList.add('nav-toggle-event');
        el.addEventListener('click', () => {
            document.getElementById('nav-toggle').click()
        })
    })
}

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
                el.addEventListener('click', () => {
                    document.getElementById('nav-toggle').click()
                })
            }
           
        })
    }
    else {
        if(el.classList.contains('nav-toggle-event')){
            el.removeEventListener()
        }

    }

})

