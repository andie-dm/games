let score = 0;
let gameActive = false;

const gameArea = document.getElementById('game-area');
const target = document.getElementById('target');
const scoreBoard = document.getElementById('score');
const startBtn = document.getElementById('start-btn');

function startGame() {
    score = 0;
    scoreBoard.textContent = score;
    gameActive = true;
    startBtn.style.display = 'none';
    spawnTarget();
}

function spawnTarget() {
    if (!gameActive) return;

    const x = Math.random() * (gameArea.clientWidth - 50);
    const y = Math.random() * (gameArea.clientHeight - 50);

    target.style.left = x + 'px';
    target.style.top = y + 'px';
    target.style.display = 'block';

    setTimeout(() => {
        target.style.display = 'none';
        if (gameActive) {
            spawnTarget();
        }
    }, 1000);
}

target.addEventListener('click', () => {
    if (!gameActive) return;

    score++;
    scoreBoard.textContent = score;
    target.style.display = 'none';
    spawnTarget();
});

startBtn.addEventListener('click', startGame);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        gameActive = false;
        target.style.display = 'none';
        startBtn.style.display = 'block';
    }
});
