<template>
	<v-card :loading="loading"
		rounded="xl"
	>
		<v-card
			v-if="event['banner_images']['image']"
			rounded="xl"
		>
			<v-img
				dark
				:src="$helper.replaceBackendHost(event['banner_images']['image'])"
				class="event-banner"
				max-height="400"
			>
				<v-card-subtitle class="pb-0">
					<span class="chip-like">
						<v-icon class="detail-icon"
							size="16"
							color="grey lighten-4"
						>
							mdi-account-circle
						</v-icon>
						{{ getEventCreatorFullName(event.created_by) }}
					</span>
					<span class="chip-like">
						<v-icon class="detail-icon"
							size="16"
							color="grey lighten-4"
						>
							mdi-clock
						</v-icon>
						{{ formatDate(event.created_at) }}
					</span>
				</v-card-subtitle>
				<v-card-title
					class="display-1 cursor-pointer pt-0 pb-1"
					@click="routeToEventDetail(event.id)"
					v-text="event.title"
				/>
				<v-divider class="mx-3" />
				<v-card-subtitle class="pt-1">
					<span class="chip-like transparent">
						<v-icon size="16"
							class="detail-icon"
						>
							mdi-city
						</v-icon>
						<span class="white--text pl-2">{{ event.branch.name }}</span>
					</span>
				</v-card-subtitle>
			</v-img>
		</v-card>
		<div v-else>
			<v-card-subtitle class="pb-0">
				<span class="chip-like">
					<v-icon class="detail-icon"
						size="16"
					>
						mdi-account-circle
					</v-icon>
					{{ getEventCreatorFullName(event.created_by) }}
				</span>
				<span class="chip-like">
					<v-icon class="detail-icon"
						size="16"
					>
						mdi-clock
					</v-icon>
					{{ formatDate(event.created_at) }}
				</span>
			</v-card-subtitle>
			<v-card-title
				class="display-1 cursor-pointer pt-0 pb-1"
				@click="routeToEventDetail(event.id)"
				v-text="event.title"
			/>
			<v-divider class="mx-3" />
			<v-card-subtitle class="pt-1">
				<span class="chip-like transparent">
					<v-icon size="16"
						class="detail-icon"
					>
						mdi-city
					</v-icon>
					{{ event.branch.name }}
				</span>
			</v-card-subtitle>
		</div>
		<div v-if="event['banner_images']['image']"
			class="py-1"
		/>
		<v-card-text class="py-0 pb-2">
			{{ event.description }}
			<span>...</span>
		</v-card-text>

		<v-row class="ma-0 pa-0">
			<v-col class="pa-0">
				<v-list two-line
					class="pa-0"
					color="transparent"
					rounded
				>
					<v-list-item>
						<v-list-item-icon><v-icon>mdi-calendar</v-icon></v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Starts from</v-list-item-title>
							<v-list-item-subtitle>
								{{ formatDate(event.start_date) }}
								<span>{{ $moment(event.start_date).fromNow() }}</span>
							</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-col>
			<v-col class="pa-0">
				<v-list two-line
					color="transparent"
					class="pa-0"
				>
					<v-list-item>
						<v-list-item-icon><v-icon>mdi-google-maps</v-icon></v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Location</v-list-item-title>
							<v-list-item-subtitle>
								<span v-if="event.municipality">
									{{ getMunicipalityWard }} {{ getMunicipality }}
								</span>
								<span v-else>
									{{ getVdcWard }} {{ getVdc }}
								</span>
								{{ getDistrict }}, {{ getProvince }}, {{ getCountry }}
							</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-col>
			<v-col class="pa-0">
				<v-list two-line
					class="pa-0"
					color="transparent"
				>
					<v-list-item>
						<v-list-item-icon><v-icon>mdi-cog</v-icon></v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>Type</v-list-item-title>
							<v-list-item-subtitle>
								{{ event.type }}
							</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-col>
		</v-row>

		<v-row v-if="eventStatistics"
			class="ma-0 pa-0"
			no-gutters
			align="center"
		>
			<v-card-actions>
				<v-btn
					rounded
					depressed
					@click="routeToEventDetail(event.id)"
				>
					<v-icon>mdi-eye</v-icon>
					<span class="button-span">View</span>
				</v-btn>
			</v-card-actions>
			<v-card-actions>
				<v-btn
					:loading="interestedLoading"
					depressed rounded
					@click="toggleInterestedStatus(event.id)"
				>
					<v-icon>mdi-star-circle</v-icon>
					<span v-if="eventStatistics['interested']"
						class="button-span red--text text--lighten-1"
					>Remove Interest</span>
					<span v-else
						class="green--text button-span text--darken-3"
					>Add Interest</span>
					<span class="stat">({{ eventStatistics['interested_count'] }})</span>
				</v-btn>
			</v-card-actions>
			<v-card-actions>
				<v-btn
					:loading="goingStatusLoading"
					depressed rounded
					@click="toggleGoingStatus(event.id)"
				>
					<v-icon>mdi-walk</v-icon>
					<span v-if="eventStatistics['going']"
						class="button-span red--text text--lighten-1"
					>Not Going</span>
					<span v-else
						class="green--text button-span text--darken-3"
					>I Am Going</span>
					<span class="stat">({{ eventStatistics['going_count'] }})</span>
				</v-btn>
			</v-card-actions>
		</v-row>
	</v-card>
