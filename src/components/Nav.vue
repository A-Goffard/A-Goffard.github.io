<template>
    <div class="banner" id="banner">
        <button class="boton" id="">Inicio</button>
        <button class="boton" id="">Sobre mi</button>
        <button class="boton" id="">Currículum</button>
        <button class="boton" id="">Skills</button>
        <button class="boton" id="">Proyectos</button>
        <button class="boton" id="">Contacto</button>
    </div>
</template>

<script setup>

</script>

<style scoped>
.banner {
    width: 100%;
    height: 10rem;
    background-image: url('/src/assets/banner.png'); 
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
    background-color: rgb(184, 53, 184);
    color: white;
    font-size: large;
    transition: 250ms ease;
}
.boton:hover {
    background-color: rgb(207, 59, 207);
    color: rgb(255, 227, 255);
}
</style>