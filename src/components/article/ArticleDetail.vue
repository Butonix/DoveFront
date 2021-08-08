<template>
	<v-card width="100vw">
		<the-snackbar />
		<v-toolbar
			color="indigo lighten-4"
			height="60"
			tile
		>
			<v-app-bar-nav-icon>
				<v-btn icon
					@click="$router.go(-1)"
				>
					<v-icon>mdi-arrow-left-thick</v-icon>
				</v-btn>
			</v-app-bar-nav-icon>
			<v-app-bar-title v-if="article">
				{{ article.title }}
			</v-app-bar-title>

			<v-spacer />

			<div v-if="!articleForEdit">
				<div v-if="article">
					<v-btn v-if="$helper.isUserLoggedIn() && $helper.ifWriterIsCurrentUser(article['created_by']['username'])"
						icon
						@click="setArticleForEdit"
					>
						<v-icon>mdi-pencil</v-icon>
					</v-btn>
				</div>
			</div>
			<div v-else>
				<v-btn icon
					@click="clearArticleForEdit"
				>
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</div>

			<v-btn v-if="status.loved"
				icon
				@click="unsetLove"
			>
				<v-icon>mdi-heart</v-icon>
			</v-btn>
			<v-btn v-else
				icon
				@click="love"
			>
				<v-icon>mdi-heart-outline</v-icon>
			</v-btn>

			<v-btn icon>
				<v-icon>mdi-comment</v-icon>
			</v-btn>

			<v-btn v-if="status['bookmarked']"
				icon
				@click="revokeBookmark"
			>
				<v-icon>mdi-bookmark</v-icon>
			</v-btn>
			<v-btn v-else
				icon
				@click="bookmark"
			>
				<v-icon>mdi-bookmark-outline</v-icon>
			</v-btn>
		</v-toolbar>
		<v-slide-x-transition mode="out-in">
			<v-card v-if="articleForEdit"
				max-width="900"
				class="mx-auto"
			>
				<editor :on-going-article="articleForEdit"
					mode="edit"
				/>
			</v-card>
			<div v-else>
				<v-card
					v-if="article"
					:loading="loading"
					max-width="900"
					color="transparent"
					class="overflow-hidden mx-auto my-4"
					tile
				>
					<v-card
						v-if="coverImg"
						tile
						height="450"
						width="100%"
					>
						<v-img
							v-if="coverImg"
							:src="$helper.replaceBackendHost(coverImg)"
							height="450"
							width="100%"
						/>
					</v-card>
					<div class="py-2" />
					<v-card-subtitle v-if="article.tags"
						class="pb-0"
					>
						<v-chip
							v-for="(tag, index) in article.tags.split(',')"
							:key="index"
							label
							class="mr-1"
							small
						>
							<span>#{{ tag }}</span>
						</v-chip>
					</v-card-subtitle>
					<v-card-title class="display-2">
						{{ article.title }}
					</v-card-title>
					<v-card-subtitle class="py-1">
						<v-chip class="mr-1"
							small
						>
							<v-icon small
								class="pr-1"
							>
								mdi-account-circle
							</v-icon>
							<span>{{ article.created_by.username }}</span>
						</v-chip>
						<v-chip class="mx-1"
							small
						>
							<v-icon small
								class="pr-1"
							>
								mdi-calendar-plus
							</v-icon>
							<span>{{ $moment(article.timestamp).format("Do MMM YYYY") }}</span>
						</v-chip>
						<v-chip class="mx-1"
							small
						>
							<v-icon small
								class="pr-1"
							>
								mdi-account-check
							</v-icon>
							<span>{{ article.approved_by.username }}</span>
						</v-chip>
						<v-chip class="mx-1"
							small
						>
							<v-icon small
								class="pr-1"
							>
								mdi-calendar-check
							</v-icon>
							<span>{{ $moment(article.approved_at).format("Do MMM YYYY") }}</span>
						</v-chip>
					</v-card-subtitle>
					<div class="py-4">
						<v-card-text v-for="(h, index) in getArticleHtml"
							:key="index"
							class="py-2"
						>
							<template
								v-if="h.includes('iframe') && h.includes('youtube.com/embed')"
							>
								<v-card dark>
									<youtube-iframe
										height="400"
										:video-url="getIframeSrc(h)"
									/>
								</v-card>
							</template>
							<template
								v-else-if="h.includes('<img src=')"
							>
								<v-row no-gutters>
									<v-col
										cols="12"
										:sm="(ifFullWidth(h)) ? 12 : 8"
										:md="(ifFullWidth(h)) ? 12 : 8"
										:lg="(ifFullWidth(h)) ? 12 : 8"
										:xl="(ifFullWidth(h)) ? 12 : 8"
									>
										<v-card dark
											height="350"
										>
											<v-img
												width="100%"
												height="350"
												:src="$helper.replaceBackendHost(getImageSrc(h))"
												:alt="getAltText(h)"
											/>
										</v-card>
									</v-col>
									<v-col v-if="getAltText(h)"
										cols="12"
										:sm="12"
										:md="(ifFullWidthForAlt(h)) ? 12 : 4"
										:lg="(ifFullWidthForAlt(h)) ? 12 : 4"
										:xl="(ifFullWidthForAlt(h)) ? 12 : 4"
										:class="($vuetify.breakpoint.smAndDown) ? 'py-2' : 'py -2'"
									>
										<p>
											{{ getAltText(h) }}
										</p>
									</v-col>
								</v-row>
							</template>
							<!--	 eslint-disable-next-line-->
							<div v-else v-html="h"/>
						</v-card-text>
						<v-card-text class="d-flex justify-start align-center">
							<v-img src="https://media.giphy.com/media/MViYNpI0wx69zX7j7w/giphy.gif"
								height="80"
								dark
								eager
								style="border-radius: 4px;"
							>
								<div class="headline text-center align-center">
									<v-col class="pt-lg-6 pt-sm-6 pt-lg-6 pt-xl-6">
										Thank you! You've made to the end.
									</v-col>
								</div>
							</v-img>
						</v-card-text>
						<v-card-text>
							<article-comment-detail />
						</v-card-text>
					</div>
				</v-card>
			</div>
		</v-slide-x-transition>
		<small-footer />
	</v-card>
