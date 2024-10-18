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
const projects = ref([
  {
    id: 1,
    title: 'Yincana Flysch Digital',
    description: 'Es un proyecto desarrollado para el evento de SopelaKosta Fest de 2024. Una yincana digital pensada para familias en las que se unen, la parte digital con el entorno.',
    image: '/proyectos/3.png',
    image2: '/proyectos/20.png',
    imagecuadrada: '/proyectos/cuadradas/FD.png',
    GitHub: 'https://github.com/A-Goffard/Soft-Spark',
    // Otros detalles del proyecto
  },
  {
    id: 2,
    title: 'BilboStack',
    description: 'Es un proyecto desarrollado para presentar una actividad desde el contexto del Bootcamp FullStack de Peñascal. Una Yincana dirigida a coders.',
    image: '/proyectos/BilboStack.jpeg',
    image2: '/proyectos/cuadradas/7.png',
    imagecuadrada: '/proyectos/cuadradas/7.png',
    GitHub: 'https://github.com/A-Goffard/yincana-bilbostack-2024',
    // Otros detalles del proyecto
  },
  {
    id: 3,
    title: 'Soft Skills',
    description: 'Es un proyecto desarrollado como proyecto final en el Bootcamp en el que participamos varias personas. Es una página web para el proyecto europeo "Soft Skills" cofinanciado por el programa Erasmus +, que 9 socios europeos de Francia, Bélgica, España, Austria y Eslovenia han colaborado y desarrollado los materiales sobre soft skills.',
    image: '/proyectos/introSoft.png',
    image2: '/proyectos/soft2.png',
    imagecuadrada: '/proyectos/cuadradas/soft-skills.png',
    GitHub: 'https://github.com/A-Goffard/Soft-Spark',
    // Otros detalles del proyecto
  },
  {
    id: 4,
    title: 'HackathonF5 2024',
    description: 'Este es el proyecto de EcoPop que desarrollamos para el Hackathon de F5 en 2024 enfocado a estudiantes (proyecto finalista). Un marketplace en 48 horas.',
    image: '/proyectos/Diploma.png',
    image2: '/proyectos/ecopop.png',
    imagecuadrada: '/proyectos/cuadradas/8.png',
    GitHub: 'https://github.com/A-Goffard/ecoPop',
    // Otros detalles del proyecto
  },

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