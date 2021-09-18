<template>
	<v-card flat
		rounded="xl"
		class="transparent mx-auto px-2"
	>
		<div class="py-1" />
		<v-card
			flat max-width="800"
			class="transparent mx-auto"
		>
			<chip-filter />
			<add-post-box />
			<v-card
				flat
				class="transparent"
				rounded="xl"
			>
				<multimedia-list />
			</v-card>
		</v-card>
	</v-card>
</template>

<script>
import FeedsSidebar from "@/mixins/FeedsSidebar.js";

export default {
	name: "HomeComponent",
	components: {
		MultimediaList: () => import("@/components/multimedia/MultimediaList"),
		AddPostBox: () => import("@/views/home/feeds/AddPostBox"),
		ChipFilter: () => import("@/views/home/feeds/ChipFilter")
	},
	mixins: [FeedsSidebar],
}
</script>
