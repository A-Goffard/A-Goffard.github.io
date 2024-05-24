<template>
  <div>
    <div>
        <h1>Proyectos</h1>
        <div class="project-contenedor">
          <div v-for="project in projects" :key="project.id">
            <router-link :to="'/proyectos/' + project.id">
              <ProjectCard class="fitxa" :project="project" />
            </router-link>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>

import ProjectCard from '../components/ProjectCard.vue';

import { ref } from 'vue';

const projects= ref([
{
  id: 1,
  title: 'BilboStack',
  description: 'Es un proyecto desarrollado para presentar una actividad desde el contexto del Bootcamp FullStack de Peñascal. Una Yinkana dirigida a coders.',
  image: '/proyectos/BilboStack.jpeg',
  image2: '/proyectos/Yinkana.png',
  imagecuadrada: '/proyectos/cuadradas/7.png',
  GitHub: 'https://github.com/A-Goffard/memory',
  // Otros detalles del proyecto
},
{
  id: 2,
  title: 'Manga Power',
  description: 'Es un proyecto desarrollado en un ámbito educativo para realizar un CRUD completo con una "base de datos" de tipo Json Server y la utilización de una API externa relacionada con el manga/anime.',
  image: '/proyectos/select.png',
  image2: '/proyectos/pokedex.png',
  imagecuadrada: '/proyectos/cuadradas/9.png',
  GitHub: 'https://github.com/A-Goffard/MangaPower',
  // Otros detalles del proyecto
},
{
  id: 3,
  title: 'HackathonF5 2024',
  description: 'Este es el proyecto de EcoPop que desarrollamos para el Hackathon de F5 en 2024 enfocado a estudiantes. Un marketplace en 48 horas.',
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
  image: '/proyectos/memory.png',
  image2: '/proyectos/contacto.png',
  imagecuadrada: '/proyectos/cuadradas/6.png',
  GitHub: 'https://github.com/A-Goffard/memory',
  // Otros detalles del proyecto
},
{
  id: 5,
  title: 'Marifarma',
  description: 'Es un proyecto desarrollado dentro de un ámbito educativo. Una tienda online para desarrollar los conocimientos en JavaScript.',
  image: '/proyectos/marifarma.png',
  image2: '/proyectos/carrito-marifarma.png',
  imagecuadrada: '/proyectos/cuadradas/1.png',
  GitHub: 'https://github.com/A-Goffard/memory',
  // Otros detalles del proyecto
},
  // Agrega más proyectos según sea necesario
]);

</script>

<style scoped>
.project-contenedor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.fitxa{
  max-width: 40rem;
}
</style>