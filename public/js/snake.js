const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const gameOverModal = document.getElementById('gameOverModal');
const finalScoreElement = document.getElementById('finalScore');
const finalTimeElement = document.getElementById('finalTime');
const okButton = document.getElementById('okButton');
const startButton = document.getElementById('startButton');
const startScreen = document.getElementById('startScreen');
const gameScreen = document.getElementById('gameScreen');

const gridSize = 20;
let canvasWidth = window.innerWidth < 640 ? 300 : 600;
let canvasHeight = window.innerWidth < 640 ? 450 : 400;
canvas.width = canvasWidth;
canvas.height = canvasHeight;
const tileCountX = canvasWidth / gridSize;
const tileCountY = canvasHeight / gridSize;
let snake = [{ x: Math.floor(tileCountX / 2), y: Math.floor(tileCountY / 2) }];
let food = { x: Math.floor(tileCountX * 0.75), y: Math.floor(tileCountY * 0.75) };
let dx = 0;
let dy = 0;
let score = 0;
let gameLoop;
let timerLoop;
let startTime;
let touchStartX = 0;
let touchStartY = 0;

function startGame() {
    canvasWidth = window.innerWidth < 640 ? 300 : 600;
    canvasHeight = window.innerWidth < 640 ? 450 : 400;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    snake = [{ x: Math.floor(tileCountX / 2), y: Math.floor(tileCountY / 2) }];
    food = { x: Math.floor(tileCountX * 0.75), y: Math.floor(tileCountY * 0.75) };
    dx = 0;
    dy = 0;
    score = 0;
    startTime = Date.now();
    scoreElement.textContent = score;
    timerElement.textContent = '00:00:000';
    gameOverModal.classList.add('hidden');
    clearInterval(gameLoop);
    clearInterval(timerLoop);
    const gameSpeed = window.innerWidth < 640 ? 130 : 100; // Slower for mobile (150ms), faster for desktop (100ms)
    gameLoop = setInterval(gameStep, gameSpeed);
    timerLoop = setInterval(updateTimer, 10);
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
}

function updateTimer() {
    const elapsed = Date.now() - startTime;
    timerElement.textContent = formatTime(elapsed);
}

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const millis = milliseconds % 1000;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${millis.toString().padStart(3, '0')}`;
}

function gameStep() {
    updateSnake();
    if (checkCollision()) {
        clearInterval(gameLoop);
        clearInterval(timerLoop);
        finalScoreElement.textContent = score;
        finalTimeElement.textContent = formatTime(Date.now() - startTime);
        gameOverModal.classList.remove('hidden');
        return;
    }
    drawGame();
}

function updateSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreElement.textContent = score;
        generateFood();
    } else {
        snake.pop();
    }
}

function checkCollision() {
    const head = snake[0];
    if (head.x < 0 || head.x >= tileCountX || head.y < 0 || head.y >= tileCountY) {
        return true;
    }
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }
    return false;
}

function generateFood() {
    food = {
        x: Math.floor(Math.random() * tileCountX),
        y: Math.floor(Math.random() * tileCountY)
    };
    for (let segment of snake) {
        if (food.x === segment.x && food.y === segment.y) {
            generateFood();
        }
    }
}

function drawGame() {
    // Clear canvas
    ctx.fillStyle = '#1F2937';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw snake with tapering segments
    ctx.fillStyle = '#10B981';
    ctx.strokeStyle = '#10B981';
    const maxRadius = gridSize * 0.4; // Head radius (8px)
    const minRadius = gridSize * 0.2; // Tail radius (4px)
    
    for (let i = 0; i < snake.length; i++) {
        const segment = snake[i];
        const x = segment.x * gridSize + gridSize / 2;
        const y = segment.y * gridSize + gridSize / 2;
        // Calculate radius based on position (linear interpolation)
        const t = snake.length > 1 ? i / (snake.length - 1) : 0;
        const radius = maxRadius - (maxRadius - minRadius) * t;
        
        // Draw circular segment
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw connecting line to next segment
        if (i < snake.length - 1) {
            const nextSegment = snake[i + 1];
            const nextX = nextSegment.x * gridSize + gridSize / 2;
            const nextY = nextSegment.y * gridSize + gridSize / 2;
            const nextT = (i + 1) / (snake.length - 1);
            const nextRadius = maxRadius - (maxRadius - minRadius) * nextT;
            ctx.beginPath();
            ctx.lineWidth = (radius + nextRadius); // Average radius for smooth connection
            ctx.moveTo(x, y);
            ctx.lineTo(nextX, nextY);
            ctx.stroke();
        }
    }
    
    // Draw food as a square
    ctx.fillStyle = '#EF4444';
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2);
}

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            if (dy !== 1) { dx = 0; dy = -1; }
            break;
        case 'ArrowDown':
            if (dy !== -1) { dx = 0; dy = 1; }
            break;
        case 'ArrowLeft':
            if (dx !== 1) { dx = -1; dy = 0; }
            break;
        case 'ArrowRight':
            if (dx !== -1) { dx = 1; dy = 0; }
            break;
    }
});

canvas.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
});

canvas.addEventListener('touchmove', (e) => {
    e.preventDefault(); // Prevent scrolling
});

canvas.addEventListener('touchend', (e) => {
    const touch = e.changedTouches[0];
    const touchEndX = touch.clientX;
    const touchEndY = touch.clientY;
    
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    
    const minSwipeDistance = 30; // Minimum distance for a valid swipe
    
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0 && dx !== -1) { // Swipe right
            dx = 1;
            dy = 0;
        } else if (deltaX < 0 && dx !== 1) { // Swipe left
            dx = -1;
            dy = 0;
        }
    } else if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > minSwipeDistance) {
        if (deltaY > 0 && dy !== -1) { // Swipe down
            dx = 0;
            dy = 1;
        } else if (deltaY < 0 && dy !== 1) { // Swipe up
            dx = 0;
            dy = -1;
        }
    }
});

startButton.addEventListener('click', startGame);
okButton.addEventListener('click', startGame);