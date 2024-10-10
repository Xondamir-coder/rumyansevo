<template>
	<div class="content">
		<h2 class="content__title">{{ title }}</h2>
		<div class="content__box">
			<p class="content__text">
				{{ textWhite }}
				<span class="grey">{{ textGray }}</span>
			</p>
			<RouterLink v-if="link" :to="link">
				<MoreButton />
			</RouterLink>
		</div>
	</div>
</template>

<script setup>
import MoreButton from './MoreButton.vue';

const props = defineProps({
	title: String,
	textWhite: String,
	textGray: String,
	link: String
});
</script>

<style scoped lang="scss">
.content {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	row-gap: 32px;
	column-gap: 16px;
	&__title {
		font-size: 1.6rem;
		font-weight: 500;
	}
	&__box {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 32px;
	}
	&__text {
		font-size: clamp(30px, 4vw, 70px);
		font-weight: 500;
		max-width: 17ch;
		line-height: 1;
		@media only screen and (max-width: 768px) {
			line-height: 1.1;
		}
	}
}
</style>
