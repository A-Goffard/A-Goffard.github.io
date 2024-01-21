document.addEventListener('DOMContentLoaded', function () {
    // Obtenemos el nombre de la página actual
    var paginaActual = window.location.pathname;
  
    // Obtenemos los botones
    var botonIndex = document.getElementById('botonIndex');
    var botonCurriculum = document.getElementById('botonCurriculum');
    var botonSkills = document.getElementById('botonSkills');
    var botonProyectos = document.getElementById('botonProyectos');
    var botonContacto =document.getElementById('botonContacto');

    // Verificamos la página actual y aplicamos la clase correspondiente
    if (paginaActual === '/index.html') {
      botonIndex.classList.add('botonActivo');
    } else if (paginaActual === '/curriculum.html') {
        botonCurriculum.classList.add('botonActivo');
    } else if (paginaActual === '/skills.html') {
        botonSkills.classList.add('botonActivo');
    } else if (paginaActual === '/proyectos.html') {
        botonProyectos.classList.add('botonActivo');
    } else if (paginaActual === '/contacto.html') {
        botonContacto.classList.add('botonActivo');
    }
    // Puedes agregar más condiciones según sea necesario
  });
  


  /*animación para las letras del footer*/
  
  document.addEventListener('DOMContentLoaded', function () {
    var footer = document.querySelector('.footer');
    var pie = document.querySelector('.pie');

    // Agrega la clase cuando el ratón entra
    footer.addEventListener('mouseenter', function () {
        pie.classList.add('mover-letras');
    });

    // Elimina la clase cuando el ratón sale
    footer.addEventListener('mouseleave', function () {
        pie.classList.remove('mover-letras');
    });
});