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

// 3. Page Load Event (Typing aur Loader dono ek sath handle honge)
window.addEventListener("load", function() {
    // Typing effect shuru
    typeWriter();

    // Loader ko 1.5 second baad gayab karna
    setTimeout(function() {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.style.opacity = "0";
            setTimeout(function() {
                loader.style.display = "none";
            }, 500);
        }
    }, 1500);
});

// ==========================================
// 4. INTERACTIVE TERMINAL
// ==========================================
const terminalInput = document.getElementById("terminal-input");
if (terminalInput) {
    terminalInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            let inputVal = this.value.trim().toLowerCase(); // User ka command
            let outputDiv = document.getElementById("terminal-output");

            // Screen par user ka command dikhana
            outputDiv.innerHTML += `<p><span class="prompt-text">root@ghost:~#</span> ${inputVal}</p>`;

            // System ka jawab (Responses)
            if (inputVal === "help") {
                outputDiv.innerHTML += `<p style="color:#ccc;">Commands available: <strong>help, about, skills, tools, sudo, clear</strong></p>`;
            } else if (inputVal === "about") {
                outputDiv.innerHTML += `<p style="color:#ccc;">> I am Ghost Operator. Currently decrypting the Matrix of Cybersecurity.</p>`;
            } else if (inputVal === "skills") {
                outputDiv.innerHTML += `<p style="color:#ccc;">> Kali Linux, Networking, HTML/CSS, Python (Loading...)</p>`;
            } else if (inputVal === "tools") {
                outputDiv.innerHTML += `<p style="color:#ccc;">> Accessing Free Tools... <a href="Free Tools.html" style="color:#00ff00; text-decoration:underline;">[CLICK HERE TO OPEN]</a></p>`;
            } else if (inputVal === "sudo") {
                outputDiv.innerHTML += `<p style="color:red;">> [!] ACCESS DENIED. Nice try, but this incident will be reported.</p>`;
            } else if (inputVal === "clear") {
                outputDiv.innerHTML = ""; // Screen saaf karna
            } else if (inputVal !== "") {
                outputDiv.innerHTML += `<p style="color:red;">> Error: Command '${inputVal}' not found. Type 'help'.</p>`;
            }

            // Input box khali karna aur scroll ko neeche le jana
            this.value = ""; 
            outputDiv.parentElement.scrollTop = outputDiv.parentElement.scrollHeight; 
        }
    });
}
