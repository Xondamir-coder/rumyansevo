<template>
	<section class="program">
		<div class="program__top">
			<h1 class="program__title">Выберите программу</h1>
			<RouterLink to="/program" class="program__link">
				<MoreButton />
			</RouterLink>
		</div>
		<Cards :cards="content" />
	</section>
</template>

<script setup>
import Card from '../Card.vue';
import MoreButton from '../MoreButton.vue';
import img1 from '@/assets/images/program-1.webp';
import img2 from '@/assets/images/program-2.webp';
import img3 from '@/assets/images/program-3.webp';
import Cards from '../Cards.vue';

const content = [
	{
		img: img1,
		forOnePerson: true,
		title: 'Первое посещение',
		desc: 'Краткое описание программы, стоимость “от”, инфографика с доп. информацией',
		price: '5000 ₽'
	},
	{
		img: img2,
		forOnePerson: false,
		title: 'Спортивные программы',
		desc: 'Краткое описание программы, стоимость “от”, инфографика с доп. информацией',
		price: '5000 ₽'
	},
	{
		img: img3,
		forOnePerson: false,
		title: 'Для охотников',
		desc: 'Краткое описание программы, стоимость “от”, инфографика с доп. информацией',
		price: '5000 ₽'
	},
	{
		img: img1,
		forOnePerson: false,
		title: 'Для охотников',
		desc: 'Краткое описание программы, стоимость “от”, инфографика с доп. информацией',
		price: '5000 ₽'
	}
];
</script>

<style lang="scss" scoped>
.program {
	margin-top: 15vw;
	display: flex;
	flex-direction: column;
	gap: 2.56rem;
	&__link {
		@media only screen and (max-width: 768px) {
			display: none;
		}
	}
	&__title {
		font-size: clamp(32px, 6vw, 64px);
		font-weight: 500;
	}
	&__top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
</style>
