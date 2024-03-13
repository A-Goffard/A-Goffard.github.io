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
    margin: 1rem;
    border-radius: 0.5rem;
    border: solid 0.15rem var(--moradomuyoscuro);
    padding: 1rem;
    background-color: var(--blanco);
    box-shadow: 0rem 0rem 1rem 0.1rem var(--lilaboton);
  }

  h2 {
    color: var(--moradomuyoscuro);
    margin: 0.5rem;
    background-color: var(--blanco);
  }

  p {
    background-color: var(--blanco);
  }

  img {
    background-color: var(--blanco);
    width: auto;
    margin: 0.5rem;
    border-radius: 0.5rem;
  }
  </style>
  