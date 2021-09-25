<template>
	<v-app-bar
		class="event-detail-toolbar"
		app
		tile
		height="auto"
	>
		<v-app-bar-nav-icon>
			<v-btn icon
				@click="$router.go(-1)"
			>
				<v-icon size="24">
					mdi-arrow-left
				</v-icon>
			</v-btn>
		</v-app-bar-nav-icon>
		<v-app-bar-title v-if="$vuetify.breakpoint.xs && event">
			{{ event.title }}
		</v-app-bar-title>
		<v-spacer />
		<v-card v-if="$vuetify.breakpoint.smAndUp"
			height="60" tile
			color="transparent"
		>
			<v-tabs
				v-model="tab"
				height="60"
				background-color="transparent"
				centered
				icons-and-text
				slider-size="3"
				slider-color="primary"
				show-arrows
			>
				<v-tab
					v-for="(item, index) in eventTabItems"
					:key="index"
					:to="item.to"
					active-class=""
					exact-active-class="active-tab"
				>
					<span>{{ item.title }}</span>
					<v-icon v-if="$vuetify.breakpoint.smAndUp">
						{{ item.icon }}
					</v-icon>
				</v-tab>
			</v-tabs>
		</v-card>
		<v-spacer />
		<v-btn icon
			to="/home/feeds"
		>
			<v-icon>
				mdi-home
			</v-icon>
		</v-btn>
		<template
			v-if="$vuetify.breakpoint.xs"
			#extension
		>
			<v-tabs
				v-model="tab"
				align-with-title
				show-arrows
				slider-size="2"
				center-active
				centered
			>
				<v-tab
					v-for="(item, index) in eventTabItems"
					:key="index"
					:to="item.to"
				>
					{{ item.title }}
				</v-tab>
			</v-tabs>
		</template>
	</v-app-bar>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "Toolbar",
	props: {},
	data: () => ({}),
	computed: {
		...mapGetters({
			event: "event/detail",
		}),
		tab: {
			get() {
				return this.$store.getters["event/detailTab"]
			},
			set(value) {
				this.$store.commit("event/SET_DETAIL_TAB", value)
			}
		},
		eventTabItems() {
			if (!this.$route) return  []
			if (!this.$route.params) return  []
			if (!this.$route.params.id) return  []
			return [
				{title: "about", icon: "mdi-information-variant", to: `/home/event/${this.$route.params.id}/about`},
				{title: "discussion", icon: "mdi-account-multiple", to: `/home/event/${this.$route.params.id}/discussion`},
				{title: "photos", icon: "mdi-image", to: `/home/event/${this.$route.params.id}/images`},
				{title: "multimedia", icon: "mdi-video-vintage", to: `/home/event/${this.$route.params.id}/multimedias`},
			]
		},
	},
	methods: {}
}
</script>

<style lang="scss" scoped>
.event-detail-toolbar {
	::v-deep.v-toolbar__content {
		padding: 0 16px;
	}
}
</style>
