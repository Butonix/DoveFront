<template>
	<div class="slider-wrapper">
		<div class="left-panel slider-panel">
			<v-btn fab
				class="previous"
				color="grey lighten-4"
			>
				<v-icon color="grey darken-4"
					size="40"
				>
					mdi-chevron-left
				</v-icon>
			</v-btn>
		</div>
		<div class="right-panel slider-panel">
			<v-btn fab
				class="next"
				color="grey lighten-4"
			>
				<v-icon color="grey darken-4"
					size="40"
				>
					mdi-chevron-right
				</v-icon>
			</v-btn>
		</div>
		<div class="scroll-menu">
			<slot />
		</div>
	</div>
</template>

<script>
import $ from "jquery"

export default {
	name: "HorizontalSlider",
	props: {},
	data: () => ({}),
	mounted() {
		$(".previous").click(function () {
			$(this)
				.closest(".slider-wrapper")
				.find(".scroll-menu")
				.animate({
					scrollLeft: "-=200px"
				}, "slow");
		})
		$(".next").click(function () {
			$(this)
				.closest(".slider-wrapper")
				.find(".scroll-menu")
				.animate({
					scrollLeft: "+=200px"
				}, "slow");
		})
	},
}
</script>

<style scoped lang="scss">
.slider-wrapper {
	position: relative;
	width: 100%;
	height: 100%;

	.scroll-menu {
		height: 100%;
		overflow: auto;
		white-space: nowrap;
		-ms-overflow-style: none;  /* IE and Edge */
		scrollbar-width: none;  /* Firefox */
	}
	.scroll-menu::-webkit-scrollbar {
		display: none;
	}
	.slider-panel {
		position: absolute;
		top: 0;
		height: 100%;
		width: 70px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: transparent;
		visibility: hidden;
		border-radius: 24px;
		z-index: 3;
	}
	.left-panel {
		left: 0;
		@media only screen and (max-width: 1450px) {
			border-radius: 0 16px 16px 0 !important;
		}
	}
	.left-panel:hover {
		background-color: rgba(75, 74, 72, 0.45);
	}
	.right-panel:hover {
		background-color: rgba(75, 74, 72, 0.45);
	}
	.right-panel {
		right: 0;
		@media only screen and (max-width: 1450px) {
			border-radius: 16px 0 0 16px !important;
		}
	}
}
.slider-wrapper:hover {
	.left-panel {
		visibility: visible;
	}
	.right-panel {
		visibility: visible;
	}
}
</style>
