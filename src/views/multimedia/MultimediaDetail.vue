<template>
	<v-card
		:dark="isAdminRoute"
		:max-width="isAdminRoute ? '1000' : '100vw'"
		width="100vw"
		flat
	>
		<v-app-bar height="50">
			<v-app-bar-nav-icon
				@click="$router.go(-1)"
			>
				<v-icon size="20">
					mdi-arrow-left-circle
				</v-icon>
			</v-app-bar-nav-icon>
			<v-toolbar-title style="font-size: 16px;">
				{{ (multimedia) ? multimedia.title : "Not Found" }}
			</v-toolbar-title>
			<v-spacer />
			<v-icon size="20">
				mdi-video-vintage
			</v-icon>
			<div class="px-1" />
		</v-app-bar>
		<v-main
			:class="{'pa-0': isAdminRoute}"
		>
			<v-container fluid>
				<not-found v-if="postNotAvailable" />
				<v-card v-else
					max-width="1000"
					:loading="loading"
					class="mx-auto"
					flat tile
				>
					<div v-if="!$route.fullPath.includes('admin/multimedia')"
						class="ma-3"
					/>
					<base-post-detail
						v-if="multimediaId"
						:target="multimedia"
					>
						<template #media>
							<v-carousel
								hide-delimiters
								height="77vh"
								show-arrows-on-hover
								style="border-radius: 4px;"
							>
								<template #next="{ on, attrs }">
									<v-btn dark
										icon
										v-bind="attrs"
										v-on="on"
										@click="pauseAllPlaying()"
									>
										<v-icon>mdi-chevron-right</v-icon>
									</v-btn>
								</template>
								<template #prev="{ on, attrs }">
									<v-btn dark
										icon
										v-bind="attrs"
										v-on="on"
										@click="pauseAllPlaying()"
									>
										<v-icon>mdi-chevron-left</v-icon>
									</v-btn>
								</template>
								<v-carousel-item
									v-for="item in multimedia['multimedia_images']"
									:key="item.id + 505700 * 7"
									active-class="multimedia-active-image"
									reverse-transition="fade-transition"
									transition="fade-transition"
								>
									<template #default>
										<card-img
											:src="item.image"
											height="77vh"
											:contain="true"
										>
											<v-btn
												v-if="$helper.ifWriterIsCurrentUser(multimedia.uploaded_by.username) || $helper.isCurrentUserSuperAdmin()"
												class="ma-2"
												fab
												x-small
												style="position: absolute; right: 20px; top: 10px;"
												@click="deleteImage(item.id)"
											>
												<v-icon color="error">
													mdi-delete
												</v-icon>
											</v-btn>
										</card-img>
									</template>
								</v-carousel-item>
								<v-carousel-item
									v-for="item in multimedia['multimedia_videos']"
									:key="item.id + 700014 * 11"
									active-class="multimedia-active-video"
									reverse-transition="fade-transition"
									transition="fade-transition"
								>
									<template #default>
										<v-card
											height="77vh"
											class="rounded-0"
											color="grey lighten-3"
										>
											<v-btn
												v-if="$helper.ifWriterIsCurrentUser(multimedia.uploaded_by.username) || $helper.isCurrentUserSuperAdmin()"
												class="ma-2"
												fab
												x-small
												@click="deleteVideo(item.id)"
											>
												<v-icon color="error">
													mdi-delete
												</v-icon>
											</v-btn>
											<video
												height="90%"
												width="100%"
												controls
												crossorigin="anonymous"
												:src="$helper.replaceBackendHost(item.video)"
												@play="onPlay"
											/>
										</v-card>
									</template>
								</v-carousel-item>
								<v-carousel-item
									v-for="videoUrl in multimedia['multimedia_video_urls']"
									:key="videoUrl.video_url"
									active-class="multimedia-active-video-url"
									transition="fade-transition"
									reverse-transition="fade-transition"
								>
									<template #default>
										<v-card
											height="77vh"
											class="rounded-0"
											color="grey lighten-3"
										>
											<v-card-actions>
												<v-btn v-if="$helper.ifWriterIsCurrentUser(multimedia.uploaded_by.username) || $helper.isCurrentUserSuperAdmin()"
													icon
													@click="deleteVideoUrl(videoUrl.id)"
												>
													<v-icon>mdi-delete</v-icon>
												</v-btn>
											</v-card-actions>
											<youtube
												ref="yt"
												height="100%"
												width="100%"
												:video-id="$youtube.getIdFromUrl(videoUrl.video_url)"
												@playing="playing"
											/>
										</v-card>
									</template>
								</v-carousel-item>
							</v-carousel>
						</template>
						<template #comments>
							<comments-detail />
						</template>
					</base-post-detail>
				</v-card>
			</v-container>
		</v-main>
		<small-footer v-if="!isAdminRoute" />
	</v-card>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";
import SmallFooter from "@/components/utils/SmallFooter.vue";
import HtmlVideoMixin from "@/mixins/HtmlVideoMixin..js";

export default {
	name: "MultimediaDetailView",
	components: {
		SmallFooter,
		BasePostDetail: () => import("@/components/post/_postDetail"),
		CommentsDetail: () => import("@/views/post/CommentsDetail"),
	},
	mixins: [HtmlVideoMixin],
	beforeRouteLeave(to, from, next) {
		this.SET_MULTIMEDIA({})
		next()
	},
	data: () => ({
		multimediaId: null,
		loading: false,
		nowPlaying: null,
		postNotAvailable: false
	}),
	computed: {
		... mapGetters({
			multimedia: "multimedia/multimediaDetail"
		}),
		isAdminRoute() {
			return this.$route.name === "MULTIMEDIA DETAIL ADMINISTRATION"
		}
	},
	async created() {
		await this.init()
	},
	methods: {
		...mapMutations("multimedia", ["SET_MULTIMEDIA"]),
		async init() {
			this.loading=true
			this.multimediaId = parseInt(this.$route.params.id)
			const fetched = await this.$store.dispatch("multimedia/getSingle", {id: this.multimediaId})
			this.postNotAvailable = !fetched;
			if (fetched) {
				if (this.multimedia["multimedia_video_urls"].length > 0) {
					this.nowPlaying = this.multimedia["multimedia_video_urls"][0].video_url
				}
			}
			this.loading=false
		},
		async deleteImage(itemId) {

		},
		async deleteVideo(itemId) {

		},
		async deleteVideoUrl(itemId) {

		},
		async pauseAllPlaying() {
			await this.pauseAllYt()
			await this.pauseAllPlayingHTMLVideos()
		},
	}
}
</script>
<style lang="scss" scoped>
::v-deep div.title {
	text-align: center !important;
}
.thumbnail-radius {
	border-radius: 5px;
}
</style>
