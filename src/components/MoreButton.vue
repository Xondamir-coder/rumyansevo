<template>
	<button class="button">
		<span>{{ text }}</span>
		<More class="button__icon" />
	</button>
</template>

<script setup>
import More from './Icons/More.vue';

const props = defineProps({
	text: {
		type: String,
		default: 'Подробнее'
	}
});
</script>

<style scoped lang="scss">
.button {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 0.8rem 1.2rem;
	font-size: max(0.8rem, 16px);
	align-self: flex-start;
	transition: border-color 0.3s, color 0.3s;
	border: 1px solid var(--grey);
	&:hover {
		border-color: #fff;
	}
}
</style>
