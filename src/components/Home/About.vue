<template>
	<section class="about">
		<h2 class="about__title">О нас</h2>
		<div class="about__box">
			<p class="about__text">
				Место, где современные стрелковые дисциплины
				<span class="grey">сочетаются с комфортом и уютом</span>
			</p>
			<button class="about__button">
				<span>Подробнее</span>
				<More class="about__button-icon" />
			</button>
		</div>
	</section>
</template>

<script setup>
import More from '../Icons/More.vue';
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
	&__button {
		margin-bottom: 3rem;
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
		&:hover &-icon {
			transform: translate(5px, -5px);
		}
		&-icon {
			transition: transform 0.3s;
		}
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
