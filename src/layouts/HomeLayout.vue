<template>
	<v-card
		tile flat
		class="overflow-hidden"
	>
		<home-toolbar />

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
							max-width="1400"
						>
							<div class="py-1" />
							<v-row
								class="ma-0 pa-0"
								align="start"
								justify="center"
							>
								<v-col cols="12"
									xl="3"
									lg="3"
									md="3"
									sm="3"
								>
									<quick-links-component />
									<facebook-group />
								</v-col>
								<v-col
									class="ma-0 router-column"
									cols="12"
									xl="6"
									lg="6"
									md="6"
									sm="6"
								>
									<transition name="view">
										<router-view />
									</transition>
								</v-col>
								<v-col
									cols="12"
									xl="3"
									lg="3"
									md="3"
									sm="3"
								>
									<home-ads-column />
								</v-col>
							</v-row>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
			<scroll-up color="#91348e" />
			<home-simple-footer />
		</v-main>
	</v-card>
</template>

<script>
import TheSnackbar from "@/components/utils/TheSnackbar.vue";
import HomeToolbar from "@/views/home/HomeToolbar.vue";
import HomeAdsColumn from "@/views/home/Ads.vue";
import QuickLinksComponent from "@/views/home/QuickLinks.vue";
import HomeSimpleFooter from "@/views/home/HomeFooter.vue";
import FacebookGroup from "@/components/utils/FacebookGroup.vue";

export default {
	name: "SacchaiHomeLayout",
	components: {
		FacebookGroup,
		HomeSimpleFooter,
		QuickLinksComponent,
		HomeAdsColumn,
		HomeToolbar,
		TheSnackbar,
		ScrollUp: () => import("@/components/utils/ScrollTop.vue")
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
