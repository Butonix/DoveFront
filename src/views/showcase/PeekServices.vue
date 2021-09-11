<template>
	<v-card
		dark class="peek"
		width="100vw"
		tile flat
	>
		<v-card id="peek-services-card"
			:loading="loading"
			flat
			outlined
			max-width="1200"
			class="mx-auto"
			color="transparent"
		>
			<div style="height: 200px" />
			<p class="pb-0 quote nepali-font">
				"जब संसारको हरेक बाटोहरु बन्द हुन्छन् तब पर्मेश्वरले तपाईँको निम्ति एउटा नयाँ बाटो तयार गर्नुहुन्छ।"
			</p>
			<div class="py-6" />
			<v-card
				v-if="services"
				color="transparent"
				style="z-index: 2"
				flat tile
				class="text-center"
			>
				<v-card class="d-flex justify-center align-center flex-wrap transparent"
					flat
				>
					<v-card
						v-for="item in services"
						:key="item.id"
						rounded="xl"
						height="450"
						width="260"
						color="primary darken-2"
						class="ma-2 service-card"
					>
						<div>
							<div class="py-4" />
							<v-avatar
								color="white"
								size="150"
								class="rounded-circle service-img"
							>
								<v-img
									:src="item.image"
								/>
							</v-avatar>
							<p class="peek-title nepali-font">
								{{ item.title }}
							</p>
							<v-card
								class="ma-2 mx-auto pa-4"
								flat color="transparent"
								outlined
								max-width="450"
							>
								<div class="service-description">
									{{ item.description }}
								</div>
							</v-card>
						</div>
					</v-card>
				</v-card>
			</v-card>
		</v-card>
		<div style="height: 250px;" />
	</v-card>
</template>
<script>
export default {
	name: "PeekServicesBox",
	components: {
		// HorizontalSlider: () => import("@/components/utils/HorizontalSlider.vue")
	},
	data: () => ({
		loading: null,
	}),
	computed: {
		services() {
			return [
				{title: "Satsang", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.W4-9_74BBVjGIuFCP_KNWwHaF6%26pid%3DApi&f=1", description: "Various activities are performed"},
				{title: "Bhajan", image: "https://scontent.fpkr1-1.fna.fbcdn.net/v/t1.6435-9/167952492_3860024914066896_971188920796482199_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=b9115d&_nc_ohc=_7zy0XXtiqUAX_6xDht&_nc_ht=scontent.fpkr1-1.fna&oh=dd3227552c1f42c49125b9e911fafd23&oe=613CC232", description: "Hymns and songs about remembering the God"},
				{title: "Testimonials", image: "https://scontent.fpkr1-1.fna.fbcdn.net/v/t1.6435-9/161431072_3821070014629053_8484418797796328352_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=b9115d&_nc_ohc=o6LUWAz4LesAX_x2rAt&_nc_ht=scontent.fpkr1-1.fna&oh=113641676866469b1ecbeb7f5766d593&oe=615703A8", description: "Truth inside our believers are shared among each-other"},
				{title: "Bachans", image: "https://scontent.fpkr1-1.fna.fbcdn.net/v/t1.6435-9/161385550_3821070131295708_6805721549267122156_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=b9115d&_nc_ohc=QiCz8mpI4VQAX955AIt&tn=JRGX9gVI-Xw0IFMi&_nc_ht=scontent.fpkr1-1.fna&oh=344e6454b54cc4c4d5820d1d7a25db63&oe=6155D95B", description: "How we create our way following true words from the God"},
			]
		}
	},
	async created() {
		await this.init()
	},
	methods: {
		async init() {
			this.loading = true
			// await this.$store.dispatch("utilities/fetchServices")
			this.loading = false
		}
	}
}
</script>
<style>
.peek {
	background-image: linear-gradient( 109.6deg,  rgba(45,116,213,1) 11.2%, rgba(121,137,212,1) 91.2% );
}
</style>
<style lang="sass" scoped>
.service-img
	border: 2px solid white
.peek-services-wrapper
	padding: 80px 0
#peek-services-card
	background: aliceblue
	::v-deep .v-card__title
		font-size: 14px !important
		color: #013045
		padding: 2px
	#services-row
		margin: 0
		padding: 0
		@media only screen and (min-width: 1000px)
			margin-left: auto
			margin-right: auto
			width: 60em
	.quote
		margin: 0
		font-size: 3rem
		line-height: 4rem
		font-weight: 700
		letter-spacing: 1px
		text-align: center
		transition: all .3s
		@media only screen and (max-width: 895px) and (min-width: 436px)
			font-size: 2.4rem
			line-height: 3rem
			padding: 80px 40px 0 40px !important
		@media only screen and (max-width: 435px) and (min-width: 185px)
			font-size: 1.5rem
			line-height: 2rem
			padding: 15px !important
		@media only screen and (max-width: 184px)
			font-size: 1.1rem
			line-height: 1.6rem
			padding: 15px !important
	::v-deep.v-avatar
		transition: ease-in-out .2s
		animation-name: reverse
		animation-duration: .5s
		@media only screen and (max-width: 400px) and (min-width: 211px)
			height: 140px !important
			min-width: 140px !important
			width: 140px !important
		@media only screen and (max-width: 210px)  and (min-width: 136px)
			height: 90px !important
			min-width: 90px !important
			width: 90px !important
		@media only screen and (max-width: 135px)
			height: 50px !important
			min-width: 50px !important
			width: 50px !important
	::v-deep.v-avatar:hover
		animation-duration: .5s
		animation-name: scaleAnimation
		animation-fill-mode: forwards
	.service-card
		display: inline-block
		border: 2px solid white !important
		.peek-title
			margin: 0
			padding: 20px 0
			font-weight: 500
			font-size: 24px
.service-description
	font-size: 16px !important
@keyframes scaleAnimation
	from
		transform: scale(1)
	to
		transform: scale(.8)
@keyframes reverse
	from
		transform: scale(.8)
	to
		transform: scale(1)
</style>
