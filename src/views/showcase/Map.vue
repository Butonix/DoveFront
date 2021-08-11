<template>
	<v-card
		flat
		class="ma-0 pa-0 rounded-0 px-4"
		dark
		color="#284564"
		height="120vh"
		img="https://scontent.fpkr1-1.fna.fbcdn.net/v/t1.6435-9/155794206_3777657255636996_7526777727332740545_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=8631f5&_nc_ohc=vPjfaGs0-T0AX9Lc_co&_nc_ht=scontent.fpkr1-1.fna&oh=0bdbf1df05668c71cb61df393b6509c6&oe=61379A3C"
	>
		<div style="height: 200px;" />
		<v-card class="py-4 find-us-title mx-auto"
			max-width="1000"
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
			<p class="find-us-subtitle text-center pt-4">
				{{ mapInfo.description }}
			</p>
		</v-card>
		<div class="py-4" />
		<v-card height="600"
			max-width="1000" class="mx-auto"
		>
			<iframe
				id="branch-iframe"
				style="z-index: 2"
				src="https://www.google.com/maps/d/embed?mid=1gQSVr7mErgYHo00oSpVGv5oIdklxJqPc"
				width="100%" height="600"
			/>
		</v-card>
		<div class="py-14" />
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
</style>
