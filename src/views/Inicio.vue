<template>
    <div>
        <h1 class="titulo">Bienvenido a mi Portfolio</h1>
        <p>Cotillea todo lo que quieras...</p>
        <div class="component-container"></div>
        <Yo/>
        <Stack/>
        <Skills/>
    </div>
</template>

<script setup>
import Yo from '../components/Yo.vue'
import Stack from '../components/Stack.vue'
import Skills from '../components/Skills.vue'
</script>

<style scoped>

img{
  max-width: 30rem;
  border-radius: 0.5rem;
}
div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.yo:hover{
  box-shadow: 0rem 0rem 1rem 0.3rem var(--lilabotonhover);
  border: solid 0.15rem var(--moradomuyoscuro);
}
.component-container {
  display: flex;
  flex-wrap: wrap;
}
</style>