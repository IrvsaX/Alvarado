const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2, // El 30% del elemento debe ser visible
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
  const destino = document.getElementById("informa").offsetTop;
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

// Agregar el evento de cambio de color de fondo y texto al hacer scroll

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    console.log("El DOM está listo");
});

let secciones = document.querySelectorAll(".header, .header2, .intro, .services-container, .blog");

secciones.forEach((seccion) => {
    ScrollTrigger.create({
        trigger: seccion,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
            console.log("Cambiando a:", seccion.getAttribute("data-bgColor"), seccion.getAttribute("data-textColor")); // Verificar si GSAP aplica cambios
            gsap.to(document.body, {
                backgroundColor: seccion.getAttribute("data-bgColor"),
                color: seccion.getAttribute("data-textColor"),
                duration: 0.8,
                ease: "power2.out"
            });
        },
        onLeaveBack: () => {
            console.log("Regresando a:", seccion.getAttribute("data-bgColor"), seccion.getAttribute("data-textColor")); // Verificar si GSAP revierte cambios
            gsap.to(document.body, {
                backgroundColor: seccion.getAttribute("data-bgColor"),
                color: seccion.getAttribute("data-textColor"),
                duration: 0.8,
                ease: "power2.out"
            });
        }
    });
});

gsap.from(".blog-1", { 
    opacity: 0, 
    y: 30, 
    duration: 0.8, 
    stagger: 0.2 
});
