<template>
  <div>
    <Nav :bannerClass="bannerClass" />
    <div class="colorines">
      <button class="lila" @click="cambiarColoresLila"></button>
      <button class="green" @click="cambiarColoresVerde"></button>
      <button class="blue" @click="cambiarColoresBlue"></button>
      <button class="naranja" @click="cambiarColoresNaranja"></button>
      <button class="grey" @click="cambiarColoresGrey"></button>
      <button class="darck" @click="cambiarColoresDrack"></button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Nav from "./components/Nav.vue";
import { reactive } from 'vue';

// Variable reactiva para almacenar la clase del banner
const bannerClass = reactive({ value: 'banner' });

// Método para cambiar la clase del banner
function cambiarClaseBanner(clase) {
  bannerClass.value = clase;
}
// Método para cambiar los colores
function cambiarColoresVerde() {
  document.documentElement.style.setProperty('--moradomuyoscuro', '#144909');
  document.documentElement.style.setProperty('--moradooscuro', '#185e0f');
  document.documentElement.style.setProperty('--lilaboton', '#39b835');
  document.documentElement.style.setProperty('--lilabotonhover', '#40cf3b');
  document.documentElement.style.setProperty('--rosa', '#59fc4a');
  document.documentElement.style.setProperty('--rosaclaro', '#c0ffb0');
  document.documentElement.style.setProperty('--rosasuperclarito', '#e6ffe3');
  document.documentElement.style.setProperty('--rosahipermegaclarito', '#efffee');
  document.documentElement.style.setProperty('--blanco', '#ffffff');
  document.documentElement.style.setProperty('--black', '#000000');
  cambiarClaseBanner('banner3');
}
function cambiarColoresLila() {
  document.documentElement.style.setProperty('--moradomuyoscuro', '#490946');
  document.documentElement.style.setProperty('--moradooscuro', '#5e0f5a');
  document.documentElement.style.setProperty('--lilaboton', '#b835b8');
  document.documentElement.style.setProperty('--lilabotonhover', '#cf3bcf');
  document.documentElement.style.setProperty('--rosa', '#fc4afc');
  document.documentElement.style.setProperty('--rosaclaro', '#b7ffb0');
  document.documentElement.style.setProperty('--rosasuperclarito', '#ffe3ff');
  document.documentElement.style.setProperty('--rosahipermegaclarito', '#ffeeff');
  document.documentElement.style.setProperty('--blanco', '#ffffff');
  document.documentElement.style.setProperty('--black', '#000000');
  cambiarClaseBanner('banner1');
}
function cambiarColoresBlue() {
  document.documentElement.style.setProperty('--moradomuyoscuro', '#092749');
  document.documentElement.style.setProperty('--moradooscuro', '#0f1e5e');
  document.documentElement.style.setProperty('--lilaboton', '#3554b8');
  document.documentElement.style.setProperty('--lilabotonhover', '#3b6acf');
  document.documentElement.style.setProperty('--rosa', '#4a82fc');
  document.documentElement.style.setProperty('--rosaclaro', '#ffb0ff');
  document.documentElement.style.setProperty('--rosasuperclarito', '#e3f0ff');
  document.documentElement.style.setProperty('--rosahipermegaclarito', '#eef5ff');
  document.documentElement.style.setProperty('--blanco', '#ffffff');
  document.documentElement.style.setProperty('--black', '#000000');
  cambiarClaseBanner('banner2');
}

function cambiarColoresNaranja() {
  document.documentElement.style.setProperty('--moradomuyoscuro', '#494309');
  document.documentElement.style.setProperty('--moradooscuro', '#5e500f');
  document.documentElement.style.setProperty('--lilaboton', '#b8a035');
  document.documentElement.style.setProperty('--lilabotonhover', '#cfa83b');
  document.documentElement.style.setProperty('--rosa', '#fccd4a');
  document.documentElement.style.setProperty('--rosaclaro', '#ffeab0');
  document.documentElement.style.setProperty('--rosasuperclarito', '#fff8e3');
  document.documentElement.style.setProperty('--rosahipermegaclarito', '#fff9ee');
  document.documentElement.style.setProperty('--blanco', '#ffffff');
  document.documentElement.style.setProperty('--black', '#000000');
  cambiarClaseBanner('banner4');
}

