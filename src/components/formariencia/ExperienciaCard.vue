<!-- experienciaCard.vue -->
<template>
    <div class="experiencia-card">
      <h3>{{ experiencia.title }}</h3>
      <p>{{ experiencia.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      experiencia: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .experiencia-card{
    margin: 1rem;
    border-radius: 0.5rem;
    border: solid 0.15rem var(--moradooscuro);
    padding: 1rem;
    background-color: var(--blanco);
    box-shadow: 0rem 0rem 1rem 0.1rem var(--lilaboton);
    transition: 250ms ease;
  }
  .experiencia-card:hover{
    box-shadow: 0rem 0rem 1rem 0.3rem var(--lilabotonhover);
    border: solid 0.15rem var(--moradomuyoscuro);
  }

  h3 {
    color: var(--moradomuyoscuro);
    margin: 0.5rem;
    background-color: var(--blanco);
  }

  p {
    background-color: var(--blanco);
  }

  img {
    background-color: var(--blanco);
    max-width: 95%;
    max-height: 100%;
    margin: 0.5rem;
    border-radius: 0.5rem;
    border: solid 1px var(--rosaclaro);
  }
  </style>
  