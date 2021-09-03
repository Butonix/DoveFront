<template>
	<v-card
		v-if="target"
		tile
		flat
		:loading="loading"
		class="mx-auto"
	>
		<v-row no-gutters>
			<v-col cols="12">
				<slot name="media" />
			</v-col>
			<v-col cols="12">
				<div id="postDetail">
					<div class="py-2" />
					<v-card-title
						v-if="target['uploaded_by']"
						class="pt-0 display-1"
					>
						<div>
							{{ target.title }}
							<v-btn icon
								@click="openUpdateName"
							>
								<v-icon v-if="ifWriterIsCurrentUser"
									size="22"
									color="primary"
								>
									mdi-pencil
								</v-icon>
							</v-btn>
						</div>
					</v-card-title>
					<v-slide-y-transition>
						<v-text-field
							v-if="showTitleUpdate"
							ref="eventName"
							v-model="titleToUpdate"
							class="px-2"
							counter="255"
							outlined
							dense rounded
							prepend-inner-icon="mdi-text"
						>
							<template #append>
								<v-btn
									style="margin-top: -6px;"
									class="send-icon-button"
									color="indigo"
									icon
									@click="updateName"
								>
									<v-icon>
										mdi-send
									</v-icon>
								</v-btn>
							</template>
						</v-text-field>
					</v-slide-y-transition>
					<v-divider />
					<div class="post-auth-subtitle">
						<div class="item">
							<v-icon size="16"
								color="primary"
								class="post-auth-icon pr-1"
							>
								mdi-account-circle
							</v-icon>
							<div v-if="target['uploaded_by']">
								{{ writer }}
							</div>
						</div>
						<div class="item">
							<v-icon size="16"
								color="teal"
								class="post-auth-icon pl-1"
							>
								mdi-calendar-plus
							</v-icon>
							<div>
								{{ formatDate(target['timestamp']) }}
							</div>
						</div>
						<div class="item">
							<v-icon size="16"
								color="green"
								class="post-auth-icon"
							>
								mdi-calendar-check
							</v-icon>
							<div>
								{{ formatDate(target.approved_at) }}
							</div>
						</div>
					</div>
					<v-card-text
						v-if="target['uploaded_by']"
						class="py-0 pb-2"
					>
						<span>
							{{ target.description }}
							<v-btn
								v-if="!target.description && ifWriterIsCurrentUser"
								depressed color="grey lighten-3"
								rounded @click="openUpdateDescription"
							>
								<v-fade-transition>
									<span v-if="showDescriptionUpdate">
										Cancel
									</span>
									<span v-else>Add description</span>
								</v-fade-transition>
							</v-btn>
						</span>
					</v-card-text>
					<v-slide-y-transition>
						<v-textarea
							v-if="showDescriptionUpdate"
							ref="description"
							v-model="descriptionUpdate"
							outlined rounded
							class="mx-3"
							counter="10000"
							auto-grow
							prepend-inner-icon="mdi-text"
						>
							<template #append>
								<v-btn icon
									class="send-icon-button"
									color="primary"
									@click="updateDescription"
								>
									<v-icon>
										mdi-send
									</v-icon>
								</v-btn>
							</template>
						</v-textarea>
					</v-slide-y-transition>
					<v-divider />
					<v-card-text class="py-6 d-flex justify-center align-center">
						<span>
							<IconWithTooltip
								class="px-2"
								icon="mdi-check-decagram"
								:color="(target.is_approved) ? 'green darken-1' : 'grey darken-1'"
								tooltip="Approved"
							/>
							<IconWithTooltip
								class="px-2"
								icon="mdi-account-music"
								color="blue darken-1"
								tooltip="Follower"
							/>
							<IconWithTooltip
								v-if="ifWriterIsMember"
								class="px-1"
								icon="mdi-account-network"
								color="blue darken-1"
								tooltip="Member"
							/>
							<IconWithTooltip
								class="px-2"
								icon="mdi-video"
								color="orange darken-3"
								tooltip="Multimedia"
							/>
						</span>
					</v-card-text>
					<v-divider />
				</div>
				<PostDetailActionsComponent
					v-if="target" :target="target"
					@focus-comment="$refs.comment.focus()"
				/>
				<v-divider />
			</v-col>
			<v-col cols="12">
				<div class="py-12" />
			</v-col>
			<v-col cols="12">
				<v-textarea
					ref="comment"
					v-model="comment.comment"
					class="comment"
					outlined rounded
					color="primary"
					placeholder="Add your comment here..."
					hide-details="auto"
					clearable auto-grow
					prepend-inner-icon="mdi-comment"
				>
					<template #append>
						<v-btn
							icon class="send-icon-button"
							style="margin-top: -8px;"
							@click="addCommentToPost"
						>
							<v-icon
								color="primary"
							>
								mdi-send
							</v-icon>
						</v-btn>
					</template>
				</v-textarea>
			</v-col>
			<v-col cols="12">
				<div class="py-4" />
			</v-col>
			<v-col cols="12">
				<slot name="comments" />
			</v-col>
		</v-row>
	</v-card>
