const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const navLinksLi = document.querySelectorAll('.nav-links li')


window.addEventListener('scroll', () => {
    if (this.scrollY >= 100) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})

navLinksLi.forEach(li => li.addEventListener('click', () => {
    navLinksLi.forEach(li => li.classList.remove('active'))
    li.classList.add('active')

    hamburger.classList.remove('active')
    navLinks.classList.remove('active')

}))


// Typed js
var options = {
    strings: [
        'Building data centers',
        'Implementing structured wiring',
        'Implementing structured wiring',
        'Securing network systems',
        'Providing and installing servers and storage devices',
        'Data protection and cyber security',
        'Smart cities solutions',
        'Internet of things (IoT)',
        'Embedded systems solutions',
        'Installation and customization',
        'Providing licensing',
        'Maintenance and updates',
        'Consulting service',
        'System management',
        'Software development',
        'Websites designing',
        'commerce store',
        'WordPress',
    ],
    typeSpeed: 30,
    loop: true,
    loopCount: Infinity,
    typeSpeed: 10,
    backDelay: 2000,
};

var typed = new Typed('#hero-titles', options);

// AOS
AOS.init('vMQUPeqKgjq9aGucf');




function sendMail() {
    var params = {
        name: document.getElementById("contact-name").value,
        email: document.getElementById("contact-email").value,
        message: document.getElementById("contact-project").value,
    };

    const serviceID = "service_siuu6ni";
    const templateID = "template_pfacqkd";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("contact-name").value = "";
            document.getElementById("contact-email").value = "";
            document.getElementById("contact-project").value = "";
            console.log(res);
            alert("Your message sent successfully!!")
        })
        .catch(err => console.log(err));
}
