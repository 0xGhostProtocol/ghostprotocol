// ==========================================
// GHOST PROTOCOL - CORE SYSTEM SCRIPT
// ==========================================

const textToType = "> SYSTEM INITIALIZATION...\n> BYPASSING FIREWALLS...\n> ACCESS GRANTED.\n> WELCOME OPERATOR GHOST.";

let i = 0;

// 1. Typing Function
function typeWriter() {
    const typingElement = document.getElementById("typing-text");
    
    // Check if element exists (taaki doosre pages par error na aaye)
    if (!typingElement) return;

    if (i < textToType.length) {
        if (textToType.charAt(i) === '\n') {
            typingElement.innerHTML += "<br>";
        } else {
            typingElement.innerHTML += textToType.charAt(i);
        }
        i++;
        setTimeout(typeWriter, 50); // Speed of typing
    } else {
        // Typing khatam hone ke 1 second baad flash effect chalu hoga
        setTimeout(startFlashEffect, 1000); 
    }
}

// 2. Flash Image Function
function startFlashEffect() {
    const picBox = document.getElementById('operator-pic-box');
    const myPic = document.getElementById('my-pic');

    if (picBox && myPic) {
        // Photo dikhana shuru karo (Flash mode me)
        picBox.style.display = 'block';

        // 2 second ke baad flash band karke photo ko fix kar do
        setTimeout(function() {
            myPic.className = 'fixed-mode';
        }, 2000); 
    }
}

// 3. Jaise hi page load ho, typing shuru ho jaye
window.onload = function() {
    typeWriter();
};