function cambiarColoresGrey() {
  document.documentElement.style.setProperty('--moradomuyoscuro', '#000000');
  document.documentElement.style.setProperty('--moradooscuro', '#222222');
  document.documentElement.style.setProperty('--lilaboton', '#3d3d3d');
  document.documentElement.style.setProperty('--lilabotonhover', '#535353');
  document.documentElement.style.setProperty('--rosa', '#838383');
  document.documentElement.style.setProperty('--rosaclaro', '#ffeab0');
  document.documentElement.style.setProperty('--rosasuperclarito', '#c0c0c0');
  document.documentElement.style.setProperty('--rosahipermegaclarito', '#e6e6e6');
  document.documentElement.style.setProperty('--blanco', '#ffffff');
  document.documentElement.style.setProperty('--black', '#000000');
  cambiarClaseBanner('banner5');
}

function cambiarColoresDrack() {
  document.documentElement.style.setProperty('--moradomuyoscuro', '#e9e9e9');
  document.documentElement.style.setProperty('--moradooscuro', '#cecece');
  document.documentElement.style.setProperty('--lilaboton', '#a0a0a0');
  document.documentElement.style.setProperty('--lilabotonhover', '#9e9e9e');
  document.documentElement.style.setProperty('--rosa', '#838383');
  document.documentElement.style.setProperty('--rosaclaro', '#585858');
  document.documentElement.style.setProperty('--rosasuperclarito', '#363636');
  document.documentElement.style.setProperty('--rosahipermegaclarito', '#222222');
  document.documentElement.style.setProperty('--blanco', '#202020');
  document.documentElement.style.setProperty('--black', '#ffffff');
  cambiarClaseBanner('banner6');
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: var(--rosahipermegaclarito);
  text-decoration: none;
}
p {
  font-size: 1.5rem;
  margin: 1rem;
}
:root {
  --moradomuyoscuro: #490946;
  --moradooscuro: #5e0f5a;
  --lilaboton: #b835b8;
  --lilabotonhover: #cf3bcf;
  --rosa: #fc4afc;
  --rosaclaro: #ffb0ff;
  --rosasuperclarito: #ffe3ff;
  --rosahipermegaclarito: #ffeeff;
  --blanco: #ffffff;
  --black: #000000;
}

h1 {
  color: var(--moradomuyoscuro);
  margin: 1rem;
  font-size: 3rem;
}
h2 {
  color: var(--moradomuyoscuro);
  margin: 1rem;
  font-size: 2.5rem;
}
h3 {
  color: var(--moradomuyoscuro);
  margin: 1rem;
  font-size: 2rem;
}
p{
  color: var(--black);
}

.green {
width: 1rem;
height: 1rem;
border-radius: 1rem;
background-color: rgb(23, 172, 23);
margin: 1rem;
}

.lila {
width: 1rem;
height: 1rem;
border-radius: 1rem;
background-color: #b835b8;
margin: 1rem;
}

.blue {
width: 1rem;
height: 1rem;
border-radius: 1rem;
background-color:#355fb8;
margin: 1rem;
}

.naranja {
width: 1rem;
height: 1rem;
border-radius: 1rem;
background-color:#b8a435;
margin: 1rem;
}

.grey {
width: 1rem;
height: 1rem;
border-radius: 1rem;
background-color:#505050;
margin: 1rem;
}

.darck {
width: 1rem;
height: 1rem;
border-radius: 1rem;
background-color:#000000;
margin: 1rem;
}
</style>
