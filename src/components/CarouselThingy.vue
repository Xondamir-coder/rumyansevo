<template>
	<svg
		v-if="!isBig && isRight"
		viewBox="0 0 52 41"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<line x1="4.37114e-08" y1="19.5" x2="52" y2="19.5" stroke="#404040" />
		<line x1="20.5" y1="2.18555e-08" x2="20.5" y2="41" stroke="#404040" />
		<line x1="30.5" y1="10" x2="30.5" y2="31" stroke="#404040" />
		<line x1="40.5" y1="10" x2="40.5" y2="31" stroke="#404040" />
		<line x1="50.5" y1="10" x2="50.5" y2="31" stroke="#404040" />
	</svg>
	<svg
		v-if="!isBig && !isRight"
		viewBox="0 0 52 41"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<line
			y1="-0.5"
			x2="52"
			y2="-0.5"
			transform="matrix(-1 8.74228e-08 8.74228e-08 1 52 20)"
			stroke="#404040" />
		<line
			y1="-0.5"
			x2="41"
			y2="-0.5"
			transform="matrix(4.3711e-08 1 1 -4.3711e-08 32 0)"
			stroke="#404040" />
		<line
			y1="-0.5"
			x2="21"
			y2="-0.5"
			transform="matrix(4.3711e-08 1 1 -4.3711e-08 22 10)"
			stroke="#404040" />
		<line
			y1="-0.5"
			x2="21"
			y2="-0.5"
			transform="matrix(4.3711e-08 1 1 -4.3711e-08 12 10)"
			stroke="#404040" />
		<line
			y1="-0.5"
			x2="21"
			y2="-0.5"
			transform="matrix(4.3711e-08 1 1 -4.3711e-08 2 10)"
			stroke="#404040" />
	</svg>
	<svg v-else viewBox="0 0 585 61" fill="none" xmlns="http://www.w3.org/2000/svg">
		<line y1="30.5" x2="585" y2="30.5" stroke="#404040" />
		<line x1="71" y1="4.3711e-08" x2="71" y2="61" stroke="#404040" stroke-width="2" />
		<line x1="91" y1="15" x2="91" y2="46" stroke="#404040" stroke-width="2" />
		<line x1="111" y1="15" x2="111" y2="46" stroke="#404040" stroke-width="2" />
		<line x1="131" y1="15" x2="131" y2="46" stroke="#404040" stroke-width="2" />
		<line x1="151" y1="15" x2="151" y2="46" stroke="#404040" stroke-width="2" />
		<line x1="171" y1="4.3711e-08" x2="171" y2="61" stroke="#404040" stroke-width="2" />
		<line x1="191" y1="15" x2="191" y2="46" stroke="#404040" stroke-width="2" />
		<line x1="211" y1="15" x2="211" y2="46" stroke="#404040" stroke-width="2" />
		<line x1="231" y1="15" x2="231" y2="46" stroke="#404040" stroke-width="2" />
		<line x1="251" y1="15" x2="251" y2="46" stroke="#404040" stroke-width="2" />
		<line x1="271" y1="4.3711e-08" x2="271" y2="61" stroke="#404040" stroke-width="2" />
		<line x1="291" y1="15" x2="291" y2="46" stroke="#404040" stroke-width="2" />
		<line x1="311" y1="15" x2="311" y2="46" stroke="#404040" stroke-width="2" />
		<line x1="331" y1="15" x2="331" y2="46" stroke="#404040" stroke-width="2" />
		<line x1="351" y1="15" x2="351" y2="46" stroke="#404040" stroke-width="2" />
		<line x1="371" y1="4.3711e-08" x2="371" y2="61" stroke="#404040" stroke-width="2" />
		<line x1="391" y1="15" x2="391" y2="46" stroke="#404040" stroke-width="2" />
		<line x1="411" y1="15" x2="411" y2="46" stroke="#404040" stroke-width="2" />
		<line x1="431" y1="15" x2="431" y2="46" stroke="#404040" stroke-width="2" />
		<line x1="451" y1="15" x2="451" y2="46" stroke="#404040" stroke-width="2" />
	</svg>
</template>

<script setup>
const isBig = window.innerWidth > 768;

const props = defineProps({
	isRight: Boolean
});
</script>
