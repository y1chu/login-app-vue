import { createRouter, createWebHistory } from 'vue-router'; // For Vue 3

import LoginView from '../components/LoginView.vue';
import SignUpView from '../components/SignUpView.vue';
import PasswordRecoveryView from '../components/PasswordRecoveryView.vue';

const routes = [
  { path: '/', name: 'login', component: LoginView },
  { path: '/signup', name: 'signup', component: SignUpView },
  { path: '/recovery', name: 'recovery', component: PasswordRecoveryView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
