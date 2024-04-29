import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../views/Inicio.vue';
import Proyectos from '../views/Proyectos.vue';
import Contacto from '../views/Contacto.vue';
import ProjectDetailView from '../views/proyectos/ProjectDetailView.vue'; // Vista para los detalles del proyecto

// Proyectos
import BilboStackView from '../views/proyectos/BilboStackView.vue';
import MangaPowerView from '../views/proyectos/MangaPowerView.vue';
import HackathonF5View from '../views/proyectos/HackathonF5View.vue';
import MemoryGameView from '../views/proyectos/MemoryGameView.vue';
import MarifarmaView from '../views/proyectos/MarifarmaView.vue';

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: Proyectos,
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto,
  },
  {
    path: '/proyectos/:id/:titleSlug',
    name: 'ProjectDetail',
    component: ProjectDetailView,
    props: true,
  },
  // Rutas para las vistas individuales de cada proyecto
  {
    path: '/proyectos/bilbostack',
    name: 'BilboStack',
    component: BilboStackView,
  },
  {
    path: '/proyectos/manga-power',
    name: 'MangaPower',
    component: MangaPowerView,
  },
  {
    path: '/proyectos/hackathonF5-2024',
    name: 'HackathonF5',
    component: HackathonF5View,
  },
  {
    path: '/proyectos/empezando-con-vue-3',
    name: 'MemoryGame',
    component: MemoryGameView,
  },
  {
    path: '/proyectos/marifarma',
    name: 'Marifarma',
    component: MarifarmaView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
