<template>
    <div>
        <h1 class="titulo">Skills</h1>
        <div class="contenedor">
            <div class="contenedor-iconos">
                <button class="btn-creativa">Creativa</button>
                <button class="btn-adaptable">Adaptable</button>
                <button class="btn-coordinacion">Coordinación de equipos</button>
                <button class="btn-comunicacion">Comunicación</button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.contenedor-iconos {
    max-width: 50rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.contenedor {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
button {
    padding: 0.3rem 1rem;
    border-radius: 0.5rem;
    font-size: 2rem;
    display: flex;
    gap: 0.45rem;
    align-items: center;
    margin: 1rem;
    transition: all 200ms ease;
}
.iconos {
    width: 2rem;
}
.btn-coordinacion {
    background-color: rgb(192, 226, 43);
    color: rgb(75, 103, 19);
}
.btn-coordinacion:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgb(192, 226, 43);
}
.btn-comunicacion {
    background-color: rgb(128, 10, 114);
    color: pink;
}
.img-comunicacion {
    background-color: rgb(128, 10, 114);
}
.btn-comunicacion:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgb(128, 10, 114);
}
.btn-creativa {
    background-color: rgb(236, 34, 50);
    color: rgb(236, 192, 189);
}
.btn-creativa:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgb(236, 34, 50);
}
.btn-adaptable {
    background-color: rgb(12, 54, 133);
    color: rgb(195, 211, 255);
}
.btn-adaptable:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgb(12, 54, 133);
}
</style>