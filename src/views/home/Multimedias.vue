<template>
	<v-card v-if="multimedias"
		:loading="loading"
		flat tile
		class="mx-auto"
		color="transparent"
		:width="criticalScreenWidth ? 700: 1000"
	>
		<div v-if="$vuetify.breakpoint.smAndUp"
			class="py-1"
		/>

		<v-tabs-items v-model="tab"
			style="background-color: transparent"
			class="px-2"
		>
			<router-view />
		</v-tabs-items>
		<v-navigation-drawer
			right
			:permanent="!$vuetify.breakpoint.mdAndDown"
			:temporary="$vuetify.breakpoint.mdAndDown"
			:width="criticalScreenWidth ? 250: 300"
			color="#f6f4fc"
			class="px-2"
			style="position: fixed; right: 0; border-radius: 0; top: 0; height: 100vh"
		>
			<div v-if="!$vuetify.breakpoint.mdAndDown"
				style="height: 60px;"
			/>
			<div class="py-1" />
			<v-card outlined>
				<v-card-title>
					This is multimedia sidebar
				</v-card-title>
				<v-list>
					<v-list-item v-for="(item, index) in items"
						:key="index"
						:to="item.to"
					>
						<v-list-item-avatar>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-card>
		</v-navigation-drawer>
	</v-card>
</template>
<script>
import {mapGetters} from "vuex";
import NoHomeData from "@/components/feeds/NoHomeData.vue";

export default {
	name: "Multimedias",
	components: {
	},
	data: () => ({
		posts: [],
		loading: false,
		tab: null,
		items: [
			{icon: "mdi-pin", title: "Pins", to: "/home/multimedia"},
			{icon: "mdi-image", title: "Images", to: "/home/multimedia/images"},
			{icon: "mdi-video", title: "Videos", to: "/home/multimedia/videos"},
			{icon: "mdi-youtube", title: "Youtube", to: "/home/multimedia/youtube"},
		],
	}),
	computed: {
		...mapGetters({
			multimedias: "multimedia/list"
		}),
		criticalScreenWidth() {
			return this.$vuetify.breakpoint.width > 1260 && this.$vuetify.breakpoint.width < 1620;
		}
	},
	async created() {
		this.loading = true
		if (!this.multimedias.count) {
			await this.$store.dispatch("multimedia/filter", {is_approved: true})
		}
		this.posts = this.posts.concat(this.multimedias.results)
		this.loading = false
	},
}
</script>

<style scoped lang="scss">
.library-title {
	font-size: 2.6rem;
	font-weight: 400;
	font-family: 'Quicksand', sans-serif;
	padding: 20px 0;
}
.page-title {
	font-weight: bold;
	font-size: 3rem;
	@media only screen and (max-width: 600px) {
		font-size: 2rem;
	}
	@media only screen and (max-width: 255px) {
		font-size: 1.6rem;
	}
}
</style>
