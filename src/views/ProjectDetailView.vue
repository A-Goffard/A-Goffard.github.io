<template>
<div>
  <button @click="volver">Volver</button>
  <div class="cont-general">

    <div class="cont-resumen">
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
      <img :src="project.image" alt="Project Image" class="project-image">
    </div>

    <div class="cont-video-general" v-if="project.id === 1">
      <h2>Video</h2>
      <div class="cont-video">
      <iframe :src="project.video" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>

    <div class="cont-contexto">
      <h2>Contexto</h2>
      <p>{{ project.contextoDesarrollo }}</p>
      <img :src="project.image2" alt="Project Image" class="project-image">
    </div>

    <div class="cont-descripcionL">
      <p>{{ project.comentariosP }}</p>
    </div>

    <div class="cont-github">
      <a :href="project.GitHub" target="_blank">
        <img class="icon" src="/contacto/github.png" alt="GitHub icon">
      </a>
    </div>

  </div>
</div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const projects = ref([
  {
    id: 1,
    title: 'BilboStack',
    description: 'Es un proyecto desarrollado para presentar una actividad desde el contexto del Bootcamp FullStack de Peñascal. Una Yincana dirigida a coders.',
    comentariosP: 'Fue un proyecto en el que colaboró todo el Bootcamp. Mi desempeño fue grande y por ello es un proyecto al que le tengo especial cariño. Además, fué un proyecto que estaba enfocado a un evento real en el que participaron muchas personas que vinieron de diferentes puntos de España.Una experiencia realmente enriqucedora.',
    miDesempeno: 'Este proyecto tuvo una fase de prediseño que realicé yo misma. Una vez aprobado, fui la encargada de la coordinación y organización general del proyecto además de la parte principal del desarrollo del código. Coordiné y supervisé a los equipos de trabajo y fui la encargada de la comunicación y el enlace con la organización del evento de BilboStack.',
    contextoDesarrollo: 'Actividad y proyecto desarrollados para la previa de BilboStack 2024.',
    image: '/proyectos/BilboStack.jpeg',
    video: 'https://www.youtube.com/embed/YvbhfPTLMoA?si=0adscqYf5FIqA-rc',
    image2: '/proyectos/cuadradas/7.png',
    imagecuadrada: '/proyectos/cuadradas/7.png',
    GitHub: 'https://github.com/A-Goffard/memory',
    // Otros detalles del proyecto
  },
  {
    id: 2,
    title: 'Manga Power',
    description: 'Es un proyecto desarrollado en un ámbito educativo para realizar un CRUD completo con una "base de datos" de tipo Json Server y la utilización de una API externa relacionada con el manga/anime.',
    comentariosP: 'En este proyecto utilizamos el Json Server como base de datos para generar y guardar usuarios y estadísticas que despúes se usan en el código del proyecto. Además de las validaciones para el login, el registro de usuarios y la permanencia de datos, usamos la Pokeapi para generar un juego de cartas en una fase inicial. ',
    miDesempeno: 'Fue un proyecto colaborativo en el que participamos varios estudiantes (5). Las partes del proyecto en las que trabajé más fueron la parte de diseño, la creación del Json Server y la comunicación con el FrontEnd, la estructura, el login, el registro y la lógica del juego.',
    contextoDesarrollo: 'Proyecto desarrollado en contexto educativo (Bootcamp).',
    image: '/proyectos/select.png',
    video: '',
    image2: '/proyectos/pokedex.png',
    imagecuadrada: '/proyectos/cuadradas/9.png',
    GitHub: 'https://github.com/A-Goffard/MangaPower',
    // Otros detalles del proyecto
  },
  {
    id: 3,
    title: 'HackathonF5 2024',
    description: 'Este es el proyecto de EcoPop que desarrollamos para el Hackathon de F5 en 2024 enfocado a estudiantes (proyecto finalista). Un marketplace en 48 horas.',
    comentariosP: 'Fue el primer Hackathon en el que participé y fue una experiencia intensa. Colaborar en la generación de un marketplace en 48 horas era todo un reto. Y quedar finalistas fue una experiencia genial.',
    miDesempeno: 'Fue un proyecto colaborativo en el que participamos varios estudiantes de diferentes Bootcamps (trabajamos 6 personas en él). Mi aporte principal fue el de diseño y el CSS, preparar la presentación y la comunicación.',
    contextoDesarrollo: 'Proyecto desarrollado en el HackathonF5 2024, fue un proyecto finalista (2do lugar).',
    image: '/proyectos/Diploma.png',
    video: '',
    image2: '/proyectos/ecopop.png',
    imagecuadrada: '/proyectos/cuadradas/8.png',
    GitHub: 'https://github.com/A-Goffard/ecoPop',
    // Otros detalles del proyecto
  },
  {
    id: 4,
    title: 'Empezando con Vue 3',
    description: 'Es un proyecto desarrollado dentro de un ámbito educativo. Se trataba de montar un proyecto simple con Vue 3 Composition API.',
    comentariosP: 'Este fué el primer acercamiento a Vue 3 dentro de los proyectos que desarrollé durante el bootcamp. Un juego de memory con pokemons, el tres en raya y una lista que tareas.',
    miDesempeno: 'Fue un proyecto colaborativo en el que participamos varios estudiantes (3). Desarrollé la mayor parte del proyecto.',
    contextoDesarrollo: 'Proyecto desarrollado en contexto educativo (Bootcamp).',
    image: '/proyectos/memory.png',
    video: '',
    image2: '/proyectos/contacto.png',
    imagecuadrada: '/proyectos/cuadradas/6.png',
    GitHub: 'https://github.com/A-Goffard/memory',
    // Otros detalles del proyecto
  },
  {
    id: 5,
    title: 'Marifarma',
    description: 'Es un proyecto desarrollado dentro de un ámbito educativo. Una tienda online para desarrollar los conocimientos en JavaScript.',
    comentariosP: 'En este proyecto creamos una parte de una tienda online de marihuana medicinal. Fué complejo para el nivel que teníamos en ese momento. Todo hecho con HTML, CSS y JavaScript.',
    miDesempeno: 'Fue un proyecto colaborativo en el que participamos varios estudiantes (5). Las partes del proyecto en las que trabajé más fueron la parte de diseño, la página de productos, los filtros de productos y el carrito de la compra.',
    contextoDesarrollo: 'Proyecto desarrollado en contexto educativo (Bootcamp)',
    image: '/proyectos/marifarma.png',
    video: '',
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
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cont-general{
  width: 85%;
  margin: 1rem;
  border-radius: 0.5rem;
  border: solid 0.15rem var(--moradooscuro);
  padding: 1rem;
  background-color: var(--blanco);
  box-shadow: 0rem 0rem 1rem 0.1rem var(--lilaboton);
  transition: 250ms ease;
}
.cont-general:hover{
  box-shadow: 0rem 0rem 1rem 0.3rem var(--lilabotonhover);
  border: solid 0.15rem var(--moradomuyoscuro);
}
.cont-video,
.cont-contexto,
.cont-descripcionL,
.cont-github,
.cont-video-general,
a,
.cont-resumen {
  background-color: var(--blanco);
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

img {
  width: 100%;
}
.icon {
  width: 4.5rem;
  border-radius: 0.9rem;
  border: solid 0.15rem var(--moradooscuro);
  padding: 0.3rem;
  background-color: white;
  box-shadow: 0rem 0rem 1rem 0.1rem var(--lilaboton);
}
.icon:hover{
  box-shadow: 0rem 0rem 1rem 0.3rem var(--lilabotonhover);
  border: solid 0.15rem var(--moradomuyoscuro);
}
.cont-video-general {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  width: 100%;
  height: 100%;
}
.cont-video {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* Proporción 16:9 (9 / 16 * 100) */
}

iframe {
  position: absolute;
  top: 0; /* Ajusta la posición del video para que comience después del texto */
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}


  </style>
  