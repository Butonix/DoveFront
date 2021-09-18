<template>
	<v-card
		rounded="xl"
		class="mx-2"
	>
		<v-card-text class="d-flex flex-wrap pa-2">
			<v-chip
				v-for="(item, index) in items"
				:key="index"
				class="ma-1"
				:to="item.to"
			>
				<v-icon left>
					{{ item.icon }}
				</v-icon>
				{{ item.title }}
			</v-chip>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	name: "ChipFilter",
	data: () => ({
		items: [
			{icon: "mdi-pin", title: "Pins", to: "/home/multimedia"},
			{icon: "mdi-image", title: "Images", to: "/home/multimedia/images"},
			{icon: "mdi-video", title: "Videos", to: "/home/multimedia/videos"},
			{icon: "mdi-youtube", title: "Youtube", to: "/home/multimedia/youtube"},
		],
	}),
	computed: {},
	methods: {}
}
</script>

<style scoped>

</style>
