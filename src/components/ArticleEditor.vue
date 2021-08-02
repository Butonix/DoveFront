<template>
	<v-card :loading="loading"
		flat rounded
		class="transparent"
	>
		<editor
			v-if="onGoingArticle"
			:on-going-article="onGoingArticle"
			mode="start"
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
			const started = await this.$store.dispatch("article/startWriting")
			if (!started) await this.openSnack("Cannot start an article for you." +
				" Please contact administrator.")
			this.loading = false
		},
	}
}
</script>

<style scoped>

</style>
