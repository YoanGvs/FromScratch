
// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)
const createCircle = (size, className) => {
    const circle = document.createElement('div');
    circle.classList.add(className);
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.borderRadius = '50%';
    circle.style.position = 'absolute';
    document.body.appendChild(circle);
    return circle;
};

const smallCircle = createCircle(20, 'small-circle');
const mediumCircle = createCircle(50, 'medium-circle');
const largeCircle = createCircle(100, 'large-circle');


// Cacher le pointeur de la souris par défaut
document.body.style.cursor = 'none';

// Créer un cercle pour remplacer le pointeur de la souris
const mouseCircle = createCircle(20, 'mouse-circle');

// Ajouter un événement sur la fenêtre pour suivre la position de la souris
window.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    mouseCircle.style.left = `${x}px`;
    mouseCircle.style.top = `${y}px`;
});

// Ajouter un événement sur la fenêtre pour suivre la position de la souris
window.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    smallCircle.style.left = `${x}px`;
    smallCircle.style.top = `${y}px`;
    mediumCircle.style.left = `${x + 20}px`; // Décalage pour éviter la superposition
    mediumCircle.style.top = `${y + 20}px`;
    largeCircle.style.left = `${x + 40}px`; // Décalage pour éviter la superposition
    largeCircle.style.top = `${y + 40}px`;
});
// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
