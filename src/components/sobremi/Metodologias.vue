<template>
    <div>
        <h1 class="titulo">Metodologías</h1>
        <div class="contenedor">
            <div class="contenedor-iconos">
                <button class="btn-scrum">Scrum</button>
                <button class="btn-agile">Agile</button>
                <button class="btn-desingThinking">Desing thinking</button>
                <button class="btn-cientifico">Científico</button>
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
.btn-cientifico {
    background-color: rgb(14, 68, 1);
    color: rgb(168, 252, 146);
}
.btn-cientifico:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgb(14, 68, 1);
}
.btn-desingThinking {
    background-color: rgb(43, 183, 226);
    color: rgb(14, 66, 82);
}
.btn-desingThinking:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgb(43, 183, 226);
}
.btn-scrum {
    background-color: rgb(151, 82, 14);
    color: rgb(250, 201, 169);
}
.btn-scrum:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgb(151, 82, 14);
}
.btn-agile {
    background-color: rgb(229, 103, 233);
    color: rgb(88, 22, 87);
}
.btn-agile:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgb(229, 103, 233);
}
</style>