<template>
	<button class="button">
		<span>Подробнее</span>
		<More class="button__icon" />
	</button>
</template>

<script setup>
import More from './Icons/More.vue';
</script>

<style scoped lang="scss">
.button {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 0.8rem 1.2rem;
	font-size: 0.8rem;
	align-self: flex-start;
	transition: border-color 0.3s, color 0.3s;
	border: 1px solid var(--grey);
	&:hover {
		border-color: var(--yellow);
		color: var(--yellow);
	}
	&:hover &__icon {
		transform: translate(5px, -5px);
	}
	&__icon {
		transition: transform 0.3s;
	}
}
</style>
