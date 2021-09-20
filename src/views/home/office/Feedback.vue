<template>
	<v-card
		flat tile
		class="mx-auto relative"
		color="transparent"
		max-width="900"
		min-height="calc(100vh - 60px)"
	>
		<v-img
			:src="require('@/assets/undraw_Personal_opinions.svg')"
			class="personal-opinion-img"
			max-width="500"
		/>
		<v-card-text>
			<v-card-title>Help us improve with your feedbacks</v-card-title>
			<v-divider class="mx-3" />
		</v-card-text>
		<v-card-text class="pt-0">
			<div class="d-flex align-center mx-4">
				<div class="pr-1">
					Writer Information
				</div>
				<v-divider />
			</div>

			<v-scale-transition>
				<div v-if="feedbackType === '0'">
					<text-field
						v-model="feedback.writer_name"
						label="Name"
						icon="mdi-account-circle"
						name="writer_name"
						:errors="errors"
					/>
					<text-field
						v-model="feedback.writer_contact"
						label="Contact"
						icon="mdi-phone"
						name="writer_contact"
						:errors="errors"
						type="number"
					/>
					<text-field
						v-model="feedback.writer_email"
						label="Email"
						icon="mdi-at"
						name="writer_email"
						:errors="errors"
						type="email"
					/>
				</div>
				<div v-else-if="feedbackType === '1'"
					class="pa-2"
				>
					<v-card rounded="xl">
						<v-card-title>Anonymous Feedback</v-card-title>
						<v-card-subtitle>The feedback you leave will be sent to the administration anonymously. We only care about your message not you.</v-card-subtitle>
					</v-card>
				</div>
				<div v-else
					class="pa-2"
				>
					<v-card rounded="xl">
						<v-card-title>Logged in Feedback</v-card-title>
						<v-card-subtitle>
							The feedback you leave will be sent to the administration with your logged-in account as a writer.
						</v-card-subtitle>
					</v-card>
				</div>
			</v-scale-transition>

			<div class="d-flex align-center mx-4">
				<div class="pr-1">
					Feedback
				</div>
				<v-divider />
			</div>

			<text-field
				v-model="feedback.subject"
				label="Subject"
				icon="mdi-view-headline"
				name="subject"
				:errors="errors"
			/>

			<text-area
				v-model="feedback.message"
				label="Add your feedback"
				icon="mdi-message"
				:errors="errors"
				name="feedback"
				counter="1000"
			/>
		</v-card-text>
		<v-card-actions class="justify-center">
			<v-btn
				:loading="submitting"
				rounded
				class="pa-8"
				@click="submitFeedback"
			>
				<span class="purple--text">
					Submit your feedback
				</span>
				<v-icon right
					color="purple" size="20"
				>
					mdi-send
				</v-icon>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import Snack from "@/mixins/Snack.js";

export default {
	name: "Feedback",
	mixins: [Snack],
	data: () => ({
		submitting: false,
		feedback: {
			writer_name: null,
			writer_contact: null,
			writer_email: null,
			type: null,
			subject: null,
			message: null,
			writer: null,
		},
	}),
	computed: {
		...mapGetters({
			feedbackType: "utilities/feedbackType",
			errors: "utilities/feedbackPostErrors"
		})
	},
	methods: {
		resetForm() {
			this.feedback = {
				writer_name: null,
				writer_contact: null,
				writer_email: null,
				type: null,
				subject: null,
				message: null,
				writer: null,
			}
		},
		async submitFeedback() {
			this.submitting = true
			this.feedback.type = this.feedbackType
			if (this.feedbackType === "2") this.feedback.writer = this.$helper.getCurrentUser().id
			const posted = await this.$store.dispatch("utilities/postFeedback", this.feedback)
			if (posted) {
				await this.openSnack("Feedback submitted successfully.", "success")
				this.resetForm()
			}
			else await this.openSnack("Feedback submit failure. Please try again.")
			this.submitting = false
		}
	}
}
</script>

<style scoped>
.personal-opinion-img {
	position:absolute; bottom: 0; left: 0
}
</style>
