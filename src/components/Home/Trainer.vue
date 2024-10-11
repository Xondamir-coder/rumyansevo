<template>
	<section class="trainer">
		<SectionContent
			title="Тренерский штаб"
			text-white="Наши тренеры — это команда высококлассных профессионалов с большим опытом."
			text-gray="Они обучат вас всем тонкостям стрелкового спорта и помогут достичь новых высот" />
		<div class="trainer__main">
			<TrainerThingy class="trainer__thingy" />
			<div class="trainer__cta">
				<h1 class="trainer__title">Андрей Логинов</h1>
				<p class="trainer__text">
					Мастер спорта международного класса, многократный победитель и призёр
					чемпионатов Европы.
				</p>
				<Button text="Записаться на тренировку" class="trainer__cta-btn" />
			</div>
			<swiper-container
				v-if="isBig"
				ref="mySwiper"
				class="trainer__slider"
				effect="cards"
				grab-cursor="true"
				:navigation="{
					prevEl: '#trainer-left',
					nextEl: '#trainer-right'
				}"
				@swiperactiveindexchange="onSlideChange">
				<swiper-slide v-for="(trainer, i) in trainers" class="trainer__slide">
					<img
						v-if="i == 0"
						class="trainer__image"
						src="@/assets/images/trainer.webp"
						alt="trainer" />
				</swiper-slide>
			</swiper-container>
			<div class="trainer__nav">
				<span class="trainer__label">
					[{{ curSlide.toString().padStart(2, '0')
					}}<span class="grey">/{{ trainers.length }}</span
					>]
				</span>
				<div class="trainer__buttons">
					<SliderButton class="trainer__button" id="trainer-left" />
					<SliderButton class="trainer__button" is-right id="trainer-right" />
				</div>
			</div>
			<TrainerThingy class="trainer__thingy" />
		</div>
		<swiper-container
			slides-per-view="1.3"
			class="trainer__small-slider"
			v-if="!isBig"
			space-between="20">
			<swiper-slide v-for="(trainer, i) in trainers" class="trainer__small-slide">
				<div class="trainer__small-container">
					<img
						class="trainer__small-img"
						src="@/assets/images/trainer.webp"
						alt="trainer foto" />
				</div>
				<div class="trainer__small-content">
					<span class="grey">[{{ (i + 1).toString().padStart(2, '0') }}]</span>
					<h2 class="trainer__small-title">{{ trainer.title }}</h2>
					<p class="trainer__smal-desc">{{ trainer.desc }}</p>
				</div>
				<Button text="Записаться" />
			</swiper-slide>
		</swiper-container>
	</section>
</template>

<script setup>
import { ref } from 'vue';
import Button from '../Button.vue';
import SectionContent from '../SectionContent.vue';
import TrainerThingy from '../TrainerThingy.vue';
import SliderButton from '../SliderButton.vue';
import trainerImg from '@/assets/images/trainer.webp';

const mySwiper = ref();
const curSlide = ref(1);
const isBig = window.innerWidth >= 1024;
const trainers = [
	{
		img: trainerImg,
		title: 'Андрей Логинов',
		desc: 'Мастер спорта международного класса, многократный победитель и призёр чемпионатов Европы.'
	},
	{
		img: trainerImg,
		title: 'John Smith',
		desc: 'Мастер спорта международного класса, многократный победитель и призёр чемпионатов Европы.'
	},
	{
		img: trainerImg,
		title: 'John Snow',
		desc: 'Мастер спорта международного класса, многократный победитель и призёр чемпионатов Европы.'
	},
	{
		img: trainerImg,
		title: 'Ned Stark',
		desc: 'Мастер спорта международного класса, многократный победитель и призёр чемпионатов Европы.'
	}
];

const onSlideChange = () => {
	curSlide.value = mySwiper.value?.swiper.activeIndex + 1;
};
</script>

<style lang="scss" scoped>
.trainer {
	margin-bottom: 10vmax;
	margin-top: 10vmax;
	display: flex;
	flex-direction: column;
	gap: 5vw;
	&__small {
		&-desc {
			color: var(--grey);
		}
		&-container {
			background-color: #1d1d1d;
			overflow: hidden;
		}
		&-img {
			aspect-ratio: 1;
			width: 100%;
			height: 100%;
			transform: scale(0.9) translateY(10%);
			object-fit: contain;
		}
		&-slide {
			display: flex;
			align-items: start;
			flex-direction: column;
			gap: 16px;
		}
		&-content {
			display: flex;
			align-items: start;
			flex-direction: column;
			gap: 12px;
		}
		&-slider {
			@media only screen and (min-width: 1024) {
				display: none;
			}
		}
	}
	&__nav {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	&__buttons {
		display: flex;
		gap: 12px;
	}
	&__slide {
		background-color: #1d1d1d;
		overflow: hidden;
	}
	&__image {
		transform: translateY(10%);
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	&__title {
		font-size: clamp(24px, 2.8vw, 50px);
		font-weight: 500;
	}
	&__cta {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: start;
		padding: 2rem 0;
		&-btn {
			margin-top: auto;
		}
	}
	&__text {
		max-width: 30ch;
	}
	&__main {
		display: grid;
		grid-auto-rows: 40vw;
		grid-template-columns: max-content max-content 25rem max-content max-content;
		gap: 1rem;
		justify-content: space-between;
		@media only screen and (max-width: 1024px) {
			display: none;
		}
	}
	&__thingy {
		width: 100%;
		height: 100%;
		object-fit: cover;
		&:last-of-type {
			transform: rotate(180deg);
		}
	}
}
</style>
