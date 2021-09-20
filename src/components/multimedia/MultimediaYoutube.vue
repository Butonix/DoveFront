<template>
	<div>
		<v-card v-for="y in videos"
			:key="y.id"
			class="my-2 pa-0"
			min-height="40vh"
			width="100%"
			outlined
			rounded="xl"
		>
			<v-card
				color="grey"
				height="40vh"
				class="ma-2"
				rounded="xl"
			>
				<youtube
					ref="yt"
					class="rounded-xl"
					height="100%"
					width="100%"
					:video-id="$youtube.getIdFromUrl(y.video_url)"
					@playing="playing"
				/>
			</v-card>
			<v-card-title class="py-2 yt-title">
				{{ y.yt_info.title }}
			</v-card-title>
			<multimedia-action
				v-if="$helper.isUserLoggedIn()"
				@edit="editVideoUrl(y)"
			/>
		</v-card>
		<v-dialog v-model="edit"
			max-width="600"
		>
			<v-card rounded="xl">
				<v-card-title class="elevation-4 rounded-xl grey lighten-3">
					Update youtube url
				</v-card-title>
				<div class="py-3" />
				<text-field
					v-model="editedItem.video_url"
					name="video_url"
					label="Youtube Video Url"
					icon="mdi-youtube"
					hint="Copy a youtube video url and paste the link here"
					:errors="formErrors"
				/>
				<div class="py-3" />
				<v-divider />
				<v-card-actions class="grey lighten-3">
					<v-btn
						color="error lighten-3"
						depressed rounded
						@click="edit = false"
					>
						Cancel
					</v-btn>
					<v-btn
						:loading="updating"
						color="primary"
						rounded @click="updateVideoUrl()"
					>
						Save
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import MultimediaAction from "@/components/multimedia/MultimediaAction.vue";
import HtmlVideoMixin from "@/mixins/HtmlVideoMixin..js";

export default {
	name: "MultimediaYoutube",
	components: {MultimediaAction},
	mixins: [HtmlVideoMixin],
	props: {
		videos: {
			type: Array,
			required: true
		}
	},
	data: () => ({
		updating: false,
		edit: false,
		editedItem: {
			video_url: null
		},
		formErrors: {},
	}),
	methods: {
		editVideoUrl(item) {
			this.edit = true
			this.editedItem.video_url = item.video_url
			this.editedItem["id"] = item.id
		},
		async updateVideoUrl() {
			this.updating = true
			try {
				await this.$api.patch("multimedia-video-url/" + this.editedItem.id + "/", {
					video_url: this.editedItem.video_url
				})
				await this.$store.dispatch("multimedia/filter", {is_approved: true})
				this.edit = false
				await this.openSnack("Your video is updated successfully. This might take a while to load. Please keep your calm.", "success")
			} catch (e) {
				if (e.response.status === 400) {
					this.formErrors = e.response.body
				}
			}
			this.updating = false
		}
	}
}
</script>

<style scoped>
.yt-title {
	font-size: 18px;
}
</style>
