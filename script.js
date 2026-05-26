const button = document.getElementById('mysteryButton');
const messageBox = document.getElementById('messageBox');
const body = document.body;

// --- Matrix Rain Effect ---
const canvas = document.createElement('canvas');
canvas.id = 'matrix';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let columns = Math.floor(width / 20);
let drops = Array(columns).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#0f0';
    ctx.font = '20px monospace';
    for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(Math.random() * 128);
        ctx.fillText(text, i * 20, drops[i] * 20);
        if (drops[i] * 20 > height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
let matrixInterval = setInterval(drawMatrix, 50);

// --- Cursor Follower ---
const follower = document.createElement('div');
follower.className = 'cursor-follower';
document.body.appendChild(follower);
document.addEventListener('mousemove', (e) => {
    follower.style.left = e.clientX + 15 + 'px';
    follower.style.top = e.clientY + 15 + 'px';
    const comments = ["Stop moving", "I see you", "Nice click", "Why?", "Click it!", "Don't do it"];
    if (Math.random() > 0.95) follower.textContent = comments[Math.floor(Math.random() * comments.length)];
});

// --- Chaos Functions ---
function triggerBSOD() {
    body.innerHTML = `
        <h1>:(</h1>
        <p>Your PC ran into a problem and needs to restart. We're just collecting some error info, and then we'll restart for you.</p>
        <p>0% complete</p>
        <br><br>
        <p>For more information about this issue and possible fixes, visit https://proo.space/stopcode</p>
        <p>If you call a support person, give them this info:<br>Stop code: BUTTON_CLICKED_TOO_HARD</p>
    `;
    body.className = 'bsod';
    let percent = 0;
    const interval = setInterval(() => {
        percent += Math.floor(Math.random() * 10);
        if (percent >= 100) {
            percent = 100;
            clearInterval(interval);
            setTimeout(() => location.reload(), 2000);
        }
        body.querySelector('p:nth-child(3)').textContent = `${percent}% complete`;
    }, 500);
}

function cloneButtons() {
    for (let i = 0; i < 15; i++) {
        const b = document.createElement('button');
        b.className = 'mystery-button clone-button';
        b.style.left = Math.random() * 90 + 'vw';
        b.style.top = Math.random() * 90 + 'vh';
        b.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        b.onclick = () => b.classList.add('fall');
        document.body.appendChild(b);
    }
}

function gravityCollapse() {
    document.querySelectorAll('h1, p, button, div').forEach(el => {
        el.classList.add('fall');
    });
    setTimeout(() => location.reload(), 3000);
}

function showMessage(msg) {
    messageBox.textContent = msg;
    messageBox.style.display = 'block';
    setTimeout(() => messageBox.style.display = 'none', 3000);
}

// --- Main Event ---
button.addEventListener('click', () => {
    const r = Math.random();
    body.className = '';
    
    if (r < 0.15) {
        triggerBSOD();
    } else if (r < 0.3) {
        cloneButtons();
        showMessage("BUTTON MITOSIS ACTIVATED!");
    } else if (r < 0.45) {
        gravityCollapse();
        showMessage("GRAVITY.EXE HAS STOPPED WORKING");
    } else if (r < 0.6) {
        body.classList.add('shake');
        showMessage("EARTHQUAKE!!!");
        setTimeout(() => body.classList.remove('shake'), 2000);
    } else {
        showMessage("SYSTEM MALFUNCTION... GOOD LUCK.");
        body.style.filter = `hue-rotate(${Math.random() * 360}deg) invert(${Math.random()})`;
    }
});

// Randomly change Matrix color
setInterval(() => {
    const colors = ['#0f0', '#f00', '#00f', '#ff0', '#f0f', '#0ff'];
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
}, 5000);
