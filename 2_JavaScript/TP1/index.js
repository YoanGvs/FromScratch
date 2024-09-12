
// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)
const createCircle = (size, className) => { 
    const circle = document.createElement('div');
    circle.classList.add(className);
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.borderRadius = '50%';
    circle.style.position = 'absolute';
    circle.style.transform = 'translate(-50%, -50%)'; // Centrer le cercle
    document.body.appendChild(circle);
    return circle;
};
        
const smallCircle = createCircle(20, 'small-circle');
const mediumCircle = createCircle(50, 'medium-circle');
const largeCircle = createCircle(100, 'large-circle');


// Stocker les cercles dans un tableau
const circles = [smallCircle, mediumCircle, largeCircle];

// Ajouter un événement sur la fenêtre pour suivre la position de la souris
window.addEventListener('mousemove', (e) => { 
    const { clientX: x, clientY: y } = e;
    circles.forEach((circle, index) => {
        setTimeout(() => {
            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;
        }, index * 100); // Délai de 100ms entre chaque cercle
    });
});

/*
// Ajouter un événement sur la fenêtre pour suivre la position de la souris
window.addEventListener('mousemove', (e) => { 
    const {clientX: x, clientY: y} = e;
    smallCircle.style.left = `${x}px`;
    smallCircle.style.top = `${y}px`;
    mediumCircle.style.left = `${x}px`;
    mediumCircle.style.top = `${y}px`;
    largeCircle.style.left = `${x}px`;
    largeCircle.style.top = `${y}px`;
    console.log(x, y);
});
*/

// S'assurer que les liens sont clickables


// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
