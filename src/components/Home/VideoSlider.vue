<template>
	<section class="slider" id="video-slider">
		<button class="slider__play">
			<Play />
		</button>
		<div class="slider__images">
			<img
				v-for="(img, i) in sliderImages"
				:key="img"
				class="slider__image"
				:class="{ active: i == curSlideIndex }"
				width="1600"
				height="1066"
				:src="img"
				alt="slider banner" />
		</div>
		<div class="slider__container">
			<div class="slider__top">
				<div class="slider__left">
					<p class="slider__left-label">
						[{{ (curSlideIndex + 1).toString().padStart(2, '0')
						}}<span class="transparent-white"
							>/{{ sliderLabels.length.toString().padStart(2, '0') }}</span
						>]
					</p>
					<div class="slider__content">
						<div
							class="slider__box"
							v-for="(label, i) in sliderLabels"
							:class="{ active: i == curSlideIndex }">
							<h1 class="slider__title">
								{{ label }}
							</h1>
							<p class="slider__text">
								{{ sliderTexts[i] }}
							</p>
						</div>
					</div>
				</div>
				<div class="slider__right">
					<SliderButton
						class="slider__btn"
						@click="changeCurSlide(curSlideIndex - 1)"
						:class="{ disabled: curSlideIndex == 0 }" />
					<SliderButton
						class="slider__btn"
						is-right
						@click="changeCurSlide(curSlideIndex + 1)"
						:class="{ disabled: curSlideIndex == sliderLabels.length - 1 }" />
				</div>
			</div>
			<ul class="slider__bottom">
				<li class="slider__item" v-for="(label, i) in sliderLabels" :key="label">
					<button
						class="slider__item-button"
						:class="{ active: i == curSlideIndex }"
						@click="changeCurSlide(i)">
						{{ label }}
					</button>
				</li>
			</ul>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue';
import Play from '../Icons/Play.vue';
import SliderButton from '../SliderButton.vue';
import img1 from '@/assets/images/slider-1.webp';
import img2 from '@/assets/images/slider-2.jpg';
import img3 from '@/assets/images/slider-3.jpg';
import img4 from '@/assets/images/slider-4.jpg';
import img5 from '@/assets/images/slider-5.jpg';
import img6 from '@/assets/images/slider-6.webp';

const curSlideIndex = ref(0);
const sliderLabels = [
	'Единственный в Москве',
	'Имитация полетов',
	'Метательные машинки',
	'Водоем',
	'Лесная поляна',
	'Лесная площадка'
];
const sliderTexts = [
	'Скит, трап, спортинг-компакт и хеликс — все виды стендовой стрельбы в одном месте.',
	'Имитация полета дичи',
	'Метательные машинки для тренировки',
	'Водоем для стрельбы по мишеням',
	'Лесная поляна для отдыха',
	'Лесная площадка для занятий'
];
const sliderImages = [img1, img2, img3, img4, img5, img6];

const changeCurSlide = i => {
	if (i < 0 || i >= sliderImages.length) {
		return;
	}

	curSlideIndex.value = i;
};
</script>

<style lang="scss" scoped>
.slider {
	position: relative;
	min-height: 100vh;
	display: grid;
	align-items: end;

	@media screen and (max-width: 768px) {
		min-height: 90vh;
	}
	&__btn.disabled {
		opacity: 0.4;
	}
	&__box {
		display: flex;
		flex-direction: column;
		gap: 10px;
		&.active > * {
			opacity: 1;
			filter: blur(0);
		}
		& > * {
			transition: opacity 0.7s, filter 0.7s;
			opacity: 0;
			filter: blur(10px);
		}
	}
	&__content {
		display: grid;
		& > * {
			grid-area: 1/1/2/2;
		}
	}
	&__item {
		font-size: 0.85rem;
		font-weight: 400;
		&-button {
			color: #ffffff7b;
			transition: color 0.3s;
			&:hover {
				color: var(--yellow);
			}
			&.active {
				color: #ffffff;
			}
		}
	}
	&__play {
		position: absolute;
		place-self: center;
		backdrop-filter: blur(24px);
		background-color: #ffffff14;
		width: 3.5rem;
		height: 3.5rem;
		border-radius: 50%;
		display: grid;
		place-content: center;
		transition: background-color 0.3s, backdrop-filter 0.3s;
		z-index: 10;
		svg {
			width: 0.7rem;
			height: 0.9rem;
			transition: transform 0.3s;
		}
		&:hover svg {
			transform: scale(1.2);
		}
		&:hover {
			backdrop-filter: blur(3px);
		}
		svg > * {
			transition: fill 0.3s;
		}
		&:hover svg > * {
			fill: var(--yellow);
		}
	}
	&__container {
		display: flex;
		flex-direction: column;
		gap: 2.7rem;
		z-index: 2;
	}
	&__bottom {
		display: flex;
		justify-content: space-between;
		gap: 10px;
		padding: 1.5rem 4vw;
		border-top: 1px solid #ffffff66;
		@media only screen and (max-width: 768px) {
			display: none;
		}
	}
	&__left {
		display: flex;
		flex-direction: column;
		gap: 10px;
		&-label {
			font-size: 1rem;
			font-weight: 500;
		}
	}
	&__text {
		max-width: 30ch;
		font-size: max(1rem, 16px);
		font-weight: 500;
	}
	&__title {
		font-size: clamp(26px, 5vw, 48px);
		font-weight: 500;
	}
	&__right {
		display: flex;
		gap: 12px;
	}
	&__images {
		position: absolute;
		inset: 0;
		display: grid;

		&::after {
			content: '';
			position: absolute;
			inset: 0;
			background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.72) 73.26%);
			z-index: 1;
		}
	}
	&__image {
		width: 100%;
		height: 100vh;
		object-fit: cover;
		grid-area: 1/1/2/2;
		opacity: 0;
		transition: opacity 0.7s;
		&.active {
			opacity: 1;
			z-index: 1;
		}
		@media only screen and (max-width: 768px) {
			height: 90vh;
		}
	}
	&__top {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 30px;
		justify-content: space-between;
		padding: 0 4vw;
		@media only screen and (max-width: 768px) {
			padding-bottom: 16px;
		}
	}
}
.transparent-white {
	color: #ffffff80;
}

.blur-enter-active,
.blur-leave-active {
	transition: all 0.5s ease;
}
.blur-enter,
.blur-leave-to {
	filter: blur(10px);
	opacity: 0;
}
</style>
