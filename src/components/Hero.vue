<template>
	<section class="hero">
		<h1 class="hero__text">
			<span class="gradient"> Уникальный спортивный комплекс, </span> единственный в России
			подобного формата
		</h1>
		<div class="hero__arrows">
			<ArrowDown />
			<ArrowDown />
			<ArrowDown />
		</div>
		<img
			width="576"
			height="529"
			src="@/assets/images/bullet-1.webp"
			alt="bullet"
			class="hero__bullet hero__bullet--1" />
		<img
			width="1087"
			height="1087"
			src="@/assets/images/bullet-2.webp"
			alt="bullet"
			class="hero__bullet hero__bullet--2" />
	</section>
</template>

<script setup>
import ArrowDown from './Icons/ArrowDown.vue';
</script>

<style lang="scss" scoped>
.hero {
	margin-top: 2rem;
	padding: 0 0.5rem;
	position: relative;
	@media only screen and (max-width: 768px) {
		margin-top: 4rem;
		padding: 0;
	}
	&__arrows {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		margin-top: 58px;
		& > * {
			@each $index in 1, 2, 3 {
				&:nth-child(#{$index}) {
					opacity: 0.33333 * $index;
				}
			}
		}
	}
	&__bullet {
		position: absolute;
		object-fit: cover;
		&--1 {
			width: min(30vw, 484.04px);
			height: min(30vw, 417.61px);
			top: 40%;
			left: 0;
			z-index: -1;
			@media only screen and (max-width: 768px) {
				top: 20%;
				left: -85px;
				transform: rotate(-20deg);
				width: 214px;
				height: 184px;
				z-index: 10;
			}
		}
		&--2 {
			top: 63%;
			right: -18%;
			width: min(50vw, 500px);
			height: min(50vw, 500px);
			filter: blur(5px);
			transform: rotate(5deg);
			z-index: 10;
			@media only screen and (max-width: 768px) {
				z-index: -1;
			}
		}
	}
	&__text {
		font-weight: 400;
		text-align: center;
		font-size: clamp(56px, 9vw, 150px);
		line-height: 0.9;
	}
}
.gradient {
	background-image: var(--text-gradient);
	background-clip: text;
	color: transparent;
}
</style>
