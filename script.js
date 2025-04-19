function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(sec => {
    sec.classList.add('oculto');
    sec.classList.remove('visible');
  });
  document.getElementById(id).classList.remove('oculto');
  document.getElementById(id).classList.add('visible');
  cerrar_Menu();
}

function toggleMenu() {
  const menu = document.querySelector('#menu ul');
  const toggle = document.getElementById('menuToggle');
  menu.classList.toggle('show'); // Activa/desactiva la clase "show"
  toggle.classList.toggle('active'); // Cambia el ícono del menú hamburguesa
}

function cerrar_Menu() {
  const menu = document.querySelector('#menu ul');
  const toggle = document.getElementById('menuToggle');
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
    toggle.classList.remove('active');
  }
}

//Agrega cierre del menú al hacer clic fuera de él
document.addEventListener('click', (event) => {
  const menu = document.querySelector('#menu ul');
  const toggle = document.getElementById('menuToggle');
  if (!menu.contains(event.target) && !toggle.contains(event.target)) {
    cerrar_Menu();
  }
});