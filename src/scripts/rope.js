const rope = document.querySelector('.rope');
const ball = document.createElement('div');
ball.classList.add('ball');
rope.appendChild(ball);

let angle = 0;
const amplitude = 15; // Ângulo máximo de movimento da corda (em graus)
const frequency = 0.1; // Frequência do movimento

function animateRope() {
  const y = amplitude * Math.sin(angle);
  ball.style.bottom = `${y}px`;
  angle += frequency;
  requestAnimationFrame(animateRope);
}

animateRope();
