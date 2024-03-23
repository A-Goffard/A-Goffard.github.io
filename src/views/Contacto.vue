<template>
    <div>
        <h1 class="titulo">Contacto</h1>
        <div>
            <p>Puedes contactar conmigo a través de LinkedIn o enviandome un mail</p>
            <div>
                <!-- GitHub -->
                <a :href="githubLink" target="_blank">
                  <img src="/contacto/github.png" alt="GitHub">
                </a>
                <!-- LinkedIn -->
                <a :href="linkedinLink" target="_blank">
                  <img src="/contacto/linkedin.png" alt="LinkedIn">
                </a>
                <!-- Email -->
                <img src="/contacto/mail.png" alt="Email" @click="sendEmail">
              </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Define los enlaces para GitHub, LinkedIn y el correo electrónico
const githubLink = ref('https://github.com/A-Goffard');
const linkedinLink = ref('https://www.linkedin.com/in/aintzane-goffard-sevillano/');
const emailAddress = ref('aintzagoffard@gmail.com');

// Función para enviar un correo electrónico
const sendEmail = () => {
  window.location.href = `mailto:${emailAddress.value}`;
};
</script>

<style scoped>
img {
    margin: 2rem;
    width: 4.5rem;
    transition: all 200ms ease;
}
img:hover {
    scale: 1.1;
}
</style>