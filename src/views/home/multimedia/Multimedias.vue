<template>
	<v-card
		:loading="loading"
		flat tile
		class="mx-auto"
		color="purple home-multimedias"
	>
		<v-scale-transition>
			<div v-if="$vuetify.breakpoint.mdAndDown"
				class="py-2"
			>
				<chip-filter />
			</div>
		</v-scale-transition>
		<v-card-text>
			<v-card flat
				tile color="transparent"
				class="mx-auto"
				max-width="800"
			>
				<router-view />
			</v-card>
		</v-card-text>
	</v-card>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	name: "Multimedias",
	components: {
		ChipFilter: () => import("@/views/home/multimedia/ChipFilter.vue")
	},
	data: () => ({
		loading: true,
		tab: null,
	}),
	computed: {
		...mapGetters({
			multimedias: "multimedia/list"
		})
	},
	async created() {
		await this.$store.dispatch("multimedia/filter", {is_approved: true})
		this.loading = false
	},
}
</script>

<style scoped lang="scss">
.home-multimedias {
	background: transparent !important;
}
.library-title {
	font-size: 2.6rem;
	font-weight: 400;
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
