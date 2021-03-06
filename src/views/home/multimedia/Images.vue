<template>
	<v-card
		min-height="82vh"
		color="transparent"
		flat
	>
		<div class="py-1" />
		<v-card>
			<v-card-title>Swipe through our photo gallery</v-card-title>
			<v-card-subtitle>Moments captured on the camera</v-card-subtitle>
			<v-card-subtitle>Share your experice with us.</v-card-subtitle>
		</v-card>
		<div class="py-1" />
		<div class="pa-2">
			<no-multimedia-card
				v-if="images.length === 0"
				text="Image database is empty."
			/>
			<v-card v-for="p in images"
				:key="p.id" class="my-2 mx-1"
			>
				<card-img :src="p.image"
					height="45vh"
					:contain="false"
				/>
				<v-card-title
					v-if="p.subtitle"
					class="pb-1 pt-2 subtitle-2"
				>
					{{ p.subtitle }}
				</v-card-title>
				<div v-else
					class="py-1"
				/>
				<multimedia-action
					v-if="$helper.isUserLoggedIn()"
					@edit="editImage(p)"
				/>
			</v-card>
		</div>
		<v-dialog v-model="edit">
			<v-card>
				<v-card-title class="dialog-header elevation-4">
					Update image
				</v-card-title>
				<text-field v-model="editedItem.subtitle"
					label="Subtitle" name="subtitle"
					:errors="formErrors" icon="mdi-text"
				/>
				<v-col cols="12">
					<card-img
						:src="imageToShowInDialog"
						height="200"
						max-width="400"
					/>
				</v-col>
				<v-col cols="12">
					<v-file-input v-model="editedItem.image"
						label="Image" solo
						:error-messages="formErrors['image']" show-size
						:clearable="false" prepend-icon=""
						prepend-inner-icon="mdi-image" accept="image/*"
						@change="prepareShowUrl"
					/>
				</v-col>
				<v-card-actions>
					<v-btn color="error lighten-3"
						depressed
						@click="edit=false"
					>
						Cancel
					</v-btn>
					<v-btn color="primary"
						@click="patchImage"
					>
						Save
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "Images",
	components: {
		NoMultimediaCard: () => import("@/components/multimedia/NoMultimediaCard"),
		MultimediaAction: () => import("@/components/multimedia/MultimediaAction")
	},
	data: () => ({
		edit: null,
		editedItem: {
			image: null,
			subtitle: null
		},
		imageToShowInDialog: null,
		formErrors: {}
	}),
	computed: {
		...mapGetters({
			multimedias: "multimedia/list"
		}),
		images() {
			if(!this.multimedias) return []
			let temp = []
			this.multimedias.forEach(media => {
				temp = temp.concat(media["multimedia_images"])
			})
			return temp
		}
	},
	methods: {
		prepareShowUrl(e) {
			this.imageToShowInDialog = URL.createObjectURL(e)
		},
		editImage(image) {
			this.edit = true
			this.imageToShowInDialog = image.image
			this.editedItem = {
				id: image.id,
				subtitle: image.subtitle,
			}
		},
		async patchImage() {
			try {
				await this.$api.patch("multimedia-image/" + this.editedItem.id + "/", {
					subtitle: this.editedItem.subtitle,
					image: this.editedItem.image
				})
				this.edit = false
			} catch (e) {
				const status = parseInt(e.response.status.toString())
				if (status === 400) {
					this.formErrors = e.response.data
				} else {
					await this.openSnack("Image updated failed")
				}
			}
		}
	}
}
</script>

<style scoped>

</style>
