import './css/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { register } from 'swiper/element/bundle';

const app = createApp(App);
register();
app.use(router);
app.mount('#app');
