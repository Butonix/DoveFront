<template>
	<v-tooltip left>
		<template #activator="{ on, attrs }">
			<v-fab-transition>
				<v-btn
					v-show="show"
					fab
					fixed
					small
					color="primary"
					class="to-feeds"
					to="/home/feeds"
					v-bind="attrs"
					v-on="on"
				>
					<v-icon>mdi-post</v-icon>
				</v-btn>
			</v-fab-transition>
		</template>
		<span>Feeds Page</span>
	</v-tooltip>
</template>

<script>
export default {
	name: "ToFeedsPageBtn",
	props: {
		color: {
			type: String,
			default: "grey darken-3"
		}
	},
	data: () => ({
		show: false
	}),
	mounted() {
		window.addEventListener("scroll", this.handleScroll);
	},
	methods: {
		handleScroll(e) {
			if (document.documentElement.scrollTop > 400) {
				this.show = true
			} else {
				this.show = false
			}
		}
	}
}
</script>
<style scoped lang="scss">
.to-feeds {
	top: 20px !important;
	right: 70px !important;
}
</style>
