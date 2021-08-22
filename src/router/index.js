import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../views/About.vue';
import Employee from '../views/Employee.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/employee',
    name: 'Employee',
    component: Employee,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/',
    name: '',
    redirect: '/employee',
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
