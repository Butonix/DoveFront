<template>
	<v-app
		class="overflow-hidden"
	>
		<home-toolbar @toggle="homeDrawer = !homeDrawer" />
		<v-navigation-drawer
			v-model="homeDrawer"
			app
			:permanent="!$vuetify.breakpoint.mdAndDown"
			:temporary="$vuetify.breakpoint.mdAndDown"
			width="280"
			color="#f6f4fc"
		>
			<div class="py-2" />
			<quick-links />
		</v-navigation-drawer>
		<v-navigation-drawer
			v-model="homeDrawer"
			app
			:permanent="!$vuetify.breakpoint.mdAndDown"
			:temporary="$vuetify.breakpoint.mdAndDown"
			width="280"
			clipped
			right
			color="#f6f4fc"
		>
			<router-view name="sidebar" />
		</v-navigation-drawer>

		<v-main
			style="background-color: #f3edff"
		>
			<v-container
				fluid
				class="home-router-container"
			>
				<the-snackbar />
				<v-card
					flat
					color="transparent"
					min-height="calc(100vh-60px)"
				>
					<transition name="view">
						<router-view />
					</transition>
				</v-card>
			</v-container>
			<facebook-chat />
			<scroll-up color="#91348e" />
		</v-main>
	</v-app>
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
		homeDrawer: null,
	}),
	watch: {
		"$vuetify.breakpoint.width": {
			handler() {
				this.homeDrawer = this.$vuetify.breakpoint.mdAndUp;
			}
		}
	},
	created() {
		this.homeDrawer = this.$vuetify.breakpoint.mdAndUp
	}
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
