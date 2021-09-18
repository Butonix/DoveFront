<template>
	<v-sheet
		color="transparent"
		elevation="2"
		rounded="xl"
		class="py-1 pl-4 pr-1 mx-auto"
	>
		<v-chip-group
			multiple
			active-class="primary--text"
			show-arrows
		>
			<v-chip v-for="tag in tags"
				:key="tag"
				style="font-size: 13px;"
			>
				{{ tag }}
			</v-chip>
		</v-chip-group>
	</v-sheet>
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

</style>
