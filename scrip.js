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
