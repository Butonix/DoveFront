<template>
	<div>
		<div class="py-1" />
		<v-list v-model="selectedSideNavItem"
			rounded
		>
			<v-list-item
				active-class="active-side-nav"
				exact-active-class="active-side-nav"
				:class="{'active-side-nav': sideNavActive['All']}"
				:disabled="sideNavActive['All']"
				@click="$router.push({ name: 'HOME'})"
			>
				<v-list-item-icon>
					<v-icon>
						mdi-all-inclusive
					</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
					<v-list-item-title>All</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-list-item
				v-for="(item, index) in homeSideNavItems"
				:key="index"
				active-class="active-side-nav"
				exact-active-class="active-side-nav"
				:class="{'active-side-nav': sideNavActive[item.title]}"
				:disabled="sideNavActive[item.title]"
				@click="$router.push({ name: 'HOME', query: { type: item.to } })"
			>
				<v-list-item-icon>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
		<v-divider class="mt-2" />
	</div>
</template>

<script>
import FeedsSidebar from "@/mixins/FeedsSidebar.js";

export default {
	name: "Sidebar",
	mixins: [FeedsSidebar]
}
</script>

<style lang="scss" scoped>
.active-side-nav {
	background-color: #e6d1e9;
	color: #9C27B0 !important;
}
</style>
