<template>
	<main class="main">
		<Header @open-menu="toggleMenu" />
		<Menu @close-menu="toggleMenu" :class="{ hidden: !isMenuOpen }" />
		<Hero />
		<About />
		<CircleCarousel />
		<VideoSlider />
		<Program />
	</main>
</template>

<script setup>
import CircleCarousel from '@/components/CircleCarousel.vue';
import Header from '@/components/Header.vue';
import Hero from '@/components/Hero.vue';
import About from '@/components/Home/About.vue';
import Program from '@/components/Home/Program.vue';
import VideoSlider from '@/components/Home/VideoSlider.vue';
import Menu from '@/components/Menu.vue';
import { ref } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
</script>

<style lang="scss" scoped>
.main {
	overflow: hidden;
	& > *:not(#carousel):not(#video-slider) {
		padding: 0 4vw;
	}
}
</style>
