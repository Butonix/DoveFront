<template>
	<div class="comment-box pb-2">
		<vue-emoji
			ref="emoji"
			width="100%"
			height="50"
			:value="value"
			class="comment-input"
			placeholder="Add a comment"
			@input="onInput"
			@clearTextArea="clearTextArea"
		/>
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
	</div>
</template>

<script>
import VueEmoji from "emoji-vue"
import Snack from "@/mixins/Snack.js";

export default {
	name: "CommentBox",
	components: {
		VueEmoji
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
		clearTextArea() {
			this.$refs.emoji.clear()
		},
		async addCommentTo() {
			if (!this.comment.comment) return
			this.comment[this.model] = this.id
			const posted = await this.$store.dispatch(`${this.model}/postComment`, { body: this.comment })
			if (posted === true) {
				this.comment.comment = ""
				this.value = null
				this.clearTextArea()
				await this.$store.dispatch(`${this.model}/filter`, {is_approved: true})
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

<style scoped lang="scss">
.comment-box {
	position: relative;
	.comment-input {
		width: 95%;
		@media only screen and (max-width: 1460px) {
			width: 92%;
		}
		@media only screen and (max-width: 730px) {
			width: 90%;
		}
		@media only screen and (max-width: 530px) {
			width: 88%;
		}
		@media only screen and (max-width: 412px) {
			width: 85%;
		}
		@media only screen and (max-width: 300px) {
			width: 80%;
		}
	}
}

.comment-btn {
	position: absolute;
	top: 0;
	right: -6px;
}
</style>
