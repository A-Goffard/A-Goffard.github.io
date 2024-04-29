import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../views/Inicio.vue';
import Proyectos from '../views/Proyectos.vue';
import Contacto from '../views/Contacto.vue';
import ProjectDetailView from '../views/ProjectDetailView.vue'; // Vista para los detalles del proyecto

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
    path: '/proyectos/:id',
    name: 'ProjectDetail',
    component: ProjectDetailView,
    props: true,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
