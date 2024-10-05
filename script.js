// Pong-spel logica

// HTML elementen
const ball = document.getElementById('ball');
const paddleLeft = document.getElementById('paddle-left');
const paddleRight = document.getElementById('paddle-right');
const pongGame = document.getElementById('pong-game');

// Variabelen voor balbeweging
let ballX = pongGame.clientWidth / 2 - 10;
let ballY = pongGame.clientHeight / 2 - 10;
let ballSpeedX = 4;
let ballSpeedY = 4;

// Paddle beweging
let paddleLeftY = pongGame.clientHeight / 2 - 50;
let paddleRightY = pongGame.clientHeight / 2 - 50;
const paddleSpeed = 20;

// Functie om de bal te verplaatsen
function moveBall() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Botsen tegen boven- en onderkant
    if (ballY <= 0 || ballY >= pongGame.clientHeight - 20) {
        ballSpeedY = -ballSpeedY;
    }

    // Botsen tegen linker paddle
    if (ballX <= 20 && ballY >= paddleLeftY && ballY <= paddleLeftY + 100) {
        ballSpeedX = -ballSpeedX;
    }

    // Botsen tegen rechter paddle
    if (ballX >= pongGame.clientWidth - 40 && ballY >= paddleRightY && ballY <= paddleRightY + 100) {
        ballSpeedX = -ballSpeedX;
    }

    // Bal gaat uit het speelveld
    if (ballX <= 0 || ballX >= pongGame.clientWidth - 20) {
        resetBall();
    }

    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
}

// Functie om de bal te resetten naar het midden
function resetBall() {
    ballX = pongGame.clientWidth / 2 - 10;
    ballY = pongGame.clientHeight / 2 - 10;
    ballSpeedX = -ballSpeedX; // Verander richting na scoren
}

// Functie om de paddles te bewegen
function movePaddle(e) {
    // W en S voor linker paddle
    if (e.key === 'w' && paddleLeftY > 0) {
        paddleLeftY -= paddleSpeed;
    } else if (e.key === 's' && paddleLeftY < pongGame.clientHeight - 100) {
        paddleLeftY += paddleSpeed;
    }

    // Pijl omhoog en omlaag voor rechter paddle
    if (e.key === 'ArrowUp' && paddleRightY > 0) {
        paddleRightY -= paddleSpeed;
    } else if (e.key === 'ArrowDown' && paddleRightY < pongGame.clientHeight - 100) {
        paddleRightY += paddleSpeed;
    }

    paddleLeft.style.top = paddleLeftY + 'px';
    paddleRight.style.top = paddleRightY + 'px';
}

// Event listener voor toetsenbord
document.addEventListener('keydown', movePaddle);

// Interval voor het verplaatsen van de bal
setInterval(moveBall, 30);
