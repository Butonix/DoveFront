<template>
	<v-card
		v-if="multimedia"
		tile flat
	>
		<v-divider />
		<v-toolbar height="50"
			elevation="0"
		>
			<v-toolbar-title class="comment-headline">
				Comments
			</v-toolbar-title>
		</v-toolbar>
		<v-divider />
		<div v-if="multimedia.comments">
			<v-list v-if="multimedia.comments.length > 0"
				two-line
			>
				<template v-for="(item, index) in multimedia.comments">
					<v-subheader
						v-if="item.header"
						:key="index"
						v-text="item.header"
					/>

					<v-divider
						v-else-if="item.divider"
						:key="index"
						:inset="item.inset"
					/>

					<v-list-item
						v-else
						:key="index"
						class="pl-3 pr-1 comment-item"
					>
						<div>
							<v-avatar size="45"
								tile
								class="d-flex justify-content-center ma-2 elevation-4 comment-avatar"
								:color="$constants.pickBackgroundColor()"
							>
								<span v-if="item.writer"
									class="white--text headline"
								>
									{{ $helper.getUsernameInitials(item.writer) }}
								</span>
								<span v-else
									class="white--text headline"
								>A</span>
							</v-avatar>
							<v-dialog
								v-model="updateCommentDialog"
								max-width="500"
							>
								<v-card class="edit-comment-card"
									rounded="xl"
								>
									<v-card-title class="headline grey lighten-2">
										Update your comment
									</v-card-title>
									<div class="py-4" />

									<v-card-text>
										<v-textarea
											v-model="updateComment.comment"
											filled rounded
											label="Comment"
										/>
									</v-card-text>

									<v-divider />

									<v-card-actions>
										<v-btn rounded
											color="grey"
											text
											@click="updateCommentDialog = false"
										>
											Cancel
										</v-btn>
										<v-spacer />
										<v-btn rounded
											color="primary"
											text
											@click="updateMyComment(item.id)"
										>
											Update
										</v-btn>
									</v-card-actions>
								</v-card>
							</v-dialog>
						</div>
						<v-list-item-content>
							<v-list-item-title v-if="item.writer"
								class="d-flex align-items-center"
							>
								<code class="detail-code">
									<v-icon size="16"
										class="detail-icon"
									>
										mdi-account-circle
									</v-icon>
									{{ item.writer.username }}
								</code>
								<span class="detail-icon px-1">
									<v-btn
										x-small
										icon
										@click="openUpdateCommentDialog(item.comment)"
									>
										<v-icon color="primary">
											mdi-pencil
										</v-icon>
									</v-btn>
								</span>
								<v-spacer />
								<code class="detail-code">
									<v-icon
										color="grey darken-4"
										size="16"
										class="detail-icon"
									>
										mdi-history
									</v-icon>
									{{ $moment(item.created_at).fromNow() }}
								</code>
							</v-list-item-title>
							<v-list-item-title v-else>
								<code class="detail-code">
									<v-icon size="16"
										class="detail-icon"
									>
										mdi-account-circle
									</v-icon>
									Anonymous
								</code>
							</v-list-item-title>
							<v-list-item-subtitle class="comment">
								{{ item.comment }}
							</v-list-item-subtitle>
						</v-list-item-content>
						<v-list-item-action class="comment-actions">
							<v-btn v-if="ifWriterIsCurrentUser(item.writer) || $helper.isCurrentUserSuperAdmin() "
								icon
								@click="removeComment(item.id)"
							>
								<v-icon
									color="red darken-1"
								>
									mdi-delete
								</v-icon>
							</v-btn>
						</v-list-item-action>
					</v-list-item>
				</template>
			</v-list>
			<div v-else
				class="fill-height empty-comment-message"
			>
				<i>Be the first to comment.</i>
			</div>
		</div>
	</v-card>
</template>
<script>
import Snack from "@/mixins/Snack";
import {mapGetters} from "vuex";

export default {
	name: "CommentsDetailComponent",
	mixins: [Snack],
	data: () => ({
		updateCommentDialog: false,
		updateComment: {
			comment: null
		},
		loading: false
	}),
	computed: {
		...mapGetters({
			multimedia: "multimedia/multimediaDetail"
		})
	},
	methods: {
		ifWriterIsCurrentUser(writer){
			if(!writer) return false
			if (!this.$helper.getCurrentUser()) return false
			return (writer.username === this.$helper.getCurrentUser().username)
		},
		openUpdateCommentDialog(comment) {
			this.updateCommentDialog = true
			this.updateComment.comment = comment
		},
		closeUpdateCommentDialog() {
			this.updateCommentDialog = false
		},
		async init() {
			this.loading = true
			this.postId = parseInt(this.$route.params.id)
			await this.$store.dispatch("multimedia/getSingle", {id: this.postId})
			this.loading = false
		},
		async updateMyComment(commentId) {
			const updated = await this.$store.dispatch("multimedia/updateComment", {
				id: commentId,
				comment: this.updateComment.comment
			})
			if (updated) {
				this.closeUpdateCommentDialog()
				await this.init()
			} else {
				await this.openSnack("Failed to comment. Please try again later.")
			}
		},
		async removeComment(commentId) {
			const removed = await this.$store.dispatch("multimedia/deleteComment", {id: commentId})
			if (removed) {
				await this.openSnack("Comment remove success", "success")
				await this.init()
			} else {
				await this.openSnack("Failed to remove comment. Please try again later.")
			}
		},
	}
}
</script>
<style lang="sass" scoped>
.comment
	background-color: #e8e8e8
	font-size: .875rem
	border-radius: 24px
	padding: 10px
	white-space: normal
::v-deep .v-subheader
	height: 15px
::v-deep.v-list-item__title
	white-space: normal
.empty-comment-message
	padding: 20px
	color: grey
.comment-headline
	font-size: 16px
.detail-code
	border-radius: 24px
	font-size: 11px
	letter-spacing:  .5px
	font-family: inherit
.detail-icon
	margin-top: -2px
.comment-avatar
	border-radius: 50% !important
</style>
