<template>
	<v-card v-if="articles"
		:loading="loading"
		flat
		tile
		class="mx-auto"
		color="transparent"
		:width="criticalScreenWidth ? 680: 900"
	>
		<div v-if="$vuetify.breakpoint.smAndUp"
			class="py-1"
		/>
		<div :class="{
			'mx-2': $vuetify.breakpoint.width > 600
		}"
		>
			<v-sheet
				color="transparent"
				elevation="2"
				rounded
				class="py-1 pl-4 pr-1 mx-auto"
			>
				<v-chip-group
					multiple
					active-class="primary--text"
					show-arrows
				>
					<v-chip v-for="tag in tags"
						:key="tag"
						style="font-size: 13px;"
					>
						{{ tag }}
					</v-chip>
				</v-chip-group>
			</v-sheet>
		</div>
		<div v-if="articles.results">
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
		</div>
		<div class="py-16" />
		<v-navigation-drawer
			right
			:permanent="!$vuetify.breakpoint.mdAndDown"
			:temporary="$vuetify.breakpoint.mdAndDown"
			:width="criticalScreenWidth ? 250: 300"
			color="#f6f4fc"
			class="px-2"
			style="position: fixed; right: 0; border-radius: 0; top: 0; height: 100vh"
		>
			<div v-if="!$vuetify.breakpoint.mdAndDown"
				style="height: 60px;"
			/>
			<div class="py-1" />
			<v-card>
				<v-card-title>
					This is article sidebar
				</v-card-title>
			</v-card>
		</v-navigation-drawer>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import NoHomeData from "@/components/feeds/NoHomeData.vue";

export default {
	name: "Articles",
	components: {
		NoHomeData,
		ArticleCard: () => import("@/components/article/ArticleCard.vue"),
	},
	data: () => ({
		loading: false,
		tags: [
			"Peace",
			"Health",
			"Motivation",
			"Satsang",
			"Meeting"
		],
	}),
	computed: {
		...mapGetters({
			articles: "article/list"
		}),
		criticalScreenWidth() {
			return this.$vuetify.breakpoint.width > 1260 && this.$vuetify.breakpoint.width < 1620;
		}
	},
	async created() {
		this.loading = true
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
</style>
