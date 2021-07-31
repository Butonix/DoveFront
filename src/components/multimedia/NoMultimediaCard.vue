<template>
	<v-card
		class="pa-4 no-data"
		color="no-data-gradient"
		height="600"
	>
		<v-img :src="require('@/assets/empty-copy.jpg')"
			height="100%"
		>
			<template #default>
				<div class="fill-height d-flex align-center justify-center">
					<div>
						<div class="d-flex justify-center">
							<p class="text-center main">
								{{ text }}
							</p>
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

<style lang="sass">
.no-data
	text-align: center
	font-family: "Open Sans Condensed", sans-serif
	.main
		padding: 6px 15px 8px
		border-radius: 20px
		background: white
		font-size: 14px
</style>
