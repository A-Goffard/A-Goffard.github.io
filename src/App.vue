<template>
  <Nav />
  <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nav from "./components/Nav.vue";

export default {
  components: {
    Nav,
    HelloWorld
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #581446;
}


</style>
