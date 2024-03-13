<template>
    <div>
        <h1>Proyectos</h1>
        <div v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
        </div>
    </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
        projects: [
            {
                id: 1,
                title: 'Proyecto 1',
                description: 'Descripción del Proyecto 1',
                image: '/assets/proyecto1.jpg',
                // Otros detalles del proyecto
            },
            {
                id: 2,
                title: 'Proyecto 2',
                description: 'Descripción del Proyecto 2',
                image: '/assets/proyecto2.jpg',
                // Otros detalles del proyecto
            },
            // Agrega más proyectos según sea necesario
            ]
    };
  }
}
</script>

<style scoped>

</style>