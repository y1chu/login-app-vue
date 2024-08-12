import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Make sure the router is correctly imported

createApp(App).use(router).mount('#app'); // Correct usage for Vue 3
