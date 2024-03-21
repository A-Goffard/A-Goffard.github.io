<template>
    <div>
        <h1 class="titulo">Skills y Stack</h1>
        <div class="contenedor">
            <div class="contenedor-iconos">
                <button class="btn-html"><img class="iconos img-html" src="/skills/html.png" alt="">HTML</button>
                <button class="btn-css"><img class="iconos img-css" src="/skills/css.png" alt="">CSS</button>
                <button class="btn-canva"><img class="iconos img-canva" src="/skills/canva.png" alt="">Canva</button>
                <button class="btn-figma"><img class="iconos img-figma" src="/skills/figma.png" alt="">Figma</button>
                <button class="btn-js"><img class="iconos img-js" src="/skills/js.png" alt="">JavaScript</button>
                <button class="btn-trello"><img class="iconos img-trello" src="/skills/trello.png" alt="">Trello</button>
                <button class="btn-vue"><img class="iconos img-vue" src="/skills/vue.png" alt="">Vue</button>
            </div>
            <div class="contenedor-iconos">
                <button class="btn-scrum">Scrum</button>
                <button class="btn-agile">Agile</button>
                <button class="btn-coordinacion">Coordinación de equipos</button>
                <button class="btn-comunicacion"><img class="iconos img-comunicacion" src="/skills/comunicacion.png" alt="">Comunicación</button>
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

.btn-html {
    background-color: rgb(79, 176, 232);
    color: rgb(55, 28, 230);
}
.img-html {
    background-color: rgb(79, 176, 232);
    color: rgb(55, 28, 230);
}
.btn-html:hover {
    background-color: rgb(79, 176, 232);
    color: rgb(55, 28, 230);
    box-shadow: 0rem 0rem 0.5rem 0.1rem var(--lilaboton);
}

.btn-css {
    background-color: rgb(105, 242, 97);
    color: rgb(51, 110, 27);
}
.img-css {
    background-color: rgb(105, 242, 97);
}
.btn-canva {
    background-color: rgb(255, 232, 55);
    color: rgb(222, 121, 12);
}
.img-canva {
    background-color: rgb(255, 232, 55);
}
.btn-figma {
    background-color: rgb(209, 68, 127);
    color: pink;
}
.img-figma {
    background-color: rgb(209, 68, 127);
}
.btn-js {
    background-color: rgb(226, 43, 89);
    color: pink;
}
.img-js {
    background-color: rgb(226, 43, 89);
}
.btn-trello {
    background-color: rgb(36, 247, 205);
    color: rgb(19, 37, 95);
}
.img-trello {
    background-color: rgb(36, 247, 205);
}
.btn-vue {
    background-color: rgb(34, 131, 15);
    color: rgb(142, 250, 109);
}
.img-vue {
    background-color: rgb(34, 131, 15);
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
.img-comunicacion {
    background-color: rgb(128, 10, 114);
}

</style>