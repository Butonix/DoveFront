<template>
	<v-app-bar
		app
		fixed
		height="60"
	>
		<v-app-bar-nav-icon
			v-if="$vuetify.breakpoint.mdAndDown"
			@click="$emit('toggle')"
		>
			<v-icon>mdi-menu</v-icon>
		</v-app-bar-nav-icon>
		<v-card
			class="mx-4"
			:class="$route.name === 'HOME' ? '' : 'cursor'"
			flat
			color="transparent"
			height="45"
			width="45"
		>
			<v-img
				contain
				height="45"
				width="45"
				:src="require('@/assets/peace-pegion.png')"
				@click="routeToFeeds"
			/>
		</v-card>
		<v-spacer />

		<home-tabs />
		<v-spacer />
		<div class="px-1" />
		<profile-dropdown />
	</v-app-bar>
</template>

<script>
import HomeTabs from "@/views/home/Tabs.vue";
import ProfileDropdown from "@/views/home/ProfileDropdown.vue";
export default {
	name: "HomeToolbar",
	components: {ProfileDropdown, HomeTabs},
	props: {},
	emits: ["toggle"],
	data: () => ({
		logo: require("@/assets/showcase_logo_v1.png"),
	}),
	computed: {},
	methods: {
		routeToFeeds() {
			if (this.$route.name !== "HOME") {
				this.$router.push({name: "HOME"})
			}
		},
	}
}
</script>

<style scoped>

</style>
