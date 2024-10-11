<template>
	<button class="button">
		<span class="button__text">{{ text }}</span>
		<Plus />
	</button>
</template>

<script setup>
import Plus from './Icons/Plus.vue';

const props = defineProps({
	text: String
});
</script>

<style lang="scss" scoped>
@property --gradient-angle {
	syntax: '<angle>'; /* Accepts an angle value */
	initial-value: 93.25deg; /* Default initial value for the gradient angle */
	inherits: false; /* Do not inherit from parent elements */
}
.button {
	--gradient-angle: 93.25deg;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	padding: max(0.8rem, 14px) max(1.2rem, 16px);
	background: linear-gradient(
		var(--gradient-angle),
		#f0dfad -59.3%,
		#eaac41 -5.38%,
		#e9bb58 47.48%,
		#ecda59 98.81%
	);
	color: var(--black);
	transition: --gradient-angle 0.6s ease-in-out;
	&:hover {
		--gradient-angle: -86.75deg;
	}
	&__text {
		font-size: max(1vw, 16px);
		font-weight: 500;
	}
}
</style>
