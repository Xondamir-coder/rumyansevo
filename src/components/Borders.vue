<template>
	<div class="borders">
		<div class="border" v-for="i in 4" :key="i"></div>
	</div>
</template>

<style scoped lang="scss">
.borders {
	position: absolute;
	inset: 0;
	display: grid;
	height: 100%;
	width: 100%;
}
.border {
	grid-area: 1/1/2/2;
	width: 25%;
	height: 25%;
	transition: border-color 0.3s;
	&:first-of-type {
		border-left: 1px solid #fff;
		border-top: 1px solid #fff;
	}
	&:nth-of-type(2) {
		justify-self: end;
		border-right: 1px solid #fff;
		border-top: 1px solid #fff;
	}
	&:nth-of-type(3) {
		align-self: end;
		border-left: 1px solid #fff;
		border-bottom: 1px solid #fff;
	}
	&:last-of-type {
		place-self: end;
		border-right: 1px solid #fff;
		border-bottom: 1px solid #fff;
	}
}
</style>
