<template>
    <div>
        <button class="btn" @click="descargarCurriculum()">
            <img class="iconos img" src="/skills/curriculumBlanco.png" alt="">Descarga mi Currículum
        </button>
    </div>
</template>

<script setup>
function descargarCurriculum() {
    // Ruta al archivo PDF en la carpeta public
    const pdfUrl = '/curriculum.pdf';

    // Crear un elemento <a> para iniciar la descarga
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'Curriculum.pdf'); // Nombre del archivo para la descarga
    document.body.appendChild(link);
    
    // Ejecutar la descarga
    link.click();

    // Eliminar el enlace después de la descarga
    document.body.removeChild(link);
}
</script>

<style scoped>
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
.btn {
    background-color: var(--moradooscuro);
    color: var(--blanco);
}
.img {
    background-color: var(--moradooscuro);
}
.btn:hover {
    box-shadow: 0rem 0rem 0.5rem 0.1rem var(--moradooscuro);
}
</style>
