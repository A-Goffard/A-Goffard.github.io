<!-- ProjectCard.vue -->
<template>
    <div class="project-card">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <img :src="project.imagecuadrada" alt="Project Image">
    </div>
</template>
  
<script setup>
// Importamos la definición de props desde Vue
import { defineProps } from 'vue';

// Definimos las props esperadas por el componente
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.project-card{
  margin: 1rem;
  border-radius: 0.5rem;
  border: solid 0.15rem var(--moradooscuro);
  padding: 1rem;
  background-color: var(--blanco);
  box-shadow: 0rem 0rem 1rem 0.1rem var(--lilaboton);
  transition: 250ms ease;
}
.project-card:hover{
  box-shadow: 0rem 0rem 1rem 0.3rem var(--lilabotonhover);
  border: solid 0.15rem var(--moradomuyoscuro);
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
  max-width: 95%;
  max-height: 100%;
  margin: 0.5rem;
  border-radius: 0.5rem;
  border: solid 1px var(--rosaclaro);
}
</style>
  