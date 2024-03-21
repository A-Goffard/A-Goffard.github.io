<template>
    <div>
        <h1 class="titulo">Skills y Stack</h1>
        <div class="contenedor-iconos">
            <button class="btn-html"><img class="iconos btn-html" src="/skills/html.png" alt="">HTML</button>
            <button class="btn-css"><img class="iconos btn-css" src="/skills/css.png" alt="">CSS</button>
            <button class="btn-canva"><img class="iconos btn-canva" src="/skills/canva.png" alt="">Canva</button>
            <button class="btn-figma"><img class="iconos btn-figma" src="/skills/figma.png" alt="">Figma</button>
            <button class="btn-js"><img class="iconos btn-js" src="/skills/js.png" alt="">JavaScript</button>
            <button class="btn-trello"><img class="iconos btn-trello" src="/skills/trello.png" alt="">Trello</button>
            <button class="btn-vue"><img class="iconos btn-vue" src="/skills/vue.png" alt="">Vue</button>
            <button class="btn-scrum">Scrum</button>
            <button class="btn-agile">Agile</button>
            <button class="btn-coordinacion">Coordinación de equipos</button>
            <button class="btn-comunicacion"><img class="iconos btn-comunicacion" src="/skills/comunicacion.png" alt="">Comunicación</button>

        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

contenedor-iconos {
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
}
.iconos {
    width: 2rem;
}

.btn-html {
    background-color: rgb(79, 176, 232);
    color: rgb(55, 28, 230);
}
.btn-css {
    background-color: rgb(105, 242, 97);
    color: rgb(51, 110, 27);
}
.btn-canva {
    background-color: rgb(255, 232, 55);
    color: rgb(222, 121, 12);
}
.btn-figma {
    background-color: rgb(209, 68, 127);
    color: pink;
}
.btn-js {
    background-color: rgb(226, 43, 89);
    color: pink;
}
.btn-trello {
    background-color: rgb(36, 247, 205);
    color: rgb(19, 37, 95);
}
.btn-vue {
    background-color: rgb(34, 131, 15);
    color: rgb(142, 250, 109);
}
.btn-scrum {
    background-color: rgb(151, 82, 14);
    color: rgb(250, 201, 169);
}
.btn-agile {
    background-color: rgb(229, 103, 233);
    color: rgb(88, 22, 87);
}
.btn-coordinacion {
    background-color: rgb(192, 226, 43);
    color: rgb(75, 103, 19);
}
.btn-comunicacion {
    background-color: rgb(128, 10, 114);
    color: pink;
}

</style>