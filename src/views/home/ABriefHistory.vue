<template>
	<div class="pa-4">
		<v-card rounded="xl">
			<v-card-title>
				A Brief History of Sachchai Kendra Nepal
			</v-card-title>
			<v-card-text>
				Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</v-card-text>
		</v-card>
		<v-timeline
			dense
		>
			<v-timeline-item
				v-for="(item, index) in items"
				:key="index"
				:icon="item.icon"
				:color="item.color"
				large
			>
				<v-card class="elevation-2"
					rounded="xl"
					:color="item.color"
					dark
				>
					<v-card-title class="text-h5 d-flex">
						<div>
							Lorem ipsum
						</div>
						<v-spacer />
						<div>{{ item.opposite }}</div>
					</v-card-title>
					<v-card-text class="white text--primary">
						<p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
						<v-btn
							:color="item.color"
							class="mx-0"
							outlined rounded
						>
							Button
						</v-btn>
					</v-card-text>
				</v-card>
			</v-timeline-item>
		</v-timeline>
	</div>
</template>

<script>
export default {
	name: "ABriefHistory",
	props: {},
	data: () => ({
		items: [
			{
				color: "red lighten-2",
				icon: "mdi-star",
				opposite: "2020"
			},
			{
				color: "purple darken-1",
				icon: "mdi-book-variant",
				opposite: "2020"
			},
			{
				color: "green lighten-1",
				icon: "mdi-airballoon",
				opposite: "2020"
			},
			{
				color: "indigo",
				icon: "mdi-buffer",
				opposite: "2020"
			},
		],
	}),
	computed: {},
	methods: {}
}
</script>

<style scoped>

</style>
