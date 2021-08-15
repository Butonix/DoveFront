<template>
	<v-card flat
		class="event-tab"
	>
		<v-dialog
			v-model="updateCommentDialog"
			max-width="600"
		>
			<v-card dark
				class="mx-auto"
			>
				<v-textarea
					v-model="commentToUpdate"
					auto-grow
					solo
					hide-details
				>
					<template #append>
						<v-btn icon
							small class="send-icon-button"
							color="primary"
							@click="updateComment"
						>
							<v-icon>mdi-send</v-icon>
						</v-btn>
					</template>
				</v-textarea>
			</v-card>
		</v-dialog>
		<div v-if="$helper.isUserLoggedIn()"
			class="pa-2"
		>
			<v-textarea
				v-model="myComment"
				class="pa-4"
				outlined
				background-color="transparent"
				prepend-inner-icon="mdi-comment"
				clearable
				label="Comment"
				placeholder="Add your comment here..."
				hide-details="auto"
				auto-grow
			>
				<template #append>
					<v-icon class="send-icon-button"
						color="primary"
						@click="makeComment"
					>
						mdi-send
					</v-icon>
				</template>
			</v-textarea>
		</div>
		<v-list
			v-if="discussions.count > 0"
			color="transparent"
			three-line
		>
			<v-list-item v-for="(item, index) in discussions.results"
				:key="index"
			>
				<v-avatar size="48"
					:color="$constants.pickBackgroundColor()"
					class="d-flex justify-content-center ma-2"
				>
					<span class="white--text headline">{{ $helper.getCurrentUserInitials(item.writer) }}</span>
				</v-avatar>

				<v-list-item-content>
					<v-list-item-title class="d-flex">
						<div class="comment-date">
							{{ item.writer.username }}
						</div>
						<div class="comment-date">
							{{ $moment(item.created_at).fromNow() }}
						</div>
						<v-btn
							v-if="$helper.ifWriterIsCurrentUser(item.writer.username)"
							icon
							small
						>
							<v-icon
								small
								color="primary"
								@click="openUpdateComment(item.comment, item.id)"
							>
								mdi-pencil
							</v-icon>
						</v-btn>
					</v-list-item-title>
					<v-list-item-subtitle class="comment">
						{{ item.comment }}
					</v-list-item-subtitle>
				</v-list-item-content>
				<v-list-item-action
					v-if="$helper.ifWriterIsCurrentUser(item.writer.username)"
					class="ma-0 mt-7"
				>
					<v-btn icon>
						<v-icon color="red lighten-1">
							mdi-delete
						</v-icon>
					</v-btn>
				</v-list-item-action>
			</v-list-item>
		</v-list>
		<v-list
			v-else
			three-line
			style="background-color: aliceblue;"
		>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="grey--text darken-1">
						<div v-if="$helper.isUserLoggedIn()">
							Be the first to add comment!
						</div>
						<div v-else>
							Please login to add you comment!
						</div>
					</v-list-item-title>
					<v-list-item-subtitle class="grey--text">
						No discussions made yet.
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-card>
</template>
<script>
import {mapGetters} from "vuex";
import Snack from "@/mixins/Snack";

export default {
	name: "EventDiscussion",
	mixins: [Snack],
	data: () => ({
		loading: false,
		updateCommentDialog: false,
		commentToUpdate: null,
		commentIdToUpdate: null,
		myComment: ""
	}),
	computed: {
		...mapGetters({
			event: "event/detail",
			discussions: "event/commentsList"
		})
	},
	methods: {
		async init() {
			this.loading = true
			await this.$store.dispatch("event/fetchCommentsFor", {id: this.event.id})
			this.loading = false
		},
		async makeComment() {
			if (this.myComment === null) return
			const posted = await this.$store.dispatch("event/addCommentFor", {
				body: {
					event: this.event.id,
					comment: this.myComment
				}
			})
			if (posted) {
				await this.init()
				this.myComment = null
			}
			else await this.openSnack("Comment post failed")
		},
		async updateComment() {
			if (this.commentToUpdate === null) return
			const posted = await this.$store.dispatch("event/updateComment", {
				id: this.commentIdToUpdate,
				body: {
					comment: this.commentToUpdate
				}
			})
			if (posted) {
				this.commentToUpdate = null
				this.commentIdToUpdate = null
				this.updateCommentDialog = false
				await this.init()
			}
			else await this.openSnack("Comment post failed")
		},
		async openUpdateComment(commentText, commentId) {
			this.updateCommentDialog = true
			this.commentToUpdate = commentText
			this.commentIdToUpdate = commentId
		}
	}
}
</script>
<style scoped lang="scss">
.comment {
	background-color: #f7edff;
	color: #242424 !important;
	border-radius: 10px;
	padding: 10px;
	-webkit-line-clamp: unset !important;
}
.comment-date {
	font-size: 12px;
	padding: 4px;
	margin: 2px;
	background: #efdffc;
	border-radius: 5px;
}
</style>
