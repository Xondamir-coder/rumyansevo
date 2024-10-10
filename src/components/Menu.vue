<template>
	<div class="menu" id="menu">
		<MenuThingy class="menu__thingy" />
		<div class="menu__top">
			<ul class="social">
				<li class="social__item" v-for="link in socialLinks" :key="link.href">
					<a href="#" class="social__item">
						<component :is="link.icon" />
					</a>
				</li>
			</ul>
			<button class="menu__close">
				<Close @click="emits('closeMenu')" />
			</button>
		</div>
		<ul class="menu__links">
			<li class="menu__item" v-for="link in routingLinks" :key="link.to">
				<RouterLink :to="link.to" class="menu__link">{{ link.text }}</RouterLink>
			</li>
		</ul>
		<div class="menu__bottom">
			<p class="menu__bottom-text">{{ new Date().getFullYear() }} все права защищены</p>
			<p class="menu__bottom-text">
				Дизайн — Karanikola, Разработка
				<a href="https://spacelabs.uz" target="_blank">Spacelabs</a>
			</p>
		</div>
		<MenuThingy class="menu__thingy" />
	</div>
</template>

<script setup>
import Facebook from './Icons/Facebook.vue';
import Instagram from './Icons/Instagram.vue';
import Close from './Icons/Close.vue';
import Youtube from './Icons/Youtube.vue';
import MenuThingy from './MenuThingy.vue';

const socialLinks = [
	{
		href: '#',
		icon: Instagram
	},
	{
		href: '#',
		icon: Youtube
	},
	{
		href: '#',
		icon: Facebook
	}
];
const routingLinks = [
	{
		to: '/complex',
		text: 'О комплексе'
	},
	{
		to: '/program',
		text: 'Программы'
	},
	{
		to: '/price',
		text: 'Прайс'
	},
	{
		to: '/corporate',
		text: 'Корпоративным клиентам'
	},
	{
		to: '/school',
		text: 'Школа'
	},
	{
		to: '/news',
		text: 'Новости'
	},
	{
		to: '/contact',
		text: 'Контакты'
	}
];

const emits = defineEmits(['closeMenu']);
</script>

<style lang="scss" scoped>
.menu {
	$duration: 1s;
	position: fixed;
	inset: 0;
	width: 100%;
	height: 100%;
	background-color: var(--black);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 3vh 4.5rem;
	transition: transform $duration, opacity $duration, visibility $duration;
	z-index: 100;
	&.hidden {
		transform: translateX(-100%);
		// opacity: 0;
		// visibility: hidden;
	}
	@media only screen and (max-width: 1000px) {
		padding: 2.5rem 2rem;
	}
	&__close svg > * {
		transition: stroke 0.3s;
	}
	&__close:hover svg > * {
		stroke: var(--yellow);
	}
	&__links {
		display: flex;
		align-items: center;
		flex-direction: column;
		text-align: center;
		gap: 3vh;
	}
	&__link {
		font-size: 2.5rem;
		line-height: 1;
		transition: color 0.3s;
		position: relative;
		letter-spacing: -1px;
		&::after {
			position: absolute;
			bottom: 0;
			display: block;
			content: '';
			width: 100%;
			transform-origin: right;
			height: 3px;
			background: var(--yellow);
			transform: scaleX(0);
			transition: transform 0.5s;
		}
		&:hover::after {
			transform-origin: left;
			transform: scaleX(1);
		}
	}
	&__thingy {
		height: 100%;
		position: absolute;
		top: 0;
		padding: 1.5vh 0;
		z-index: -1;
		&:first-of-type {
			left: 4.5%;
			@media only screen and (max-width: 1000px) {
				left: 2%;
			}
		}
		&:last-of-type {
			right: 4.5%;
			transform: rotate(180deg);
			@media only screen and (max-width: 1000px) {
				right: 2%;
			}
		}
	}
	&__top,
	&__bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 10px;

		a {
			transition: color 0.3s;
			&:hover {
				color: var(--yellow);
			}
			text-decoration: underline;
		}
	}
	&__bottom {
		@media only screen and (max-width: 500px) {
			justify-content: center;
		}
	}
}

.social {
	display: flex;
	gap: 12px;
	&__item {
		display: flex;
		align-items: center;
		svg > * {
			transition: fill 0.3s;
		}
		&:hover svg > * {
			fill: var(--yellow);
		}
	}
}
</style>
