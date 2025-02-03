import confetti from "https://cdn.skypack.dev/canvas-confetti";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (form.checkValidity()) {
      const blueShades = ["#0000FF", "#1E90FF", "#00BFFF", "#87CEFA"];
      
      function shootConfetti(originX) {
        const duration = 1500;
        const animationEnd = Date.now() + duration;
        
        (function frame() {
        const timeLeft = animationEnd - Date.now();
        const progress = timeLeft / duration;
        const particleCount = 40 * (progress > 0 ? progress : 0);

        confetti(
          {
            particleCount,
            startVelocity: 50 * progress + 10,
            spread: 300,
            angle: originX === 0 ? 30 : 150,
            colors: blueShades,
            origin: { x: originX, y: 0 },
            gravity: 1.2,
            ticks: 200
          }
        );

        if (timeLeft > 0) {
          requestAnimationFrame(frame);
        }
        })();
      }

      shootConfetti(0);
      shootConfetti(1);

      setTimeout(() => {
        form.submit();
      }, 5000);
    }
  });
});