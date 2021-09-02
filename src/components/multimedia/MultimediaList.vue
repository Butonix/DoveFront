<template>
	<div v-if="posts">
		<v-overlay :value="loading">
			<v-progress-circular indeterminate
				size="64"
			/>
		</v-overlay>
		<no-home-data v-if="posts.length === 0"
			:image="require('@/assets/noPostsImg.jpg')"
		/>
		<div v-else
			style="min-height: 100vh"
		>
			<div v-for="post in posts"
				:key="post.id" class="mb-2"
			>
				<base-post-card :post="post">
					<template #media>
						<v-col cols="12"
							class="pt-0 px-2"
						>
							<v-card height="40vh"
								dark rounded="xl"
							>
								<v-carousel
									height="40vh"
									hide-delimiters
									show-arrows-on-hover
								>
									<template #next="{ on, attrs }">
										<v-btn
											v-show="moreThanOneItem(post)"
											dark
											v-bind="attrs"
											:style="carouselNavItemStyle"
											icon
											v-on="on"
											@click="pauseAllPlaying()"
										>
											<v-icon>mdi-chevron-right</v-icon>
										</v-btn>
									</template>
									<template #prev="{ on, attrs }">
										<v-btn
											v-show="moreThanOneItem(post)"
											dark
											icon
											:style="carouselNavItemStyle"
											v-bind="attrs"
											v-on="on"
											@click="pauseAllPlaying()"
										>
											<v-icon>mdi-chevron-left</v-icon>
										</v-btn>
									</template>
									<v-carousel-item
										v-for="image in post['multimedia_images']"
										:key="$helper.replaceBackendHost(image.image)"
									>
										<v-card height="40vh">
											<v-img :src="$helper.replaceBackendHost(image.image)"
												height="40vh"
											/>
										</v-card>
									</v-carousel-item>
									<v-carousel-item v-for="video in post['multimedia_videos']"
										:key="$helper.replaceBackendHost(video.video)"
									>
										<v-card
											height="40vh"
											max-width="100%"
											dark
											class="ma-0 pa-0"
										>
											<video
												:poster="$helper.replaceBackendHost(video.poster)"
												controls
												height="100%"
												width="100%"
												:src="$helper.replaceBackendHost(video.video)"
												@play="onPlay"
											/>
										</v-card>
									</v-carousel-item>
									<v-carousel-item v-for="video in post['multimedia_video_urls']"
										:key="video.video_url"
									>
										<youtube
											ref="yt"
											height="100%"
											width="100%"
											:video-id="$youtube.getIdFromUrl(video.video_url)"
											nocookie
											:player-vars="playerVars"
											@playing="playing"
										/>
									</v-carousel-item>
								</v-carousel>
							</v-card>
						</v-col>
					</template>
				</base-post-card>
			</div>
			<div
				v-if="!loading && posts.length > 0"
				v-observe-visibility="handleScrollToBottom"
			/>
		</div>
	</div>
</template>
<script>
import HtmlVideoMixin from "@/mixins/HtmlVideoMixin..js";
import {mapGetters} from "vuex";

export default {
	name: "MultimediaList",
	components: {
		BasePostCard: () => import("@/components/post/_post.vue"),
		NoHomeData: () => import("@/components/feeds/NoHomeData.vue"),
	},
	mixins: [HtmlVideoMixin],
	data() {
		return {
			carouselNavItemStyle: "height: 30px !important; width: 30px !important;",
			dialog: false,
			playerVars: {autoplay: 0, origin: window.location.href},
			loading: true,
			posts: [],
			next: {
				next: null,
				count: 0
			}
		}
	},
	computed: {
		...mapGetters({
			multimedias: "multimedia/list"
		}),
	},
	watch: {
		"$route.query.type": {
			async handler(val) {
				await this.$store.dispatch("multimedia/filter", {
					is_approved: true,
					type: val
				})
				this.posts = []
				this.posts.push(...this.multimedias.results)
			},
			immediate: true
		}
	},
	async created() {
		await this.init()
	},
	methods: {
		async init() {
			if (!this.multimedias.count) {
				await this.$store.dispatch("multimedia/filter", {is_approved: true, type: this.$route.query.type})
			}
			this.posts.push(...this.multimedias.results)
			this.loading = false
		},
		async pauseAllPlaying() {
			await this.pauseAllYt()
			await this.pauseAllPlayingHTMLVideos()
		},
		moreThanOneItem(media) {
			const mediaImages = media["multimedia_images"]
			const mediaVideos = media["multimedia_videos"]
			const mediaUrls = media["multimedia_video_urls"]
			let temp = []
			temp = temp.concat(mediaImages)
			temp = temp.concat(mediaVideos)
			temp = temp.concat(mediaUrls)
			return temp.length > 1
		},
		async handleScrollToBottom(isVisible) {
			if(isVisible) {
				if(this.next.count === 0) {
					this.next.next = (this.multimedias.next)
						? this.multimedias.next.replace("http://sachchaikendranepal.org.np:8000", "https://backend.sachchaikendranepal.org.np")
						: this.multimedias.next
					this.next.count ++
					return
				}
				if (this.next.next && this.next.count >=1) {
					this.next.count ++
					const res = await this.$api.getWithPayload(this.next.next)
					this.posts.push(...res.results)
					this.next.next = res.next
				}
			}
		}
	}
}
</script>
<style lang="scss" scoped>
::v-deep div.title {
	text-align: center !important;
}
::v-deep.v-carousel--vertical-delimiters .v-carousel__controls {
	width: 30px;
}
::v-deep.v-item-group {
	button {
		height: 4px !important;
		width: 4px !important;
	}
}
.youtube-thumbnail {
	position: relative;
	.yt-video-icon {
		position: absolute;
		top: 40%;
		left: 45%;
	}
	.video-icon {
		position: absolute;
		top: 2%;
		right: 2%;
	}
}
</style>
