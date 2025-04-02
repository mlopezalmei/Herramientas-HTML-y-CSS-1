document.addEventListener("DOMContentLoaded", function () {
    const categoriaSelect = document.getElementById("categoria");
    if (categoriaSelect) {
        categoriaSelect.addEventListener("change", filtrarRecetas)
    }
});

function filtrarRecetas() {
  const categoriaSeleccionada = document.getElementById('categoria').value;
  const todasLasRecetas = document.querySelectorAll('.receta');
  
  todasLasRecetas.forEach(function(receta) {
      const categoriaReceta = receta.querySelector('.detalles p:nth-child(2)').textContent.trim();
      
      if (categoriaSeleccionada === 'todas' || categoriaReceta === categoriaSeleccionada) {
          receta.style.display = 'block';
      } else {
          receta.style.display = 'none';
      }
  });
}