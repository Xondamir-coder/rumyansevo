<template>
	<section class="slider" id="video-slider">
		<button class="slider__play">
			<Play />
		</button>
		<div class="slider__images">
			<img
				class="slider__image"
				width="1600"
				height="1066"
				src="@/assets/images/slider-1.webp"
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
					<h1 class="slider__title">Единственный в Москве</h1>
					<p class="slider__text">
						Скит, трап, спортинг-компакт и хеликс — все виды стендовой стрельбы в одном
						месте.
					</p>
				</div>
				<div class="slider__right">
					<button class="slider__button">
						<ArrowLeft class="slider__button-icon" />
						<Borders />
					</button>
					<button class="slider__button slider__button--right">
						<ArrowLeft class="slider__button-icon" />
						<Borders />
					</button>
				</div>
			</div>
			<ul class="slider__bottom">
				<li class="slider__item" v-for="(label, i) in sliderLabels" :key="label">
					<button class="slider__item-button" :class="{ active: i == curSlideIndex }">
						{{ label }}
					</button>
				</li>
			</ul>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue';
import ArrowLeft from '../Icons/ArrowLeft.vue';
import Play from '../Icons/Play.vue';
import Borders from '../Borders.vue';

const curSlideIndex = ref(0);
const sliderLabels = [
	'Единственный в Москве',
	'Имитация полетов',
	'Метательные машинки',
	'Водоем',
	'Лесная поляна',
	'Лесная площадка'
];
</script>

<style lang="scss" scoped>
.slider {
	position: relative;
	min-height: 100vh;
	display: grid;
	align-items: end;

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
		font-size: 1rem;
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
		z-index: -1;
		&::after {
			content: '';
			position: absolute;
			inset: 0;
			background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.72) 73.26%);
		}
	}
	&__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
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
	&__button {
		display: grid;
		place-content: center;
		width: 2.8rem;
		height: 2.8rem;
		background: #ffffff14;
		backdrop-filter: blur(24px);
		position: relative;
		&--right &-icon {
			transform: rotate(180deg);
		}
		svg {
			width: 1.2rem;
			height: 1.2rem;
		}
		&-icon > * {
			transition: color 0.3s, transform 0.3s;
		}
		// &:hover &-border {
		// 	border-color: var(--yellow);
		// }
		&:hover &-icon > * {
			color: var(--yellow);
		}
		&--right:hover &-icon > *,
		&:hover &-icon > * {
			transform: translateX(-3px);
		}
	}
}
.transparent-white {
	color: #ffffff80;
}
</style>