</template>
<script>
import Snack from "@/mixins/Snack.js";

export default {
	name: "BasePostDetailComponent",
	components: {
		IconWithTooltip: () => import("@/components/button/IconWithTooltip.vue"),
		PostDetailActionsComponent: () => import("@/views/post/PostDetailActions")
	},
	mixins: [Snack],
	props: {
		target: {
			type: Object,
			required: true
		}
	},
	data: () => ({
		loading: false,
		isFollower: false,
		isMember: true,
		showTitleUpdate: false,
		showDescriptionUpdate: false,
		comment: {
			comment: null,
			multimedia: null
		},
		titleToUpdate: null,
		descriptionUpdate: null,
	}),
	computed: {
		ifWriterIsCurrentUser() {
			if (!this.$helper.isUserLoggedIn()) return
			return this.$helper.getCurrentUser().username === this.target["uploaded_by"]["username"]
		},
		writer() {
			return this.target["uploaded_by"]["username"]
		},
		ifWriterIsMember() {
			const writer = this.target["uploaded_by"]
			if (!writer) return false
			return writer.member !== null
		}
	},
	created() {
		this.titleToUpdate = this.target.title
		this.descriptionUpdate = this.target.description
	},
	methods: {
		openUpdateName() {
			// this.showTitleUpdate = !this.showTitleUpdate
			this.titleToUpdate = this.target.title
			if(!this.showTitleUpdate) {
				this.showTitleUpdate = true
				this.$nextTick(() => {
					this.$refs.eventName.focus()
				})
			} else this.showTitleUpdate = false
		},
		openUpdateDescription() {
			this.descriptionUpdate = this.target.description
			if (!this.showDescriptionUpdate) {
				this.showDescriptionUpdate = true
				this.$nextTick(() => {
					this.$refs.description.focus()
				})
			} else this.showDescriptionUpdate = false
		},
		async updatePost(body) {
			await this.$store.dispatch(
				"multimedia/patch", {
					id: this.target.id,
					body: body
				}
			)
		},
		async updateName() {
			await this.updatePost({ title: this.titleToUpdate })
			this.showTitleUpdate = false
		},
		async updateDescription() {
			await this.updatePost({ description: this.descriptionUpdate })
			this.showDescriptionUpdate = false
		},
		formatDate(date) {
			return this.$moment(date).format("MMMM Do YYYY")
		},
		async addCommentToPost() {
			this.comment.multimedia = this.target.id
			await this.$store.dispatch("multimedia/postComment", {body: this.comment})
			this.$bus.emit("refresh-comment-in-details-page")
			this.comment.comment = ""
		}
	}
}
</script>
<style lang="sass" scoped>
.alice-blue
	background-color: aliceblue
.post-auth-icon
	margin-top: -2px
.post-auth-subtitle
	font-size: 14px
	display: flex
	flex-wrap: wrap
	padding: 6px 16px
	.item
		padding: 2px 4px
		border-radius: 24px
		display: flex
		justify-content: space-between
		margin: 2px
		background-color: #e0e0e0
#go-back
	top: 80px
	left: 1%
.edit-icon
	margin-top: -6px
	padding: 0 4px 0 10px
</style>
