<!-- ProjectCard.vue -->
<template>
    <div class="project-card">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <img :src="project.image" alt="Project Image">
      <!-- Otros detalles del proyecto -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      project: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .project-card{
    border: solid;
  }
  /* Estilos para la tarjeta del proyecto */
  </style>
  