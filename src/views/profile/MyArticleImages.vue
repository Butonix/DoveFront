<template>
	<v-card class="mx-2"
		rounded="xl" flat
	>
		<div class="py-2" />
		<v-btn to="/home/start-article"
			block rounded
			height="auto"
		>
			<v-avatar>
				<v-img :src="require('@/assets/start_writing.png')" />
			</v-avatar>
			Start writing article
		</v-btn>
		<div class="py-3" />
		<profile-no-content
			v-if="myArticles.length === 0"
			text="You have not written an article yet."
			:article="true"
		/>
		<v-row v-else
			no-gutters
		>
			<v-col
				v-for="article in myArticles"
				:key="article.id"
				cols="12"
			>
				<v-toolbar
					:color="(article.completed_writing) ? 'green lighten-4': 'orange lighten-4'"
					height="40" rounded="xl"
					class="my-4 elevation-2 rounded"
				>
					<v-app-bar-nav-icon>
						<v-avatar
							:color="(article.completed_writing) ? 'green lighten-2': 'orange lighten-2'"
							size="30"
						>
							<span>{{ article.id }}</span>
						</v-avatar>
					</v-app-bar-nav-icon>
					<v-toolbar-title class="img-toolbar"
						@click="$router.push({name: 'SACHCHAI NEPAL ARTICLE', params: {id: article.id}})"
					>
						{{ (article.title) ? article.title : "Not completed" }}
					</v-toolbar-title>
					<v-spacer />
					<v-icon class="pr-1">
						{{ (!article.completed_writing) ? 'mdi-progress-clock' : 'mdi-progress-check' }}
					</v-icon>
					<v-icon
						:color="(article.is_approved) ? 'green': 'error'"
					>
						{{ (article.is_approved) ? 'mdi-check-decagram': 'mdi-check-decagram-outline' }}
					</v-icon>
				</v-toolbar>
				<v-row
					no-gutters
				>
					<v-col
						v-for="img in article['images']"
						:key="img.id"
						cols="12"
						xl="3"
						lg="3"
						md="4"
						sm="6"
						class="pa-1"
					>
						<card-img
							height="200"
							:src="img.image"
						/>
					</v-col>
					<v-col
						v-for="url in article['image_urls']"
						:key="url.id"
						cols="12"
						xl="3"
						lg="3"
						md="4"
						sm="6"
						class="pa-1"
					>
						<card-img
							height="200"
							:src="url['image_url']"
						/>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-card>
</template>
<script>
export default {
	name: "MyArticleImages",
	computed: {
		myArticles() {
			return this.$helper.getCurrentUser()["my_articles"]
		}
	}
}
</script>
