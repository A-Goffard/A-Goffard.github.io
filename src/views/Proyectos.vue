<template>
    <div>
        <h1>Proyectos</h1>
        <div class="project-contenedor">
          <div v-for="project in projects" :key="project.id">
            <ProjectCard class="fitxa" :project="project" />
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
        title: 'Empezando con Vue 3 composition API',
        description: 'Es un proyecto desarrollado dentro de un ámbito educativo. Se trataba de montar un proyecto simple con Vue 3 Composition API para mostrar su funcionamiento y utilidad y explicar diferentes tipos de elementos que se usan en él.',
        image: 'memory.png',
        image2: 'contacto.png',
        GitHub: 'https://github.com/A-Goffard/memory',
        // Otros detalles del proyecto
    },
    {
        id: 2,
        title: 'HackathonF5 2024',
        description: 'Este es el proyecto de EcoPop que desarrollamos para el Hackathon de F5 en 2024 enfocado a estudiantes. Un marcketplace en 48 horas.',
        image: 'conclusiones.jpeg',
        image2: 'Diploma.png',
        GitHub: 'https://github.com/A-Goffard/ecoPop',
        // Otros detalles del proyecto
    },
    {
        id: 3,
        title: 'Marifarma tienda online',
        description: 'Es un proyecto desarrollado dentro de un ámbito educativo. Una tienda online para desarroyar los conocimientos en JavaScript.',
        image: 'marifarma.png',
        image2: 'carrito-marifarma.png',
        GitHub: 'https://github.com/A-Goffard/memory',
        // Otros detalles del proyecto
    },
    {
        id: 4,
        title: 'Proyecto BilboStack',
        description: 'Es un proyecto desarrollado para presentar una actividad desde el contexto del Bootcamp FullStack de Peñascal. Una Yinkana dirigida a coders.',
        image: 'BilboStack.jpeg',
        image2: 'Yinkana.png',
        GitHub: 'https://github.com/A-Goffard/memory',
        // Otros detalles del proyecto
    },
    // Agrega más proyectos según sea necesario
  ]);

</script>

<style scoped>
.project-contenedor {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

}
.fitxa{
  max-width: 35rem;

}
</style>