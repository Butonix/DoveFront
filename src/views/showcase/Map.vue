<template>
	<v-card
		dark flat
		tile :img="require('@/assets/mass_clap.jpg')"
	>
		<gap height="200" />
		<v-card-text>
			<v-card class="py-4 find-us-title mx-auto"
				max-width="1000"
				rounded="xl"
			>
				<div class="text-center">
					<v-avatar v-show="$vuetify.breakpoint.smAndUp"
						class="mr-2 find-us-av"
						size="60"
						color="white"
					>
						<v-icon x-large
							color="blue darken-2"
						>
							mdi-map-legend
						</v-icon>
					</v-avatar>
					{{ mapInfo.title }}
				</div>
				<v-card-text>
					<p class="find-us-subtitle text-center pt-4">
						{{ mapInfo.description }}
					</p>
				</v-card-text>
			</v-card>
		</v-card-text>
		<v-card-text>
			<v-card height="600"
				max-width="1000" class="mx-auto"
				rounded="xl"
			>
				<iframe
					id="branch-iframe"
					class="branches-iframe"
					src="https://www.google.com/maps/d/embed?mid=1gQSVr7mErgYHo00oSpVGv5oIdklxJqPc"
					width="100%" height="600"
				/>
			</v-card>
		</v-card-text>
		<gap height="100" />
	</v-card>
</template>

<script>
export default {
	name: "ShowcaseMapComponent",
	data() {
		return {
			mapInfoParallaxImage: require("@/assets/kaudada_group.jpg"),
			mapInfo: {
				title: "Find us on Google maps!",
				description: "We provide a very nice map navigation system where" +
					" you can find all of our branches locations."
			}
		}
	},
}
</script>

<style lang="sass" scoped>
.find-us-card
	border-radius: 0
	background: transparent
#find-us-row
	margin: 0
	padding: 0
#map-box
	height: 440px
	max-width: 500px
	border: 3px solid white
	border-radius: 10px
#map-column
	transition: all 1s
	-webkit-transition: all 1s
	@media only screen and (max-width: 335px)
		display: flex
		justify-content: center
#find-us
	::v-deep.v-parallax
		border-radius: 10px
		border: 3px solid white
	::v-deep.v-image
		border-radius: 10px
.v-parallax
	::v-deep.v-parallax__image-container
			background: rgba(0,0,0,0.6)
			opacity: 90%
			transition: all 1s
			-webkit-transition: all 1s
.find-us-title
	transition: all .2s
	font-size: 50px
	line-height: 50px
	font-weight: 700
	@media only screen and (max-width: 300px)
		font-size: 35px
		line-height: 35px
.find-us-subtitle
	color: grey
	font-size: 18px !important
	line-height: 20px
	font-weight: bold
	display: block
.branches-iframe
	z-index: 2
</style>
