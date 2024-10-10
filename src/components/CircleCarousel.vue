<template>
	<section class="carousel" id="carousel">
		<div class="carousel__main">
			<CarouselThingy class="carousel__thingy" />
			<div class="carousel__container">
				<div class="carousel__image-container">
					<img
						class="carousel__image"
						alt="bg image"
						src="@/assets/images/carousel-1.webp" />
				</div>
				<svg viewBox="0 0 776 781" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="388" cy="406" r="374.5" fill="#1D1D1D" stroke="#404040" />
					<path
						d="M744.171 290.273C768.61 365.489 768.61 446.511 744.171 521.727C719.731 596.943 672.108 662.491 608.125 708.977"
						stroke="#404040" />
					<path
						d="M608.126 708.977C544.143 755.463 467.087 780.5 388 780.5C308.913 780.5 231.857 755.463 167.874 708.977"
						stroke="#404040" />
					<path
						d="M388 31.5C450.912 31.5 512.805 47.3914 567.935 77.6995C623.065 108.008 669.647 151.75 703.356 204.869"
						stroke="#E7D387"
						stroke-width="3" />
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
					<mask id="path-7-inside-1_2001_865" fill="white">
						<path d="M387 0L390 0V61H387V0Z" />
					</mask>
					<path d="M387 0L390 0V61H387V0Z" fill="white" />
					<path
						d="M387 0V-3H384V0L387 0ZM390 0L393 0V-3H390V0ZM390 61V64H393V61H390ZM387 61H384V64H387V61ZM387 3H390V-3H387V3ZM387 0V61H393V0L387 0ZM390 58H387V64H390V58ZM390 61V0L384 0V61H390Z"
						fill="#E7D387"
						mask="url(#path-7-inside-1_2001_865)" />
					<path
						d="M774.922 282L775.698 284.898L716.777 300.686L716 297.788L774.922 282Z"
						fill="white" />
					<path
						d="M1.51953 282L0.743074 284.898L59.6645 300.686L60.441 297.788L1.51953 282Z"
						fill="white" />
					<path
						d="M629.547 730.133L627.426 732.254L584.292 689.121L586.413 686.999L629.547 730.133Z"
						fill="white" />
					<path
						d="M146 729.133L148.121 731.254L191.255 688.121L189.134 685.999L146 729.133Z"
						fill="white" />
				</svg>
				<div class="carousel__content">
					<h3 class="carousel__title">200</h3>
					<p class="carousel__text">Метательных машинок</p>
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

onMounted(() => {
	// console.log(document.querySelector('.carousel__border circle').getTotalLength());
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
	margin-top: 140px;

	&__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;

		&-container {
			transform: scale(0.78) translateY(2.8%);
			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				border-radius: 50%;
				box-shadow: 0px 4px 150px 50px #000000 inset;
				background: #00000072;
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
		height: 200px;
		width: 1px;
		background-color: var(--grey);
	}
	&__text {
		font-size: clamp(20px, 5vw, 36px);
		font-weight: 500;
		text-align: center;
		max-width: 10ch;
	}
	&__title {
		background-image: var(--text-gradient);
		font-size: clamp(32px, 7vw, 86px);
		font-weight: 400;
		letter-spacing: -0.06em;
		color: transparent;
		-webkit-background-clip: text;
	}
	&__content {
		place-self: center;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 15px;
		z-index: 2;
	}
	&__container {
		display: grid;
		& > * {
			grid-area: 1/1/2/2;
		}
	}
}
</style>
