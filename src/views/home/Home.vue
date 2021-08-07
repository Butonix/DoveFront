<template>
	<v-card flat
		rounded
		class="transparent mx-auto px-2"
		:width="criticalScreenWidth ? 600: 800"
	>
		<div class="py-1" />
		<v-overlay :value="loading">
			<v-progress-circular indeterminate
				size="64"
			/>
		</v-overlay>
		<v-card flat
			class="transparent"
		>
			<add-post-box />
			<no-home-data v-if="multimedias.count === 0 || !multimedias.results"
				:image="require('@/assets/noPostsImg.jpg')"
			/>
			<v-card v-else
				flat :loading="loading"
				class="transparent"
				rounded
			>
				<multimedia-list
					:posts="multimedias.results"
				/>
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
				<facebook />
				<div class="py-1" />
			</v-navigation-drawer>
		</v-card>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import HtmlVideoMixin from "@/mixins/HtmlVideoMixin..js";

export default {
	name: "HomeComponent",
	components: {
		MultimediaList: () => import("@/components/multimedia/MultimediaList.vue"),
		NoHomeData: () => import("@/components/feeds/NoHomeData.vue"),
		AddPostBox: () => import("@/views/home/AddPostBox"),
		Facebook: () => import("@/views/showcase/Facebook.vue"),
		FacebookGroup: () => import("@/components/utils/FacebookGroup"),
		HomeAds: () => import("@/views/home/Ads"),
	},
	mixins: [HtmlVideoMixin],
	data: () => ({
		loading: true,
	}),
	computed: {
		...mapGetters({
			multimedias: "multimedia/list"
		}),
		criticalScreenWidth() {
			return this.$vuetify.breakpoint.width > 1260 && this.$vuetify.breakpoint.width < 1620;
		}
	},
	async created() {
		if (!this.multimedias.count) {
			await this.$store.dispatch("multimedia/filter", {is_approved: true})
		}
		this.loading = false
	},
}
</script>
<!--<style lang="scss" scoped>-->
<!--.router-column {-->
<!--	overflow-x: hidden;-->
<!--	overflow-y: auto !important;-->
<!--	height: 150vh;-->
<!--}-->
<!--/* Hide scrollbar for Chrome, Safari and Opera */-->
<!--.router-column::-webkit-scrollbar {-->
<!--	display: none;-->
<!--}-->

<!--/* Hide scrollbar for IE, Edge and Firefox */-->
<!--.router-column {-->
<!--	-ms-overflow-style: none;  /* IE and Edge */-->
<!--	scrollbar-width: none;  /* Firefox */-->
<!--}-->
<!--</style>-->
