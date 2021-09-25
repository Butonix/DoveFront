<template>
	<v-card
		:loading="loading"
		color="transparent"
		flat tile
	>
		<v-card-title class="pb-0">
			<v-icon
				size="22"
				class="pin-icon"
			>
				mdi-pin
			</v-icon>
			<span class="px-2" />
			<span>Pinned Articles</span>
		</v-card-title>
		<v-card-text class="d-flex py-2 px-0 overflow-hidden">
			<horizontal-slider>
				<div class="px-2 d-inline-block" />
				<v-card
					v-for="pin in pins"
					:key="pin.id"
					dark
					width="250"
					height="200"
					rounded="xl"
					class="ma-2 relative d-inline-block"
					:img="$helper.replaceBackendHost(pin.cover_image.image)"
				>
					<v-card-title
						class="cursor pin-headline"
						@click="$router.push({name: 'SACHCHAI NEPAL ARTICLE', params: {id: pin.id}})"
					>
						{{ pin.title }}
					</v-card-title>
				</v-card>
				<div class="px-2 d-inline-block" />
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
.pin-headline {
	position:absolute;
	bottom: 0; left: 0;
	line-height: 1rem;
	font-size: 1rem;
	background: #000000ab;
}
.pin-headline:hover {
	background-color: dimgrey;
}
.pin-icon {
	transform: rotate(30deg)
}
</style>
