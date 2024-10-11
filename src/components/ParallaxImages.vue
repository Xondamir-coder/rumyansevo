<template>
	<img
		:class="{ bottom: isBottom }"
		:style="{
			transform: `translate(-${cursor.x * 0.3}px, -${cursor.y * 0.3}px) rotate(${
				cursor.x * 0.05
			}deg)`
		}"
		width="576"
		height="529"
		src="@/assets/images/bullet-1.webp"
		alt="bullet"
		class="bullet bullet--1" />

	<!-- For the second bullet, make the movement faster and add a slight skew for a more dynamic look -->
	<img
		:class="{ bottom: isBottom }"
		:style="{
			transform: `translate(${cursor.x * 0.3}px, -${cursor.y * 0.3}px) skewX(${
				cursor.x * 0.05
			}deg)`
		}"
		width="1087"
		height="1087"
		src="@/assets/images/bullet-2.webp"
		alt="bullet"
		class="bullet bullet--2" />
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

// Track cursor position percentage
const props = defineProps({
	isBottom: Boolean
});

const cursor = ref({
	x: 0,
	y: 0
});

const handleParallax = e => {
	const percentageX = (e.clientX / window.innerWidth) * 100;
	const percentageY = (e.clientY / window.innerHeight) * 100;

	cursor.value.x = percentageX.toFixed(2);
	cursor.value.y = percentageY.toFixed(2);
};

onMounted(() => {
	window.addEventListener('mousemove', handleParallax);
});

onUnmounted(() => {
	window.removeEventListener('mousemove', handleParallax);
});
</script>

<style scoped lang="scss">
.bullet--1.bottom {
	width: 24rem;
	height: 21rem;
	left: -12%;
	top: 10%;
	z-index: 1;
}
.bullet--2.bottom {
	z-index: 2;
	top: -17%;
	right: -17%;
	width: 24rem;
	height: 24rem;
}

.bullet {
	position: absolute;
	object-fit: cover;
	&--1 {
		width: min(30vw, 484.04px);
		height: min(30vw, 417.61px);
		top: 40%;
		left: 0;
		z-index: -1;
		@media only screen and (max-width: 768px) {
			top: 20%;
			left: -85px;
			transform: rotate(-20deg);
			width: 214px;
			height: 184px;
			z-index: 10;
		}
	}
	&--2 {
		top: 63%;
		right: -13%;
		width: min(50vw, 500px);
		height: min(50vw, 500px);
		filter: blur(5px);
		transform: rotate(5deg);
		z-index: 10;
		@media only screen and (max-width: 768px) {
			z-index: -1;
		}
	}
}
</style>
