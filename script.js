//pop up box show and hide

var Button = document.getElementById('sc1but');
var overlay = document.getElementById('overlay-screen1');
var popup = document.getElementById('popupbox');
Button.addEventListener('click', function() {
        overlay.classList.toggle('show');
        popup.classList.toggle('show');
});
document.addEventListener('click', function(event) {
    var isClickInside = popup.contains(event.target) || Button.contains(event.target);

    if (!isClickInside) {
        overlay.classList.remove('show');
        popup.classList.remove('show');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('terms-checkbox');
    const button = document.getElementById('contact-button');

    checkbox.addEventListener('change', function() {
        button.disabled = !checkbox.checked;
    });
});



//pictures slide in on scrolling

document.addEventListener('DOMContentLoaded', function() {
    const targetSection = document.getElementById('target-section');
    const imageBox = document.querySelector('.screen2-image-box');

    function handleScroll() {
        const sectionPosition = targetSection.getBoundingClientRect();
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition.top < screenPosition) {
            imageBox.classList.add('visible');
        } else {
            imageBox.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', handleScroll);
});








document.addEventListener('DOMContentLoaded', function() {
    const imageContainers = document.querySelectorAll('.imagebox-image');
    const buttons = document.querySelectorAll('.scroll-buttons button .dot');

    function handleHover(event) {
        const index = event.currentTarget.dataset.index;
        buttons.forEach((button, idx) => {
            if (idx == index) {
                button.src = 'images/1 (1).svg';
            } else {
                button.src = 'images/2(1).svg';
            }
        });
    }

    imageContainers.forEach((container) => {
        container.addEventListener('mouseover', handleHover);
    });
});



// Change the main image


function changeImage(imageSrc, button) {
    
    document.getElementById('main-image').src = imageSrc;

    const buttons = document.querySelectorAll('.image-change-button button');
    buttons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');
}
document.addEventListener('DOMContentLoaded', function() {
    const middleButton = document.querySelector('.image-change-button button:nth-child(2)');
    middleButton.classList.add('active');
});

