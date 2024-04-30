<template>
  <div class="container">
    <h1 class="titulo">Contacto</h1>
    <div class="container-interior">
      <p>Puedes contactar conmigo a través de LinkedIn o enviándome un correo electrónico</p>
      <div>
        <div class="mensajito">
          <p>{{ currentMessage }}</p>
        </div>
        <!-- GitHub -->
        <a :href="githubLink" target="_blank" @mouseover="showMessage('github')" @mouseleave="hideMessage()">
          <img class="icon" src="/contacto/github.png" alt="GitHub" title="Usuario GitHub: A-Goffard">
          <span class="tooltip" v-if="showGithubMessage">A-Goffard</span>
        </a>
        <!-- LinkedIn -->
        <a :href="linkedinLink" target="_blank" @mouseover="showMessage('linkedin')" @mouseleave="hideMessage()">
          <img class="icon" src="/contacto/linkedin.png" alt="LinkedIn" title="Nombre y Apellido: Aintzane Goffard Sevillano">
          <span class="tooltip" v-if="showLinkedinMessage">Aintzane Goffard Sevillano</span>
        </a>
        <!-- Email -->
        <img class="icon" src="/contacto/mail.png" alt="Email" @click="sendEmail" title="Email de contacto: aintzagoffard@gmail.com" @mouseover="showMessage('email')" @mouseleave="hideMessage()">
        <span class="tooltip" v-if="showEmailMessage">aintzagoffard@gmail.com</span>
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

// Mensajes predeterminados y mensajes específicos para cada icono
const defaultMessage = '¿Qué te gustaría ver?';
const githubMessage = 'A-Goffard';
const linkedinMessage = 'Aintzane Goffard Sevillano';
const emailMessage = 'aintzagoffard@gmail.com';

// Variables reactivas para controlar la visibilidad de los mensajes
const showGithubMessage = ref(false);
const showLinkedinMessage = ref(false);
const showEmailMessage = ref(false);
const showMessageContainer = ref(false);
let currentMessage = defaultMessage;

// Función para mostrar el mensaje correspondiente
const showMessage = (source) => {
  if (source === 'github') {
    showGithubMessage.value = true;
    showLinkedinMessage.value = false;
    showEmailMessage.value = false;
    currentMessage = githubMessage;
    showMessageContainer.value = true;
  } else if (source === 'linkedin') {
    showGithubMessage.value = false;
    showLinkedinMessage.value = true;
    showEmailMessage.value = false;
    currentMessage = linkedinMessage;
    showMessageContainer.value = true;
  } else if (source === 'email') {
    showGithubMessage.value = false;
    showLinkedinMessage.value = false;
    showEmailMessage.value = true;
    currentMessage = emailMessage;
    showMessageContainer.value = true;
  }
};

// Función para ocultar el mensaje cuando se quita el ratón
const hideMessage = () => {
  showGithubMessage.value = false;
  showLinkedinMessage.value = false;
  showEmailMessage.value = false;
  showMessageContainer.value = false;
  currentMessage = defaultMessage;
};

// Función para enviar un correo electrónico
const sendEmail = () => {
  window.location.href = `mailto:${emailAddress.value}`;
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container-interior {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  margin: 2rem;
  width: 4.5rem;
  transition: all 200ms ease;
}

img:hover {
  transform: scale(1.1);
}

.tooltip {
  display: none;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}

.mensajito {
  display: flex;
  justify-content: center;
  max-width: 25rem;
  margin: 1rem;
  border-radius: 0.5rem;
  border: solid 0.15rem var(--moradooscuro);
  padding: 1rem;
  box-shadow: 0rem 0rem 1rem 0.1rem var(--lilaboton);
  transition: 250ms ease;
}
.icon {
  width: 4.5rem;
  border-radius: 0.9rem;
  border: solid 0.15rem var(--moradooscuro);
  padding: 0.3rem;
  background-color: white;
  box-shadow: 0rem 0rem 1rem 0.1rem var(--lilaboton);
}
.icon:hover{
  box-shadow: 0rem 0rem 1rem 0.3rem var(--lilabotonhover);
  border: solid 0.15rem var(--moradomuyoscuro);
}
@media screen and (max-width: 450px) {
  .mensajito {
    display: none;
  }
}
</style>
