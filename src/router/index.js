import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProductsPage from '../views/ProductsPage.vue';
import VendorRegisterPage from '../views/VendorRegisterPage.vue';
import RegisterSucessPage from '../views/RegisterSucessPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/produtos',
    name: 'ProductsPage',
    component: ProductsPage,
  },
  {
    path: '/registervendor',
    name: 'VendorRegisterPage',
    component: VendorRegisterPage,
  },
  {
    path: '/registersucess',
    name: 'RegisterSucessPage',
    component: RegisterSucessPage,
  },
  // {
  //   path: '/',
  //   name: 'VendedorView',
  //   component: HomePage
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
