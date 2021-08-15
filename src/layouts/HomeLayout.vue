<template>
	<v-card
		tile flat
		class="overflow-hidden"
	>
		<home-toolbar @toggle="homeDrawer = !homeDrawer" />

		<v-main style="background-color: #f3edff">
			<v-container
				fluid
				class="home-router-container"
			>
				<the-snackbar />
				<v-navigation-drawer
					v-model="homeDrawer"
					:permanent="!$vuetify.breakpoint.mdAndDown"
					:temporary="$vuetify.breakpoint.mdAndDown"
					width="280"
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
			<facebook-chat />
			<scroll-up color="#91348e" />
		</v-main>
	</v-card>
</template>

<script>
export default {
	name: "SacchaiHomeLayout",
	components: {
		TheSnackbar: () => import("@/components/utils/TheSnackbar"),
		HomeToolbar: () => import("@/views/home/HomeToolbar"),
		QuickLinks: () => import("@/views/home/QuickLinks"),
		FacebookChat: () => import("@/components/utils/FacebookChat"),
		ScrollUp: () => import("@/components/utils/ScrollTop.vue")
	},
	data: () => ({
		homeDrawer: true,
		mini: true,
	})
}
</script>
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
