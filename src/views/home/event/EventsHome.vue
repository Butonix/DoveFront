<template>
	<v-card
		:loading="loading"
		flat tile
		class="mx-auto home-events"
		color="purple"
		max-width="1000"
	>
		<div v-if="$vuetify.breakpoint.smAndUp"
			class="pa-1"
		/>
		<v-card-text class="pa-2">
			<v-toolbar
				color="transparent"
				height="60"
				class="event-toolbar"
				rounded="xl"
			>
				<v-toolbar-title class="events-home-title">
					Events Home
				</v-toolbar-title>
				<v-spacer />
				<v-card class="ma-0 pa-0 mx-4"
					width="500" rounded="xl"
					elevation="0"
				>
					<v-text-field
						v-model="searchEvents"
						color="red lighten-2"
						solo rounded
						height="36"
						hide-details
						label="Search events"
						prepend-inner-icon="mdi-calendar-search"
					/>
				</v-card>
				<v-menu offset-y>
					<template #activator="{ on, attrs }">
						<v-btn
							icon
							v-bind="attrs"
							v-on="on"
						>
							<v-icon>mdi-filter</v-icon>
						</v-btn>
					</template>
					<v-list>
						<v-list-item
							v-for="(item, index) in filterMenuItems"
							:key="index"
						>
							<v-list-item-icon><v-icon>{{ item.icon }}</v-icon></v-list-item-icon>
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>

				<v-menu offset-y
					rounded="xl"
				>
					<template #activator="{ on, attrs }">
						<v-btn
							icon
							v-bind="attrs"
							v-on="on"
						>
							<v-icon>mdi-sort</v-icon>
						</v-btn>
					</template>
					<v-list rounded>
						<v-list-item
							v-for="(item, index) in sortMenuItems"
							:key="index"
						>
							<v-list-item-icon><v-icon>{{ item.icon }}</v-icon></v-list-item-icon>
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</v-toolbar>
		</v-card-text>
		<v-fade-transition>
			<v-card-text v-if="events.count > 0"
				class="pa-2"
			>
				<event-home-card
					v-for="(item, index) in events.results"
					:key="index"
					:event="item"
				/>
			</v-card-text>
			<v-card-text v-else>
				<no-home-data :image="require('@/assets/noEventsHome.gif')" />
			</v-card-text>
		</v-fade-transition>
	</v-card>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	name: "EventsHomeComponent",
	components: {
		NoHomeData: () => import("@/components/feeds/NoHomeData.vue"),
		EventHomeCard: () => import("@/views/home/event/EventHomeCard.vue"),
	},
	data: () => ({
		loading: true,
		searchEvents: "",
		filterMenuItems: [
			{ title: "By Status", icon: "mdi-check" },
			{ title: "By Type", icon: "mdi-call-merge" },
			{ title: "By Branch", icon: "mdi-city" },
			{ title: "By Location", icon: "mdi-map-marker" },
		],
		sortMenuItems: [
			{ title: "Latest", icon: "mdi-sort-calendar-ascending" },
			{ title: "Most Followed", icon: "mdi-lightning-bolt" },
			{ title: "Alphabetically", icon: "mdi-sort-alphabetical-variant" },
		],
	}),
	computed: {
		...mapGetters({
			events: "event/list"
		}),
	},
	watch: {
		searchEvents: {
			deep: true,
			immediate: true,
			handler(val) {
				if (val) this.initForSearch({search: val, page: 1, is_approved: true})
			}
		}
	},
	created() {
		this.initForCreatedEvents()
	},
	methods: {
		async initForCreatedEvents() {
			this.loading = true
			await this.$store.dispatch("event/filter", {is_approved: true})
			this.loading = false
		},
		async initForSearch(payload) {
			this.loading = true
			await this.$store.dispatch("event/filter", payload)
			this.loading = false
		}
	}
}
</script>
<style lang="sass" scoped>
.event-toolbar
	border-radius: 6px
.event-banner
	border-radius: 10px
.button-span
	visibility: visible
	opacity: 1
	margin-left: 4px
	transition: all .2s
	@media only screen and (max-width: 432px)
		visibility: hidden
		opacity: 0
		width: 0
		margin: 0
		overflow: hidden
::v-deep.v-list-item__content
	padding: 0
	margin-top: -10px
.events-home-title
	font-size: 1.1rem
	font-weight: 600
	color: #444444
.home-events
	background: transparent !important
</style>
