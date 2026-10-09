// Mantiene la interacción ligera y registra los clics solo en la consola del navegador.
document.querySelectorAll('.link').forEach((link) => {
  link.addEventListener('click', () => console.info(`Enlace abierto: ${link.textContent.trim()}`));
});
