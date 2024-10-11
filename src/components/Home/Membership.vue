<template>
	<section class="membership">
		<div class="membership__content">
			<h1 class="membership__title">Карта клиента</h1>
			<p class="membership__text">
				Для регулярных тренировок в СК Румянцево вы можете приобрести клубную карту или
				подарочный сертификат
			</p>
			<form @submit.prevent="submitForm" class="membership__form">
				<input
					class="membership__input"
					type="text"
					placeholder="Ваше имя"
					v-model="name"
					required />
				<input
					required
					class="membership__input"
					type="tel "
					placeholder="+7 (___) ___-__-__"
					@focus="checkInput"
					v-model="tel" />
				<div class="membership__cta">
					<Button text="Забронировать" type="submit" class="membership__btn" />
					<p class="membership__data">
						Отправляя данную форму вы соглашаетесь
						<RouterLink class="membership__link" to="/policy">
							с политикой обработки персональных данных
						</RouterLink>
					</p>
				</div>
			</form>
		</div>
		<div class="membership__cards">
			<div class="membership__card" v-for="i in 3" :class="{ main: i == 1 }">
				<img
					v-if="i == 1"
					class="membership__card-bg"
					src="@/assets/images/yellow-bg.png"
					alt="yellow banner" />
				<MembershipLogo class="membership__card-logo" />
				<div class="membership__card-content">
					<h2 class="membership__card-title">Клубная карта</h2>
					<h3 class="membership__card-name">Иван Иванов</h3>
				</div>
			</div>
			<div class="membership__queue">
				<Borders />
				<Time class="membership__queue-icon" />
				<h4 class="membership__queue-title">Без очередей</h4>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue';
import Button from '../Button.vue';
import MembershipLogo from '../MembershipLogo.vue';
import Borders from '../Borders.vue';
import Time from '../Icons/Time.vue';

const name = ref('');
const tel = ref();

const checkInput = () => {
	if (!tel.value) {
		tel.value = '+7 ';
	}
};
const submitForm = () => {
	console.log(name.value, tel.value);
};
</script>

<style lang="scss" scoped>
.membership {
	display: grid;
	grid-template-areas: 'form cards';
	grid-auto-columns: 1fr;
	gap: 20vw;
	margin-bottom: 15vw;
	@media only screen and (max-width: 900px) {
		grid-template-areas:
			'form'
			'cards';
	}
	&__input {
		font-size: 1rem;
		letter-spacing: -0.05em;
		padding: 1.2rem;
		background-color: #1d1d1d;
		outline: none;
		border: 1px solid transparent;
		transition: border-color 0.3s;

		&:focus {
			border-color: #ffffff80;
		}
	}
	&__btn {
		background: linear-gradient(
			94.59deg,
			#f0dfad 0%,
			#e8b55d 33.71%,
			#e9bb58 66.75%,
			#ecda59 98.84%
		);
	}
	&__data {
		font-size: 14px;
		color: #ffffffbf;
		max-width: 30ch;

		a {
			transition: color 0.3s;
			&:hover {
				color: var(--yellow);
			}
			text-decoration: underline;
		}
	}
	&__title {
		font-size: clamp(32px, 3.2vw, 64px);
		font-weight: 500;
	}
	&__text {
		font-size: max(1.2vw, 12px);
		color: #ffffff80;
	}
	&__cta {
		margin-top: 1rem;
		display: grid;
		align-items: center;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		column-gap: 2rem;
		row-gap: 1rem;
	}
	&__form {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	&__content {
		display: flex;
		gap: 15px;
		flex-direction: column;
		grid-area: form;
	}
	&__queue {
		z-index: 15;
		width: 10.1rem;
		height: 11rem;
		padding: 1rem;
		place-self: end;
		background-color: #ffffff1f;
		backdrop-filter: blur(16px);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@media only screen and (max-width: 900px) {
			transform: translate(0, 30%);
			width: 7rem;
			height: 9rem;
		}
		&-icon {
			width: 1.6rem;
			height: 1.6rem;
		}
		&-title {
			font-weight: 500;
		}
	}
	&__cards {
		grid-area: cards;
		display: grid;
		& > * {
			grid-area: 1/1/2/2;
		}
	}
	&__queue {
		position: relative;
	}
	&__card {
		min-height: 35rem;
		position: relative;
		transform-style: preserve-3d;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1.2rem;
		transform: translate(-10%, -10%);
		@media only screen and (max-width: 900px) {
			transform: translate(15%, 0);
			width: 60vw;
			justify-self: center;
			min-height: 250px;
		}
		&:not(.main) {
			.membership__card-logo {
				--fill: #fff !important;
			}
		}
		&:nth-of-type(2) {
			background-color: #ffffff14;
			backdrop-filter: blur(16px);
			transform: perspective(1200px) translate(-25%, -4%) rotate(-10deg);
			z-index: 5;

			@media only screen and (max-width: 900px) {
				transform: perspective(1200px) translate(0, 10%) rotate(-10deg);
			}
		}
		&:nth-of-type(3) {
			background-color: #ffffff0a;
			backdrop-filter: blur(16px);
			transform: perspective(1200px) translate(-30%, 4%) rotate(-25deg);
			@media only screen and (max-width: 900px) {
				transform: perspective(1200px) translate(-10%, 20%) rotate(-20deg);
			}
		}
		&-title {
			font-size: 1.6rem;
			font-weight: 500;
		}
		&-name {
			font-weight: 500;
		}
		&-bg {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			z-index: -1;
		}
		&.main {
			z-index: 10;
			.membership__card-content {
				color: #161616;
				& .membership__card-logo {
					--fill-color: #161616;
				}
			}
		}
		&-content {
		}
	}
}
</style>
