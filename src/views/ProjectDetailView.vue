<template>
<div>
  <button @click="volver">Volver</button>
  <div class="cont-general">

    <div class="cont-resumen">
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
      <img :src="project.image" alt="Project Image" class="project-image">
    </div>

    <div class="cont-video-general" v-if="project.id === 2">
      <h2>Video</h2>
      <div class="cont-video">
      <iframe :src="project.video" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>

    <div class="cont-contexto">
      <img :src="project.image2" alt="Project Image" class="project-image">
    </div>

    <div class="cont-descripcionL">
      <h2>Descripción</h2>
      <p>{{ project.comentariosP }}</p>
    </div>

    <div class="cont-descripcionL">
      <h2>Mi desempeño</h2>
      <p>{{ project.miDesempeno }}</p>
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
    title: 'Yincana Flysch Digital',
    description: 'Es un proyecto desarrollado para el evento de SopelaKosta Fest de 2024. Una yincana digital pensada para familias en las que se unen, la parte digital con el entorno.',
    comentariosP: 'Fue un proyecto que unía la programación con la educación medioambiental y una yincana en la playa de Arrietara-Atxabiribil.',
    miDesempeno: 'Este proyecto lo he desarrollado yo íntegramente, desde la idea, el diseño, la programación, la parte material, el despliegue... Ha sido un proyecto pensado para que las familias participantes aprendan sobre la geología y el medioambiente de la zona donde se realizó al mimo tiempo que disfrutaban de una actividad en familia diferente y original. ',
    contextoDesarrollo: 'Actividad y proyecto desarrollados para el evento de SopelaKosta Fest de 2024.',
    image: '/proyectos/3.png',
    video: '',
    image2: '/proyectos/20.png',
    imagecuadrada: '/proyectos/cuadradas/FD.png',
    GitHub: 'https://github.com/A-Goffard/Soft-Spark',
    // Otros detalles del proyecto
  },
  {
    id: 2,
    title: 'BilboStack',
    description: 'Es un proyecto desarrollado para presentar una actividad desde el contexto del Bootcamp FullStack de Peñascal. Una Yincana dirigida a coders.',
    comentariosP: 'Fue un proyecto en el que colaboró todo el Bootcamp. Mi desempeño fue grande y por ello es un proyecto al que le tengo especial cariño. Además, fué un proyecto que estaba enfocado a un evento real en el que participaron muchas personas que vinieron de diferentes puntos de España.Una experiencia realmente enriquecedora.',
    miDesempeno: 'Este proyecto tuvo una fase de prediseño que realicé yo misma. Una vez aprobado, fui la encargada de la coordinación y organización general del proyecto además de la parte principal del desarrollo del código. Coordiné y supervisé a los equipos de trabajo y fui la encargada de la comunicación y el enlace con la organización del evento de BilboStack.',
    contextoDesarrollo: 'Actividad y proyecto desarrollados para la previa de BilboStack 2024.',
    image: '/proyectos/BilboStack.jpeg',
    video: 'https://www.youtube.com/embed/YvbhfPTLMoA?si=0adscqYf5FIqA-rc',
    image2: '/proyectos/cuadradas/7.png',
    imagecuadrada: '/proyectos/cuadradas/7.png',
    GitHub: 'https://github.com/A-Goffard/yincana-bilbostack-2024',
    // Otros detalles del proyecto
  },
  {
    id: 3,
    title: 'Soft Skills',
    description: 'Es un proyecto desarrollado como proyecto final en el Bootcamp en el que participamos varias personas. Es una página web para el proyecto europeo "Soft Skills" cofinanciado por el programa Erasmus +, que 9 socios europeos de Francia, Bélgica, España, Austria y Eslovenia han colaborado y desarrollado los materiales sobre soft skills.',
    comentariosP: 'Fue un proyecto real que pronto será publicado.',
    miDesempeno: 'En este proyecto fuí la encargada de la supervisión, la parte de arquitectura de la web, y toda la parte relativa al multilenguaje y descargas. Además, fuí la que realizó todas las correcciones finales y la entrega al cliente.',
    contextoDesarrollo: 'Actividad y proyecto desarrollados en el Bootcamp de Peñascal F5.',
    image: '/proyectos/introSoft.png',
    video: '',
    image2: '/proyectos/soft2.png',
    imagecuadrada: '/proyectos/cuadradas/soft-skills.png',
    GitHub: 'https://github.com/A-Goffard/Soft-Spark',
    // Otros detalles del proyecto
  },
  {
    id: 4,
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
  max-width: 75rem;
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
.cont-contexto{
  margin: 1rem;
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
  max-width: 45rem;
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
  max-width: 45rem;
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
  