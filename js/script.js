document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.nav-dots .dot');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active-dot');
            if(i === index) {
                slide.classList.add('active');
                dots[i].classList.add('active-dot');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    setInterval(nextSlide, 4000);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
});

function isValidEmail(email) {
    const emailPattern = /\b[A-Za-z0-9._%+-]+@email\.com\b/;
    return emailPattern.test(email);
}

function cleanURLParameters() {
    let currentURL = window.location.href;
    let cleanURL = currentURL.split('?')[0];

    window.history.replaceState(null, null, cleanURL);
}

document.addEventListener("DOMContentLoaded", function() {
    cleanURLParameters();

    document.getElementById('index').addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if(name.trim() === '' && email.trim() === '') {
            alert('Not Allowed To Empty.');
            event.preventDefault();
            return;
        }

        if(name.trim() === '' || !isNaN(name)) {
            alert('Not Allowed To Be Number Or Empty.');
            event.preventDefault();
            return;
        }

        if(email.trim() === '' || !isValidEmail(email)) {
            alert('Not Allowed To Empty Or Input The Correct Format.');
            event.preventDefault(); 
            return;
        }
        alert('Your Data Has Been Submitted Successfully');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('call-to-action').addEventListener('click', function(event) {
        alert('The Action Has Been Called');
        event.preventDefault();
    });
});