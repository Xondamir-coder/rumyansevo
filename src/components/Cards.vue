<template>
	<ul class="cards">
		<li v-for="card in cards" :key="card.title">
			<Card :content="card" />
		</li>
	</ul>
</template>

<script setup>
import Card from './Card.vue';

const props = defineProps({
	cards: Array
});
</script>

<style lang="scss" scoped>
.cards {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	gap: 20px;
	@media only screen and (max-width: 768px) {
		gap: 10px;
	}
}
</style>
