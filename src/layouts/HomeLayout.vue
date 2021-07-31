<template>
	<v-card
		tile flat
		class="overflow-hidden"
	>
		<home-toolbar @toggle="homeDrawer = !homeDrawer" />

		<v-navigation-drawer
			v-if="$vuetify.breakpoint.mdAndDown"
			v-model="homeDrawer"
			app
			temporary
		>
			<quick-links />
		</v-navigation-drawer>

		<v-main>
			<v-container
				fluid
				class="home-router-container"
			>
				<the-snackbar />
				<v-card
					flat
					color="transparent"
					class="mx-auto pa-0"
					max-width="1500"
					min-height="90vh"
				>
					<v-row
						class="ma-0 pt-2"
						align="start"
						justify="center"
						no-gutters
					>
						<v-fade-transition mode="in-out">
							<v-col
								v-if="$vuetify.breakpoint.lgAndUp"
								cols="12"
								xl="3"
								lg="3"
								:class="{
									'pr-2': $vuetify.breakpoint.width > 600
								}"
							>
								<div class="py-1" />
								<quick-links />
								<facebook-group />
							</v-col>
						</v-fade-transition>
						<v-col
							cols="12"
							xl="9"
							lg="9"
							class="px-2"
						>
							<transition name="view">
								<router-view />
							</transition>
						</v-col>
					</v-row>
				</v-card>
			</v-container>
			<home-simple-footer />
			<facebook-chat />
			<scroll-up color="#91348e" />
		</v-main>
	</v-card>
</template>

<script>
import HomeSimpleFooter from "@/views/home/HomeFooter.vue";
export default {
	name: "SacchaiHomeLayout",
	components: {
		HomeSimpleFooter,
		TheSnackbar: () => import("@/components/utils/TheSnackbar"),
		HomeToolbar: () => import("@/views/home/HomeToolbar"),
		QuickLinks: () => import("@/views/home/QuickLinks"),
		FacebookGroup: () => import("@/components/utils/FacebookGroup"),
		FacebookChat: () => import("@/components/utils/FacebookChat"),
		ScrollUp: () => import("@/components/utils/ScrollTop.vue")
	},
	data: () => ({
		homeDrawer: false,
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
