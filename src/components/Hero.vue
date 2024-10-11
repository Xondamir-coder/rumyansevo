<template>
	<section class="hero">
		<h1 class="hero__text">
			<span class="gradient">Уникальный спортивный комплекс,</span> единственный в России
			подобного формата
		</h1>

		<!-- Down arrows with subtle animation -->
		<div class="hero__arrows">
			<ArrowDown class="arrow arrow-1" />
			<ArrowDown class="arrow arrow-2" />
			<ArrowDown class="arrow arrow-3" />
		</div>

		<ParallaxImages />
	</section>
</template>

<script setup>
import ArrowDown from './Icons/ArrowDown.vue';
import ParallaxImages from './ParallaxImages.vue';
</script>

<style lang="scss" scoped>
@keyframes arrowBounce {
	0%,
	100% {
		transform: translateY(0); /* Arrow in its original position */
	}
	50% {
		transform: translateY(15px); /* Arrow moves down */
	}
}
.hero {
	margin-top: 2rem;
	padding: 0 0.5rem;
	position: relative;
	display: flex;
	flex-direction: column;
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
					animation: arrowBounce 2s ease-in-out infinite;
					animation-delay: #{0.2 * ($index - 1)}s; // Staggered animation delay
				}
			}
		}
	}

	&__text {
		align-self: center;
		max-width: 14ch;
		font-weight: 400;
		text-align: center;
		font-size: clamp(56px, 7vw, 150px);
		line-height: 0.9;
	}
}
.gradient {
	background-image: var(--text-gradient);
	background-clip: text;
	color: transparent;
}
</style>
