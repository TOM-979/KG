const envelope = document.querySelector('.envelope');
const bigLetter = document.querySelector('.big-letter');
const closeBtn = document.querySelector('.close-btn');

envelope.addEventListener('click', () => {
  // Si ya está abierto, no hacer nada
  if (envelope.classList.contains('open')) return;

  envelope.classList.add('open');

  // Después de abrir solapa, hacer desaparecer el sobre
  setTimeout(() => {
    envelope.classList.add('fade-out');
  }, 700);

  // Mostrar hoja cuando el sobre desaparece
  setTimeout(() => {
    bigLetter.classList.add('show');
    // Para accesibilidad: poner foco al contenido de la carta
    bigLetter.querySelector('.content').focus();
  }, 1100);
});

closeBtn.addEventListener('click', () => {
  bigLetter.classList.remove('show');
  envelope.classList.remove('fade-out', 'open');
  // Devolver foco al sobre
  envelope.focus();
});
