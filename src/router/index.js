import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProductsPage from '../views/ProductsPage.vue';
import SellerLoginPage from '../views/SellerLoginPage';
import VendorRegisterPage from '../views/VendorRegisterPage.vue';
import RegisterSucessPage from '../views/RegisterSucessPage.vue';
import NewProductPage from '../views/NewProductPage.vue';

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
  {
    path: '/vendedor',
    name: 'SellerLoginPage',
    component: SellerLoginPage,
  },
  {
    path: '/newproduct',
    name: 'NewProductPage',
    component: NewProductPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
