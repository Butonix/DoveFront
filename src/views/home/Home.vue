<template>
	<div>
		<v-overlay :value="overlay">
			<v-progress-circular indeterminate
				size="64"
			/>
		</v-overlay>
		<add-post-box />
		<no-home-data v-if="multimedias.count === 0 || !multimedias.results"
			:image="require('@/assets/noPostsImg.jpg')"
		/>
		<div v-else>
			<multimedia-list
				:posts="multimedias.results"
			/>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";
import HtmlVideoMixin from "@/mixins/HtmlVideoMixin..js";

export default {
	name: "HomeComponent",
	components: {
		MultimediaList: () => import("@/components/multimedia/MultimediaList.vue"),
		NoHomeData: () => import("@/components/feeds/NoHomeData.vue"),
		AddPostBox: () => import("@/views/home/AddPostBox")
	},
	mixins: [HtmlVideoMixin],
	data: () => ({
		loading: null,
		overlay: null,
	}),
	computed: {
		...mapGetters({
			multimedias: "multimedia/list"
		})
	},
	async created() {
		this.loading = true
		if (!this.multimedias.count) {
			this.overlay = true
			await this.$store.dispatch("multimedia/filter", {is_approved: true})
			this.overlay = false
		}
		this.loading = false
	},
}
</script>
