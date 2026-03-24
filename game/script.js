const ball = document.getElementById("ball");
const scoreDisplay = document.getElementById("score");

let score = 0;

/* Move ball to random position */
function moveBall() {
  const gameArea = document.querySelector(".game-area");

  const maxX = gameArea.clientWidth - 40;
  const maxY = gameArea.clientHeight - 40;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  ball.style.left = randomX + "px";
  ball.style.top = randomY + "px";
}

/* When ball is clicked */
ball.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;

  ball.style.background = "lime";

  setTimeout(() => {
    ball.style.background = "red";
  }, 200);

  moveBall();
});

/* Initial position */
moveBall();