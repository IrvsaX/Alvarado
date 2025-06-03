document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2,
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach((entry, index) => {
            if (!entry.isIntersecting) return;

            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 150);

            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
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

function desplazamientoLento2() {
  const destino = document.getElementById("cartas").offsetTop;
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

function desplazamientoLento3() {
  const destino = document.getElementById("formulario-coment").offsetTop;
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
