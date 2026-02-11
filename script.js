// Crear estrellas aleatorias
function crearEstrellas() {
  const starsContainer = document.getElementById("stars");
  const numEstrellas = window.innerWidth < 768 ? 80 : 150;

  for (let i = 0; i < numEstrellas; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.width = Math.random() * 3 + 1 + "px";
    star.style.height = star.style.width;
    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.animationDuration = Math.random() * 3 + 2 + "s";
    starsContainer.appendChild(star);
  }
}

// Crear partículas brillantes
function crearParticulas() {
  const particlesContainer = document.getElementById("particles");
  const numParticulas = window.innerWidth < 768 ? 15 : 30;

  for (let i = 0; i < numParticulas; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 6 + "s";
    particle.style.animationDuration = Math.random() * 4 + 4 + "s";
    particlesContainer.appendChild(particle);
  }
}

// Crear estrellas fugaces
function crearEstrellasFugaces() {
  const shootingStarsContainer = document.getElementById("shootingStars");

  setInterval(() => {
    const shootingStar = document.createElement("div");
    shootingStar.className = "shooting-star";
    shootingStar.style.left = Math.random() * 100 + "%";
    shootingStar.style.top = Math.random() * 50 + "%";
    shootingStar.style.width = Math.random() * 100 + 50 + "px";
    shootingStar.style.animationDelay = "0s";
    shootingStarsContainer.appendChild(shootingStar);

    setTimeout(() => {
      shootingStar.remove();
    }, 3000);
  }, 4000);
}

// Crear corazones flotantes
function crearCorazonesFlotantes() {
  const heartsContainer = document.getElementById("floatingHearts");

  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";
    heart.style.animationDelay = "0s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000);
  }, 1000);
}

// Control de música
let musicPlaying = false;
function toggleMusic() {
  const music = document.getElementById("backgroundMusic");
  const musicBtn = document.getElementById("musicBtn");

  if (musicPlaying) {
    music.pause();
    musicBtn.innerHTML = "🎵";
    musicBtn.classList.remove("playing");
    musicPlaying = false;
  } else {
    music.play().catch((e) => {
      console.log("Error al reproducir música:", e);
    });
    musicBtn.innerHTML = "🎶";
    musicBtn.classList.add("playing");
    musicPlaying = true;
  }
}

// Mostrar mensaje especial
function mostrarMensajeEspecial() {
  const mensaje = document.getElementById("hiddenMessage");
  const overlay = document.getElementById("overlay");
  mensaje.classList.add("show");
  overlay.classList.add("show");

  // Crear efecto de explosión de corazones
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      const emojis = ["💕", "💖", "💗", "💓", "💝", "💞"];
      confetti.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
      confetti.style.position = "fixed";
      confetti.style.left = "50%";
      confetti.style.top = "50%";
      confetti.style.fontSize = Math.random() * 20 + 20 + "px";
      confetti.style.zIndex = "1000";
      confetti.style.pointerEvents = "none";

      const angle = (Math.PI * 2 * i) / 50;
      const velocity = Math.random() * 300 + 200;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;

      confetti.style.animation = "none";
      document.body.appendChild(confetti);

      let opacity = 1;
      let posX = 0;
      let posY = 0;
      let rotation = 0;

      const animate = () => {
        posX += tx * 0.01;
        posY += ty * 0.01 + 2;
        rotation += 5;
        opacity -= 0.015;

        confetti.style.transform = `translate(${posX}px, ${posY}px) rotate(${rotation}deg)`;
        confetti.style.opacity = opacity;

        if (opacity > 0) {
          requestAnimationFrame(animate);
        } else {
          confetti.remove();
        }
      };

      animate();
    }, i * 20);
  }
}

// Cerrar mensaje especial
function cerrarMensaje() {
  const mensaje = document.getElementById("hiddenMessage");
  const overlay = document.getElementById("overlay");
  mensaje.classList.remove("show");
  overlay.classList.remove("show");
}

// Efecto de cursor con estrellas (solo en dispositivos con cursor)
if (window.innerWidth > 768) {
  document.addEventListener("mousemove", (e) => {
    if (Math.random() > 0.9) {
      const star = document.createElement("div");
      star.innerHTML = "✨";
      star.style.position = "fixed";
      star.style.left = e.clientX + "px";
      star.style.top = e.clientY + "px";
      star.style.fontSize = Math.random() * 10 + 10 + "px";
      star.style.pointerEvents = "none";
      star.style.zIndex = "999";
      star.style.animation = "fadeOut 1s ease-out forwards";
      document.body.appendChild(star);

      setTimeout(() => star.remove(), 1000);
    }
  });

  // Añadir animación de fade out para las estrellas del cursor
  const style = document.createElement("style");
  style.textContent = `
                @keyframes fadeOut {
                    from { opacity: 1; transform: translateY(0); }
                    to { opacity: 0; transform: translateY(-30px); }
                }
            `;
  document.head.appendChild(style);
}

// Inicializar animaciones
window.addEventListener("load", () => {
  crearEstrellas();
  crearParticulas();
  crearEstrellasFugaces();
  crearCorazonesFlotantes();
});

// Reiniciar partículas en resize (optimizado con debounce)
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    document.getElementById("stars").innerHTML = "";
    document.getElementById("particles").innerHTML = "";
    crearEstrellas();
    crearParticulas();
  }, 250);
});
