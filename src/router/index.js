import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProductsPage from '../views/ProductsPage.vue'
import NewProductPage from '../views/NewProductPage.vue'

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
    component: ProductsPage
  },
  {
    path: '/NewProductPage',
    name: 'NewProductPage',
    component: NewProductPage
  },
  // {
  //   path: '/',
  //   name: 'VendedorView',
  //   component: HomePage
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
