<template>
	<v-card rounded="xl">
		<v-card-actions class="pa-1">
			<v-chip-group
				multiple
				active-class="purple--text"
				show-arrows
			>
				<v-chip v-for="tag in tags"
					:key="tag"
					class="chip-filter-item"
				>
					{{ tag }}
				</v-chip>
			</v-chip-group>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	name: "ChipFilter",
	props: {},
	data: () => ({
		tags: [
			"Peace",
			"Health",
			"Motivation",
			"Satsang",
			"Meeting"
		],
	}),
	computed: {},
	methods: {}
}
</script>

<style scoped>
.chip-filter-item {
	font-size: 13px;
}
</style>
