import { createRouter, createWebHistory } from 'vue-router';
import DjHome from './components/DjHome.vue'; 
import DjCompany from './components/DjCompany.vue'; // 会社案内组件
import DjInquiry from './components/DjInquiry.vue';
import DjMainBusiness from './components/DjMainBusiness.vue';

const routes = [
  { path: '/', name: 'DjHome', component: DjHome },
  { path: '/company', name: 'DjCompany', component: DjCompany },
  { path: '/contact', name: 'DjInquiry', component: DjInquiry },
  { path: '/services', name: 'DjMainBusiness', component: DjMainBusiness },
  { path: '/:pathMatch(.*)*', redirect: '/' },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
