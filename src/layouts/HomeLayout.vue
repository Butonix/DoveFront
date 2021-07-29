<template>
	<v-card
		tile flat
		class="overflow-hidden"
	>
		<home-toolbar />

		<!-- eslint-disable-next-line vue/no-deprecated-v-bind-sync vue/max-attributes-per-line -->
		<v-navigation-drawer v-if="$vuetify.breakpoint.mdAndDown" v-model="homeDrawer" :mini-variant.sync="mini"
			app
			permanent
			expand-on-hover
		>
			<quick-links />
		</v-navigation-drawer>

		<v-main>
			<v-container
				fluid
				class="home-router-container"
			>
				<v-row no-gutters>
					<v-col>
						<the-snackbar />
						<v-card
							flat
							color="transparent"
							class="mx-auto pa-0"
							max-width="1500"
						>
							<div class="py-1" />
							<v-row
								class="ma-0 pa-0"
								align="start"
								justify="center"
							>
								<v-fade-transition mode="in-out">
									<v-col
										v-if="$vuetify.breakpoint.lgAndUp"
										cols="12"
										xl="3"
										lg="3"
									>
										<quick-links />
										<facebook-group />
									</v-col>
								</v-fade-transition>
								<v-col
									class="ma-0 router-column"
									cols="12"
									xl="6"
									lg="6"
									md="8"
									sm="8"
								>
									<transition name="view">
										<router-view />
									</transition>
								</v-col>
								<v-col
									cols="12"
									xl="3"
									lg="3"
									md="4"
									sm="4"
								>
									<home-ads />
								</v-col>
							</v-row>
						</v-card>
					</v-col>
				</v-row>
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
		HomeAds: () => import("@/views/home/Ads"),
		QuickLinks: () => import("@/views/home/QuickLinks"),
		FacebookGroup: () => import("@/components/utils/FacebookGroup"),
		FacebookChat: () => import("@/components/utils/FacebookChat"),
		ScrollUp: () => import("@/components/utils/ScrollTop.vue")
	},
	data: () => ({
		homeDrawer: false,
		mini: true,
	}),
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
<style lang="scss" scoped>
.router-column {
	overflow-x: hidden;
	overflow-y: auto !important;
	height: 100vh;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.router-column::-webkit-scrollbar {
	display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.router-column {
	-ms-overflow-style: none;  /* IE and Edge */
	scrollbar-width: none;  /* Firefox */
}
</style>
