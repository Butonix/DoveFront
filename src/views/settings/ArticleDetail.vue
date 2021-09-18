<template>
	<div>
		<v-card
			v-if="articleToView"
			flat
			max-width="800"
			class="mx-auto"
		>
			<v-toolbar>
				<v-app-bar-nav-icon @click="$router.go(-1)">
					<v-icon>mdi-arrow-left</v-icon>
				</v-app-bar-nav-icon>
				<v-app-bar-title v-if="articleToView">
					{{ articleToView.title }}
				</v-app-bar-title>
			</v-toolbar>
			<editor :on-going-article="articleToView"
				mode="view"
			/>
		</v-card>
		<div v-else>
			<v-btn to="/admin/article">
				Article Administration
			</v-btn>
		</div>
	</div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
	name: "ArticleDetail",
	components: {
		Editor: () => import("@/views/home/article/Editor.vue")
	},
	beforeRouteLeave(to, from, next) {
		this.SET_ARTICLE(null)
		next()
	},
	computed: {
		...mapGetters({
			articleToView: "article/toView"
		})
	},
	methods: {
		...mapMutations("article", ["SET_ARTICLE"])
	}
}
</script>

<style scoped>

</style>
