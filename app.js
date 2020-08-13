// for the navigation bar
const navSlide = () => {
    const threeLines = document.querySelector('.threeLines');
    const nav = document.querySelector('.navLinks');
    const navLink = document.querySelectorAll('.navLinks li');

    threeLines.addEventListener('click',() => {
        nav.classList.toggle('navActive');

        navLink.forEach((link,index) => {
            
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            } 
        });
    });  
}

navSlide();


// for the typing animation in hero image
const typedTextSpan = document.querySelector(".typedText");

const textArray = ["Hello", "Ni hao", "Bonjour", "Hola", "Guten Tag", "Namaste"];
const typingDelay = 200; // delay between typing each character
const erasingDelay = 100; // delay between erasing each character
const newTextDelay = 2000; // delay to the next word
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex); 
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        setTimeout(erase, newTextDelay); //erase when you finish typing the character
    };
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1); 
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) { // to re-initialise when reached the end of textArray
            textArrayIndex = 0;
        }
        setTimeout(type, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay);
});


// for slider in about me
const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.leftArrow');
const rightArrow = document.querySelector('.rightArrow');

var sectionIndex = 0;

leftArrow.addEventListener('click', function() {
    if (sectionIndex > 0) { 
        sectionIndex = sectionIndex - 1
        slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)'; // change number to (100% / number of pages)
    }
    else {
        sectionIndex = 0 
    }
    
});

rightArrow.addEventListener('click', function() {
    if (sectionIndex < 3) { // number of section - 1
        sectionIndex = sectionIndex + 1
        slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)'; // change number to (100% / number of pages)
    }
    else {
        sectionIndex = 3 // number of section - 1
    }
    
});


