<template>
	<v-card
		tile flat
		class="overflow-hidden"
	>
		<home-toolbar @toggle="homeDrawer = !homeDrawer" />

		<v-main>
			<v-container
				fluid
				class="home-router-container"
			>
				<the-snackbar />
				<v-navigation-drawer
					v-model="homeDrawer"
					:permanent="!$vuetify.breakpoint.mdAndDown"
					:temporary="$vuetify.breakpoint.mdAndDown"
					color="#f6f4fc"
					style="position: fixed; left: 0;"
					:style="(!$vuetify.breakpoint.mdAndDown) ? 'top: 60px;': ''"
				>
					<div class="py-2" />
					<quick-links />
				</v-navigation-drawer>
				<v-card
					flat
					color="transparent"
					class="mx-auto pa-0"
					max-width="1000"
					min-height="90vh"
				>
					<transition name="view">
						<router-view />
					</transition>
				</v-card>
			</v-container>
			<home-simple-footer />
			<facebook-chat />
			<scroll-up color="#91348e" />
		</v-main>
	</v-card>
</template>

<script>
export default {
	name: "SacchaiHomeLayout",
	components: {
		HomeSimpleFooter: () => import("@/views/home/HomeFooter.vue"),
		TheSnackbar: () => import("@/components/utils/TheSnackbar"),
		HomeToolbar: () => import("@/views/home/HomeToolbar"),
		QuickLinks: () => import("@/views/home/QuickLinks"),
		// FacebookGroup: () => import("@/components/utils/FacebookGroup"),
		FacebookChat: () => import("@/components/utils/FacebookChat"),
		ScrollUp: () => import("@/components/utils/ScrollTop.vue"),
		// Facebook: () => import("@/views/showcase/Facebook.vue"),
		// HomeAds: () => import("@/views/home/Ads"),
	},
	data: () => ({
		homeDrawer: true,
		mini: true,
	})
}
</script>
<style lang="scss">
::v-deep.v-navigation-drawer .v-navigation-drawer__border {
	display: none
}
.right-sidebar {
	position: fixed; right: 20px; top: 80px;
}
</style>
<style lang="scss" scoped>
.right-sidebar {
	overflow-x: hidden;
	overflow-y: auto !important;
	height: 150vh;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.right-sidebar::-webkit-scrollbar {
	display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.right-sidebar {
	-ms-overflow-style: none;  /* IE and Edge */
	scrollbar-width: none;  /* Firefox */
}
</style>
<style lang="sass" scoped>
.view-enter-active, .view-leave-active
	transition: opacity .4s ease-in-out, transform .4s ease
.view-enter-active
	transition-delay: .3s
.view-enter, .view-leave-to
	opacity: 0
.view-enter-to, .view-leave
	opacity: 1
.home-router-container
	padding: 0
	background-color: #f3edff
</style>
