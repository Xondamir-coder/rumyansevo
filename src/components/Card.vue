<template>
	<div class="card">
		<Borders class="card__borders" />
		<div class="card__image-container">
			<img
				class="card__image"
				width="250"
				height="250"
				:src="content.img"
				:alt="content.title" />
			<div class="card__image-container_gradient"></div>
			<Plus class="card__plus" />
		</div>
		<div class="card__content">
			<div class="card__content-top">
				<Person v-if="content.forOnePerson" />
				<Persons v-else />
				<span v-if="content.forOnePerson">На одного</span>
				<span v-else>Несколько персон</span>
			</div>
			<h2 class="card__title">
				{{ content.title }}
			</h2>
			<p class="card__desc">{{ content.desc }}</p>
			<div class="card__price">
				{{ content.price }}
			</div>
		</div>
	</div>
</template>

<script setup>
import Borders from './Borders.vue';
import Person from './Icons/Person.vue';
import Persons from './Icons/Persons.vue';
import Plus from './Icons/Plus.vue';

const props = defineProps({
	content: Object
});
</script>

<style lang="scss" scoped>
.card {
	height: 100%;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
	align-items: center;
	position: relative;
	padding: 2rem;
	@media only screen and (max-width: 768px) {
		background-color: #1d1d1d;
	}
	@media only screen and (min-width: 768px) {
		transition: background-color 0.3s, border-color 0.3s;
		border: 2px solid #404040;
		&:hover {
			background-color: #1d1d1d;
			border-color: transparent;
			.card__borders {
				transform: scale(1);
				opacity: 1;
				visibility: visible;
			}
			.card__image-container_gradient {
				opacity: 0.8;
			}
			.card__plus {
				transform: scale(1);
			}
		}
	}

	&__title {
		font-size: 1.6rem;
		font-weight: 500;
	}
	&__desc {
		color: rgba(255, 255, 255, 0.5);
	}
	&__borders {
		@media only screen and (min-width: 768px) {
			opacity: 0;
			visibility: hidden;
			transform: scale(1.1);
			transition: transform 0.3s, opacity 0.3s, visibility 0.3s;
		}
	}
	&__content {
		display: flex;
		flex-direction: column;
		gap: 10px;
		@media only screen and (max-width: 768px) {
			gap: 16px;
		}
		&-top {
			line-height: 0;
			display: flex;
			align-items: center;
			gap: 5px;
			font-size: 0.8rem;
		}
	}
	&__plus {
		width: 1.6rem;
		height: 1.6rem;
		place-self: center;
		z-index: 1;
		transform: scale(0);
		transition: transform 0.3s;
		& > * {
			stroke: #fff;
			stroke-width: 1px;
		}
	}
	&__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		&-container {
			display: grid;
			&_gradient {
				background: radial-gradient(
					50% 50% at 50% 50%,
					rgba(0, 0, 0, 0) 0%,
					rgba(0, 0, 0, 0.2) 100%
				);
				box-shadow: 0px 4px 130px 35px #000000 inset;
				border-radius: 50%;
				opacity: 0;
				transition: opacity 0.3s;
			}
			& > * {
				grid-area: 1/1/2/2;
			}
		}
	}
}
</style>
