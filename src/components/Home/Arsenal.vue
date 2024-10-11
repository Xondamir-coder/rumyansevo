<template>
	<section class="arsenal" id="arsenal">
		<div class="arsenal__big">
			<SectionContent
				class="arsenal__padding"
				title="Наш арсенал"
				text-white="У нас есть огромный выбор оружия. Независимо от вашего опыта и предпочтений,"
				text-gray="у нас есть что-то для каждого любителя стрельбы." />
			<swiper-container
				ref="mySwiper"
				class="arsenal__list"
				grab-cursor="true"
				centered-slides="true"
				slides-per-view="3"
				:navigation="{
					prevEl: '#arsenal-prev',
					nextEl: '#arsenal-next'
				}"
				:breakpoints="{
					300: {
						slidesPerView: 1.15,
						centeredSlides: false
					},
					768: {
						slidesPerView: 1
					},
					1024: {
						slidesPerView: 3
					}
				}"
				@swiperactiveindexchange="onActiveIndexChange">
				<swiper-slide class="arsenal__item" v-for="item in items" :key="item.title">
					<img
						class="arsenal__item-bg"
						width="460"
						height="460"
						src="@/assets/images/yellow-bg.png"
						alt="bg" />
					<span class="arsenal__item-label">
						{{ getTypeName(item.type) }}
					</span>
					<img
						class="arsenal__item-image"
						width="400"
						height="400"
						:src="item.img"
						:alt="item.desc" />
					<h2 class="arsenal__item-title">
						{{ item.title }}
					</h2>
					<p class="arsenal__item-desc">
						{{ item.desc }}
					</p>
				</swiper-slide>
			</swiper-container>
			<div class="arsenal__nav">
				<SliderButton id="arsenal-prev" />
				<span
					>[{{ curSlide.toString().padStart(2, '0')
					}}<span class="grey">/{{ items.length }}</span
					>]</span
				>
				<SliderButton id="arsenal-next" is-right />
			</div>
		</div>
		<div class="arsenal__small">
			<div class="arsenal__small-top">
				<h1 class="arsenal__title">Сезонный супероффер</h1>
				<span class="arsenal__small-percent">-25%</span>
			</div>
			<p class="arsenal__small-text">Скидка на первое посещение</p>
			<Button text="Подробнее" class="arsenal__small-btn" />
			<div class="arsenal__small-images">
				<img
					class="arsenal__small-image"
					src="@/assets/images/arsenal-1.webp"
					alt="first" />
				<img
					class="arsenal__small-image"
					src="@/assets/images/arsenal-2.webp"
					alt="first" />
			</div>
		</div>
	</section>
</template>

<script setup>
import img1 from '@/assets/images/arsenal-1.webp';
import img2 from '@/assets/images/arsenal-2.webp';
import SliderButton from '../SliderButton.vue';
import SectionContent from '../SectionContent.vue';
import { ref } from 'vue';
import Button from '../Button.vue';

const mySwiper = ref();
const curSlide = ref(1);
const items = [
	{
		type: 'pistol',
		img: img1,
		title: 'Colt Commander',
		desc: 'самозарядный пистолет крупного калибра (до 12,7 мм). Позиционируется как охотничье оружие, спортивное оружие и оружие для самозащиты'
	},
	{
		type: 'pistol',
		img: img2,
		title: 'Colt Python',
		desc: 'пистолет Python, позиционируемый как охотничье оружие, спортивное оружие и оружие для самозащиты'
	},
	{
		type: 'pistol',
		img: img1,
		title: 'Colt Python',
		desc: 'пистолет Python, позиционируемый как охотничье оружие, спортивное оружие и оружие для самозащиты'
	},
	{
		type: 'pistol',
		img: img2,
		title: 'Colt Python',
		desc: 'пистолет Python, позиционируемый как охотничье оружие, спортивное оружие и оружие для самозащиты'
	},
	{
		type: 'pistol',
		img: img1,
		title: 'Colt Python',
		desc: 'пистолет Python, позиционируемый как охотничье оружие, спортивное оружие и оружие для самозащиты'
	},
	{
		type: 'pistol',
		img: img2,
		title: 'Colt Python',
		desc: 'пистолет Python, позиционируемый как охотничье оружие, спортивное оружие и оружие для самозащиты'
	}
];

