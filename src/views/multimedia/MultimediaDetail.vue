<template>
	<v-app>
		<v-app-bar app
			height="50"
			elevation="0"
		>
			<v-app-bar-nav-icon
				@click="$router.go(-1)"
			>
				<v-icon size="20">
					mdi-arrow-left-circle
				</v-icon>
			</v-app-bar-nav-icon>
			<v-toolbar-title class="multimedia-title">
				{{ (multimedia) ? multimedia.title : "Not Found" }}
			</v-toolbar-title>
			<v-spacer />
			<v-icon size="20">
				mdi-video-vintage
			</v-icon>
			<div class="px-1" />
		</v-app-bar>
		<v-navigation-drawer
			v-if="multimedia"
			right
			app
			width="350"
			:temporary="$vuetify.breakpoint.smAndDown"
		>
			<div id="postDetail">
				<div class="py-2" />
				<v-card-title
					v-if="multimedia['uploaded_by']"
					class="pt-0 heading"
				>
					{{ multimedia.title }}
				</v-card-title>
			</div>
			<v-divider />
			<PostDetailActionsComponent
				v-if="multimedia" :target="multimedia"
				@focus-comment="$refs.comment.focus()"
			/>
			<v-divider />
			<div class="comments_detail">
				<comments-detail />
			</div>
			<v-divider />
			<div
				class="pa-2"
			>
				<comment-box
					v-if="multimedia.id && $vuetify.breakpoint.mdAndUp"
					:id="multimedia.id"
					model="multimedia"
					:filter="false"
				/>
			</div>
		</v-navigation-drawer>
		<v-main>
			<v-container fluid
				class="pa-0"
			>
				<not-found v-if="postNotAvailable" />
				<v-card v-else
					:loading="loading"
					flat tile
				>
					<base-post-detail
						v-if="multimediaId"
						:target="multimedia"
					>
						<template #media>
							<v-carousel
								hide-delimiters
								height="77vh"
								show-arrows-on-hover
							>
								<template #next="{ on, attrs }">
									<v-btn dark
										fab
										v-bind="attrs"
										color="white"
										height="45"
										width="45"
										v-on="on"
										@click="pauseAllPlaying()"
									>
										<v-icon size="30"
											color="grey darken-4"
										>
											mdi-chevron-right
										</v-icon>
									</v-btn>
								</template>
								<template #prev="{ on, attrs }">
									<v-btn
										fab
										v-bind="attrs"
										color="white"
										height="45"
										width="45"
										v-on="on"
										@click="pauseAllPlaying()"
									>
										<v-icon color="grey darken-4"
											size="30"
										>
											mdi-chevron-left
										</v-icon>
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
												class="ma-2 delete-img-btn"
												fab
												x-small
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
	</v-app>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";
import SmallFooter from "@/components/utils/SmallFooter.vue";
import HtmlVideoMixin from "@/mixins/HtmlVideoMixin.js";
import PostDetailActionsComponent from "@/views/post/PostDetailActions.vue";
import CommentBox from "@/components/form/CommentBox.vue";

export default {
	name: "MultimediaDetailView",
	components: {
		CommentBox,
		PostDetailActionsComponent,
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
.multimedia-title {
	font-size: 16px;
}
.delete-img-btn {
	position: absolute; right: 20px; top: 10px;
}
</style>
