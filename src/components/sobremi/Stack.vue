<template>
    <div>
        <h1 class="titulo">Stack</h1>
        <div class="contenedor">
            <div class="contenedor-iconos">
                <button class="btn-html"><img class="iconos img-html" src="/skills/html.png" alt="">HTML</button>
                <button class="btn-css"><img class="iconos img-css" src="/skills/css.png" alt="">CSS</button>
                <button class="btn-canva"><img class="iconos img-canva" src="/skills/canva.png" alt="">Canva</button>
                <button class="btn-figma"><img class="iconos img-figma" src="/skills/figma.png" alt="">Figma</button>
                <button class="btn-js"><img class="iconos img-js" src="/skills/js.png" alt="">JavaScript</button>
                <button class="btn-trello"><img class="iconos img-trello" src="/skills/trello.png" alt="">Trello</button>
                <button class="btn-vue"><img class="iconos img-vue" src="/skills/vue.png" alt="">Vue</button>
                <button class="btn-github"><img class="iconos img-github" src="/skills/github.png" alt="">GitHub</button>
                <button class="btn-SQL"><img class="iconos img-SQL" src="/skills/sql.png" alt="">SQL</button>
                <button class="btn-SQLite"><img class="iconos img-SQLite" src="/skills/sqlite.png" alt="">SQLite</button>
                <button class="btn-python"><img class="iconos img-python" src="/skills/python.png" alt="">Python</button>
                <!-- Nuevos botones -->
                <button class="btn-angular"><img class="iconos img-angular" src="/skills/angular.png" alt="">Angular</button>
                <button class="btn-php"><img class="iconos img-php" src="/skills/php.png" alt="">PHP</button>
                <button class="btn-csharp"><img class="iconos img-csharp" src="/skills/csharp.png" alt="">C#</button>
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
}
.btn-html:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgb(79, 176, 232);
}

.btn-css {
    background-color: rgb(105, 242, 97);
    color: rgb(51, 110, 27);
}
.img-css {
    background-color: rgb(105, 242, 97);
}
.btn-css:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgb(105, 242, 97);
}
.btn-canva {
    background-color: rgb(255, 232, 55);
    color: rgb(222, 121, 12);
}
.img-canva {
    background-color: rgb(255, 232, 55);
}
.btn-canva:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgb(255, 232, 55);
}
.btn-figma {
    background-color: rgb(209, 68, 127);
    color: pink;
}
.img-figma {
    background-color: rgb(209, 68, 127);
}
.btn-figma:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgb(209, 68, 127);
}
.btn-js {
    background-color: rgb(226, 43, 89);
    color: pink;
}
.img-js {
    background-color: rgb(226, 43, 89);
}
.btn-js:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgb(226, 43, 89);
}
.btn-trello {
    background-color: rgb(36, 247, 205);
    color: rgb(19, 37, 95);
}
.img-trello {
    background-color: rgb(36, 247, 205);
}
.btn-trello:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgb(36, 247, 205);
}
.btn-vue {
    background-color: rgb(34, 131, 15);
    color: rgb(142, 250, 109);
}
.img-vue {
    background-color: rgb(34, 131, 15);
}
.btn-vue:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgb(34, 131, 15);
}

.btn-github {
    background-color: rgb(244, 32, 138);
    color: rgb(66, 7, 37);
}
.img-github {
    background-color: rgb(244, 32, 138);
}
.btn-github:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgb(244, 32, 138);
}
.btn-SQL {
    background-color: rgb(244, 92, 32);
    color: rgb(61, 22, 7);
}
.img-SQL {
    background-color: rgb(244, 92, 32);
}
.btn-SQL:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgb(244, 92, 32);
}
.btn-SQLite {
    background-color: rgb(244, 163, 32);
    color: rgb(65, 42, 7);
}
.img-SQLite {
    background-color: rgb(244, 163, 32);
}
.btn-SQLite:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgb(244, 163, 32);
}

.btn-python {
    background-color: rgb(32, 53, 244);
    color: rgb(195, 201, 255);
}
.img-python {
    background-color: rgb(32, 53, 244);
}
.btn-python:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgb(32, 53, 244);
}

/* Nuevos estilos */

.btn-angular {
    background-color: rgb(255, 87, 34);
    color: white;
}
.img-angular {
    background-color: rgb(255, 87, 34);
}
.btn-angular:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgb(255, 87, 34);
}

.btn-php {
    background-color: rgb(79, 93, 149);
    color: white;
}
.img-php {
    background-color: rgb(79, 93, 149);
}
.btn-php:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgb(79, 93, 149);
}

.btn-csharp {
    background-color: rgb(80, 80, 160);
    color: white;
}
.img-csharp {
    background-color: rgb(80, 80, 160);
}
.btn-csharp:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgb(80, 80, 160);
}
</style>
