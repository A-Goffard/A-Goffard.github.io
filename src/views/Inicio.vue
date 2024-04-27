<template>
    <div>
        <h1 class="titulo">Bienvenido a mi Portfolio</h1>
        <p>Cotillea todo lo que quieras...</p>
        <div class="component-container"></div>
        <div class="sobremi">
          <Yo/>
          <SobreMiResumen/>

        </div>

        <Stack/>
        <Skills/>
        <Metodologias/>
    </div>
</template>

<script setup>
import Yo from '../components/sobremi/Yo.vue'
import Stack from '../components/sobremi/Stack.vue'
import Skills from '../components/sobremi/Skills.vue'
import Metodologias from '../components/sobremi/Metodologias.vue'
import SobreMiResumen from '../components/sobremi/SobreMiResumen.vue'
import FormacionCard from '../components/formariencia/FormacionCard.vue';
import ExperienciaCard from '../components/formariencia/ExperienciaCard.vue';


import { ref } from 'vue';

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

div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.component-container {
  display: flex;
  flex-wrap: wrap;
}
.sobremi{
  display: flex;
  flex-wrap: wrap;
}
</style>