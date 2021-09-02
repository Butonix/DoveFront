<template>
	<div style="
    background: #f4f4f5;
"
	>
		<show-case-slider />
		<event-highlights />
		<kendra-info-box />
		<what-is-sachchai />
		<scatter />
		<services-peek />
		<our-great-stuff />
		<pin-bar />
		<showcase-map />
	</div>
</template>

<script>
export default {
	name: "ShowcaseView",
	components: {
		WhatIsSachchai: () => import("@/views/showcase/WhatIsSachchai.vue"),
		ShowCaseSlider: () => import("@/views/showcase/Slider"),
		KendraInfoBox: () => import("@/views/showcase/KendraInfo"),
		PinBar: () => import("@/views/showcase/PinnedBar"),
		ServicesPeek: () => import("@/views/showcase/PeekServices"),
		Scatter: () => import("@/views/showcase/Scatter"),
		EventHighlights: () => import("@/views/showcase/EventHighlights"),
		OurGreatStuff: () => import("@/views/showcase/OurGreatStuff"),
		ShowcaseMap: () => import("@/views/showcase/Map")
	}
}
</script>
