<template>
	<header class="header">
		<RouterLink to="/" class="header__logo">
			<Logo />
		</RouterLink>
		<div class="header__right">
			<div class="header__timing">
				<div class="header__timing-left">
					<button class="header__menu-btn" @click="emits('openMenu')">
						<span>Меню</span>
						<Hamburger />
					</button>
				</div>
				<div class="header__timing-divisor"></div>
				<p class="header__timing-right">Пн-Вс 9:00 - 21:00</p>
			</div>
			<div class="header__buttons">
				<a href="tel:+7 925 201 57 54" class="header__tel"> + 7 925 201 57 54 </a>
				<Button text="Забронировать" @click="book" />
			</div>
		</div>
		<button class="header__menu-small_btn" @click="emits('openMenu')">
			<span>Меню</span>
			<svg
				width="13"
				height="13"
				viewBox="0 0 13 13"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M1 1L4.53553 4.53553M8.77817 4.53553L12.3137 1M1 12.3136L4.53553 8.77806M8.77817 8.77806L12.3137 12.3136"
					stroke="white"
					stroke-width="1.8" />
			</svg>
		</button>
	</header>
</template>

<script setup>
import Logo from './Logo.vue';
import Hamburger from './Icons/Hamburger.vue';
import Button from './Button.vue';

const book = () => {
	console.log('boooking');
};
const emits = defineEmits(['openMenu']);
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.3rem 0;
	@media only screen and (max-width: 1000px) {
		padding: 1.3rem 0;
		& > *:not(.header__logo):not(.header__menu-small_btn) {
			display: none !important;
		}
	}
	&__logo {
		width: 10.8rem;
		height: 2.5rem;
	}
	&__menu {
		&-small_btn {
			display: flex;
			align-items: center;
			background-color: var(--grey);
			padding: 12px 16px;
			font-size: 16px;
			gap: 10px;
			@media only screen and (min-width: 1000px) {
				display: none;
			}
		}
		&-btn {
			display: flex;
			font-weight: 500;
			align-items: center;
			gap: 12px;
		}
	}
	&__tel {
		font-size: 0.85rem;
		background-color: #40404069;
		transition: box-shadow 0.3s, transform 0.3s;
		&:hover {
			box-shadow: 0 0 12px #ffffff77;
			transform: translateY(-5px);
		}
	}
	&__buttons {
		display: flex;
		align-items: center;
		gap: 14px;
		font-size: 0.8rem;
		& > * {
			padding: 1rem 1.35rem;
		}
	}
	&__right {
		display: flex;
		align-items: center;
		gap: 9.25rem;
		@media only screen and (max-width: 1200px) {
			gap: 4vw;
		}
	}
	&__timing {
		display: flex;
		align-items: center;
		gap: 1.6rem;
		font-size: 0.85rem;
		&-left,
		&-left svg > * {
			transition: color 0.3s, fill 0.3s;
		}
		&-left:hover {
			color: var(--yellow);
			svg > * {
				fill: var(--yellow);
			}
		}
		&-right {
			color: #737373;
		}
		&-divisor {
			background-color: #737373;
			width: 1px;
			height: 25px;
		}
	}
}
</style>
