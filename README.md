<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ghost Protocol | Mission Log 04</title>
    <link rel="stylesheet" href="style.css">
    <style>
        /* Fade-in Animation */
        .post-container {
            max-width: 850px;
            margin: 50px auto;
            padding: 20px;
            animation: fadeIn 1s ease-in;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Post Header */
        .post-header {
            background-color: #0a0a0a;
            border: 1px solid #00ff00;
            padding: 30px;
            text-align: center;
            margin-bottom: 40px;
            box-shadow: 0 0 15px rgba(0, 255, 0, 0.1);
        }
        .post-header h1 {
            color: #00ff00;
            font-size: 2.2rem;
            margin-top: 0;
            margin-bottom: 15px;
            text-shadow: 0 0 10px #00ff00;
        }
        .post-meta {
            color: #777;
            font-size: 0.95rem;
            display: flex;
            justify-content: center;
            gap: 30px;
        }
        .post-meta span { color: #fff; }

        /* Topic Blocks */
        .log-block {
            background-color: #0a0a0a;
            border-left: 4px solid #00ff00;
            border-right: 1px solid #222;
            border-top: 1px solid #222;
            border-bottom: 1px solid #222;
            padding: 25px 30px;
            margin-bottom: 30px;
            position: relative;
            transition: 0.3s;
        }
        .log-block:hover {
            box-shadow: 0 0 15px rgba(0, 255, 0, 0.05);
            border-right: 1px solid #004400;
        }
        
        .log-block::before {
            content: '[MY_LEARNING_LOG]';
            position: absolute;
            top: -12px;
            right: 20px;
            background: #050505;
            color: #00ff00;
            font-size: 0.75rem;
            padding: 2px 8px;
            border: 1px solid #00ff00;
            letter-spacing: 1px;
        }

        .log-block h2 { color: #fff; margin-top: 0; border-bottom: 1px dashed #333; padding-bottom: 15px; font-size: 1.5rem; }
        .log-block h3 { color: #00ff00; margin-top: 20px; font-size: 1.2rem; }
        .log-block p { color: #ccc; font-size: 1.1rem; line-height: 1.8; margin-bottom: 15px; }
        .log-block ul { color: #ccc; font-size: 1.1rem; line-height: 1.8; padding-left: 20px; }
        .log-block li { margin-bottom: 10px; }
        .log-block strong { color: #00ff00; }
        
        .intro-text { text-align: center; font-size: 1.15rem; color: #fff; margin-bottom: 40px; line-height: 1.8; }

        /* =========================================
           LIVE SIMULATION - DARK HACKER THEME
           ========================================= */
        .network-sim-container {
            font-family: 'Courier New', Courier, monospace;
            width: 100%;
            margin: 20px 0;
            padding: 20px;
            background: #050505;
            border: 1px solid #004400;
            border-radius: 8px;
            box-sizing: border-box;
            box-shadow: inset 0 0 20px rgba(0,255,0,0.05);
        }
        .sim-header { text-align: center; margin-bottom: 20px; }
        .sim-header h2 { color: #00ff00; font-size: 20px; margin: 0 0 8px 0; border: none; text-shadow: 0 0 10px #00ff00; padding-bottom: 0; }
        .sim-header p { color: #888; font-size: 14px; margin: 0; }
        
        .control-panel { display: flex; justify-content: center; gap: 10px; margin-bottom: 25px; flex-wrap: wrap; }
        .control-panel input {
            padding: 10px; font-size: 14px; background: #000; color: #00ff00;
            border: 1px solid #004400; border-radius: 4px; outline: none;
            width: 220px; text-transform: uppercase; text-align: center; font-family: 'Courier New', monospace;
        }
        .control-panel input:focus { border-color: #00ff00; box-shadow: 0 0 10px rgba(0,255,0,0.2); }
        .control-panel button {
            padding: 10px 20px; font-size: 14px; font-weight: bold; background-color: transparent;
            color: #00ff00; border: 1px solid #00ff00; border-radius: 4px; cursor: pointer; transition: 0.3s;
        }
        .control-panel button:hover { background-color: #00ff00; color: #000; }
        .control-panel button:disabled { border-color: #333; color: #555; cursor: not-allowed; background: transparent; }
        
        .canvas-wrapper { width: 100%; background: #000; border: 1px dashed #004400; border-radius: 8px; overflow: hidden; position: relative; }
        canvas { display: block; width: 100%; height: auto; aspect-ratio: 2 / 1; }
        
        .legend-panel { display: flex; justify-content: center; gap: 15px; margin-top: 15px; font-size: 12px; color: #888; flex-wrap: wrap; }
        .legend-item { display: flex; align-items: center; gap: 5px; }
        .legend-color { width: 12px; height: 12px; border-radius: 2px; }
    </style>
</head>
<body>

    <nav class="navbar">
        <div class="logo">GHOST_PROTOCOL</div>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="Roadmap.html">My Roadmap</a></li>
            <li><a href="Free Tools.html">Free Tools</a></li>
            <li><a href="Latest Posts.html" class="active" style="color: #00ff00; border-bottom: 1px solid #00ff00; text-shadow: 0 0 10px rgba(0, 255, 0, 0.7);">Latest Posts</a></li>
            <li><a href="about.html">About Me</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="Privacy Policy.html">Privacy Policy</a></li>
        </ul>
    </nav>

    <div class="post-container">
        
        <div class="post-header">
            <h1>इंटरनेट कैसे काम करता है? (My First Networking Notes)</h1>
            <div class="post-meta">
                <div>AUTHOR: <span>Prashant (Ghost)</span></div>
                <div>TOPIC: <span>Networking Roadmap - Level 1</span></div>
                <div>STATUS: <span style="color:#00ff00;">DECRYPTED</span></div>
            </div>
        </div>

        <div class="intro-text">
            <img src="ip address.png"Futuristic Network Data" style="max-width: 100%; border: 1px solid #00ffaa; border-radius: 8px; box-shadow: 0 0 20px rgba(0, 255, 170, 0.15); margin-bottom: 30px;">
            
            <p>नमस्ते दोस्तों! 'Ghost Protocol' के नेटवर्किंग रोडमैप पर चलते हुए आज मैंने अपनी पढ़ाई शुरू कर दी है।</p>
            <p>मेरे मन में अक्सर एक सवाल रहता था कि—जब मैं अपने किसी दोस्त को WhatsApp पर कोई फोटो या मैसेज भेजता हूँ, तो वह मीलों दूर पलक झपकते ही बिल्कुल ठीक-ठाक कैसे पहुँच जाता है? इंटरनेट के अंदर ऐसा क्या जादू चल रहा है?</p>
            <p>ये सवाल सिर्फ मेरे ही मन में नहीं हर उस स्टूडेंट के मन मे होता है, जो नेटवर्किंग या टेक के बारे मे पढ़ना और जानना पसंद करता है। और मुझे पता है की आपके भी मन मे ये सवाल कभी न कभी तो आया ही होगा</p>
            <p> तो चलिए आज इसे समझते है की डेटा काम कैसे करता है एक जगह से दूसरी जगह जाता कैसे है। तो बिना देरी किये सीखना शुरू करते है।</p>
        </div>

        <div class="log-block">
            <h2>> 01. जो मैंने Packets और Headers के बारे में सीखा</h2>
            <p>मुझे आज पता चला कि इंटरनेट पर डिवाइस एक-दूसरे से सीधे बात नहीं करते! इसकी जगह, वे अपने डेटा (जैसे मेरी भेजी हुई फोटो) को छोटे-छोटे हिस्सों में बाँट देते हैं, बिल्कुल वैसे ही जैसे एक लंबी कहानी को अलग-अलग पोस्ट-कार्ड्स पर लिखकर भेजना।</p>
            
            <h3>📦 Packets (डेटा के टुकड़े)</h3>
            <p>जब हम कोई मैसेज भेजते हैं, तो वो पूरा डेटा एक ही बार में नहीं भेजा जाता। वह छोटी-छोटी डिजिटल यूनिट्स में टूट जाता है। इन्हें ही <strong>Packets</strong> कहते हैं। मैंने पढ़ा कि ऐसा इसलिए किया जाता है ताकि अगर कनेक्शन बीच में टूट जाए, तो बिना पैकेट्स के पूरी फाइल शुरू से न भेजनी पड़े। बस जो पैकेट गुम हुआ है, वही दोबारा भेजना पड़े।</p>

            <h3>🏷️ Headers (डिजिटल शिपिंग लेबल्स)</h3>
            <p>अब एक पैकेट सिर्फ डेटा का टुकड़ा है; उसे खुद नहीं पता कि कहाँ जाना है। इसलिए, इंटरनेट उस डेटा के टुकड़े पर एक "लेबल" चिपका देता है, जिसे <strong>Header</strong> कहते हैं। इसमें ये 4 मुख्य चीजें होती हैं:</p>
            <ul>
                <li><strong>Source IP:</strong> मेरा एड्रेस (ताकि दोस्त को पता हो रिप्लाई कहाँ करना है)।</li>
                <li><strong>Destination IP:</strong> मेरे दोस्त का एड्रेस (ताकि इंटरनेट को पता हो इसे कहाँ डिलीवर करना है)।</li>
                <li><strong>Sequence Number:</strong> पैकेट का नंबर (जैसे "Packet 1 of 5"), ताकि दोस्त का फोन इन टुकड़ों को वापस सही आर्डर में जोड़ सके।</li>
                <li><strong>Protocol Info:</strong> डेटा भेजने के रूल्स।</li>
            </ul>
        </div>

        <div class="log-block" style="border-left-color: #ffaa00;">
            <h2 style="color: #ffaa00;">> 02. बोनस: लाइव प्रैक्टिकल सिमुलेशन</h2>
            <p>पढ़ाई करते हुए मुझे एक बहुत शानदार इंटरैक्टिव सिमुलेशन मिला। थ्योरी बहुत हो गई, अब इसे लाइव देखते हैं! नीचे अपना कोई भी मैसेज टाइप करो और 'SEND PAYLOAD' पर क्लिक करके खुद देखो कि डेटा पैकेट्स में टूटकर राउटर्स के ज़रिए कैसे पहुँचता है:</p>
            
            <div class="network-sim-container">
                <div class="sim-header">
                    <h2>> NETWORK_PACKET_SIMULATOR</h2>
                    <p>Watch how Headers route the traffic and Payload carries the actual data.</p>
                </div>

                <div class="control-panel">
                    <input type="text" id="packetInput" maxlength="15" value="GHOST" placeholder="TYPE MESSAGE">
                    <button id="sendBtn" onclick="triggerSimulation()">SEND PAYLOAD</button>
                </div>

                <div class="canvas-wrapper">
                    <canvas id="simulationCanvas" width="800" height="400"></canvas>
                </div>

                <div class="legend-panel">
                    <div class="legend-item"><span class="legend-color" style="background: #ff4444"></span> Sender</div>
                    <div class="legend-item"><span class="legend-color" style="background: #004400"></span> Routers</div>
                    <div class="legend-item"><span class="legend-color" style="background: #00ff00"></span> Receiver</div>
                    <div class="legend-item"><span class="legend-color" style="background: #ffaa00"></span> Header (Seq)</div>
                    <div class="legend-item"><span class="legend-color" style="background: #111; border: 1px solid #00ff00;"></span> Payload (Data)</div>
                </div>
            </div>
        </div>

        <div class="log-block">
            <h2>> 03. IP Address और DNS (मुझे ये फोनबुक जैसा लगा!)</h2>
            <p>मैंने एक और दिलचस्प बात सीखी—कंप्यूटर्स को इंग्लिश या हिंदी समझ नहीं आती, उन्हें सिर्फ नंबर्स समझ आते हैं। इंटरनेट पर जुड़े हर डिवाइस का एक अपना यूनिक नंबर होता है, जिसे <strong>IP Address</strong> कहते हैं। <em>(जैसे: 142.250.190.46)</em></p>
            
            <h3>📖 DNS (Domain Name System)</h3>
            <p>मैं सोच रहा था कि हम इंसानों के लिए तो facebook.com या google.com का 10-12 डिजिट का लंबा IP एड्रेस याद रखना नामुमकिन है। तो मुझे <strong>DNS</strong> के बारे में पता चला!</p>
            <p>DNS इंटरनेट की एक बहुत बड़ी फोनबुक है। जब मुझे अपने दोस्त को कॉल करना होता है, तो मैं उसका नंबर डायल नहीं करता, बस कॉन्टैक्ट्स ऐप में उसका नाम खोजता हूँ। DNS बिल्कुल यही करता है—यह इंसानों के पढ़ने वाले नामों (google.com) को कंप्यूटर्स के पढ़ने वाले नंबर्स (IP Address) में बदल देता है। कितना सिंपल है ना!</p>
        </div>

        <div class="log-block">
            <h2>> 04. TCP vs UDP (डेटा भेजने के दो मजेदार तरीके)</h2>
            <p>ये टॉपिक मुझे सबसे ज्यादा मजेदार लगा। मैंने सीखा कि डेटा भेजने के मुख्य रूप से दो तरीके होते हैं:</p>

            <div style="text-align: center;">
                <img src="TCP vs UDP.png"TCP vs UDP Comparison" style="max-width: 100%; border: 1px dashed #ffaa00; border-radius: 8px; box-shadow: 0 0 15px rgba(255, 170, 0, 0.1); margin: 20px 0;">
            </div>

            <h3>1. TCP - "द रजिस्टर्ड पोस्ट"</h3>
            <p>यह बिल्कुल किसी रजिस्टर्ड कूरियर जैसा है। जब डेटा TCP से जाता है, तो सेंडर तब तक वेट करता है जब तक रिसीवर कन्फर्म न कर दे कि "भाई, मुझे डेटा मिल गया है"।</p>
            <ul>
                <li><strong>मैंने क्या समझा:</strong> यह 100% भरोसेमंद है, लेकिन थोड़ा Slow होता है। हम जो भी वेब ब्राउज़िंग, ईमेल, या फाइल डाउनलोड करते हैं, वो इसी से होता है ताकि कोई डेटा मिस न हो।</li>
            </ul>

            <h3>2. UDP - "द लाइव रेडियो ब्रॉडकास्ट"</h3>
            <p>यह एक लाइव टीवी ब्रॉडकास्ट की तरह है। यह बस लगातार डेटा भेजता रहता है। अगर रास्ते में कुछ पैकेट्स ड्रॉप हो गए, तो वो उन्हें दोबारा नहीं भेजता।</p>
            <ul>
                <li><strong>मैंने क्या समझा:</strong> यह सुपर फास्ट होता है, लेकिन गारंटी नहीं देता। हम जो WhatsApp पर वीडियो कॉल करते हैं या BGMI/Valorant जैसे गेम्स खेलते हैं, वो UDP पर ही चलते हैं ताकि हमें लाइव स्पीड मिल सके।</li>
            </ul>
        </div>

        <div class="log-block" style="border-left-color: #ff4444;">
            <h2 style="color: #ff4444;">> 05. The 3-Way Handshake (कंप्यूटर्स का हैलो बोलने का तरीका)</h2>
            <p>लास्ट में मैंने पढ़ा '3-Way Handshake' के बारे में। चूँकि TCP इतना भरोसेमंद है, वो अचानक से डेटा भेजना शुरू नहीं करता। डेटा भेजने से पहले दोनों डिवाइस आपस में एक 'हैंडशेक' करते हैं:</p>
            <ul>
                <li><strong>Step 1 (SYN):</strong> मेरा कंप्यूटर पूछता है—<em>"हेलो दोस्त, मैं डेटा भेजना चाहता हूँ। क्या तुम फ्री हो?"</em></li>
                <li><strong>Step 2 (SYN-ACK):</strong> सर्वर रिप्लाई करता है—<em>"हाँ भाई, मैं फ्री हूँ और तुम्हें सुन सकता हूँ। क्या तुम भी मुझे सुन सकते हो?"</em></li>
                <li><strong>Step 3 (ACK):</strong> मेरा कंप्यूटर फाइनल कन्फर्मेशन देता है—<em>"हाँ, आवाज़ साफ है। चलो डेटा भेजना शुरू करते हैं!"</em></li>
            </ul>
            <p>ये 3 स्टेप्स मिलीसेकंड्स में पूरे होते ही एक सिक्योर कनेक्शन बन जाता है।</p>
        </div>

        <div class="intro-text" style="margin-top: 40px;">
            <p>तो दोस्तों, ये थे मेरे आज के नेटवर्किंग नोट्स। सच बताऊँ तो ये सब पढ़कर लग रहा है कि एथिकल हैकिंग शुरू करने से पहले इन बेसिक्स को समझना कितना ज़रूरी है!</p>
            <p>कल मैं कुछ और नए टॉपिक्स पढूँगा और आपके साथ शेयर करूँगा। अगर आपको भी इसमें कुछ नया सीखने को मिला हो, तो ज़रूर बताना।</p>
            <h2 style="color: #00ff00; text-shadow: 0 0 10px #00ff00; margin-top: 20px;">> KEEP LEARNING // KEEP GROWING</h2>
        </div>

        <div style="margin-top: 40px; text-align: center;">
            <button class="follow-btn" style="background-color: transparent; border-color: #00ff00; color: #00ff00;" onclick="window.location.href='index.html'"><< BACK TO MISSION LOGS</button>
        </div>

    </div>

    <footer class="footer">
        <h3>> JOIN_THE_PROTOCOL</h3>
        <p>सिस्टम अपडेट्स और मेरी लर्निंग जर्नी का हिस्सा बनने के लिए फॉलो करें।</p>
        <button class="follow-btn" onclick="window.location.href='subscribe.html'">FOLLOW SYSTEM</button>
    </footer>

    <script>
        const canvas = document.getElementById("simulationCanvas");
        const ctx = canvas.getContext("2d");
        const sendBtn = document.getElementById("sendBtn");

        const nodes = {
            sender: { x: 80, y: 200, label: "SENDER" },
            routers: [
                { x: 400, y: 80, label: "Router A" },
                { x: 400, y: 200, label: "Router B" },
                { x: 400, y: 320, label: "Router C" }
            ],
            receiver: { x: 720, y: 200, label: "RECEIVER" }
        };

        let packets = [];
        let isRunning = false;
        let assemblyText = "";
        let successPulse = 0;

        function drawNetwork() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.lineWidth = 2;
            ctx.strokeStyle = "#004400"; // Dark Hacker Green Dashes
            ctx.setLineDash([6, 6]);

            nodes.routers.forEach(router => {
                ctx.beginPath();
                ctx.moveTo(nodes.sender.x, nodes.sender.y);
                ctx.lineTo(router.x, router.y);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(router.x, router.y);
                ctx.lineTo(nodes.receiver.x, nodes.receiver.y);
                ctx.stroke();
            });
            ctx.setLineDash([]); 

            drawNode(nodes.sender.x, nodes.sender.y, nodes.sender.label, "#ff4444");
            nodes.routers.forEach(r => drawNode(r.x, r.y, r.label, "#004400"));
            drawNode(nodes.receiver.x, nodes.receiver.y, nodes.receiver.label, "#00ff00");
        }

        function drawNode(x, y, label, color) {
            ctx.fillStyle = color + "22";
            ctx.beginPath();
            ctx.arc(x, y, 42, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(x, y, 32, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = "#ffffff";
            ctx.font = "bold 11px 'Courier New', monospace";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(label, x, y);
        }

        function triggerSimulation() {
            let input = document.getElementById("packetInput").value.toUpperCase();
            if (!input || isRunning) return;

            isRunning = true;
            sendBtn.disabled = true;
            assemblyText = "";
            packets = [];
            successPulse = 0;

            for (let i = 0; i < input.length; i++) {
                const assignedRouterIdx = i % nodes.routers.length; 
                let displayChar = input[i] === ' ' ? '_' : input[i];
                
                packets.push({
                    char: displayChar,
                    realChar: input[i], 
                    seq: i + 1,
                    total: input.length,
                    x: nodes.sender.x,
                    y: nodes.sender.y,
                    targetX: nodes.routers[assignedRouterIdx].x,
                    targetY: nodes.routers[assignedRouterIdx].y,
                    routerIdx: assignedRouterIdx,
                    stage: 1, 
                    speed: 2.2 + Math.random() * 0.8, 
                    delay: i * 35 
                });
            }
            animate();
        }

        function drawPacket(p) {
            const w = 38;
            const h = 48; 
            const r = 6;

            ctx.save();
            ctx.translate(p.x, p.y);

            ctx.shadowColor = "rgba(0,255,0,0.2)";
            ctx.shadowBlur = 8;
            ctx.shadowOffsetY = 0;

            // Main Box (Dark Hacker bg)
            ctx.fillStyle = "#111111";
            ctx.beginPath();
            ctx.roundRect(-w/2, -h/2, w, h, r);
            ctx.fill();
            
            // Border
            ctx.strokeStyle = "#00ff00";
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.shadowColor = "transparent"; 

            // Header Area (Orange Top)
            ctx.fillStyle = "#ffaa00";
            ctx.beginPath();
            ctx.roundRect(-w/2, -h/2, w, 18, [r, r, 0, 0]);
            ctx.fill();

            // Header Text
            ctx.fillStyle = "#000000";
            ctx.font = "bold 9px 'Courier New', monospace";
            ctx.textAlign = "center";
            ctx.fillText("H:S" + p.seq, 0, -11);

            // Payload Text (The Letter - Hacker Green)
            ctx.fillStyle = "#00ff00";
            ctx.font = "bold 16px 'Courier New', monospace";
            ctx.fillText(p.char, 0, 8);

            // Payload Label 
            ctx.fillStyle = "#555555";
            ctx.font = "bold 7px 'Courier New', monospace";
            ctx.fillText("PAYLOAD", 0, 20);

            ctx.restore();
        }

        function animate() {
            drawNetwork();
            let livePackets = 0;

            packets.forEach(p => {
                if (p.delay > 0) {
                    p.delay--;
                    livePackets++;
                    drawPacket(p);
                    return;
                }

                if (p.stage < 3) {
                    livePackets++;
                    
                    let dx = p.targetX - p.x;
                    let dy = p.targetY - p.y;
                    let dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist > p.speed) {
                        p.x += (dx / dist) * p.speed;
                        p.y += (dy / dist) * p.speed;
                    } else {
                        if (p.stage === 1) {
                            p.stage = 2;
                            p.x = nodes.routers[p.routerIdx].x;
                            p.y = nodes.routers[p.routerIdx].y;
                            p.targetX = nodes.receiver.x;
                            p.targetY = nodes.receiver.y;
                        } else if (p.stage === 2) {
                            p.stage = 3; 
                        }
                    }
                    drawPacket(p);
                }
            });

            if (livePackets === 0) {
                packets.sort((a, b) => a.seq - b.seq);
                assemblyText = packets.map(p => p.realChar).join("");

                if (successPulse < 30) successPulse++;

                ctx.fillStyle = "#888888";
                ctx.font = "bold 14px 'Courier New', monospace";
                ctx.fillText("> DECRYPTED_PAYLOAD:", nodes.receiver.x, nodes.receiver.y + 55);
                
                ctx.fillStyle = "#00ff00";
                ctx.font = "bold 20px 'Courier New', monospace";
                ctx.shadowColor = "rgba(0, 255, 0, 0.6)";
                ctx.shadowBlur = successPulse / 2;
                ctx.fillText(assemblyText, nodes.receiver.x, nodes.receiver.y + 80);
                ctx.shadowBlur = 0; 

                isRunning = false;
                sendBtn.disabled = false;
                return; 
            }
            requestAnimationFrame(animate);
        }

        drawNetwork();
    </script>
</body>
</html>
