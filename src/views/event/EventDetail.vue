<template>
	<v-app>
		<toolbar />
		<v-main>
			<v-container fluid
				class="pa-0"
			>
				<gap v-if="$vuetify.breakpoint.xs"
					height="88"
				/>
				<gap v-else
					height="60"
				/>
				<v-card>
					<div v-if="event"
						id="event-detail-container"
					>
						<v-row id="event-top-row"
							class="ma-0 pa-0"
						>
							<banner-column :event="event"
								@refresh-event="init"
							/>
							<date-column :event="event" />
							<top-info-column :event="event" />
							<actions
								v-if="$helper.isUserLoggedIn()"
								:event="event"
							/>
							<v-col cols="12"
								class="pa-0"
							>
								<v-divider class="mx-auto" />
							</v-col>
							<v-col cols="12"
								class="pa-0"
							>
								<div class="py-1" />
							</v-col>
							<v-col cols="12">
								<v-card max-width="1000"
									class="mx-auto"
									color="transparent"
								>
									<v-tabs-items v-model="tab">
										<router-view />
									</v-tabs-items>
								</v-card>
							</v-col>
						</v-row>
					</div>
				</v-card>
			</v-container>
		</v-main>
	</v-app>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	name: "EventDetailView",
	components: {
		Toolbar: () => import("@/views/event/detail_views/Toolbar"),
		Actions: () => import("@/views/event/detail_views/Actions"),
		TopInfoColumn: () => import("@/views/event/detail_views/TopInfoColumn"),
		DateColumn: () => import("@/views/event/detail_views/DateColumn"),
		BannerColumn: () => import("@/views/event/detail_views/BannerColumn")
	},
	data: () => ({
		loading: true,
	}),
	computed: {
		...mapGetters({
			event: "event/detail",
			tab: "event/detailTab",
			comments: "event/commentsList"
		})
	},
	async created() {
		this.$bus.on("reload", async () => await this.init())
		await this.init()
	},
	beforeUnmount() {
		this.$bus.off("reload")
	},
	methods: {
		async init() {
			if (this.$route.params) {
				const eventId = this.$route.params.id
				await this.$store.dispatch("event/fetchSingle", {id: eventId})
				await this.$store.dispatch("event/fetchStatistics", {id: eventId})
				await this.$store.dispatch("event/fetchCommentsFor", {id: eventId})
				this.loading = false
			}
		},
	}
}
</script>
<style lang="sass">
#event-top-row
	background: linear-gradient(180deg, #9575cd, #eeaaaa, #efcece, #cee7f9)

#date-peek-box
	margin-top: -30px
	border: 4px solid aliceblue
	background-color: lightgrey
.event-title
	display: flex
	flex-wrap: wrap
	align-content: center
	justify-content: center
	text-align: center
	font-size: 38px
	line-height: 38px
	color: black
.event-subtitle
	text-align: center
	padding-bottom: 5px
	font-size: 16px
	color: #1566a6 !important
	font-weight: 500
.date-month
	margin: 0
	padding: 1px 0 0 0
	text-align: center
	color: white !important
	font-size: 24px
	font-weight: 600 !important
.event-description
	max-width: 770px
	margin: auto auto
	text-align: center


</style>
<style lang="scss">
.why-idk {
	opacity: 0;
	height: 0;
	padding: 0;
}
</style>
