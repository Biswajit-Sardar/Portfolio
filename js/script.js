//nav bar close and open
const openBtn = document.getElementById("open-menu-btn");
const closeBtn = document.getElementById("close-menu-btn");
const navBox = document.querySelector(".nav-box");

openBtn.addEventListener("click", () => {
    navBox.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navBox.classList.remove("active");
});


// typing animation
document.addEventListener('DOMContentLoaded', () => {
            const typedTextSpan = document.getElementById('typed-text');
            //const cursorSpan = document.getElementById('cursor');

            // Array of words to type out
            const words = ["Web Developer", "Data Science Engineer", "Power BI designer"];
            let wordIndex = 0; 
            let charIndex = 0; 
            let isDeleting = false; 
            let typingSpeed = 150; 
            let deletingSpeed = 75; 
            let pauseBeforeDelete = 1500; 
            let pauseBeforeType = 500;

            /* main function */
            function typeEffect() {
                const currentWord = words[wordIndex];
                let dynamicSpeed = typingSpeed;

                if (isDeleting) {
                    // Deleting text
                    typedTextSpan.textContent = currentWord.substring(0, charIndex - 1);
                    charIndex--;
                    dynamicSpeed = deletingSpeed; // Faster deletion
                } else {
                    // Typing text
                    typedTextSpan.textContent = currentWord.substring(0, charIndex + 1);
                    charIndex++;
                    dynamicSpeed = typingSpeed; // Slower typing
                }

                // Check if the current word is fully typed
                if (!isDeleting && charIndex === currentWord.length) {
                    // Word is fully typed, set to delete after a pause
                    dynamicSpeed = pauseBeforeDelete;
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    // Word is fully deleted, move to the next word and start typing
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length; // Cycle through words
                    dynamicSpeed = pauseBeforeType; // Pause before typing new word
                }

                // Call the function again after a delay
                setTimeout(typeEffect, dynamicSpeed);
            }

            // Start the typing effect when the DOM is fully loaded
            typeEffect();
        });



//video full screen 

const video = document.querySelector(".probox video");

video.addEventListener("click", () => {

    if (!document.fullscreenElement) {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } 
        else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen(); // Safari
        } 
        else if (video.msRequestFullscreen) {
            video.msRequestFullscreen(); // IE
        }
    } 
    else {
        document.exitFullscreen();
    }

    video.play();
});

/* Optional: fullscreen exit হলে ensure play */
document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        video.play();
    }
});

