<template>
	<v-card
		class="highlights-wrapper mx-1 transparent"
		flat
		dark
	>
		<v-carousel
			cycle
			:show-arrows="false"
			hide-delimiters
			reverse-transition="fade-transition"
			transition="fade-transition"
			class="highlights-carousel mx-auto"
		>
			<v-carousel-item
				v-for="(event, index) in topThreeEvents"
				:key="index"
			>
				<v-card
					class="mx-auto overflow-hidden"
					color="transparent"
					height="100%"
					max-width="600"
					flat
				>
					<v-list
						class="mx-auto relative"
						color="transparent"
					>
						<v-list-item-avatar
							class="date-avatar elevation-12"
							:class="($vuetify.breakpoint.width < 400) ? 'mx-auto': ''"
							size="120"
						>
							<v-row no-gutters
								justify="center" align="center"
							>
								<v-col cols="12">
									<h1 class="text-center">
										{{ $moment(event.start_date).format('DD') }}<sup>{{
											getSuperScript($moment(event.start_date).format('D'))
										}}</sup>
									</h1>
								</v-col>
								<v-col cols="12"
									class="month-column"
								>
									<h2 class="text-center">
										{{ $moment(event.start_date).format('MMMM') }}
									</h2>
								</v-col>
							</v-row>
						</v-list-item-avatar>
						<v-fade-transition>
							<v-list-item-content
								class="highlights-content rounded-xl"
								:style="{backgroundColor: colors[index%3]}"
							>
								<v-list-item-title
									class="py-2"
									:class="
										$vuetify.breakpoint.smAndDown
											? 'small-title'
											: 'big-title'
									"
								>
									<v-icon class="pr-2">
										mdi-calendar-star
									</v-icon>
									<u>{{ event.title }}</u>
								</v-list-item-title>
								<v-list-item-subtitle v-show="$vuetify.breakpoint.smAndUp"
									class="d-flex justify-space-between align-center flex-wrap"
								>
									<p class="ma-0 text-start info-text">
										<span><v-icon>mdi-sort-clock-descending</v-icon></span>
										{{ $moment(event.start_date).format('LLLL').split(',')[0] }}
										{{ event.time_of_day }}
									</p>
									<p class="ma-0 info-text">
										<v-icon>mdi-sort-clock-ascending</v-icon>
										{{ $moment(event.start_date).add(event.duration, 'days').format('LLLL').split(',')[0] }}
									</p>
								</v-list-item-subtitle>
								<v-list-item-subtitle
									v-show="$vuetify.breakpoint.smAndUp"
									class="d-flex justify-space-between align-center flex-wrap"
								>
									<p class="ma-0 text-start info-text">
										<v-icon>mdi-home</v-icon>
										{{ event.venue }}
									</p>
									<p class="ma-0 info-text">
										<v-icon>mdi-google-maps</v-icon>
										{{ getMunicipalityOrVdcWard(event) }}
									</p>
								</v-list-item-subtitle>
							</v-list-item-content>
						</v-fade-transition>
						<v-list-item />
					</v-list>
					<v-fade-transition>
						<v-card-title v-if="$vuetify.breakpoint.width < 400"
							class="text-center d-flex justify-center pt-0"
						>
							{{ event.title }}
						</v-card-title>
					</v-fade-transition>
				</v-card>
			</v-carousel-item>
		</v-carousel>
	</v-card>
</template>
<script>
import {mapGetters} from "vuex";
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

ScrollTrigger.defaults({
	toggleActions: "restart pause resume pause",
	scrub: 1
});
gsap.registerPlugin(ScrollTrigger)

export default {
	name: "EventHighlights",
	data: () => ({
		loading: null,
		colors: [
			"#01579b",
			"cyan darken-4",
			"purple darken-4",
		],
	}),
	computed: {
		...mapGetters({
			events: "event/list"
		}),
		topThreeEvents() {
			if (this.events) {
				if (this.events.results) {
					if (this.events.count > 3) {
						return [
							this.events.results[0],
							this.events.results[1],
							this.events.results[2],
						]
					} else return this.events.results
				} return []
			} return []
		}
	},
	async created() {
		await this.init()
		gsap.timeline({
			scrollTrigger: {
				trigger: ".showcase-img-section",
				start: "top top",
				end: "+=200"
			},
			yoyo: true
		})
			.from(".highlights-wrapper", {
				scale: 0,
				ease: "back.out(1.7)",
			})
	},
	methods: {
		async init() {
			if (!this.events.length) {
				this.loading = true
				await this.$store.dispatch("event/filter", {is_approved: true})
				this.loading = false
			}
		},
		getMunicipalityOrVdcWard(event) {
			if (event.municipality_ward) {
				return `${event.municipality_ward.name}, ${event.municipality.name}`
			} else if (event.vdc_ward) {
				return `${event.vdc_ward.name}, ${event.vdc.name}`
			} else return ""
		},
		getSuperScript(day) {
			const rem = day % 10
			if ( rem === 1) {
				return "st"
			} else if (rem === 2) {
				return "nd"
			} else if (rem === 3) {
				return "rd"
			} else {
				return "th"
			}
		}
	}
}
</script>
<style lang="sass" scoped>
.date-avatar
	border: 3px solid white !important
	background: rgb(232 140 4 / 1%)
	position: absolute
	top: 0
	left: 5%
	z-index: 2
.highlights-wrapper
	margin-top: -18vh
.highlights-carousel
	max-width: 1000px
	max-height: 290px
	border-radius: 4px
.highlights-content
	position: absolute
	top: 70px
	padding: 70px 20px 20px 20px
	border: 3px solid white!important
.small-title
	font-size: 22px
	line-height: 22px
.big-title
	font-size: 26px
	line-height: 26px
.month-column
	padding-top: 4px !important
	@media only screen and (max-width: 600px)
		padding-top: 4px !important
		border-top: 2px solid white
sup
	font-size: 16px
.info-text
	font-size: 14px
	font-weight: 500
</style>
