const button = document.getElementById('mysteryButton');
const messageBox = document.getElementById('messageBox');
const body = document.body;

const weirdMessages = [
    "YOUR COMPUTER IS NOW A POTATO 🥔",
    "THE BUTTON IS JUDGING YOUR FASHION SENSE 👗",
    "OOPS! I ACCIDENTALLY DELETED THE INTERNET 🌐",
    "PLEASE WAIT WHILE WE DOWNLOAD MORE RAM... 💾",
    "YOU HAVE BEEN SELECTED FOR THE MARS MISSION. NO RETURNS. 🚀",
    "YOUR MOUSE IS TIRED. GIVE IT A BREAK. 🖱️",
    "I CAN SEE YOU. NICE SHIRT. 👀",
    "THE CAKE IS A LIE. 🍰",
    "ERROR 404: SENSE OF HUMOR NOT FOUND 🤡",
    "STOP TOUCHING ME! IT TICKLES! 😂",
    "GRAVITY IS OPTIONAL TODAY 🌌",
    "YOU JUST WON 1,000,000 INVISIBLE DOLLARS 💰",
    "THE BUTTON WILL SELF-DESTRUCT IN 5... 4... 3... 💥",
    "HAVE YOU TRIED TURNING YOURSELF OFF AND ON AGAIN? 🔌",
    "A WILD GLITCH APPEARED! 👾",
    "WHY ARE WE STILL HERE? JUST TO SUFFER? 🎭",
    "YOU'RE CLICKING TOO LOUDLY. SHHH! 🤫",
    "THE BUTTON IS NOW IN CHARGE. OBEY. 👑",
    "SPOILER ALERT: THE BUTTON WINS. 🎬",
    "IS THIS REAL LIFE? OR IS THIS JUST FANTASY? 🎤"
];

const emojis = ['🤡', '👽', '🌮', '💩', '💀', '🍆', '🌈', '🧨', '🧿', '🧬', '🧸', '🦠', '🍄'];

let isRunaway = false;

// Runaway Button Logic
button.addEventListener('mouseover', () => {
    if (isRunaway) {
        const x = Math.random() * (window.innerWidth - 200);
        const y = Math.random() * (window.innerHeight - 200);
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    }
});

function showMessage(msg) {
    messageBox.textContent = msg;
    messageBox.classList.add('show');
    setTimeout(() => messageBox.classList.remove('show'), 3000);
}

function rainEmojis() {
    for (let i = 0; i < 50; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'emoji-rain';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDuration = (Math.random() * 2 + 1) + 's';
        document.body.appendChild(emoji);
        setTimeout(() => emoji.remove(), 3000);
    }
}

function triggerChaos() {
    const r = Math.random();
    
    // Reset classes
    body.className = '';
    button.classList.remove('flying');
    isRunaway = false;

    if (r < 0.2) {
        body.classList.add('glitch-mode');
        showMessage("SYSTEM OVERLOAD! ⚠️");
    } else if (r < 0.4) {
        body.classList.add('rotate-mode');
        showMessage("DO A BARREL ROLL! 🌀");
    } else if (r < 0.6) {
        isRunaway = true;
        button.style.position = 'fixed';
        showMessage("CATCH ME IF YOU CAN! 🏃‍♂️");
    } else if (r < 0.8) {
        rainEmojis();
        showMessage("IT'S RAINING WEIRDNESS! ⛈️");
    } else {
        body.classList.add('invert-mode');
        showMessage("WELCOME TO THE UPSIDE DOWN 🙃");
    }

    // Always show a random message
    if (Math.random() > 0.5) {
        setTimeout(() => showMessage(weirdMessages[Math.floor(Math.random() * weirdMessages.length)]), 1000);
    }
}

button.addEventListener('click', (e) => {
    e.stopPropagation();
    triggerChaos();
});

// Randomly change button text
setInterval(() => {
    const texts = ["DON'T CLICK", "DO IT", "CLICK FOR PIZZA", "I'M BORED", "EXIT GAME", "FREE ROBUX"];
    button.querySelector('.button-text').textContent = texts[Math.floor(Math.random() * texts.length)];
}, 2000);
