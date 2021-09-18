<template>
	<v-card rounded="xl">
		<v-card-actions class="pa-1">
			<v-chip-group
				multiple
				show-arrows
			>
				<v-chip
					v-for="(item, index) in items"
					:key="index"
					class="ma-1"
					exact-path
					:to="item.to"
				>
					<v-icon left>
						{{ item.icon }}
					</v-icon>
					{{ item.title }}
				</v-chip>
			</v-chip-group>
		</v-card-actions>
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
