import './css/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { register } from 'swiper/element/bundle';
import VueTheMask from 'vue-the-mask';
import Lenis from 'lenis';

// Initialize Lenis
const lenis = new Lenis();

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const app = createApp(App);
register();
app.use(VueTheMask);
app.use(router);
app.mount('#app');
