<template>
	<v-card min-height="100vh"
		color="rgb(241 241 242)"
		class="d-flex align-center"
		flat tile
		style="position: relative;"
	>
		<v-card class="mx-auto elevation-0 rounded-0"
			max-width="1000"
			color="transparent"
		>
			<v-card-subtitle
				id="kendra_name"
				class="text-center nepali-font"
			>
				ईश्वरीय मार्ग भजन मण्डल सच्चाई केन्द्र नेपाल
			</v-card-subtitle>
			<v-card-subtitle
				id="kendra_motto"
				class="text-center nepali-font"
			>
				हिमाल पहाड तराई, कोहि छैन पराई, सबैलाई समेट्ने एक मात्र सच्चाई
			</v-card-subtitle>
			<v-row class="ma-0 pa-2"
				justify="center" align="center"
			>
				<v-card
					v-for="(item, index) in kendra"
					:key="index"
					class="elevation-0 text-center py-6 ma-2 kendra-card"
					dark
					color="#024b84"
					max-width="300"
					width="300"
					rounded="xl"
					style="border: 2px solid white !important; z-index: 2;"
				>
					<v-avatar
						size="200"
						class="rounded-circle resize-avatar"
						color="white"
						:class="(item.position === 'Kendra Pramukh') ? 'pramukh' : 'saha-pramukh'"
					>
						<v-img :src="item.image" />
					</v-avatar>
					<div class="personal-info">
						<div class="name nepali-font">
							{{ item.name }}
						</div>
						<div class="position nepali-font">
							{{ item.position }}
						</div>
					</div>
				</v-card>
			</v-row>
		</v-card>
	</v-card>
</template>
<script>
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

ScrollTrigger.defaults({
	toggleActions: "restart pause resume pause",
	scrub: 1
});
gsap.registerPlugin(ScrollTrigger)

export default {
	data: () => ({
		kendra: [
			{
				image: require("@/assets/kendra_pramukh.jpg"),
				name: "प्रकाश दिप गैरे",
				position: "प्रमुख",
				contact: "9856015401"
			},
			{
				image: require("@/assets/kendra_saha_pramukh.jpg"),
				name: "सुशिला कट्टेल गैरे",
				position: "उप-प्रमुख",
				contact: "9856015403"
			}
		]
	}),
	mounted() {
		gsap.timeline({
			scrollTrigger: {
				trigger: "#kendra_motto",
				start: "bottom bottom",
				end: "+=300",
			},
			yoyo: true
		})
			.from("#kendra_name", {
				scale: 2,
				opacity: 0,
				x: -500,
				duration: .5,
			}, 0)
			.from("#kendra_motto", {
				scale: 2,
				opacity: 0,
				duration: .5,
				x: 500
			}, 0)
			.from(".kendra-card", {
				duration: 1.5,
				scale: .5,
				opacity: 0
			})
	}
}
</script>
<style lang="sass" scoped>
#kendra_name
	color: #2f2d2d
	font-size: 55px
	line-height: 55px
	font-weight: 500
	transition: all .3s
	@media only screen and (max-width: 445px) and (min-width: 291px)
		font-size: 40px
		line-height: 40px
	@media only screen and (max-width: 290px)
		font-size: 28px
		line-height: 28px
#kendra_motto
	padding-top: 5px
	font-size: 24px
	line-height: 25px
	transition: all .3s
	@media only screen and (max-width: 445px) and (min-width: 291px)
		font-size: 18px
		line-height: 18px
	@media only screen and (max-width: 290px)
		font-size: 14px
		line-height: 14px
.resize-avatar
	border: 3px solid white
	transition: all .3s
	@media only screen and (max-width: 345px)
		height: 150px !important
		min-width: 150px !important
		width: 150px !important
	@media only screen and (max-width: 180px)
		height: 100px !important
		min-width: 100px !important
		width: 100px !important
.personal-info
	padding: 20px
.name
	text-transform: uppercase
	font-size: 1.6rem
.position
	font-size: 1.1rem
.contact
	font-size: 1rem
</style>
<style lang="scss" scoped>
.kendra-info-bg-img{
	margin-top: -70px;
}
.custom-shape-divider-bottom {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	overflow: hidden;
	line-height: 0;
	transform: rotate(180deg);
}

.custom-shape-divider-bottom svg {
	position: relative;
	display: block;
	width: calc(100% + 1.3px);
	height: 500px;
	transform: rotateY(180deg);
}

.custom-shape-divider-bottom .shape-fill {
	fill: #060c28;
}
</style>
