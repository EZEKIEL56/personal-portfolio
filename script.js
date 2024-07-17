// *********** change backgroung header*********
function scrollHeader() {
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport innerHeight, add
    if (this.scrllY >= 50) header.classList.add('scroll-header'); else header
}
window.addEventListener('scroll', scrollHeader)

// downloadcv pdf file
document.getElementById("downloadCV").addEventListener("click",
    function () {
        window.open("Ezekiel Effiong CV.pdf", "_blank");
    });

// ************* services model*********************
const modelViews = document.querySelectorAll('.services_model'),
    modelBtns = document.querySelectorAll('.services_button'),
    modelClose = document.querySelectorAll('.services_model-close');
let model = function (modelClick) {
    modelViews[modelClick].classList.add('active-model')
}
modelBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        model(i)
    })
})
modelClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modelViews.forEach((mv) => {
            mv.classList.remove('active-model')
        })
    })
})

// ************************ MIXITUP FILTER PORTFOLIO ********************************
let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

// LINK ACTIVE WORK
const linkwork = document.querySelectorAll('.work_item')

function activework() {
    linkwork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkwork.forEach(l => l.addEventListener('click', activework))


// <!-- swiper cdn -->
document.addEventListener('DOMContentLoaded', function () {
    let swiperTestimonial = new Swiper(".testimonial_container", {
        spaceBetween: 24,
        loop: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // Click event listener on .testimonial_container
    let container = document.querySelector('.testimonial_container');
    container.addEventListener('click', function () {
        swiperTestimonial.slideNext(); // Slide to the next swiper item
    });
});

// ************** scroll sections active link**********
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight, // Corrected typo here
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*="' + sectionId + '"]').classList.add('active-link');
        } else {
            document.querySelector('.nav_menu a[href*="' + sectionId + '"]').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// const themeButton = document.getElementById('theme-button');

// themeButton.addEventListener('click', function() {
//     document.body.classList.toggle('dark-theme');
// });

// ******** DARK LIGHT THEME ***********
const themeButton = document.getElementById('theme-button');
const lightTheme = 'light-theme';
const iconTheme = 'bx-sun';

// Function to get the current theme mode (light or dark)
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'light' : 'dark';

// Function to toggle theme and icon class
const toggleTheme = () => {
    document.body.classList.toggle(lightTheme);
    themeButton.classList.toggle(iconTheme);

    // Update localStorage with the current theme and icon
    localStorage.setItem('selected-theme', getCurrentTheme());
};

// Event listener for theme button click
themeButton.addEventListener('click', toggleTheme);

// On page load or refresh, apply the selected theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const selectedTheme = localStorage.getItem('selected-theme');
    if (selectedTheme) {
        document.body.classList.toggle(lightTheme, selectedTheme === 'light');
        themeButton.classList.toggle(iconTheme, selectedTheme === 'light');
    } else {
        // If no theme is selected, default to light theme
        document.body.classList.add(lightTheme);
        themeButton.classList.add(iconTheme);
        localStorage.setItem('selected-theme', 'light');
    }
});
// 
