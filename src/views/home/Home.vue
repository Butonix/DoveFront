<template>
	<v-card flat
		rounded
		class="transparent mx-auto px-2"
		:width="criticalScreenWidth ? 600: 800"
	>
		<div class="py-1" />
		<v-card flat
			class="transparent"
		>
			<add-post-box />
			<v-card
				flat
				class="transparent"
				rounded
			>
				<multimedia-list />
			</v-card>
			<v-navigation-drawer
				right
				:permanent="!$vuetify.breakpoint.mdAndDown"
				:temporary="$vuetify.breakpoint.mdAndDown"
				:width="criticalScreenWidth ? 300: 350"
				color="#f6f4fc"
				class="px-2"
				style="position: fixed; right: 0; border-radius: 0; top: 0; height: 100vh"
			>
				<div v-if="!$vuetify.breakpoint.mdAndDown"
					style="height: 60px;"
				/>
				<div class="py-1" />
				<home-ads />
				<div class="py-1" />
				<facebook-group />
				<div class="py-1" />
				<facebook height="400" />
				<div class="py-1" />
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
		Facebook: () => import("@/views/showcase/Facebook"),
		FacebookGroup: () => import("@/components/utils/FacebookGroup"),
		HomeAds: () => import("@/views/home/Ads"),
	},
	computed: {
		criticalScreenWidth() {
			return this.$vuetify.breakpoint.width > 1260 && this.$vuetify.breakpoint.width < 1620;
		}
	}
}
</script>
