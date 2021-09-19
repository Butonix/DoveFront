<template>
	<div>
		<v-card outlined
			rounded="xl"
			class="ma-4"
		>
			<v-card-text class="pa-0">
				<v-list rounded>
					<v-list-item
						v-for="(item, index) in items"
						:key="index"
						:to="item.to"
						exact-path
						active-class="media-active"
						exact-active-class="media-active"
						:class="{
							'media-item-active': sideBarItemActive[item.title],
						}"
						:disabled="sideBarItemActive[item.title]"
					>
						<v-list-item-avatar>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-card-text>
		</v-card>
		<v-card outlined
			rounded="xl"
			class="ma-4"
		>
			<v-card-title>
				Contribute to Sachchai Kendra Nepal by adding your truthful testimonies.
			</v-card-title>
		</v-card>
		<v-divider class="mt-4" />
	</div>
</template>

<script>
export default {
	name: "Sidebar",
	data: () => ({
		items: [
			{icon: "mdi-pin", title: "Pins", to: "/home/multimedia"},
			{icon: "mdi-image", title: "Images", to: "/home/multimedia/images"},
			{icon: "mdi-video", title: "Videos", to: "/home/multimedia/videos"},
			{icon: "mdi-youtube", title: "Youtube", to: "/home/multimedia/youtube"},
		],
	}),
	computed: {
		sideBarItemActive() {
			return {
				Pins: this.$route.path === "/home/multimedia",
				Images: this.$route.path === "/home/multimedia/images",
				Videos: this.$route.path === "/home/multimedia/videos",
				Youtube: this.$route.path === "/home/multimedia/youtube",
			}
		}
	},
}
</script>

<style scoped>
.media-item-active {
	background-color: #dbdbdb !important;
}
</style>
