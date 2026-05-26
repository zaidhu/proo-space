const button = document.getElementById('mysteryButton');
const messageBox = document.getElementById('messageBox');
const body = document.body;

const themes = ['theme-dark', 'theme-neon', 'theme-ocean', 'theme-forest', 'theme-sunset'];
const messages = [
    "🎉 Something magical happened!",
    "🌟 You found a secret!",
    "💫 The universe just shifted...",
    "🎪 Plot twist incoming!",
    "🚀 Houston, we have a problem... or do we?",
    "🎭 The show must go on!",
    "⚡ Power surge detected!",
    "🌈 Rainbow mode activated!",
    "🎲 Luck is on your side today!",
    "🔮 The future is uncertain... press again!",
    "🎸 Rock on! 🤘",
    "🍕 Pizza time!",
    "🎬 Scene 1, Take 1... ACTION!",
    "🌙 The night is young!",
    "☀️ Sunny side up!",
    "🎯 Bullseye!",
    "🏆 You're a winner!",
    "🎪 Welcome to the circus!",
    "🌊 Surf's up!",
    "🎨 Creativity unlocked!",
    "🔥 Things are heating up!",
    "❄️ Cool as ice!",
    "🎵 Can you hear the music?",
    "🎭 All the world's a stage!",
    "🌺 Bloom where you're planted!",
    "🚁 Helicopter mode engaged!",
    "🎪 Step right up!",
    "🌟 You're a star!",
    "💎 Diamond hands!",
    "🎯 Mission accomplished!"
];

const animations = ['shake', 'bounce', 'spin'];

let clickCount = 0;

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomTheme() {
    return themes[Math.floor(Math.random() * themes.length)];
}

function getRandomAnimation() {
    return animations[Math.floor(Math.random() * animations.length)];
}

function changeTheme() {
    // Remove all theme classes
    themes.forEach(theme => body.classList.remove(theme));
    
    // Add a random theme
    const randomTheme = getRandomTheme();
    body.classList.add(randomTheme);
}

function showMessage(message) {
    messageBox.textContent = message;
    messageBox.classList.add('show');
    
    setTimeout(() => {
        messageBox.classList.remove('show');
    }, 3000);
}

function animateButton() {
    const animation = getRandomAnimation();
    button.classList.add(animation);
    
    setTimeout(() => {
        button.classList.remove(animation);
    }, 600);
}

function createConfetti() {
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        
        document.body.appendChild(confetti);
        
        const duration = Math.random() * 2 + 1;
        const xOffset = (Math.random() - 0.5) * 200;
        
        confetti.animate([
            { transform: 'translateY(0) translateX(0)', opacity: 1 },
            { transform: `translateY(${window.innerHeight}px) translateX(${xOffset}px)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        setTimeout(() => confetti.remove(), duration * 1000);
    }
}

function triggerRandomEffect() {
    clickCount++;
    
    const effects = [
        () => {
            changeTheme();
            showMessage(getRandomMessage());
        },
        () => {
            animateButton();
            showMessage("🎪 Wheeeee!");
        },
        () => {
            createConfetti();
            showMessage("🎉 PARTY TIME!");
        },
        () => {
            showMessage(getRandomMessage());
            animateButton();
        },
        () => {
            changeTheme();
            createConfetti();
            showMessage("🌟 JACKPOT!");
        }
    ];
    
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
    randomEffect();
    
    // Special message every 10 clicks
    if (clickCount % 10 === 0) {
        showMessage(`🎊 You've clicked ${clickCount} times! Keep going!`);
    }
}

button.addEventListener('click', triggerRandomEffect);

// Easter egg: Konami code
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        if (konamiIndex === konamiCode.length) {
            showMessage("🎮 KONAMI CODE ACTIVATED! You're a true gamer!");
            createConfetti();
            changeTheme();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// Initial message
window.addEventListener('load', () => {
    showMessage("Welcome to the mystery! 👋");
});
