<template>
	<section class="carousel" id="carousel">
		<div class="carousel__main">
			<CarouselThingy class="carousel__thingy" />
			<div class="carousel__container">
				<div class="carousel__image-container">
					<img
						v-for="(img, i) in images"
						:key="img"
						class="carousel__image"
						:class="{ active: i == curSlide }"
						alt="bg image"
						:src="img" />
				</div>
				<svg viewBox="0 0 776 781" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="388" cy="406" r="374.5" fill="#1D1D1D" stroke="#404040" />
					<path
						ref="circleBorderRef"
						d="M388 31.5C437.049 31.5 485.617 41.1609 530.932 59.931C576.247 78.7011 617.422 106.213 652.104 140.896C686.787 175.578 714.299 216.753 733.069 262.068C751.839 307.383 761.5 355.951 761.5 405C761.5 454.049 751.839 502.617 733.069 547.932C714.299 593.247 686.787 634.422 652.104 669.104C617.422 703.787 576.247 731.299 530.932 750.069C485.617 768.839 437.049 778.5 388 778.5C338.951 778.5 290.383 768.839 245.068 750.069C199.753 731.299 158.578 703.787 123.896 669.104C89.2128 634.422 61.701 593.247 42.9309 547.932C24.1608 502.617 14.5 454.049 14.5 405C14.5 355.951 24.1609 307.383 42.9311 262.068C61.7012 216.752 89.2131 175.578 123.896 140.895C158.578 106.213 199.753 78.701 245.068 59.9309C290.383 41.1608 338.952 31.5 388 31.5L388 31.5Z"
						stroke="#E7D387"
						stroke-width="3" />
					<path
						d="M744.171 290.273C768.61 365.489 768.61 446.511 744.171 521.727C719.731 596.943 672.108 662.491 608.125 708.977"
						stroke="#404040" />
					<path
						d="M608.126 708.977C544.143 755.463 467.087 780.5 388 780.5C308.913 780.5 231.857 755.463 167.874 708.977"
						stroke="#404040" />
					<path
						d="M167.874 708.977C103.892 662.491 56.2684 596.943 31.8293 521.727C7.39019 446.511 7.39023 365.489 31.8294 290.273"
						stroke="#404040" />
					<circle
						cx="388"
						cy="406"
						r="343.5"
						stroke="#404040"
						stroke-width="3"
						stroke-dasharray="182 182" />
					<mask id="path-7-inside-1_2001_863" fill="white">
						<path d="M387 0L390 0V61H387V0Z" />
					</mask>
					<path d="M387 0L390 0V61H387V0Z" fill="white" />
					<path
						class="path"
						:class="{ active: curSlide >= 0 }"
						d="M387 0V-3H384V0L387 0ZM390 0L393 0V-3H390V0ZM390
					61V64H393V61H390ZM387 61H384V64H387V61ZM387 3H390V-3H387V3ZM387 0V61H393V0L387
					0ZM390 58H387V64H390V58ZM390 61V0L384 0V61H390Z"
						fill="#fff"
						mask="url(#path-7-inside-1_2001_863)" />
					<path
						class="path"
						:class="{ active: curSlide >= 1 }"
						d="M774.922 282L775.698 284.898L716.777 300.686L716 297.788L774.922 282Z"
						fill="white" />
					<path
						class="path"
						:class="{ active: curSlide >= 4 }"
						d="M1.51953 282L0.743074 284.898L59.6645 300.686L60.441 297.788L1.51953 282Z"
						fill="white" />
					<path
						class="path"
						:class="{ active: curSlide >= 2 }"
						d="M629.547 730.133L627.426 732.254L584.292 689.121L586.413 686.999L629.547 730.133Z"
						fill="white" />
					<path
						class="path"
						:class="{ active: curSlide >= 3 }"
						d="M146 729.133L148.121 731.254L191.255 688.121L189.134 685.999L146 729.133Z"
						fill="white" />
				</svg>
				<div
					class="carousel__content"
					v-for="(item, i) in content"
					:key="item.title"
					:class="{ active: i == curSlide }">
					<h3 class="carousel__title">{{ item.label }}</h3>
					<p class="carousel__text">{{ item.text }}</p>
				</div>
			</div>
			<CarouselThingy class="carousel__thingy" />
		</div>
		<div class="carousel__bottom"></div>
	</section>
