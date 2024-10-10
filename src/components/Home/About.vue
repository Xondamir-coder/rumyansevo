<template>
	<section class="about">
		<h2 class="about__title">О нас</h2>
		<div class="about__box">
			<p class="about__text">
				Место, где современные стрелковые дисциплины
				<span class="grey">сочетаются с комфортом и уютом</span>
			</p>
			<RouterLink to="/about">
				<MoreButton />
			</RouterLink>
		</div>
	</section>
</template>

<script setup>
import MoreButton from '../MoreButton.vue';
</script>

<style lang="scss" scoped>
.about {
	margin-top: 120px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	row-gap: 32px;
	column-gap: 16px;
	&__box {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	&__title {
		font-size: 1.6rem;
		font-weight: 500;
	}
	&__text {
		font-size: clamp(30px, 4.5vw, 70px);
		font-weight: 500;
		max-width: 15ch;
		line-height: 1;
		@media only screen and (max-width: 768px) {
			line-height: 1.1;
		}
	}
}
.grey {
	color: var(--grey);
}
</style>
