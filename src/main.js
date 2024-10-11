import './css/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { register } from 'swiper/element/bundle';
import VueTheMask from 'vue-the-mask';

const app = createApp(App);
register();
app.use(VueTheMask);
app.use(router);
app.mount('#app');