const onActiveIndexChange = () => {
	curSlide.value = mySwiper.value?.swiper.activeIndex + 1;
};

const getTypeName = type => {
	switch (type) {
		case 'pistol':
			return 'Пистолет';
		case 'shotgun':
			return 'Дробовик';
		case 'sniper':
			return 'Снайперская винтовка';
		case 'assault':
			return 'Ассault';
		default:
			return 'default';
	}
};
</script>

<style lang="scss" scoped>
.swiper-slide-active .arsenal__item-bg {
	opacity: 1;
}
.swiper-slide-active {
	color: #1d1d1d !important;
	transform: scale(1) !important;
	.arsenal__item-label {
		border-color: #00000026;
	}
	.arsenal__item-title {
		font-size: 2.4rem;
	}
	.arsenal__item-image {
		opacity: 1 !important;
		transform: scale(1.3) translate(0, 2rem);
	}
	.arsenal__item-desc {
		filter: blur(0px);
		opacity: 1;
		transform: translateY(0);
	}
}
.arsenal {
	margin-top: 10vw;
	&__title {
		line-height: 1.1;
		font-size: 28px;
		font-weight: 500;
	}
	&__small {
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: 16px 4vw;
		padding-bottom: 0;
		color: var(--black);
		position: relative;
		background: linear-gradient(to bottom, #ebd07f, #e8c35b);
		@media only screen and (min-width: 768px) {
			display: none;
		}
		&-top {
			display: flex;
		}
		&-percent {
			font-size: 56px;
			font-weight: 500;
			letter-spacing: -0.06em;
		}
		&-btn {
			margin-top: 16px;
			align-self: start;
			color: #fff;
			background: #000;
			& > * {
				--stroke: #fff !important;
			}
		}
		&-bg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			opacity: 0.3;
			object-fit: cover;
		}
		&-text {
			font-weight: 500;
			font-size: 16px;
		}
		&-images {
			display: grid;
			overflow: hidden;
		}
		&-image {
			grid-area: 1/1/2/2;
			width: 100%;
			height: 100%;
			object-fit: cover;
			transform: scale(1.5) translateY(20%);
			&:nth-of-type(2) {
				transform: scale(1.5) translateY(20%) rotate(-15deg);
			}
		}
	}
	&__big {
		display: flex;
		flex-direction: column;
		gap: 3rem;
		@media only screen and (max-width: 768px) {
			display: none;
		}
	}

	&__padding {
		padding: 0 4vw;
	}
	&__nav {
		align-self: center;
		display: flex;
		gap: 1.5rem;
		align-items: center;
	}
	&__list {
		display: grid;
		@media only screen and (max-width: 768px) {
			padding: 0 4vw;
		}
	}

	&__item {
		cursor: pointer;
		background-color: #1d1d1d;
		padding: 2rem;
		height: 100%;
		position: relative;
		display: flex;
		align-items: start;
		gap: 12px;
		flex-direction: column;
		transition: transform 0.3s, color 0.3s;
		transform: scale(0.9);
		color: #ffffff80;
		&:nth-of-type(even) .arsenal__item-image {
			opacity: 0.3;
		}
		&-title {
			font-weight: 500;
			font-size: 1.9rem;
			transition: font-size 0.3s;
			max-width: 10ch;
		}
		&-image {
			align-self: center;
			width: 100%;
			height: 100%;
			object-fit: contain;
			transition: transform 0.3s;
		}
		&-label {
			padding: 8px 12px;
			border: 1px solid #ffffff26;
			font-size: 0.7rem;
			font-weight: 500;
		}
		&-bg {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			opacity: 0;
			transition: opacity 0.3s;
			z-index: -1;
		}
		&-desc {
			max-width: 25ch;
			font-size: 1rem;
			filter: blur(10px);
			opacity: 0;
			transform: translateY(100%);
			transition: opacity 0.7s, filter 0.7s, transform 0.7s;
		}
	}
}
</style>
