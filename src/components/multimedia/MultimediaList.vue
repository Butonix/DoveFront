<template>
	<div v-if="multimedias">
		<list-skeleton v-if="loading" />
		<div v-else>
			<no-home-data v-if="multimedias.length === 0"
				:image="require('@/assets/noPostsImg.jpg')"
			/>
			<v-card v-else
				flat tile
				min-height="100vh"
				color="transparent"
			>
				<div v-for="post in multimedias"
					:key="post.id" class="mb-2"
				>
					<base-post-card :post="post">
						<template #media>
							<v-col cols="12"
								class="pt-0 px-2"
							>
								<v-card height="45vh"
									dark rounded="xl"
								>
									<v-carousel
										height="45vh"
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
											<v-card height="45vh">
												<v-img :src="$helper.replaceBackendHost(image.image)"
													height="45vh"
												/>
											</v-card>
										</v-carousel-item>
										<v-carousel-item v-for="video in post['multimedia_videos']"
											:key="$helper.replaceBackendHost(video.video)"
										>
											<v-card
												height="45vh"
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
				<div v-observe-visibility="handleScrollToBottom" />
			</v-card>
		</div>
	</div>
</template>
<script>
import HtmlVideoMixin from "@/mixins/HtmlVideoMixin..js";
import {mapGetters, mapMutations} from "vuex";

export default {
	name: "MultimediaList",
	components: {
		ListSkeleton: () => import("@/components/skeletons/MultimediaList.vue"),
		BasePostCard: () => import("@/components/post/_post"),
		NoHomeData: () => import("@/components/feeds/NoHomeData"),
	},
	mixins: [HtmlVideoMixin],
	data() {
		return {
			carouselNavItemStyle: "height: 30px !important; width: 30px !important;",
			dialog: false,
			playerVars: {autoplay: 0, origin: window.location.href},
			loading: true,
			posts: [],
			occurrence: 0,
			next: {
				next: null,
				count: 0
			}
		}
	},
	computed: {
		...mapGetters({
			multimedias: "multimedia/list",
			nextInfo: "multimedia/next"
		}),
	},
	watch: {
		"$route.query.type": {
			async handler(val) {
				await this.$store.dispatch("multimedia/filter", {
					is_approved: true,
					type: val
				})
				this.next = this.nextInfo
				this.loading = false
			},
			immediate: true
		}
	},
	methods: {
		...mapMutations("multimedia", ["MERGE_MULTIMEDIAS", "SET_NEXT"]),
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
				this.occurrence ++
				if (this.occurrence > 1) {
					if (this.nextInfo.next && this.nextInfo.count >=1) {
						const res = await this.$api.getWithPayload(this.next.next.replace("http://sachchaikendranepal.org.np:8000", "https://backend.sachchaikendranepal.org.np"))
						this.MERGE_MULTIMEDIAS(res.results)
						this.SET_NEXT({next: res.next, previous: res.previous, count: res.count})
					}
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
.skeleton-overlay {
	z-index: 7 !important;
}
</style>
