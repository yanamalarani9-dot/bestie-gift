const introScreen = document.getElementById('intro-screen');
const introNumber = document.getElementById('intro-number');
const wishPage = document.getElementById('wish-page');
const bondPage = document.getElementById('bond-page');
const memoriesPage = document.getElementById('memories-page');

let count = 1;

// 1. Precise 1-to-10 countdown pacing with dynamic pulse trigger
const countdownInterval = setInterval(() => {
    count++;
    introNumber.innerText = count;
    
    // Reset and trigger pop animation seamlessly
    introNumber.classList.remove('pulse');
    void introNumber.offsetWidth; 
    introNumber.classList.add('pulse');

    if (count === 10) {
        clearInterval(countdownInterval);
        
        setTimeout(() => {
            introScreen.style.opacity = '0';
            introScreen.style.transform = 'scale(1.08)';
            
            wishPage.classList.add('active-page');
            
            setTimeout(() => {
                introScreen.style.display = 'none';
            }, 900);
        }, 700);
    }
}, 1000);

// 2. Navigation Control System
function showWishPage() {
    bondPage.classList.remove('active-page');
    wishPage.classList.add('active-page');
}

function showBondPage() {
    wishPage.classList.remove('active-page');
    memoriesPage.classList.remove('active-page');
    bondPage.classList.add('active-page');
}

function showPerksPage() {
    bondPage.classList.remove('active-page');
    memoriesPage.classList.add('active-page');
}