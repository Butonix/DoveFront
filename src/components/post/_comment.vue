<template>
	<div
		class="comment-container mx-2"
	>
		<v-list v-if="post"
			class="comment-histories"
			two-line
			dense
		>
			<v-list-item v-for="(item) in commentsToShow"
				:key="item.id"
				class="pl-0 d-flex align-start"
			>
				<div>
					<v-avatar :color="$constants.pickBackgroundColor()"
						class="ml-1 mr-2 mt-3 mb-1"
						size="40"
					>
						<span class="white--text headline">
							{{ $helper.getUsernameInitials(item.writer) }}
						</span>
					</v-avatar>
				</div>
				<v-list-item-content class="pl-0"
					style="position: relative"
				>
					<div>
						<code v-if="item.writer"
							class="comment-writer mx-1"
						>
							{{ item.writer.username }}
						</code>
						<code
							class="comment-created-at mx-1"
						>
							{{ $moment(item.created_at).fromNow() }}
						</code>
						<v-icon small>
							mdi-reply-circle
						</v-icon>
					</div>
					<div
						class="comment-text"
					>
						{{ item.comment }}
					</div>
				</v-list-item-content>
			</v-list-item>
			<v-list-item v-if="commentsNotShownCount">
				See {{ commentsNotShownCount }} more comments in details.
			</v-list-item>
		</v-list>
		<v-divider class="my-2" />
		<div class="comment-box pb-2">
			<v-text-field
				v-model="comment.comment"
				class="comment"
				outlined
				dense
				hide-details="auto"
				placeholder="Add a comment"
				@keydown.enter="addCommentToPost"
			>
				<template #append>
					<v-icon class="send-icon-button"
						color="primary"
						@click="addCommentToPost"
					>
						mdi-send
					</v-icon>
				</template>
			</v-text-field>
		</div>
	</div>
</template>

<script>
export default {
	name: "CommentComponent",
	props: {
		post: {
			type: Object,
			required: true
		}
	},
	data: () => ({
		comment: {
			comment: null,
			multimedia: null
		},
		latestCommentTime: null,
		commentsToShow: [],
		commentsNotShownCount: null
	}),
	async created() {
		await this.init()
	},
	methods: {
		async init() {
			if (this.post.comments.count === 0) this.commentsToShow = []
			else if (this.post.comments.length <= 3) this.commentsToShow = this.post.comments
			else {
				if (this.post.comments.length > 3) {
					this.commentsToShow = this.post.comments.slice(0, 3)
					this.commentsNotShownCount = this.post.comments.length - 3
				}
			}
		},
		async addCommentToPost() {
			this.comment.multimedia = this.post.id
			const posted = await this.$store.dispatch("multimedia/postComment", { body: this.comment })
			if (posted === true) {
				this.comment.comment = ""
				await this.$store.dispatch("multimedia/filter", {is_approved: true})
				await this.init()
			} else if (posted === 500) {
				await this.openSnack("Internal server error. Please try again later")
			} else {
				await this.openSnack(posted.comment[0])
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.comment-text {
	padding: 10px;
	background: aliceblue;
	border-radius: 10px;
	margin: 5px;
	font-size: .875rem;
}
.comment-writer {
	font-family: Roboto, sans-serif;
	color: #686868 !important;
	font-size: 12px;
}
.comment-created-at {
	font-family: Roboto, sans-serif;
	color: #686868 !important;
	background: #eaeaea !important;
	font-size: 12px;
}
.comment-avatar {
	border-radius: 5px !important;
}
</style>
