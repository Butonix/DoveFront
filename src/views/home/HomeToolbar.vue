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
		<div class="px-4" />
		<v-btn v-for="(item, index) in homeTabItems"
			:key="index"
			:to="item.to"
			active-class="route-btn-active"
			text
			height="60"
			tile
		>
			{{ item.text }}
		</v-btn>
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
	components: {ProfileDropdown},
	props: {},
	emits: ["toggle"],
	data: () => ({
		logo: require("@/assets/showcase_logo_v1.png"),
		homeTabItems: [
			{icon: "mdi-home", text: "Home", to: "/home/feeds"},
			{icon: "mdi-post", text: "Articles", to: "/home/article"},
			{icon: "mdi-video-vintage", text: "Multimedia", to: "/home/multimedia"},
			{icon: "mdi-calendar-clock", text: "Events", to: "/home/event"},
		],
	}),
	methods: {
		routeToFeeds() {
			if (this.$route.name !== "HOME") {
				this.$router.push({name: "HOME"})
			}
		},
	}
}
</script>

<style scoped lang="scss">
.route-btn-active {
	color: #9C27B0 !important;
	pointer-events: none;
}
</style>
