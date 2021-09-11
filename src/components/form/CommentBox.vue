<template>
	<div class="comment-box pb-2">
		<v-textarea v-model="comment.comment"
			auto-grow placeholder="Add a comment"
			outlined rounded
			label="Comment"
			hide-details
			color="primary"
		>
			<template #append>
				<v-btn icon
					large
					class="comment-btn"
				>
					<v-icon class="send-icon-button"
						color="primary"
						@click="addCommentTo"
					>
						mdi-send
					</v-icon>
				</v-btn>
			</template>
		</v-textarea>
		<!--		<vue-emoji-->
		<!--			ref="emoji"-->
		<!--			width="100%"-->
		<!--			height="100"-->
		<!--			:value="value"-->
		<!--			class="comment-input"-->
		<!--			placeholder="Add a comment"-->
		<!--			@input="onInput"-->
		<!--			@clearTextArea="clearTextArea"-->
		<!--		/>-->
	</div>
</template>

<script>
import VueEmoji from "emoji-vue"
import Snack from "@/mixins/Snack.js";

export default {
	name: "CommentBox",
	components: {
		// VueEmoji
	},
	mixins: [Snack],
	props: {
		model: {
			type: String,
			required: true
		},
		id: {
			type: [String, Number],
			required: true
		},
		filter: {
			type: Boolean,
			default: true
		}
	},
	emits: ["refresh"],
	data: () => ({
		value: null,
		comment: {
			comment: null
		}
	}),
	methods: {
		onInput(e) {
			this.comment.comment = e.data
		},
		async addCommentTo() {
			if (!this.comment.comment) return
			this.comment[this.model] = this.id
			const posted = await this.$store.dispatch(`${this.model}/postComment`, { body: this.comment })
			if (posted === true) {
				this.comment.comment = ""
				this.value = null
				if (this.filter) await this.$store.dispatch(`${this.model}/filter`, {is_approved: true})
				else await this.$store.dispatch(`${this.model}/getSingle`, {id: this.id})
				this.$emit("refresh")
			} else if (posted === 500) {
				await this.openSnack("Internal server error. Please try again later")
			} else {
				await this.openSnack(posted.comment[0])
			}
		}
	}
}
</script>


<style lang="scss">
.comment-box {
	position: relative;
	border-radius: 24px !important;
	.emoji-picker-container {
		border-radius: 24px !important;
	}
	.emoji-picker-container i {
		z-index: 1 !important;
		top: 10px;
		right: 15px;
	}
	.emoji-vue-textarea:focus {
		background-color: #f9f7fd;
	}
}

.comment-btn {
	position: absolute;
	top: 38px !important;
	right: 2px;
}
</style>
