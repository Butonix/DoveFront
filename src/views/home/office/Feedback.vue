<template>
	<v-card
		flat tile
		class="mx-auto"
		color="transparent"
		max-width="900"
		min-height="calc(100vh - 60px)"
		style="position:relative;"
	>
		<v-img
			:src="require('@/assets/undraw_Personal_opinions.svg')"
			style="position:absolute; bottom: 0; left: 0"
			max-width="500"
		/>
		<v-card-text>
			<v-card-title>Help us improve with your feedbacks</v-card-title>
			<v-divider class="mx-3" />
		</v-card-text>
		<v-card-text>
			<text-field
				v-model="feedback.writer_name"
				label="Name"
				icon="mdi-account-circle"
				name="writer_name"
				:errors="errors"
			/>
			<text-field
				v-model="feedback.contact"
				label="Contact"
				icon="mdi-phone"
				name="writer_contact"
				:errors="errors"
				type="number"
			/>
			<text-field
				v-model="feedback.email"
				label="Email"
				icon="mdi-at"
				name="writer_email"
				:errors="errors"
				type="number"
			/>
			<text-area
				v-model="feedback.feedback"
				label="Add your feedback"
				icon="mdi-message"
				:errors="errors"
				name="feedback"
			/>
		</v-card-text>
		<v-card-actions class="justify-center">
			<v-btn
				rounded
				height="40"
			>
				<span style="color: #9C27B0">
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
export default {
	name: "Feedback",
	data: () => ({
		feedback: {}
	}),
	computed: {
		errors: {}
	},
	methods: {}
}
</script>

<style scoped>

</style>
