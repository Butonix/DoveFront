<template>
	<v-card
		v-if="article"
		:loading="loading"
		class="list-card"
		outlined rounded="xl"
	>
		<v-card
			v-if="article['is_pinned']"
			dark class="ma-2"
			rounded="xl"
		>
			<v-img
				class="cursor"
				gradient="to top, rgba(100,115,201, 0), rgba(25,32,72, .6)"
				:src="$helper.replaceBackendHost(article['cover_image']['image'])"
				height="250"
				@click="routeToArticleDetail(article.id)"
			/>
		</v-card>
		<v-list
			color="transparent"
			three-line class="py-0"
		>
			<v-list-item>
				<v-list-item-avatar
					size="48"
					:color="$constants.pickBackgroundColor()"
					class="d-flex justify-center author-av"
				>
					<span class="text-uppercase headline white--text">{{ $helper.getUsernameInitials(article.created_by) }}</span>
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-subtitle class="d-flex justify-start">
						<div class="writer-subtitle grey lighten-3">
							{{ article.created_by.username }}
						</div>
						<div class="writer-subtitle grey lighten-3 ml-1">
							{{ $moment(article.timestamp).fromNow() }}
						</div>
					</v-list-item-subtitle>
					<v-list-item-title class="article-title"
						@click="routeToArticleDetail(article.id)"
					>
						{{ article.title }}
					</v-list-item-title>
					<v-list-item-subtitle v-if="article.tags"
						class="d-flex justify-start"
					>
						<div
							v-for="tag in article.tags.split(',')"
							:key="tag[0]"
							class="pa-1 mr-1 mb-2 purple lighten-5"
							style="border-radius: 4px; font-weight: 500"
						>
							#{{ tag }}
						</div>
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</v-list>
		<v-card-actions class="flex-wrap justify-space-around">
			<v-btn color="purple lighten-4"
				class="ma-1" rounded
			>
				<v-icon size="20"
					color="purple"
				>
					mdi-heart-multiple-outline
				</v-icon>
				<span class="pl-1">Reactions <span v-if="status['love_count']">({{ status['love_count'] }})</span></span>
			</v-btn>
			<v-btn
				color="green lighten-4"
				class="ma-1" rounded
			>
				<v-icon size="20"
					color="green"
				>
					mdi-comment-outline
				</v-icon>
				<span class="pl-1">Comments</span>
			</v-btn>
			<v-btn color="primary lighten-2"
				class="ma-1" rounded
			>
				<v-icon>mdi-share-variant-outline</v-icon>
				<span class="pl-1">Share</span>
			</v-btn>
			<v-spacer v-if="$vuetify.breakpoint.smAndUp" />
			<v-chip
				color="grey lighten-2"
				class="ma-1" rounded
			>
				<v-icon class="pr-1"
					size="20"
				>
					mdi-chevron-double-right
				</v-icon>
				{{ parseInt(article.description.length / (250 * 4)) }} mins read
			</v-chip>
		</v-card-actions>
	</v-card>
</template>
<script>
import Snack from "@/mixins/Snack.js";
import ArticleActions from "@/mixins/ArticleActions.js";

export default {
	name: "ArticleCard",
	mixins: [Snack, ArticleActions],
	props: {
		article: {
			type: Object,
			required: true
		}
	},
	data: () => ({
		loading: false,
		status: {
			bookmarked: null,
			love_count: null
		},
	}),
	async created() {
		await this.initStatus()
	},
	methods: {
		routeToArticleDetail(id) {
			this.$router.push({name: "SACHCHAI NEPAL ARTICLE", params: {id: id}})
		},
	}
}
</script>

<style scoped lang="scss">
.writer-subtitle {
	padding: 4px 6px;
	margin: 2px 0;
	border-radius: 24px
}
.list-card {
	background-color: whitesmoke;
}
.list-card:hover {
	background-color: #ede6ff;
}
.author-av {
	margin-top: 22px !important;
	border: 2px solid darkgoldenrod;
}
.article-title {
	cursor: pointer;
	margin-top: -8px;
	font-size: 1.8rem;
}
</style>
