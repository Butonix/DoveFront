<template>
	<div class="showcase-wrapper-idx">
		<show-case-slider />
		<event-highlights />
		<kendra-info-box />
		<what-is-sachchai />
		<scatter />
		<services-peek />
		<our-great-stuff />
		<pin-bar />
		<equity-equality />
		<showcase-map />
		<home-footer />
	</div>
</template>

<script>
export default {
	name: "ShowcaseView",
	components: {
		ShowCaseSlider: () => import("@/views/showcase/Slider"),
		KendraInfoBox: () => import("@/views/showcase/KendraInfo"),
		WhatIsSachchai: () => import("@/views/showcase/WhatIsSachchai.vue"),
		PinBar: () => import("@/views/showcase/PinnedBar"),
		ServicesPeek: () => import("@/views/showcase/PeekServices"),
		Scatter: () => import("@/views/showcase/Scatter"),
		EventHighlights: () => import("@/views/showcase/EventHighlights"),
		OurGreatStuff: () => import("@/views/showcase/OurGreatStuff"),
		EquityEquality: () => import("@/views/showcase/EquityEquality"),
		ShowcaseMap: () => import("@/views/showcase/Map"),
		HomeFooter: () => import("@/views/home/Footer")
	}
}
</script>
<style scoped>
.showcase-wrapper-idx {
	background: #f4f4f5;
}
</style>
