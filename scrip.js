const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.3, // El 30% del elemento debe ser visible
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach((entry, index) => {
    if (!entry.isIntersecting) return;

    // Agregamos delay usando setTimeout
    setTimeout(() => {
      entry.target.classList.add('show'); // Agrega la clase 'show' para animar
    }, index * 150); // Cada elemento se retrasa 150ms respecto al anterior

    observer.unobserve(entry.target); // Deja de observar para no repetir
  });
}, appearOptions);

// Activamos el observer
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Animación de desplazamiento suave al hacer clic en los enlaces
function desplazamientoLento() {
  const destino = document.getElementById("introduccion1").offsetTop;
  const inicio = window.scrollY;
  const duracion = 750; // Duración en milisegundos (más alto = más lento)
  const tiempoInicio = performance.now();
  
  function animarScroll(tiempoActual) {
      const tiempoTranscurrido = tiempoActual - tiempoInicio;
      const progreso = Math.min(tiempoTranscurrido / duracion, 1);
      const posicion = inicio + (destino - inicio) * progreso;

      window.scrollTo(0, posicion);

      if (progreso < 1) {
          requestAnimationFrame(animarScroll);
      }
  }

  requestAnimationFrame(animarScroll);
}
