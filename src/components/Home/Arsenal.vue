<template>
	<section class="arsenal" id="arsenal">
		<div class="arsenal__top">
			<h2 class="arsenal__title">Наш арсенал</h2>
			<div class="arsenal__box">
				<p class="arsenal__text">
					У нас есть огромный выбор оружия. Независимо от вашего опыта и предпочтений,
					<span class="grey">у нас есть что-то для каждого любителя стрельбы.</span>
				</p>
			</div>
		</div>
		<swiper-container
			class="arsenal__list"
			grab-cursor="true"
			centered-slides="true"
			slides-per-view="3"
			navigation="true"
			:breakpoints="{
				300: {
					slidesPerView: 1
				},
				768: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				}
			}">
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
			<SliderButton id="arsenal__nav-prev" />
			<span>[01<span class="grey">/12</span>]</span>
			<SliderButton id="arsenal__nav-next" is-right />
		</div>
	</section>
</template>

<script setup>
import img1 from '@/assets/images/arsenal-1.webp';
import img2 from '@/assets/images/arsenal-2.webp';
import SliderButton from '../SliderButton.vue';

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
		transform: scale(1.3) translate(0, 2rem);
	}
	.arsenal__item-desc {
		filter: blur(0px);
		opacity: 1;
		transform: translateY(0);
	}
}
.arsenal {
	margin-top: 9rem;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	margin-bottom: 56px;

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
		border-radius: 10px;
		&-title {
			font-weight: 500;
			font-size: 1.6rem;
			transition: font-size 0.3s;
			max-width: 10ch;
		}
		&-image {
			width: 100%;
			height: 100%;
			object-fit: cover;
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
			border-radius: 10px;
		}
		&-desc {
			max-width: 25ch;
			font-size: 0.8rem;
			filter: blur(10px);
			opacity: 0;
			transform: translateY(100%);
			transition: opacity 0.7s, filter 0.7s, transform 0.7s;
		}
	}
	&__top {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		row-gap: 32px;
		column-gap: 16px;
		padding: 0 4vw;
	}
	&__box {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 32px;
	}

	&__title {
		font-size: 1.6rem;
		font-weight: 500;
	}
	&__text {
		font-size: clamp(30px, 4vw, 70px);
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
