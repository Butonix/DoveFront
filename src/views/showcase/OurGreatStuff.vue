<template>
	<v-card width="100vw"
		class="great-stuff-card"
		flat tile
	>
		<v-parallax
			:src="require('@/assets/reindeer-morning-glory.jpg')"
			height="1400"
		>
			<v-row
				class="fill-height ma-0 pa-0 mx-auto stuff-row"
				align="center"
				justify="center"
			>
				<div id="stuff-content">
					<h1>
						Area where all of us struggle to trust <span id="god">GOD</span>
						with <span id="keys">likes and shares</span>.
					</h1>
					<h4 class="my-6 mx-2 stuff-headline">
						"We are committed to our Mother Nature, The Earth and the Great Universe."
					</h4>
					<v-row justify="center"
						align="center" class="ma-0 pa-0"
					>
						<v-card-actions class="ma-0 pa-0">
							<v-btn
								v-bind="size"
								class="ma-2"
								fab
							>
								<v-icon>mdi-video</v-icon>
							</v-btn>
						</v-card-actions>
						<v-card-actions class="ma-0 pa-0">
							<v-btn
								v-bind="size"
								class="ma-2"
								fab
							>
								<v-icon>mdi-headphones</v-icon>
							</v-btn>
						</v-card-actions>
						<v-card-actions class="ma-0 pa-0">
							<v-btn
								v-bind="size"
								class="ma-2"
								fab
							>
								<v-icon>mdi-music</v-icon>
							</v-btn>
						</v-card-actions>
					</v-row>
				</div>
			</v-row>
		</v-parallax>
	</v-card>
</template>
<script>
export default {
	name: "OurGreatStuffComponent",
	computed: {
		size() {
			const size = {
				xs: "x-small",
				sm: "small"
			}[this.$vuetify.breakpoint.name]
			return size ? {[size]: true} : {}
		}
	}
}
</script>
<style lang="sass" scoped>
#stuff-content
	h1
		text-align: center
		font-size: 72px
		background: -webkit-linear-gradient(#cdcdf5, #a2c675, #2680bd)
		-webkit-background-clip: text
		-webkit-text-fill-color: transparent
		line-height: 75px
		font-weight: 700
		@media only screen and (max-width: 710px)
			margin-top: -20px
			font-size: 55px
			line-height: 55px
		@media only screen and (max-width: 510px)
			margin-top: -20px
			font-size: 40px
			line-height: 40px
		@media only screen and (max-width: 380px)
			margin-top: -20px
			font-size: 30px
			line-height: 30px
		@media only screen and (max-width: 275px)
			margin-top: -20px
			font-size: 20px
			line-height: 20px
		#god
			background: -webkit-linear-gradient(#fadbec, #f5c8c6, #f6ddc8)
			-webkit-background-clip: text
			-webkit-text-fill-color: transparent
	h4
		margin: 0
		padding: 20px 0
		text-align: center
		font-weight: 500
		color: #4b4b4b
		text-transform: uppercase
		font-size: 22px !important
		line-height: 20px
		@media only screen and (max-width: 710px)
			margin: 0
			padding: 10px 0
			font-size: 16px !important
			line-height: 16px
		@media only screen and (max-width: 380px)
			margin: 0
			padding: 10px 0
			font-size: 14px !important
			line-height: 14px
		@media only screen and (max-width: 275px)
			margin: 0
			padding: 10px 0
			font-size: 10px !important
			line-height: 10px

</style>
<style lang="scss">
.stuff-headline {
	background-color: #8080807a;
	border-radius: 24px;
	border: 2px solid white;
	color: white !important;
}
.great-stuff-card {
	margin-top: -500px; z-index: 1;
}
.stuff-row {
	max-width: 1100px;
}
</style>
