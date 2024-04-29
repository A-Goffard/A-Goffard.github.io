<template>
  <div>
    <h1 class="titulo">Bienvenido a mi Portfolio</h1>
    <p>Cotillea todo lo que quieras...</p>
    <div class="sobremi">
      <YoMini @click="toggleResumen" class="yo yomini" />
      <Yo @click="toggleResumen" class="yo yomaxi"/>
      <SobreMiResumen class="resumen oculto"/>
    </div>
    <Stack/>
    <Skills/>
    <Metodologias/>
    <div class="contenedor">
      <div class="experiencia">
        <div class="ampliacion">
          <h2>Experiencia laboral</h2>
          <button class="btnExpP" @click="toggleExperiencia">
            +
          </button>
          <button class="btnExpN oculto" @click="toggleExperiencia">
            -
          </button>
        </div>
        <div class="contenedor-experiencias oculto">
          <div class="fitxas" v-for="experiencia in experiencias" :key="experiencia.id">
          <ExperienciaCard class="fitxa" :experiencia="experiencia" />
          </div>
        </div>
      </div>
      <div class="formacion">
        <div class="ampliacion">
          <h2>Formación</h2>
          <button class="btnFormP" @click="toggleFormacion">
            +
          </button>
          <button class="btnFormN oculto" @click="toggleFormacion">
            -
          </button>
        </div>
        <div class="contenedor-formaciones oculto">
          <div class="fitxas" v-for="formacion in formaciones" :key="formacion.id">
          <FormacionCard class="fitxa" :formacion="formacion" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Yo from '../components/sobremi/Yo.vue'
import YoMini from '../components/sobremi/YoMini.vue'
import Stack from '../components/sobremi/Stack.vue'
import Skills from '../components/sobremi/Skills.vue'
import Metodologias from '../components/sobremi/Metodologias.vue'
import SobreMiResumen from '../components/sobremi/SobreMiResumen.vue'
import FormacionCard from '../components/formariencia/FormacionCard.vue';
import ExperienciaCard from '../components/formariencia/ExperienciaCard.vue';

import { ref } from 'vue';

const toggleResumen = () => {
  const contenedorResumen = document.querySelector('.resumen');
  contenedorResumen.classList.toggle('oculto');
};

const toggleExperiencia = () => {
  const contenedorExperiencias = document.querySelector('.contenedor-experiencias');
  contenedorExperiencias.classList.toggle('oculto');
  const botonNegativo = document.querySelector('.btnExpP');
  botonNegativo.classList.toggle('oculto');
  const botonPositivo = document.querySelector('.btnExpN');
  botonPositivo.classList.toggle('oculto');
};

const toggleFormacion = () => {
  const contenedorFormaciones = document.querySelector('.contenedor-formaciones');
  contenedorFormaciones.classList.toggle('oculto');
  const botonNegativo = document.querySelector('.btnFormP');
  botonNegativo.classList.toggle('oculto');
  const botonPositivo = document.querySelector('.btnFormN');
  botonPositivo.classList.toggle('oculto');
};

  const formaciones= ref([
    {
        id: 1,
        title: 'Licienciada en Geología',
        description: 'Licenciada en Geología en la UPV-EHU, especializada en micropaleontología',
    },
    {
        id: 2,
        title: 'Máster en cambio climático e impacto humano',
        description: 'Máster en cambio climático e impacto humano en la UPV-EHU',
    },
    {
        id: 3,
        title: 'Máster en Educación y Sensibilización ambiental',
        description: 'Máster en Educación y Sensibilización ambiental',
    },
    {
        id: 4,
        title: 'Directora y coordinadora de actividades de ocio y tiempo libre',
        description: 'Directora y coordinadora de actividades de ocio y tiempo libre',
    },
    {
        id: 5,
        title: 'Máster superior en Arqueología',
        description: 'Máster superior en Arqueología',
    },
    {
        id: 6,
        title: 'Formador de formadores',
        description: 'Formador de formadores',
    },
    {
        id: 7,
        title: 'Docencia para la teleformación',
        description: 'Docencia para la teleformación',
    },
    {
        id: 8,
        title: 'Monitora de ocio y tiempo libre',
        description: 'Monitora de ocio y tiempo libre',
    },
    {
        id: 9,
        title: 'Monitora de Mindfulness',
        description: 'Monitora de Mindfulness',
    },
    {
        id: 10,
        title: 'Máster en Psicología infantil y familiar',
        description: 'Máster en Psicología infantil y familiar',
    },
    {
        id: 11,
        title: 'Máster en Psicología de la personalidad',
        description: 'Máster en Psicología de la personalidad',
    },
    {
        id: 12,
        title: 'Postgrado en Psicología Holística',
        description: 'Postgrado en Psicología Holística',
    },
    {
        id: 13,
        title: 'Arteterapia',
        description: 'Arteterapia',
    },
    {
        id: 14,
        title: 'Pedagogía',
        description: 'Pedagogía',
    },
    {
        id: 15,
        title: 'Musicoterapia',
        description: 'Musicoterapia',
    },

    // Agrega más proyectos según sea necesario
  ]);

  const experiencias= ref([
    {
        id: 1,
        title: 'CEO de Geobizi',
        date: '2019-2024',
        description: 'CEO, formadora y técnico especialista en Geobizi. Promotora, formadora, técnico especialista en micropaleontología, guía, coordinadora, diseñadora, monitora y divulgadora.',
    },
    {
        id: 2,
        title: 'Personal investigador contratado UPV-EHU',
        date: '2017-2018',
        description: 'Trabajo principal como técnico en micropaleontología en el departamento de estratigrafía y paleontología de la Facultad de Ciencia y Tecnología. Análisis y caracterización de muestras marinas y estuarinas de foraminíferos bentónicos.',
    },
    {
        id: 3,
        title: 'Otros trabajos',
        date: '< 2017',
        description: 'He trabajado en diferentes ámbitos a lo largo de los años: Hostelería, limpieza, clases particulares...',
    },
    // Agrega más trabajos según sea necesario
  ]);


</script>

<style scoped>
.yomini {
  display: none;
}
div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.sobremi{
  display: flex;
  flex-wrap: wrap;
}
.fitxas{
  margin: 0rem 1rem;
}
.contenedor {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.oculto {
  display: none;
}
.ampliacion {
  display: flex;
  flex-direction: row;
}
button {
  margin: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: var(--moradooscuro);
  color: var(--rosaclaro);
  transition: 250ms ease;
}
button:hover{
  box-shadow: 0rem 0rem 0.5rem 0.1rem var(--lilabotonhover);
  border: solid 0.15rem var(--moradomuyoscuro);
  cursor: pointer;
}
.yo:hover {
  cursor: pointer;
}
.resumen {
  margin: 1rem;
  border-radius: 0.5rem;
  border: solid 0.15rem var(--moradooscuro);
  padding: 1rem;
  background-color: var(--blanco);
  box-shadow: 0rem 0rem 1rem 0.1rem var(--lilaboton);
  transition: 250ms ease;
}
.resumen:hover{
  box-shadow: 0rem 0rem 1rem 0.3rem var(--lilabotonhover);
  border: solid 0.15rem var(--moradomuyoscuro);
}
@media screen and (max-width: 552px) {
.yomaxi {
  display: none;
}
.yomini {
  display: block;
}
.titulo {
  width: 15rem;
}
}
</style>