<template>
	<v-card v-if="articles"
		:loading="loading"
		flat
		tile
		color="purple"
		class="mx-auto home-articles"
		max-width="1000"
	>
		<div v-if="$vuetify.breakpoint.smAndDown"
			class="pa-4"
		>
			<chip-filter />
		</div>
		<article-pin-bar />
		<v-card
			v-if="articles.results"
			flat tile
			class="transparent"
		>
			<no-home-data v-if="articles.results.length === 0"
				class="ma-3"
			/>
			<article-card
				v-for="post in articles.results"
				v-else
				:key="post.id"
				:article="post"
				class="ma-3"
			/>
		</v-card>
		<div class="py-16" />
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "Articles",
	components: {
		ChipFilter: () => import("@/views/home/article/ChipFilter.vue"),
		ArticlePinBar: () => import("@/views/home/article/PinBar.vue"),
		NoHomeData: () => import("@/components/feeds/NoHomeData.vue"),
		ArticleCard: () => import("@/components/article/ArticleCard.vue"),
	},
	data: () => ({
		loading: true
	}),
	computed: {
		...mapGetters({
			articles: "article/list"
		}),
	},
	async created() {
		if (!this.articles.count) {
			await this.$store.dispatch("article/filter", {
				is_approved: true
			})
		}
		this.loading = false
	}
}
</script>

<style scoped lang="scss">
.library-title {
	font-size: 2.6rem;
	font-weight: 400;
	padding: 20px 0;
}
.home-articles {
	background-color: transparent !important;
}
</style>