</template>
<script>
export default {
	name: "EventHomeCard",
	props: {
		event: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			loading: false,
			interestedLoading: false,
			goingStatusLoading: false,
			eventStatistics: null
		}
	},
	computed: {
		getVdcWard() {
			return (this.event.vdc_ward) ? this.event.vdc_ward.name + " -" : ""
		},
		getVdc() {
			return (this.event.vdc) ? this.event.vdc.name : ""
		},
		getDistrict() {
			return (this.event.district) ? this.event.district.name : ""
		},
		getProvince() {
			return (this.event.province) ? this.event.province.name : ""
		},
		getCountry() {
			return (this.event.country) ? this.event.country.name : ""
		},
		getMunicipalityWard() {
			return (this.event.municipality_ward) ? this.event.municipality_ward.name + " -" : ""
		},
		getMunicipality() {
			return (this.event.municipality) ? this.event.municipality.name : ""
		}
	},
	async created() {
		await this.init()
	},
	methods: {
		formatDate(date) {
			return this.$moment(date).format("MMMM Do YYYY")
		},
		async init() {
			this.loading = true
			this.eventStatistics = await this.fetchEventStatistics(this.event.id)
			this.loading = false
		},
		routeToEventDetail(eventId) {
			this.$router.push(`/home/event/${eventId}/about`)
		},
		getEventCreatorFullName(creator) {
			if (creator!==null) {
				return creator.first_name + " " +  creator.last_name
			} else return null
		},
		async fetchEventStatistics(eventId) {
			return await this.$store.dispatch("event/fetchStatistics", {id: eventId})
		},
		async toggleInterestedStatus(eventId) {
			this.interestedLoading = true
			const toggled = await this.$store.dispatch("event/toggleInterestedStatus", {id: eventId})
			if (toggled) {
				this.eventStatistics = await this.$store.dispatch("event/fetchStatistics", {id: eventId})
			}
			else await this.openSnack("Added interest to event failed.")
			this.interestedLoading = false
		},
		async toggleGoingStatus(eventId) {
			this.goingStatusLoading = true
			const toggled = await this.$store.dispatch("event/toggleGoingStatus", {id: eventId})
			if (toggled) {
				this.eventStatistics =
					await this.$store.dispatch("event/fetchStatistics", {id: eventId})
			}
			else await this.openSnack("Added interest to event failed.")
			this.goingStatusLoading = false
		},
	}
}
</script>

<style lang="scss" scoped>
.cursor-pointer {
	cursor: pointer;
}
.event-banner {
	border-radius: 10px;
}
.button-span {
	font-size: .75rem !important;
	visibility: visible;
	opacity: 1;
	margin-left: 4px;
	transition: all .2s;
	@media only screen and (max-width: 432px) {
		visibility: hidden;
		opacity: 0;
		width: 0;
		margin: 0;
		overflow: hidden;
	}
}
::v-deep.v-list-item__content {
	padding: 0;
	margin-top: -10px;
}
.stat {
	color: #826712;
	padding: 0 2px;
	margin-top: -2px;
}
.chip-like {
	background-color: #535353;
	margin: 0 2px;
	padding: 4px;
	border-radius: 24px;
	.detail-icon {
		margin-top: -2px;
		padding: 0;
	}
}
</style>
