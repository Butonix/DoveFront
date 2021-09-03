<template>
	<div class="pa-4">
		<v-card rounded="xl">
			<v-card-title>Help us improve with your feedbacks</v-card-title>
		</v-card>
		<v-card class="mt-4"
			rounded="xl"
		>
			<v-card-title style="background-color: #e1d2ff;">
				Top Feedbacks
			</v-card-title>
			<v-card-text class="d-flex pa-4">
				<v-card rounded="xl"
					max-width="300"
					class="ma-2"
				>
					<v-card-title>First top feedback</v-card-title>
					<v-card-subtitle>
						<v-chip small
							class="mr-1"
						>
							Anonymous
						</v-chip>
						<v-chip small>
							2020-20-20
						</v-chip>
					</v-card-subtitle>
					<v-divider />
					<v-card-text>
						Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
					</v-card-text>
				</v-card>
				<v-card rounded="xl"
					max-width="300"
					class="ma-2"
				>
					<v-card-title>Second top feedback</v-card-title>
					<v-card-subtitle>
						<v-chip small
							class="mr-1"
						>
							Kiran Parajuli
						</v-chip>
						<v-chip small>
							2020-20-20
						</v-chip>
					</v-card-subtitle>
					<v-divider />
					<v-card-text>
						Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
					</v-card-text>
				</v-card>
			</v-card-text>
		</v-card>
		<v-card class="mt-4"
			rounded="xl" flat
			color="transparent"
		>
			<v-textarea
				v-model="feedback"
				outlined
				rounded
				auto-grow
				label="Add your feedback"
				color="#9C27B0"
			/>
			<v-btn block
				rounded
			>
				<v-icon>mdi-send</v-icon>
				<span style="color: #9C27B0">
					Submit your feedback
				</span>
			</v-btn>
		</v-card>
	</div>
</template>

<script>
export default {
	name: "Feedback",
	props: {},
	data: () => ({
		feedback: null
	}),
	computed: {},
	methods: {}
}
</script>

<style scoped>

</style>
