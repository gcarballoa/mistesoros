
// CONFIGURACIÓN: Solo cambia este número cuando subas más fotos
const totalImagenes = 40; // Ejemplo: si tienes de la 1.jpg hasta la 10.jpg
const extension = ".jpg"; // Asegúrate de que todas sean .jpg o .png

const carousel = document.getElementById('carousel');
let currentIndex = 0;

// Generar las imágenes automáticamente
function cargarImagenes() {
    for (let i = 1; i <= totalImagenes; i++) {
        const img = document.createElement('img');
        img.src = `imagenes/${i}${extension}`;
        img.alt = `Momento especial número ${i}`;
        
        // Manejo de errores: Si una imagen no existe, no rompe el sitio
        img.onerror = function() {
            this.style.display = 'none';
        };
        
        carousel.appendChild(img);
    }
}

// Lógica de movimiento
function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel img');
    const totalSlides = slides.length;
    
    currentIndex += direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Inicializar
cargarImagenes();
setInterval(() => moveSlide(1), 3000);


// --- Lógica de la Lluvia de Corazones ---

function createHeart() {
    // const container = document.body;
    const heart = document.createElement('div');
    
    heart.className = 'heart-particle';
    heart.innerHTML = '❤️'; // Puedes usar emojis o iconos
    
    // Posición inicial aleatoria
    heart.style.left = Math.random() * 100 + "vw";
    
    // Tamaño aleatorio para dar profundidad
    const size = Math.random() * 1 + 0.5 + "rem";
    heart.style.fontSize = size;
    
    // Duración de caída aleatoria (entre 3 y 6 segundos)
    const duration = Math.random() * 3 + 4 + "s";
    heart.style.animationDuration = duration;

    // Cambia aleatoriamente la opacidad para dar profundidad
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    
    // Color aleatorio dentro de la gama de rosas/rojos (opcional)
    const colors = ['#ff4d6d', '#ff758f', '#ffb3c1', '#c9184a'];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(heart);

    // Eliminar el corazón del DOM después de que termine la animación
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Iniciar la lluvia (crea un corazón cada 300ms)
setInterval(createHeart, 300);



const music = document.getElementById('backgroundMusic');
const musicBtn = document.getElementById('musicBtn');
const musicIcon = document.getElementById('musicIcon');

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicIcon.innerHTML = '🔊'; // Icono de sonido activo
        musicBtn.style.animation = "pulse 2s infinite"; // Efecto visual opcional
    } else {
        music.pause();
        musicIcon.innerHTML = '🔇'; // Icono de silencio
        musicBtn.style.animation = "none";
    }
}

// Opcional: Agregar una animación de pulso al botón cuando suena
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(255, 77, 109, 0.7); }
    70% { box-shadow: 0 0 0 15px rgba(255, 77, 109, 0); }
    100% { box-shadow: 0 0 0 0 rgba(255, 77, 109, 0); }
}`;
document.head.appendChild(styleSheet);




