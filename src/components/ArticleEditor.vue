<template>
	<v-card :loading="loading"
		flat rounded
		class="transparent"
	>
		<editor
			v-if="onGoingArticle"
			:on-going-article="onGoingArticle"
		/>
	</v-card>
</template>

<script>
import Editor from "@/views/home/Editor.vue";
import {mapGetters} from "vuex";
export default {
	name: "ArticleEditor",
	components: {Editor},
	data: () => ({
		loading: true
	}),
	computed: {
		...mapGetters({
			onGoingArticle: "article/detail"
		})
	},
	async created() {
		await this.initialize()
	},
	methods: {
		async initialize() {
			console.log("here")
			const started = await this.$store.dispatch("article/startWriting")
			console.log(this.onGoingArticle)
			if (!started) await this.openSnack("Cannot start an article for you." +
				" Please contact administrator.")
			this.loading = false
		},
	}
}
</script>

<style scoped>

</style>
