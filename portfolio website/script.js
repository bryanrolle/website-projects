// Header toggle 

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typing Effect 

let typed = new Typed('.auto-input', {
    strings: ['Front-End Developer!', 'Freelancer!', 'Web Designer!', 'Software Tester!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})

// Active Link State On Scroll

// Get All Links 
let navLinks = document.querySelectorAll('nav ul li a')

// Get All Sections 
let sections = document.querySelectorAll('section')

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY + 20
    sections.forEach(section => {
        if(scrollPosition > section.offsetTop && scrollPosition < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });
        }
    });

});