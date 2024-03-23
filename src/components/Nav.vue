<template>
    <div :class="bannerClass.value" id="banner">
        <button @click="goTo('/')" class="boton">Inicio</button>
        <button @click="goTo('/sobremi')" class="boton">Sobre mí</button>
        <button @click="goTo('/skills')" class="boton">Skills/Stack</button>
        <button @click="goTo('/proyectos')" class="boton">Proyectos</button>
        <button @click="goTo('/contacto')" class="boton">Contacto</button>
    </div>
</template>



<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goTo = (route) => {
  router.push(route);
};
// Importa la propiedad bannerClass para usarla en el componente
import { defineProps } from 'vue';

// Define las props esperadas en el componente
const props = defineProps({
  bannerClass: Object
});
</script>

<style scoped>
.banner {
    width: 100%;
    height: 10rem;
    background-size: cover; 
    background-position: center; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-image: url('/public/banner.png');
}

.banner1 {
    width: 100%;
    height: 10rem;
    background-size: cover; 
    background-position: center; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-image: url('/public/banner1.png');
}

.banner2 {
    width: 100%;
    height: 10rem;
    background-size: cover; 
    background-position: center; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-image: url('/public/banner2.png');
}

.banner3 {
    width: 100%;
    height: 10rem;
    background-size: cover; 
    background-position: center; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-image: url('/public/banner3.png');
}

.banner4 {
    width: 100%;
    height: 10rem;
    background-size: cover; 
    background-position: center; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-image: url('/public/banner4.png');
}

.banner5 {
    width: 100%;
    height: 10rem;
    background-size: cover; 
    background-position: center; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-image: url('/public/banner5.png');
}

.banner6 {
    width: 100%;
    height: 10rem;
    background-size: cover; 
    background-position: center; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-image: url('/public/banner6.png');
}
.boton {
    padding: 0.7rem 1.2rem;
    margin: 0.5rem;
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
