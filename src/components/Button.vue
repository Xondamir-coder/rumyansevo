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
	padding: 0.8rem 1.2rem;
	background: linear-gradient(
		var(--gradient-angle),
		#f0dfad -59.3%,
		#eaac41 -5.38%,
		#e9bb58 47.48%,
		#ecda59 98.81%
	);
	transition: --gradient-angle 0.6s ease-in-out;

	&:hover {
		--gradient-angle: -86.75deg;
	}

	&:active {
		transform: scale(0.98); // Slight compression effect on click
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); // More subtle shadow when active
	}

	&__text {
		font-size: max(1vw, 12px);
		font-weight: 500;
		color: var(--black);
		transition: color 0.3s ease;

		.button:hover & {
			color: #333; // Darken text color slightly on hover
		}
	}
}
</style>
