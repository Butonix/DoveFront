<template>
	<div class="slider-wrapper">
		<div class="slide-left">
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
		<div class="slide-right">
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
		$(".previous").click(function (e) {
			$(this)
				.closest(".slider-wrapper")
				.find(".scroll-menu")
				.animate({
					scrollLeft: "-=200px"
				}, "slow");
		})
		$(".next").click(function (e) {
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
}
.scroll-menu {
	overflow: auto;
	white-space: nowrap;
}
.scroll-menu::-webkit-scrollbar {
	display: none;
}
.scroll-menu {
	-ms-overflow-style: none;  /* IE and Edge */
	scrollbar-width: none;  /* Firefox */
}
.slider-wrapper:hover {
	.slide-left {
		visibility: visible;
	}
	.slide-right {
		visibility: visible;
	}
}

.slide-left {
	z-index: 1;
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 70px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: transparent;
	visibility: hidden;
	border-radius: 0 16px 16px 0;
}
.slide-left:hover {
	background-color: rgba(75, 74, 72, 0.45);
}
.slide-right:hover {
	background-color: rgba(75, 74, 72, 0.45);
}
.slide-right {
	z-index: 2;
	position: absolute;
	right: 0;
	top: 0;
	height: 100%;
	width: 70px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: transparent;
	visibility: hidden;
	border-radius: 16px 0 0 16px;
}
</style>
