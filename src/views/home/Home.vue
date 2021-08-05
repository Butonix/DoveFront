<template>
	<v-card flat
		rounded
		class="transparent"
	>
		<div class="py-1" />
		<v-overlay :value="loading">
			<v-progress-circular indeterminate
				size="64"
			/>
		</v-overlay>
		<v-row no-gutters>
			<v-col cols="12"
				xl="8" lg="8"
				md="8" sm="8"
				:class="{
					'pr-4 router-column': $vuetify.breakpoint.width > 600
				}"
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
			</v-col>
			<v-col
				xl="4" lg="4"
				md="4" sm="4"
			>
				<home-ads />
				<div class="py-1" />
				<facebook />
			</v-col>
		</v-row>
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
		HomeAds: () => import("@/views/home/Ads"),
	},
	mixins: [HtmlVideoMixin],
	data: () => ({
		loading: true,
	}),
	computed: {
		...mapGetters({
			multimedias: "multimedia/list"
		})
	},
	async created() {
		if (!this.multimedias.count) {
			await this.$store.dispatch("multimedia/filter", {is_approved: true})
		}
		this.loading = false
	},
}
</script>
<style lang="scss" scoped>
.router-column {
	overflow-x: hidden;
	overflow-y: auto !important;
	height: 150vh;
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
