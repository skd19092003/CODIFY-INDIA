document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const words = ["Explore", "Innovate", "Thrive"];
    let index = 0;
    let charIndex = 0;
    const typingSpeed = 150;
    const eraseSpeed = 100;
    const delayBetweenWords = 1200;
    const mainWord = document.getElementById('main-word');

    function typeWord() {
        if (charIndex < words[index].length) {
            mainWord.textContent += words[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeWord, typingSpeed);
        } else {
            setTimeout(eraseWord, delayBetweenWords);
        }
    }

    function eraseWord() {
        if (charIndex > 0) {
            mainWord.textContent = mainWord.textContent.substring(0, mainWord.textContent.length - 1);
            charIndex--;
            setTimeout(eraseWord, eraseSpeed);
        } else {
            index = (index + 1) % words.length;
            setTimeout(typeWord, typingSpeed);
        }
    }

    typeWord();
});
