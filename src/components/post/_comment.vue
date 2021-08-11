<template>
	<div
		v-if="post"
		class="comment-container mx-2"
	>
		<v-list
			v-if="commentsToShow.length"
			class="comment-histories"
			two-line
			dense
		>
			<v-list-item
				v-for="(item) in commentsToShow"
				:key="item.id"
				class="pl-0 d-flex align-start"
			>
				<div>
					<v-avatar :color="$constants.pickBackgroundColor()"
						class="ml-1 mr-2 mt-3 mb-1"
						size="40"
					>
						<span
							v-if="item.writer"
							class="white--text headline"
						>
							{{ $helper.getUsernameInitials(item.writer) }}
						</span>
						<span
							v-else
							class="white--text headline"
						>
							A
						</span>
					</v-avatar>
				</div>
				<v-list-item-content class="comment-item-box">
					<div>
						<code v-if="item.writer"
							class="comment-writer mx-1"
						>
							{{ item.writer.username }}
						</code>
						<code v-else
							class="comment-writer mx-1"
						>
							Anonymous
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
				<v-btn
					small
					text
					class="to-detail"
					:to="'/home/multimedia/' + post.id"
				>
					See {{ commentsNotShownCount }} more comments in details section
				</v-btn>
			</v-list-item>
		</v-list>
		<v-divider class="my-2" />
		<comment-box
			:id="post.id"
			model="multimedia"
			@refresh="init()"
		/>
	</div>
</template>

<script>

import CommentBox from "@/components/form/CommentBox.vue";
export default {
	name: "CommentComponent",
	components: {CommentBox},
	props: {
		post: {
			type: Object,
			required: true
		}
	},
	data: () => ({
		text: "",
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
		}
	}
}
</script>

<style lang="scss" scoped>
.comment-item-box {
	position: relative;
	background-color: #eaeaea;
	border-radius: 8px;
}
.comment-text {
	font-weight: 500;
	padding: 4px;
	width: 100%;
}
.comment-writer {
	font-family: inherit;
	font-weight: 500;
	color: #686868 !important;
	font-size: 12px;
}
.comment-created-at {
	font-family: inherit;
	font-weight: 500;
	color: #686868 !important;
	font-size: 12px;
}
</style>
