<template>
	<main class="main">
		<Header @open-menu="toggleMenu" />
		<Menu @close-menu="toggleMenu" :class="{ hidden: !isMenuOpen }" />
		<Hero />
		<About />
	</main>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Hero from '@/components/Hero.vue';
import About from '@/components/Home/About.vue';
import Menu from '@/components/Menu.vue';
import { ref } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
</script>

<style lang="scss" scoped>
.main {
	padding: 0 4vw;
	overflow: hidden;
}
</style>
