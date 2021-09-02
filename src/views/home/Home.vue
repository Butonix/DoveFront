<template>
	<v-card flat
		rounded="xl"
		class="transparent mx-auto px-2"
		:width="criticalScreenWidth ? 600: 800"
	>
		<div class="py-1" />
		<v-card flat
			class="transparent"
		>
			<v-card v-if="$vuetify.breakpoint.mdAndDown"
				rounded="xl" class="mt-2 mb-4"
			>
				<v-card-actions class="pa-1">
					<v-chip
						class="ma-1"
						active-class="active-side-nav"
						exact-active-class="active-side-nav"
						:class="{'active-side-nav': sideNavActive['All']}"
						@click="$router.push({ name: 'HOME'})"
					>
						All
					</v-chip>
					<v-chip v-for="(item, index) in homeSideNavItems"
						:key="index"
						class="ma-1"
						active-class="active-side-nav"
						exact-active-class="active-side-nav"
						:class="{'active-side-nav': sideNavActive[item.title]}"
						@click="$router.push({ name: 'HOME', query: { type: item.to } })"
					>
						{{ item.title }}
					</v-chip>
				</v-card-actions>
			</v-card>
			<add-post-box />
			<v-card
				flat
				class="transparent"
				rounded="xl"
			>
				<multimedia-list />
			</v-card>
			<v-navigation-drawer
				right
				:permanent="!$vuetify.breakpoint.mdAndDown"
				:temporary="$vuetify.breakpoint.mdAndDown"
				:width="criticalScreenWidth ? 300: 350"
				color="#f6f4fc"
				style="position: fixed; right: 0; border-radius: 0; top: 0; height: 100vh"
			>
				<div v-if="!$vuetify.breakpoint.mdAndDown"
					style="height: 60px;"
				/>
				<div class="py-1" />
				<v-list v-model="selectedSideNavItem"
					rounded
				>
					<v-list-item
						active-class="active-side-nav"
						exact-active-class="active-side-nav"
						:class="{'active-side-nav': sideNavActive['All']}"
						@click="$router.push({ name: 'HOME'})"
					>
						<v-list-item-content>
							<v-list-item-title>All</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item
						v-for="(item, index) in homeSideNavItems"
						:key="index"
						active-class="active-side-nav"
						exact-active-class="active-side-nav"
						:class="{'active-side-nav': sideNavActive[item.title]}"
						@click="$router.push({ name: 'HOME', query: { type: item.to } })"
					>
						<v-list-item-content>
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
				<v-divider class="mb-4 mt-2" />
				<div class="px-4">
					<home-ads />
				</div>
				<v-divider class="my-4" />
				<div class="px-4">
					<facebook-group />
					<div class="py-2" />
				</div>
			</v-navigation-drawer>
		</v-card>
	</v-card>
</template>

<script>

export default {
	name: "HomeComponent",
	components: {
		MultimediaList: () => import("@/components/multimedia/MultimediaList"),
		AddPostBox: () => import("@/views/home/AddPostBox"),
		FacebookGroup: () => import("@/components/utils/FacebookGroup"),
		HomeAds: () => import("@/views/home/Ads"),
	},
	data: () => ({
		selectedSideNavItem: ""
	}),
	computed: {
		sideNavActive() {
			return {
				All: (this.$route.query.type === undefined),
				Satsang: (this.$route.query.type === "satsang"),
				Bhajans: (this.$route.query.type === "bhajan"),
				Prayers: (this.$route.query.type === "prayer"),
				Bachans: (this.$route.query.type === "bachan"),
				Testimonials: (this.$route.query.type === "testimonial")
			}
		},
		homeSideNavItems() {
			return [
				{title: "Satsang", to: "satsang"},
				{title: "Bhajans", to: "bhajan"},
				{title: "Prayers", to: "prayer"},
				{title: "Bachans", to: "bachan"},
				{title: "Testimonials", to: "testimonial"}
			]
		},
		criticalScreenWidth() {
			return this.$vuetify.breakpoint.width > 1260 && this.$vuetify.breakpoint.width < 1620;
		}
	}
}
</script>
<style lang="scss" scoped>
.active-side-nav {
	background-color: #e6d1e9;
	color: #9C27B0 !important;
}
</style>
