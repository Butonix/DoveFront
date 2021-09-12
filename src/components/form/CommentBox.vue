<template>
	<div class="comment-box pb-2">
		<v-textarea
			id="comment-input"
			v-model="comment.comment"
			outlined auto-grow
			color="primary" hide-details
			label="Comment" rounded
			placeholder="Add your comment"
			contenteditable="true"
			@focus="focused = true"
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

		<emoji-picker :search="search"
			@emoji="insert"
		>
			<!-- eslint-disable-next-line  -->
			<div slot="emoji-invoker" slot-scope="{ events: { click: clickEvent } }"
				style="position:absolute; right: 7px; top: 8px;"
				@click.stop="clickEvent"
			>
				<v-btn icon
					large
					class="emoji-btn"
				>
					<v-icon color="orange">
						mdi-emoticon
					</v-icon>
				</v-btn>
			</div>
			<!-- eslint-disable-next-line  -->
			<div slot="emoji-picker" slot-scope="{ emojis, insert, display }"
			>
				<div class="emoji-picker">
					<div class="pa-2 emoji-picker__search">
						<v-text-field v-model="search"
							type="text"
							rounded
							dense
							hide-details
							outlined
							label="Search"
							placeholder="Search emojis"
						/>
					</div>
					<div>
						<div v-for="(emojiGroup, category) in emojis"
							:key="category"
						>
							<h5 class="pa-2">
								{{ category }}
							</h5>
							<v-divider />
							<div class="pa-2 emojis">
								<span
									v-for="(emoji, emojiName) in emojiGroup"
									:key="emojiName"
									style="font-size: 20px !important;"
									:title="emojiName"
									@click="insert(emoji)"
								>{{ emoji }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</emoji-picker>
	</div>
</template>

<script>
import Snack from "@/mixins/Snack.js"
import EmojiPicker from "vue-emoji-picker"

export default {
	name: "CommentBox",
	components: {
		EmojiPicker
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
		search: "",
		comment: {
			comment: ""
		}
	}),
	methods: {
		onInput(e) {
			this.comment.comment = e.data
		},
		insert(emoji) {
			const commentTextarea = document.querySelectorAll(".comment-box #comment-input")
			const cursorPosition = commentTextarea[commentTextarea.length - 1].selectionStart

			if (cursorPosition === this.comment.comment.length) {
				this.comment.comment += emoji
			} else {
				const firstPart = this.comment.comment.substring(0, cursorPosition)
				const secondPart = this.comment.comment.substring(cursorPosition, this.comment.comment.length)
				this.comment.comment = firstPart + emoji + secondPart
			}
		},
		async addCommentTo() {
			if (!this.comment.comment) return
			this.comment[this.model] = this.id
			const posted = await this.$store.dispatch(`${this.model}/postComment`, { body: this.comment })
			if (posted === true) {
				this.comment.comment = ""
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


<style lang="scss" scoped>
.comment-box {
	position: relative;
}

.comment-btn {
	position: absolute;
	top: 45px !important;
	right: 2px;
}

.emoji-picker {
	position: absolute;
	top: 55px;
	right: 5px;
	z-index: 1;
	border: 1px solid #ccc;
	width: 15rem;
	height: 20rem;
	overflow: scroll;
	box-sizing: border-box;
	border-radius: 24px;
	background: aliceblue;
	box-shadow: 1px 1px 8px #c7dbe6;
}
.emoji-picker__search {
	display: flex;
}
.emoji-picker__search > input {
	flex: 1;
	border-radius: 10rem;
	border: 1px solid #ccc;
	padding: 0.5rem 1rem;
	outline: none;
}
.emoji-picker h5 {
	margin-bottom: 0;
	color: #b1b1b1;
	text-transform: uppercase;
	font-size: 0.8rem;
	cursor: default;
}
.emoji-picker .emojis {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.emoji-picker .emojis:after {
	content: "";
	flex: auto;
}
.emoji-picker .emojis span {
	padding: 0.2rem;
	cursor: pointer;
	border-radius: 5px;
}
.emoji-picker .emojis span:hover {
	background: #ececec;
	cursor: pointer;
}

</style>
