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
	background: #ffffff14;
	backdrop-filter: blur(24px);
	position: relative;
	&:hover &-borders {
		--border-color: var(--yellow);
	}
	&--right &-icon {
		transform: rotate(180deg);
	}
	svg {
		width: 1.2rem;
		height: 1.2rem;
	}
	&-icon > * {
		transition: color 0.3s, transform 0.3s;
	}
	&:hover &-icon > * {
		color: var(--yellow);
	}
	&--right:hover &-icon > *,
	&:hover &-icon > * {
		transform: translateX(-3px);
	}
}
</style>
