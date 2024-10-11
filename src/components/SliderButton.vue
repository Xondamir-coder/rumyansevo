<template>
	<button class="slider__button" :class="{ 'slider__button--right': isRight }">
		<ArrowLeft class="slider__button-icon" />
		<Borders class="slider__button-borders" />
	</button>
</template>

<script setup>
import Borders from './Borders.vue';
import ArrowLeft from './Icons/ArrowLeft.vue';

const props = defineProps({
	isRight: Boolean
});
</script>

<style scoped lang="scss">
.slider__button {
	display: grid;
	place-content: center;
	width: 2.8rem;
	height: 2.8rem;
	background-color: #ffffff14;
	backdrop-filter: blur(12px);
	position: relative;
	transition: background-color 0.3s, opacity 0.3s;
	&.swiper-button-disabled {
		opacity: 0.4;
	}
	&:hover:not(.swiper-button-disabled) {
		background-color: #656565;
	}
	&--right &-icon {
		transform: rotate(180deg);
	}
	svg {
		width: 1.2rem;
		height: 1.2rem;
	}
}
</style>