</template>

<script setup>
import { onMounted } from 'vue';
import CarouselThingy from './CarouselThingy.vue';
import { ref } from 'vue';
import gsap from 'gsap';
import img1 from '@/assets/images/slider-1.webp';
import img2 from '@/assets/images/slider-2.jpg';
import img3 from '@/assets/images/slider-3.jpg';
import img4 from '@/assets/images/slider-4.jpg';
import img5 from '@/assets/images/slider-5.jpg';

const circleBorderRef = ref();
const curSlide = ref(0);
const images = [img1, img2, img3, img4, img5];
const content = [
	{ label: 200, text: 'Метательных машинок' },
	{ label: '20 минут', text: 'От центра Москвы' },
	{ label: 'Имитация', text: 'Полетов птиц' },
	{ label: 'Водоем', text: 'С активными мишенями' },
	{ label: 28, text: 'Стрелковых вышек' }
];
onMounted(() => {
	const totalPath = circleBorderRef.value.getTotalLength();
	const oneSlideAnimationDuration = 2 * 1000; // 2 seconds in milliseconds
	const animationDuration = oneSlideAnimationDuration * content.length; // Multiply by 1000 to convert seconds to milliseconds
	gsap.fromTo(
		circleBorderRef.value,
		{
			strokeDashoffset: totalPath,
			strokeDasharray: totalPath
		},
		{
			strokeDashoffset: 0,
			duration: animationDuration / 1000, // Convert milliseconds back to seconds for GSAP
			repeat: -1,
			ease: 'none'
		}
	);
	setInterval(() => {
		console.log('hello');
		curSlide.value = (curSlide.value + 1) % content.length;
	}, oneSlideAnimationDuration);
});
</script>

<style lang="scss" scoped>
@keyframes border-full {
	0% {
		stroke-dashoffset: 2157.40185546875;
		stroke-dasharray: 2157.40185546875;
	}
	100% {
		stroke-dashoffset: 0;
		// stroke-dasharray: 0;
	}
}
.carousel {
	display: flex;
	flex-direction: column;
	margin-top: 7vmax;

	&__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
		opacity: 0;
		filter: blur(10px);
		transition: opacity 0.5s, filter 0.5s;

		&.active {
			opacity: 1;
			filter: blur(0);
		}
		&-container {
			display: grid;
			transform: scale(0.78) translateY(2.8%);

			& > * {
				grid-area: 1/1/2/2;
			}
			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				border-radius: 50%;
				box-shadow: 0px 4px 150px 10px #000000 inset;
				background: rgba(0, 0, 0, 0.5);
				z-index: 1;
			}
		}
	}

	&__main {
		display: grid;
		align-items: center;
		grid-template-columns: 1fr 2fr 1fr;
		@media only screen and (max-width: 768px) {
			grid-template-columns: 1fr 3fr 1fr;
		}
	}
	&__bottom {
		align-self: center;
		height: 15vw;
		width: 1px;
		background-color: var(--grey);
	}
	&__text {
		font-size: clamp(20px, 5vw, 36px);
		font-weight: 500;
		text-align: center;
		max-width: 10ch;
		line-height: 1;
		transform: translateY(25px);
	}
	&__title {
		background-image: var(--text-gradient);
		font-size: clamp(32px, 7vw, 86px);
		font-weight: 400;
		letter-spacing: -0.06em;
		color: transparent;
		-webkit-background-clip: text;
		transform: translateY(-25px);
	}
	&__content {
		place-self: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 15px;
		z-index: 2;
		text-align: center;
		& > * {
			opacity: 0;
			filter: blur(10px);
			transition: opacity 0.7s, filter 0.7s, transform 0.7s;
		}
		&.active > * {
			opacity: 1;
			filter: blur(0);
			transform: translateY(0);
		}
	}
	&__container {
		display: grid;
		& > * {
			grid-area: 1/1/2/2;
		}
	}
}
.path {
	transition: fill 0.5s;
	fill: #fff;
	&.active {
		fill: var(--yellow);
	}
}
</style>
