document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".back");

    button.addEventListener("mouseenter", function () {
      // Zufällige Position innerhalb des sichtbaren Fensters berechnen
      const maxX = window.innerWidth - button.clientWidth;
      const maxY = window.innerHeight - button.clientHeight;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
    });
  });