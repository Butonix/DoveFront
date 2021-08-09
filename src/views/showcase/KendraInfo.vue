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
			style="z-index: 2"
		>
			<v-card-subtitle
				id="kendra_name"
				class="text-center nepali-font"
			>
				ईश्वरीय मार्ग भजन मंडल सच्चाई केन्द्र नेपाल
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
					class="elevation-0 text-center py-6 ma-2"
					dark
					color="#024b84"
					max-width="300"
					width="300"
					style="border: 2px solid white !important;"
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
						<div class="contact nepali-font py-2">
							<span><v-icon size="18">mdi-phone</v-icon></span>
							<span class="px-2">{{ item.contact }}</span>
						</div>
					</div>
				</v-card>
			</v-row>
		</v-card>
		<div
			style="z-index: 1"
			class="custom-shape-divider-bottom"
		>
			<svg data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
				preserveAspectRatio="none"
			>
				<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
					class="shape-fill"
				/>
			</svg>
		</div>
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
				trigger: ".showcase-img-wrapper",
				start: "top center",
				// end: "-=600",
			},
			yoyo: true
		})
			.from(".repeating-gradient", {
				duration: 1.5,
				scale: .5,
				opacity: 0
			})
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
			.from(".kendra-col-0", {
				x: -500,
				duration: 1,
			}, 1)
			.from(".kendra-col-1", {
				x: 500,
				duration: 1
			}, 1)
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
.repeating-gradient {
	background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 100px);
	overflow: hidden;
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
