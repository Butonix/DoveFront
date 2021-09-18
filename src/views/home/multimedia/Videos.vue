<template>
	<v-card color="transparent"
		flat
	>
		<div class="py-1" />
		<v-card rounded="xl">
			<v-card-title>Watch our uploaded videos</v-card-title>
			<v-card-subtitle>Enjoy moments with Sachchai Kendra Nepal</v-card-subtitle>
			<v-card-subtitle>You can go to youtube and watch out videos directly from there.</v-card-subtitle>
		</v-card>
		<div class="py-1" />
		<div class="pa-2">
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
		</div>
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
			let temp = []
			this.multimedias.forEach(media => {
				temp = temp.concat(media["multimedia_videos"])
			})
			return temp
		}
	}
}
</script>
