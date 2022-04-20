
import { createWebHistory, createRouter } from "vue-router";
import Product from './components/Product.vue';
import Company from './components/Company.vue';
import Service from './components/Service.vue';
const routes = [
  {
    path: "/",
    component: Product,
  },
  {
    path: "/company",
    component: Company,
  },
  {
    path: "/service",
    component: Service,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
