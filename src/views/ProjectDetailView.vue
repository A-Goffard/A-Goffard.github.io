<template>
    <div>
      <button @click="volver">Volver</button>
      <div class="container-proyect">
          <h1>{{ project.title }}</h1>
          <p>{{ project.description }}</p>
          <img :src="project.image" alt="Project Image" class="project-image">
          <!-- Aquí puedes mostrar otros detalles del proyecto según sea necesario -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const projects= ref([
{
  id: 1,
  title: 'BilboStack',
  description: 'Es un proyecto desarrollado para presentar una actividad desde el contexto del Bootcamp FullStack de Peñascal. Una Yinkana dirigida a coders.',
  descripcionLarga: '',
  miDesempeno: '',
  contextoDesarrollo: '',
  image: '/proyectos/BilboStack.jpeg',
  image2: '/proyectos/Yinkana.png',
  imagecuadrada: '/proyectos/cuadradas/7.png',
  GitHub: 'https://github.com/A-Goffard/memory',
  // Otros detalles del proyecto
},
{
  id: 2,
  title: 'Manga Power',
  description: 'Es un proyecto desarrollado en un ámbito educativo para realizar un CRUD completo con una "base de datos" de tipo Json Server y la utilización de una API externa relacioanda con el manga/anime.',
  descripcionLarga: '',
  miDesempeno: '',
  contextoDesarrollo: '',
  image: '/proyectos/select.png',
  image2: '/proyectos/pokedex.png',
  imagecuadrada: '/proyectos/cuadradas/9.png',
  GitHub: 'https://github.com/A-Goffard/MangaPower',
  // Otros detalles del proyecto
},
{
  id: 3,
  title: 'HackathonF5 2024',
  description: 'Este es el proyecto de EcoPop que desarrollamos para el Hackathon de F5 en 2024 enfocado a estudiantes. Un marcketplace en 48 horas.',
  descripcionLarga: '',
  miDesempeno: '',
  contextoDesarrollo: '',
  image: '/proyectos/conclusiones.jpeg',
  image2: '/proyectos/Diploma.png',
  imagecuadrada: '/proyectos/cuadradas/8.png',
  GitHub: 'https://github.com/A-Goffard/ecoPop',
  // Otros detalles del proyecto
},
{
  id: 4,
  title: 'Empezando con Vue 3',
  description: 'Es un proyecto desarrollado dentro de un ámbito educativo. Se trataba de montar un proyecto simple con Vue 3 Composition API.',
  descripcionLarga: '',
  miDesempeno: '',
  contextoDesarrollo: '',
  image: '/proyectos/memory.png',
  image2: '/proyectos/contacto.png',
  imagecuadrada: '/proyectos/cuadradas/6.png',
  GitHub: 'https://github.com/A-Goffard/memory',
  // Otros detalles del proyecto
},
{
  id: 5,
  title: 'Marifarma',
  description: 'Es un proyecto desarrollado dentro de un ámbito educativo. Una tienda online para desarroyar los conocimientos en JavaScript.',
  descripcionLarga: '',
  miDesempeno: '',
  contextoDesarrollo: '',
  image: '/proyectos/marifarma.png',
  image2: '/proyectos/carrito-marifarma.png',
  imagecuadrada: '/proyectos/cuadradas/1.png',
  GitHub: 'https://github.com/A-Goffard/memory',
  // Otros detalles del proyecto
},
  // Agrega más proyectos según sea necesario
]);
  
  const volver = () => {
    // Obtenemos la ruta actual
    const route = router.currentRoute.value;
    
    // Obtenemos el ID del proyecto de la ruta
    const projectId = route.params.id;
    
    // Navegar de regreso a la lista de proyectos
    router.push({ name: 'Proyectos' });
  };
  
  // Buscamos el proyecto correspondiente en la lista de proyectos
  const project = computed(() => {
    const projectId = router.currentRoute.value.params.id;
    return projects.value.find(proj => proj.id === parseInt(projectId));
  });
  </script>

<style scoped>
.container-proyect{
  margin: 1rem;
  border-radius: 0.5rem;
  border: solid 0.15rem var(--moradooscuro);
  padding: 1rem;
  background-color: var(--blanco);
  box-shadow: 0rem 0rem 1rem 0.1rem var(--lilaboton);
  transition: 250ms ease;
}
.container-proyect:hover{
  box-shadow: 0rem 0rem 1rem 0.3rem var(--lilabotonhover);
  border: solid 0.15rem var(--moradomuyoscuro);
}
h2 {
  color: var(--moradomuyoscuro);
  margin: 0.5rem;
  background-color: var(--blanco);
}
h1 {
    color: var(--moradomuyoscuro);
    margin: 0.5rem;
    background-color: var(--blanco);
    font-size: 3rem;
  }
p {
  background-color: var(--blanco);
}
button {
    padding: 0.7rem 1.2rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    background-color: var(--lilaboton);
    color: var(--blanco);
    font-size: large;
    transition: 250ms ease;
}
button:hover {
    background-color: var(--lilabotonhover); 
    color: var(--rosasuperclarito); 
    cursor: pointer;
}

.project-image {
  width: 100%; /* Ajusta la imagen al ancho del contenedor */
}

  </style>
  