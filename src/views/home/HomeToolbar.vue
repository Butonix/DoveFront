<template>
	<v-app-bar
		clipped-right
		clipped-left
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
			v-if="$vuetify.breakpoint.width > 360"
			class="mx-4"
			:class="$route.name === 'HOME' ? '' : 'cursor'"
			flat
			color="transparent"
			height="50"
			width="50"
		>
			<v-img
				contain
				height="50"
				width="50"
				:src="logo"
				@click="routeToFeeds"
			/>
		</v-card>
		<div v-if="$vuetify.breakpoint.width > 700"
			class="px-4"
		/>
		<v-btn
			v-for="(item, index) in homeTabItems"
			:key="index"
			:to="item.to"
			text tile
			height="60"
			class="route-btn"
			exact-path
			active-class="route-btn-active"
			exact-active-class="route-btn-active"
			:class="{'route-btn-active': toolbarItemsActive[item.text]}"
		>
			<v-icon v-if="$vuetify.breakpoint.width < 600"
				:size="($vuetify.breakpoint.width < 460) ? 20 : 24"
			>
				{{ item.icon }}
			</v-icon>
			<div v-else>
				{{ item.text }}
			</div>
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
	emits: ["toggle"],
	data: () => ({
		logo: require("@/assets/sacchai_logo.png"),
		homeTabItems: [
			{icon: "mdi-home", text: "Home", to: "/home/feeds"},
			{icon: "mdi-post", text: "Articles", to: "/home/article"},
			{icon: "mdi-video-vintage", text: "Multimedias", to: "/home/multimedia"},
			{icon: "mdi-calendar-clock", text: "Events", to: "/home/event"},
		],
	}),
	computed: {
		toolbarItemsActive() {
			return {
				Home: this.$route.path === "/home/feeds",
				Articles: this.$route.path === "/home/article",
				Multimedias: this.$route.path === "/home/multimedia",
				Events: this.$route.path === "/home/event",
			}
		}
	},
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
.route-btn {
	@media only screen and (max-width: 700px) {
		font-size: 14px;
		max-width: 110px;
	}
	@media only screen and (max-width: 600px) {
		font-size: 14px;
		max-width: 110px;
	}
	@media only screen and (max-width: 460px) {
		font-size: 14px;
		width: 40px;
		min-width: 40px !important;
	}
}
</style>
