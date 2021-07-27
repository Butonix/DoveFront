<template>
	<v-fab-transition>
		<v-btn
			v-show="fab"
			id="to-top"
			v-scroll="onScroll"
			fab
			dark
			fixed
			bottom
			left
			medium
			max-height="45"
			max-width="45"
			:color="color"
			@click="scrollToTop"
		>
			<v-icon size="20">
				{{ icon }}
			</v-icon>
		</v-btn>
	</v-fab-transition>
</template>
<script>
export default {
	name: "ScrollTopComponent",
	props: {
		color: {
			type: String,
			required: false,
			default: "primary"
		},
		icon: {
			type: String,
			required: false,
			default: "mdi-chevron-double-up"
		}
	},
	data: () => ({
		fab: false
	}),
	methods: {
		scrollToTop() {
			window.scroll({
				top: 0,
				behavior: "smooth"
			})
		},
		onScroll(e) {
			if (typeof window === "undefined") return
			const top = window.pageYOffset || e.target.scrollTop
			this.fab = top > 150
		}
	}
}
</script>
