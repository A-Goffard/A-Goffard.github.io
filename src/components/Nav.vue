<template>
    <div class="banner" id="banner">
        <button @click="goTo('/')" class="boton">Inicio</button>
        <button @click="goTo('/sobremi')" class="boton">Sobre mí</button>
        <button @click="goTo('/curriculum')" class="boton">Currículum</button>
        <button @click="goTo('/skills')" class="boton">Skills</button>
        <button @click="goTo('/proyectos')" class="boton">Proyectos</button>
        <button @click="goTo('/contacto')" class="boton">Contacto</button>
    <!-- <div class="banner" id="banner">
        <router-link to="/inicio" class="boton">Inicio</router-link>
        <router-link to="/sobremi" class="boton">Sobre mí</router-link>
        <router-link to="/curriculum" class="boton">Currículum</router-link>
        <router-link to="/skills" class="boton">Skills</router-link>
        <router-link to="/proyectos" class="boton">Proyectos</router-link>
        <router-link to="/contacto" class="boton">Contacto</router-link>
    </div>-->
    
    
    </div>
</template>



<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goTo = (route) => {
  router.push(route);
};
</script>

<style scoped>
.banner {
    width: 100%;
    height: 10rem;
    background-image: url('/public/banner.png');
    background-size: cover; 
    background-position: center; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}
.boton {
    padding: 0.7rem 1.2rem;

    border-radius: 0.5rem;
    background-color: var(--lilaboton);
    color: var(--blanco);
    font-size: large;
    transition: 250ms ease;
}
.boton:hover {
    background-color: var(--lilabotonhover); 
    color: var(--rosasuperclarito); 
}
</style>
