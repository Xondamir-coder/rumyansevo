<template>
	<footer class="footer">
		<div class="footer__top">
			<p class="footer__time">
				499 999 99 99 <br />
				ПН-ВС 9:00 - 21:00 <br />
				<span class="margin-top">Москва, Квартал № 4, 2с10</span>
			</p>
			<div class="footer__nav">
				<ul class="footer__list">
					<li
						class="footer__item"
						v-for="link in routingLinks.slice(0, 3)"
						:key="link.to">
						<RouterLink :to="link.to">{{ link.text }}</RouterLink>
					</li>
				</ul>
				<ul class="footer__list">
					<li class="footer__item" v-for="link in routingLinks.slice(3)" :key="link.to">
						<RouterLink :to="link.to">{{ link.text }}</RouterLink>
					</li>
				</ul>
				<Button text="Забронировать" />
			</div>
		</div>
		<div class="footer__middle">
			<p class="footer__copyright">
				{{ new Date().getFullYear() }} все права защищены <br />
				Дизайн и разработка — Karanikola
			</p>
			<p class="footer__data">
				АНО «Спортивно-стрелковый центр 7.62» <br />
				123098, РФ, г. Москва, ул. Гамалеи, д. 19, корп. 2, этаж 1, пом. V, ком. 5, оф. 15
				<br />
				<span class="margin-top">ИНН 7734447500</span>
			</p>
		</div>
		<div class="footer__bottom">
			<img
				class="footer__bullet footer__bullet--1"
				src="@/assets/images/bullet-1.webp"
				alt="bullet 1" />
			<h1 class="footer__title">РУМЯНЦЕВО</h1>
			<img
				class="footer__bullet footer__bullet--2"
				src="@/assets/images/bullet-2.webp"
				alt="bullet 2" />
		</div>
	</footer>
</template>

<script setup>
import Button from './Button.vue';

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
</script>

<style lang="scss" scoped>
.footer {
	background: var(--light-grey);
	display: flex;
	flex-direction: column;
	padding-top: 3vw !important;
	padding-bottom: 3vw !important;
	line-height: 1.6;
	& * {
		letter-spacing: 0;
	}
	@media only screen and (max-width: 768px) {
		margin-top: 20vmax;
	}
	&__copyright {
		@media only screen and (max-width: 768px) {
			display: none;
		}
	}
	&__item {
		font-size: 16px;
	}
	&__top {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 24px;
		@media only screen and (max-width: 768px) {
			flex-direction: column;
		}
	}
	&__list {
		display: flex;
		flex-direction: column;
	}
	&__time {
		color: #ffffff80;
		font-weight: 500;
		font-size: 1.1rem;
	}
	&__middle {
		margin-top: 10vw;
		display: flex;
		gap: 16px;
		justify-content: space-between;
		@media only screen and (max-width: 768px) {
			flex-direction: column;
		}
		& > * {
			flex-basis: 50%;
		}
		@media screen and (max-width: 768px) {
			margin-top: 24px;
		}
		& p:last-of-type {
			color: #ffffff80;
		}
	}
	&__nav {
		flex-grow: 1;
		justify-content: space-between;
		align-items: start;
		display: flex;
		flex-wrap: wrap;
		column-gap: 10px;
		max-width: 50%;
		row-gap: 32px;
		@media only screen and (max-width: 768px) {
			max-width: 100%;
			padding-top: 24px;
			padding-bottom: 24px;
			border-top: 1px solid var(--grey);
			border-bottom: 1px solid var(--grey);
		}
	}
	&__title {
		text-align: center;
		font-size: 14vw;
		z-index: 2;
	}
	&__bullet {
		position: absolute;
		object-fit: cover;
		&--1 {
			width: 24rem;
			height: 21rem;
			left: -12%;
			top: 10%;
		}
		&--2 {
			z-index: 2;
			top: -17%;
			right: -17%;
			width: 24rem;
			height: 24rem;
			filter: blur(5px);
		}
	}
	&__bottom {
		position: relative;
		display: flex;
		@media only screen and (max-width: 768px) {
			display: none;
		}
	}
}
.margin-top {
	margin-top: 10px;
	display: block;
	&:last-of-type {
		@media only screen and (max-width: 768px) {
			display: none;
		}
	}
}
</style>
