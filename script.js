// Contador de emprendedores
const contadorEmprendedores = () => {
    const totalEmprendedores = document.querySelectorAll('.card-emprendimiento').length;
    const contadorElemento = document.createElement('p');
    contadorElemento.textContent = `Total de Emprendedores: ${totalEmprendedores}`;
    document.querySelector('.bienvenida').appendChild(contadorElemento);
  };
  
  // Filtro por categoría
  const filtrarPorCategoria = () => {
    const selectCategoria = document.getElementById('categoria');
    const searchInput = document.querySelector('input[type="search"]');
    const cards = document.querySelectorAll('.card-emprendimiento');
  
    selectCategoria.addEventListener('change', () => {
      const categoriaSeleccionada = selectCategoria.value.toLowerCase();
      cards.forEach(card => {
        const categoriaCard = card.querySelector('p.descripcion-corta').textContent.toLowerCase();
        if (categoriaSeleccionada === 'todos' || categoriaCard.includes(categoriaSeleccionada)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  
    searchInput.addEventListener('input', () => {
      const searchText = searchInput.value.toLowerCase();
      cards.forEach(card => {
        const nombreEmprendedor = card.querySelector('h3').textContent.toLowerCase();
        if (nombreEmprendedor.includes(searchText)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  };
  
  // Modo oscuro
  const activarModoOscuro = () => {
    const btnModoOscuro = document.querySelector('.modo-oscuro');
    btnModoOscuro.addEventListener('click', () => {
      document.body.classList.toggle('oscuro');
    });
  };
  
  // Mostrar mensaje de bienvenida
  const mostrarBienvenida = () => {
    const bienvenidaElemento = document.querySelector('.bienvenida');
    const nombreUsuario = localStorage.getItem('nombreUsuario');
    if (nombreUsuario) {
      bienvenidaElemento.textContent = `Bienvenido, ${nombreUsuario}!`;
    }
  };
  
  // Guardar nombre de usuario
  const guardarNombreUsuario = (nombre) => {
    localStorage.setItem('nombreUsuario', nombre);
  };
  
  // Inicializar todas las funcionalidades
  const inicializar = () => {
    contadorEmprendedores();  // Contamos el número total de emprendedores
    filtrarPorCategoria();    // Activamos el filtro por categoría y búsqueda
    activarModoOscuro();      // Activamos el modo oscuro
    mostrarBienvenida();      // Mostramos el mensaje de bienvenida si hay un nombre guardado
  };
  
  // Llamamos a la función de inicialización cuando cargue la página
  window.addEventListener('DOMContentLoaded', inicializar);
  