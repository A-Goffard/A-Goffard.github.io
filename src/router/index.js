import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../views/Inicio.vue';
import SobreMi from '../views/SobreMi.vue';
import Proyectos from '../views/Proyectos.vue';
import Contacto from '../views/Contacto.vue';


const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
  },
  {
    path: '/sobremi',
    name: 'SobreMi',
    component: SobreMi,
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
