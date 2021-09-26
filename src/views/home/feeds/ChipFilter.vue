<template>
	<v-card rounded="xl">
		<v-card-actions class="pa-1">
			<v-chip-group
				multiple
				show-arrows
			>
				<v-chip
					class="ma-1"
					active-class="active-side-nav"
					exact-active-class="active-side-nav"
					:class="{'active-side-nav': sideNavActive['All']}"
					:disabled="sideNavActive['All']"
					@click="$router.push({ name: 'HOME'})"
				>
					<v-icon left
						:color="sideNavActive['All'] ? 'purple': ''"
					>
						mdi-all-inclusive
					</v-icon>
					All
				</v-chip>
				<v-chip v-for="(item, index) in homeSideNavItems"
					:key="index"
					class="ma-1"
					active-class="active-side-nav"
					exact-active-class="active-side-nav"
					:class="{'active-side-nav': sideNavActive[item.title]}"
					:disabled="sideNavActive[item.title]"
					@click="$router.push({ name: 'HOME', query: { type: item.to } })"
				>
					<v-icon left
						:color="sideNavActive[item.title] ? 'purple': ''"
					>
						{{ item.icon }}
					</v-icon>
					{{ item.title }}
				</v-chip>
			</v-chip-group>
		</v-card-actions>
	</v-card>
</template>

<script>
import FeedsSidebar from "@/mixins/FeedsSidebar.js";

export default {
	name: "ChipFilter",
	mixins: [FeedsSidebar]
}
</script>

<style lang="scss" scoped>
.active-side-nav {
	background-color: #e6d1e9;
	color: #9C27B0 !important;
}
</style>