</template>
<script>
import YoutubeIframe from "@/components/multimedia/YoutubeIframe.vue";
import ArticleCommentDetail from "@/views/article/ArticleCommentsDetail.vue";
import {mapGetters, mapMutations} from "vuex";
import ArticleActions from "@/mixins/ArticleActions.js";
import Snack from "@/mixins/Snack.js";
import SmallFooter from "@/components/utils/SmallFooter.vue";
import Editor from "@/views/home/Editor.vue";
import TheSnackbar from "@/components/utils/TheSnackbar.vue";
const editorJsHtml = require("editorjs-html");

export default {
	name: "ArticleDetail",
	components: {TheSnackbar, Editor, SmallFooter, YoutubeIframe, ArticleCommentDetail},
	mixins: [ArticleActions, Snack],
	beforeRouteLeave(to, from, next) {
		this.SET_ARTICLE(null)
		next()
	},
	data() {
		return {
			loading: null,
			articleForEdit: null,
			status: {
				loved: null,
				bookmarked: null,
				love_count: null,
				bookmark_count: null
			}
		}
	},
	computed: {
		...mapGetters({
			article: "article/detail"
		}),
		coverImg() {
			if (!this.article) return false
			else if (this.article["cover_image"]) return this.article["cover_image"]["image"]
			else return false
		},
		getArticleHtml() {
			if (!this.article) return null
			const editorjsParser = editorJsHtml();
			const jsonData = JSON.parse(this.article.description)
			return editorjsParser.parse(jsonData)
		}
	},
	async created() {
		await this.init()
		await this.initStatus()
	},
	methods: {
		...mapMutations("article", ["SET_ARTICLE"]),
		ifFullWidth(h) {
			return (this.getAltText(h).length > 800 || this.getAltText(h).length < 80)
		},
		ifFullWidthForAlt(h) {
			return (this.getAltText(h).length > 800 || this.getAltText(h).length < 80)
		},
		async init() {
			this.loading = true
			const articleId = this.$route.params.id
			await this.$store.dispatch("article/fetchSingle", {id: articleId})
			this.loading = false
		},
		setArticleForEdit() {
			this.clearArticleForEdit()
			this.articleForEdit = this.article
			this.openSnack("Your are now inside article edit mode. Please save before exiting.", "success")
		},
		clearArticleForEdit() {
			this.articleForEdit = null
		},
		getRegexMatch(regex, text) {
			let match
			let m
			while ((m = regex.exec(text)) !== null) {
				if (m.index === regex.lastIndex) {
					regex.lastIndex++;
				}
				match = m.groups.find
			}
			return match
		},
		getIframeSrc(text) {
			const regex = /src="(?<find>.+)"/gm;
			return this.getRegexMatch(regex, text)
		},
		getImageSrc(text) {
			const regex = /src="(?<find>.+)" alt/gm;
			return this.getRegexMatch(regex, text)
		},
		getAltText(imgText) {
			const regex = /alt="(?<find>.+)"/gm;
			return this.getRegexMatch(regex, imgText)
		}
	}
}
</script>

<style scoped lang="sass">
.article-container
	/*margin-top: 60px;*/
	padding-top: 0
::v-deep.v-card__text p
	margin-bottom: 0 !important
	font-size: 1rem
::v-deep.v-card__text blockquote
	padding: 20px
	background-color: whitesmoke
	font-size: 1.1rem
	border-radius: 10px
	border: 2px dashed slategrey
::v-deep.v-card-text #text
	color: #7affcf !important
</style>
<style>
.v-card__text > blockquote {
	background-color: #7affcf !important
}
</style>
