<template>
	<v-card color="transparent">
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
		<no-multimedia-card v-if="videos.length === 0"
			text="Video database is empty."
		/>
		<multimedia-video
			v-for="video in videos"
			v-else
			:key="video.id"
			class="mx-1"
			:video="video"
		/>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "Videos",
	components: {
		NoMultimediaCard: () => import("@/components/multimedia/NoMultimediaCard.vue"),
		MultimediaVideo: () => import("@/components/multimedia/MultimediaVideo.vue")
	},
	computed: {
		...mapGetters({
			multimedias: "multimedia/list"
		}),
		videos() {
			if(!this.multimedias) return []
			if(!this.multimedias.results) return []
			let temp = []
			this.multimedias.results.forEach(media => {
				temp = temp.concat(media["multimedia_videos"])
			})
			return temp
		}
	}
}
</script>
