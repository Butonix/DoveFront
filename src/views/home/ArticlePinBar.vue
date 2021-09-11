<template>
	<v-card
		:loading="loading"
		rounded="xl"
		color="purple"
		class="mx-4"
		style="background-color: rgb(249 246 255) !important;"
	>
		<v-card-title>
			<v-icon
				size="22"
				style="transform: rotate(30deg)"
			>
				mdi-pin
			</v-icon>
			<span class="px-2" />
			<span>Pinned Articles</span>
		</v-card-title>
		<v-divider />
		<v-card-text class="d-flex py-2 px-0 overflow-hidden">
			<horizontal-slider>
				<v-card
					v-for="pin in pins"
					:key="pin.id"
					width="250"
					rounded="xl" class="ma-2"
					style="display: inline-block;"
				>
					<v-card-title
						class="cursor pin-headline"
						@click="$router.push({name: 'SACHCHAI NEPAL ARTICLE', params: {id: pin.id}})"
					>
						{{ pin.title }}
					</v-card-title>
					<v-img v-if="pin.cover_image"
						:src="$helper.replaceBackendHost(pin.cover_image.image)"
					/>
				</v-card>
			</horizontal-slider>
		</v-card-text>
	</v-card>
</template>

<script>
import HorizontalSlider from "@/components/utils/HorizontalSlider.vue";
export default {
	name: "ArticlePinBar",
	components: {HorizontalSlider},
	data: () => ({
		loading: true,
		pins: []
	}),
	async created() {
		const pinResponse = await this.$api.getWithPayload(this.$urls.article.set, {is_pinned: true, approved: true})
		this.pins = pinResponse.results
		console.log(pinResponse)
		this.loading = false
	}
}
</script>

<style scoped>
.pin-headline:hover {
	background-color: #e5e5e5;
}
</style>
