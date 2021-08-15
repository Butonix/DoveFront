<template>
	<v-card color="transparent"
		flat
		:loading="loading"
	>
		<v-list v-if="comments"
			two-line
			dense
		>
			<v-list-item
				v-if="comments.count === 0"
				class="rounded"
			>
				<div class="be-first-to-comment">
					Be the first to comment!
				</div>
			</v-list-item>
			<v-list-item v-for="(item) in comments.results" v-else
				:key="item.id"
			>
				<v-avatar size="45"
					:color="avColor"
				>
					<span v-if="item.writer"
						class="white--text writer-avatar"
					>
						{{ item.writer.username[0].toUpperCase() }}
					</span>
					<span v-else
						class="white--text writer-avatar"
					>A</span>
				</v-avatar>
				<v-list-item-content class="pl-0">
					<v-list-item-title class="d-flex">
						<div v-if="item.writer"
							class="code"
						>
							{{ item.writer.username }}
						</div>
						<div v-else
							class="code"
						>
							Anonymous
						</div>
						<div
							class="code"
						>
							{{ $moment(item.created_at).fromNow() }}
						</div>
					</v-list-item-title>
					<v-list-item-subtitle class="comment-text">
						{{ item.comment }}
					</v-list-item-subtitle>
				</v-list-item-content>
				<v-list-item-action>
					<v-btn icon
						color="red lighten-1"
						@click="deleteConfirmMyComment(item)"
					>
						<v-icon>mdi-delete</v-icon>
					</v-btn>
				</v-list-item-action>
			</v-list-item>
		</v-list>
		<v-divider class="my-2" />
		<div class="comment-box pb-2">
			<v-textarea
				v-model="comment.comment"
				class="comment"
				outlined auto-grow
				hide-details="auto" label="Comment"
				placeholder="Add a comment"
				@keydown.enter="postComment"
			>
				<template #append>
					<v-btn icon
						small
						@click="postComment"
					>
						<v-icon class="send-icon-button"
							color="primary"
						>
							mdi-send
						</v-icon>
					</v-btn>
				</template>
			</v-textarea>
		</div>
	</v-card>
</template>

<script>
import Snack from "@/mixins/Snack";

export default {
	name: "ArticleCommentsView",
	mixins: [Snack],
	data: () => ({
		loading: true,
		comment: {
			comment: null,
			article: null
		},
		comments: null
	}),
	computed: {
		avColor() {
			return this.$constants.pickBackgroundColor()
		}
	},
	async created() {
		await this.init()
	},
	methods: {
		async init() {
			let response
			response = await this.$store.dispatch(
				"article/fetchCommentsForId",
				{ id: this.$route.params.id }
			)
			this.comments = response
			console.log(this.comments)
			this.loading = false
		},
		async postComment() {
			this.comment.article = this.$route.params.id
			const posted = await this.$store.dispatch("article/postComment", { body: this.comment })
			if (posted === true) {
				this.comment.comment = ""
				await this.init()
			} else if (posted === 500) {
				await this.openSnack("Internal server error. Please try again later")
			} else {
				await this.openSnack(posted.comment[0])
			}
		},
		async deleteMyComment(item) {
			const resp = await this.$store.dispatch("article/removeComment", {id: item.id})
			if (resp) {
				await this.openSnack("Your comment removed successfully.", "success")
				await this.init()
			} else {
				await this.openSnack("Comment remove failed. Please try again.")
			}
		},
		async deleteConfirmMyComment(item) {
			if (this.$helper.ifWriterIsCurrentUser(item.writer.username)) {
				confirm("Are you sure you want to delete your comment?") && await this.deleteMyComment(item)
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
	margin: 3px;
}
.code {
	font-weight: bold;
	background-color: #eaeaea;
	color: #686868;
	padding: 3px;
	margin: 2px;
	border-radius: 8px;
}
.writer-avatar {
	font-size: 22px;
	font-weight: 500;
}

.be-first-to-comment {
	font-size: 1rem;
}
</style>
