<template>
	<div>
		<v-card v-for="y in videos"
			:key="y.id"
			class="my-2 pa-0"
			min-height="40vh"
			width="100%"
		>
			<v-card height="40vh">
				<youtube
					ref="yt"
					height="100%"
					width="100%"
					:video-id="$youtube.getIdFromUrl(y.video_url)"
					@playing="playing"
				/>
			</v-card>
			<v-card-title class="py-2"
				style="font-size: 18px;"
			>
				{{ y.yt_info.title }}
			</v-card-title>
			<multimedia-action
				v-if="$helper.isUserLoggedIn()"
				@edit="editVideoUrl(y)"
			/>
		</v-card>
		<v-dialog v-model="edit">
			<v-card>
				<v-card-title class="elevation-4">
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
				<v-card-actions>
					<v-btn color="error lighten-3"
						depressed
						@click="edit = false"
					>
						Cancel
					</v-btn>
					<v-btn color="primary"
						@click="updateVideoUrl()"
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
		}
	}
}
</script>

<style scoped>

</style>
