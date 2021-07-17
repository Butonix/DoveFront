<template>
	<v-card
		flat
		min-height="82vh"
		color="transparent"
	>
		<div class="py-1" />
		<v-row no-gutters>
			<v-col cols="12"
				xl="6" lg="6"
				md="6" sm="6"
			>
				<v-text-field label="search"
					name="search" class="ma-1"
					solo hide-details="auto"
					prepend-inner-icon="mdi-magnify"
				/>
			</v-col>
			<v-col cols="12"
				xl="6" lg="6"
				md="6" sm="6"
			>
				<v-text-field label="filter"
					name="filter" class="ma-1"
					solo hide-details="auto"
					prepend-inner-icon="mdi-filter"
				/>
			</v-col>
		</v-row>
		<div class="py-1" />
		<no-multimedia-card v-if="youtube_medias.length === 0"
			text="Youtube database is empty."
		/>

		<multimedia-youtube
			class="mx-1"
			:videos="youtube_medias"
		/>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";
import MultimediaYoutube from "@/components/multimedia/MultimediaYoutube.vue";
import NoMultimediaCard from "@/components/multimedia/NoMultimediaCard.vue";

export default {
	name: "Youtube",
	components: {
		NoMultimediaCard,
		MultimediaYoutube,
	},
	computed: {
		...mapGetters({
			multimedias: "multimedia/list"
		}),
		youtube_medias() {
			if(!this.multimedias) return []
			if(!this.multimedias.results) return []
			let temp = []
			this.multimedias.results.forEach(media => {
				temp = temp.concat(media["multimedia_video_urls"])
			})
			return temp
		}
	}
}
</script>
