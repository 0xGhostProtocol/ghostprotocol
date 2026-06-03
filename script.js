// ==========================================
// GHOST PROTOCOL - CORE SYSTEM SCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const typingText = document.getElementById("typing-text");
    const picBox = document.getElementById("operator-pic-box");
    
    // जो टेक्स्ट स्क्रीन पर टाइप होना है
    const rawText = "> SYSTEM INITIALIZATION...\n> BYPASSING FIREWALLS...\n> ACCESS GRANTED.\n> WELCOME OPERATOR GHOST.";
    // जो टेक्स्ट डायरेक्ट दिखना है (बिना टाइप हुए)
    const instantTextHTML = "> SYSTEM INITIALIZATION...<br>> BYPASSING FIREWALLS...<br>> ACCESS GRANTED.<br>> WELCOME OPERATOR GHOST.";

    // ==========================================
    // SMART MEMORY SYSTEM (Session Storage)
    // ==========================================
    if (sessionStorage.getItem("ghostVisited") === "true") {
        // अगर यूज़र पहले आ चुका है, तो सीधा सब दिखाओ (NO LOADING, NO TYPING)
        if (loader) loader.style.display = "none";
        
        if (typingText) typingText.innerHTML = instantTextHTML; 
        
        if (picBox) {
            picBox.style.display = "block";
            const myPic = document.getElementById('my-pic');
            if (myPic) myPic.className = 'fixed-mode'; // फोटो बिना फ्लैश के फिक्स दिखेगी
        }
    } else {
        // === पहली बार आने पर (FIRST TIME VISIT) ===
        
        // 1. Loader को 1 सेकंड में हटाना
        if (loader) {
            setTimeout(() => {
                loader.style.opacity = "0";
                setTimeout(() => { loader.style.display = "none"; }, 500);
            }, 1000); 
        }

        // 2. Typing Effect (Fast Speed)
        if (typingText) {
            let i = 0;
            typingText.innerHTML = "";
            
            function typeWriter() {
                if (i < rawText.length) {
                    if (rawText.charAt(i) === '\n') {
                        typingText.innerHTML += "<br>";
                    } else {
                        typingText.innerHTML += rawText.charAt(i);
                    }
                    i++;
                    setTimeout(typeWriter, 20); // 20ms की तेज स्पीड
                } else {
                    // टाइपिंग खत्म होने के बाद फोटो दिखाना
                    if (picBox) {
                        picBox.style.display = 'block';
                        setTimeout(() => {
                            const myPic = document.getElementById('my-pic');
                            if (myPic) myPic.className = 'fixed-mode';
                        }, 1000);
                    }
                }
            }
            // लोडर हटने के बाद टाइपिंग शुरू करना
            setTimeout(typeWriter, 1500); 
        }

        // सिस्टम की मेमोरी में सेव कर दो कि यूज़र आ चुका है!
        sessionStorage.setItem("ghostVisited", "true");
    }

    // ==========================================
    // INTERACTIVE TERMINAL LOGIC
    // ==========================================
    const terminalInput = document.getElementById("terminal-input");
    const terminalOutput = document.getElementById("terminal-output");
    
    if (terminalInput) {
        terminalInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                const command = terminalInput.value.trim().toLowerCase();
                
                if (command !== "") {
                    // यूज़र का कमांड प्रिंट करना
                    terminalOutput.innerHTML += `<p><span class="prompt-text">root@ghost:~#</span> ${command}</p>`;
                    
                    // सिस्टम का जवाब
                    if (command === "help") {
                        terminalOutput.innerHTML += `<p style="color:#ccc;">Commands available: <strong>help, about, skills, tools, sudo, clear</strong></p>`;
                    } else if (command === "about") {
                        terminalOutput.innerHTML += `<p style="color:#ccc;">> I am Ghost Operator. Currently decrypting the Matrix of Cybersecurity.</p>`;
                    } else if (command === "skills") {
                        terminalOutput.innerHTML += `<p style="color:#ccc;">> Kali Linux, Networking, HTML/CSS, Python (Loading...)</p>`;
                    } else if (command === "tools") {
                        terminalOutput.innerHTML += `<p style="color:#ccc;">> Accessing Free Tools... <a href="Free Tools.html" style="color:#00ff00; text-decoration:underline;">[CLICK HERE TO OPEN]</a></p>`;
                    } else if (command === "sudo") {
                        terminalOutput.innerHTML += `<p style="color:red;">> [!] ACCESS DENIED. Nice try, but this incident will be reported.</p>`;
                    } else if (command === "clear") {
                        terminalOutput.innerHTML = ""; // स्क्रीन साफ़
                    } else {
                        terminalOutput.innerHTML += `<p style="color:red;">> Error: Command '${command}' not found. Type 'help'.</p>`;
                    }
                }
                
                // इनपुट खली करना और ऑटो-स्क्रॉल करना
                terminalInput.value = ""; 
                const terminalParent = document.querySelector(".terminal-box");
                if (terminalParent) terminalParent.scrollTop = terminalParent.scrollHeight;
            }
        });
    }
});
