<template>
  <div>
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Inicio from "./views/Inicio.vue";
import Contacto from "./views/Contacto.vue";
import Curriculum from "./views/Curriculum.vue";
import Proyectos from "./views/Proyectos.vue";
import Skills from "./views/Skills.vue";
import SobreMi from "./views/SobreMi.vue";

export default {
  components: {
    Nav,
    Inicio,
    Contacto,
    Curriculum,
    Proyectos,
    Skills,
    SobreMi,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: var(--rosahipermegaclarito);
}
p{
  font-size: 1.5rem;
  margin: 1rem;
}
:root {
  --moradomuyoscuro: #490946;
  --moradooscuro: #5e0f5a;
  --lilaboton:  #b835b8;
  --lilabotonhover: #cf3bcf;
  --rosa: #fc4afc;
  --rosaclaro: #ffb0ff;
  --rosasuperclarito: #ffe3ff;
  --rosahipermegaclarito: #ffeeff;
  --blanco: #ffffff;
}

h1 {
  color: var(--moradomuyoscuro);
  margin: 1rem;
  font-size: 3rem;
}

</style>

