<template>
	<v-card
		class="pa-4"
		color="no-data-gradient"
	>
		<v-img :src="require('@/assets/empty-copy.jpg')">
			<template #default>
				<div class="fill-height d-flex align-center justify-center">
					<div>
						<div class="d-flex justify-center">
							<v-chip class="text-center white">
								{{ text }}
							</v-chip>
						</div>
						<v-card-actions class="d-flex justify-center">
							<v-btn
								to="/home/multimedia/images"
							>
								Images
							</v-btn>
							<v-btn
								to="/home/multimedia/videos"
							>
								Videos
							</v-btn>
							<v-btn
								to="/home/multimedia/youtube"
							>
								Youtube
							</v-btn>
						</v-card-actions>
					</div>
				</div>
			</template>
		</v-img>
	</v-card>
</template>

<script>
export default {
	name: "NoMultimediaCard",
	props: {
		text: {
			type: String,
			required: true
		}
	},
}
</script>

<style scoped>
::v-deep.v-btn {
	font-size: 12px;
}
</style>
