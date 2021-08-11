<template>
	<div class="showcase-img-wrapper">
		<section>
			<v-img class="showcase-img"
				src="https://scontent.fpkr1-1.fna.fbcdn.net/v/t1.6435-9/155794206_3777657255636996_7526777727332740545_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=8631f5&_nc_ohc=vPjfaGs0-T0AX9Lc_co&_nc_ht=scontent.fpkr1-1.fna&oh=0bdbf1df05668c71cb61df393b6509c6&oe=61379A3C"
				dark
				gradient="to top right, rgb(0 0 0 / 0%), rgb(0 0 0 / 60%), rgb(0 0 0 / 20%)"
				height="100vh"
				width="100vw"
				eager
			>
				<slider-image-content />
			</v-img>
		</section>
	</div>
</template>
<script>
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default {
	name: "ShowCaseSliderComponent",
	components: {
		SliderImageContent: () => import("@/views/showcase/SliderImageContent")
	},
	data: () => ({
		loading: false
	}),
	methods: {}

}
</script>

<style scoped lang="scss">
.showcase-img-wrapper {
	position: relative;
	background-color: transparent;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	display: flex;
	flex-wrap: nowrap;
}

.panel {
  will-change: transform;
}

.custom-shape-divider-bottom-1619957365 {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	overflow: hidden;
	line-height: 0;
	transform: rotate(180deg);
}

.custom-shape-divider-bottom-1619957365 svg {
	position: relative;
	display: block;
	width: calc(100% + 1.3px);
	height: 150px;
}

.custom-shape-divider-bottom-1619957365 .shape-fill {
	fill: #f1f1f2;
}

/** For mobile devices **/
@media (max-width: 767px) {
	.custom-shape-divider-bottom-1619957365 svg {
		width: calc(138% + 1.3px);
		height: 70px;
	}
}
</style>
