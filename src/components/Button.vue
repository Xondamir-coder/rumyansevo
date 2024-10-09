<template>
	<button class="button" @click="emitClick">
		<span class="button__text">{{ text }}</span>
		<Plus />
	</button>
</template>

<script setup>
import Plus from './Icons/Plus.vue';

const props = defineProps({
	text: String
});

const emits = defineEmits(['click']);

const emitClick = () => {
	emits('click');
};
</script>

<style lang="scss" scoped>
.button {
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 0.8rem 1.2rem;
	transition: box-shadow 0.3s, transform 0.3s;
	background: var(--gradient);
	&:hover {
		box-shadow: 0 0 12px var(--yellow);
		transform: translateY(-5px);
	}
	&__text {
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--black);
	}
}
</style>
