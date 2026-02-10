// Crear estrellas aleatorias
function crearEstrellas() {
  const starsContainer = document.getElementById("stars");
  const numEstrellas = 150;

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

// Mostrar mensaje especial
function mostrarMensajeEspecial() {
  const mensaje = document.getElementById("hiddenMessage");
  mensaje.classList.add("show");

  // Crear efecto de confeti de corazones
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.innerHTML = "💕";
      confetti.style.position = "fixed";
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.top = "-50px";
      confetti.style.fontSize = "30px";
      confetti.style.zIndex = "1000";
      confetti.style.animation = "float 3s linear forwards";
      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 3000);
    }, i * 100);
  }
}

// Cerrar mensaje especial
function cerrarMensaje() {
  const mensaje = document.getElementById("hiddenMessage");
  mensaje.classList.remove("show");
}

// Inicializar animaciones
crearEstrellas();
crearEstrellasFugaces();
crearCorazonesFlotantes();
