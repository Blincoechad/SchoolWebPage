const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// close when clicked outside the menu
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    }
});

// close menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    });
});

// form validation
const signupForm = document.getElementById('signupForm');
const signupSuccess = document.getElementById('signupSuccess');

signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();

    if (name && email) {
        signupForm.style.display = 'none';
        signupSuccess.classList.add('show');
    }
});                                          

// ── overlay code for donating ──
const donateBtn     = document.getElementById('donateBtn');
const overlay       = document.getElementById('donateOverlay');
const closeBtn      = document.getElementById('closeOverlay');
const donateForm    = document.getElementById('donateForm');
const donateSuccess = document.getElementById('donateSuccess');

function openOverlay() {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeOverlay() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    donateForm.style.display = '';
    donateSuccess.style.display = 'none';
    donateForm.reset();
}

donateBtn.addEventListener('click', openOverlay);
closeBtn.addEventListener('click', closeOverlay);

// close when clicking the dark backdrop
overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeOverlay();
});


// Show a success message on submit, then it will close after 3 seconds
donateForm.addEventListener('submit', function (e) {
    e.preventDefault();
    donateForm.style.display = 'none';
    donateSuccess.style.display = 'block';

    setTimeout(closeOverlay, 3000);
});