<template>
	<v-card width="100vw"
		flat tile
		dark color="rgb(6 12 40)"
		class="pin-bar-wrapper"
	>
		<v-card color="transparent"
			flat tile
			class="pin-bar-wrapper-card"
		>
			<v-col
				cols="12"
				class="text-center py-4"
			>
				<v-avatar
					color="white"
					size="90"
					class="elevation-14 bulls-eye-avatar"
				>
					<v-icon
						size="80"
						color="red darken-2"
					>
						mdi-bullseye-arrow
					</v-icon>
				</v-avatar>
			</v-col>
		</v-card>
		<gap height="50" />
		<v-card
			dark
			:loading="loading"
			flat tile
			class="transparent"
		>
			<v-row no-gutters
				justify="center" align="center"
			>
				<v-col
					cols="12"
				>
					<v-card-text class="pin-header py-4 text-uppercase">
						Become a part of something great!
					</v-card-text>
				</v-col>
				<v-col v-show="$vuetify.breakpoint.mdAndUp"
					cols="12"
				>
					<v-card-text
						class="d-flex justify-center pb-0 font-weight-bold"
					>
						We provide a nice feeds management for our followers.
						We can post our thoughts, events or any inspirations as Sachchai Nepal Post.
					</v-card-text>
				</v-col>
				<v-col v-show="$vuetify.breakpoint.smAndUp"
					cols="12"
				>
					<v-card-text class="view-top-pins text-center blue--text text--lighten-2">
						<h3>
							See our top pinned stories from here.
						</h3>
					</v-card-text>
				</v-col>
				<v-col cols="12">
					<v-card-actions class="justify-center">
						<v-btn large
							dark
							height="55"
							class="explore-pin-btn"
							to="/home/article"
						>
							Explore All
							<v-icon right
								size="20"
							>
								mdi-eye-circle
							</v-icon>
						</v-btn>
					</v-card-actions>
				</v-col>
			</v-row>
			<div class="py-4" />
			<v-col
				v-if="articles"
				cols="12"
				class="ma-0 pa-0 rounded"
			>
				<v-card v-if="articles.count === 0"
					flat color="transparent"
					class="text-center"
				>
					<div class="grey--text">
						No pins yet!
					</div>
				</v-card>
				<v-card
					v-else tile
					class="mx-auto py-6 relative"
					color="white"
				>
					<div class="shape-divider">
						<svg data-name="Layer 1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1200 120"
							preserveAspectRatio="none"
						>
							<path d="M600,16.8c0-8.11-8.88-13.2-19.92-13.2H0V120H1200V3.6H619.92C608.88,3.6,600,8.66,600,16.8Z"
								class="shape-fill"
							/>
						</svg>
					</div>
					<horizontal-slider class="pl-4 mx-auto pin-bar-slider">
						<pinned-post
							v-for="(item) in articles.results"
							:key="item.id"
							class="ma-2 d-inline-block pin-post-item"
							:post="item"
						/>
					</horizontal-slider>
				</v-card>
			</v-col>
		</v-card>
	</v-card>
</template>
<script>
import {mapGetters} from "vuex";
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

ScrollTrigger.defaults({
	toggleActions: "restart pause resume pause",
	scrub: 1
});

export default {
	name: "PinnedBarView",
	components: {
		HorizontalSlider: () => import("@/components/utils/HorizontalSlider"),
		PinnedPost: () => import("@/views/showcase/PinnedPost"),
	},
	data: () => ({
		loading: false,
		pinItems: []
	}),
	computed: {
		...mapGetters({
			articles: "article/pins"
		})
	},
	async created() {
		await this.init()
		await this.initGsap()
	},
	methods: {
		async init() {
			await this.$store.dispatch("article/fetchPinned")
		},
		async initGsap() {
			gsap.timeline({
				scrollTrigger: {
					trigger: ".pin-header",
					end: "+=800",
				},
				yoyo: true
			})
				.from(".pin-header", {
					scale: 2,
					opacity: 0,
					color: "transparent",
					duration: .5,
					ease: "ease"
				}, 0)
				.from(".bulls-eye-avatar", {
					opacity: 20,
					duration: .5,
					ease: "ease",
					rotation: 360*7,
				}, 0)
				.from(".view-top-pins", {
					scale: 1.3,
					opacity: 0,
					ease: "ease",
					duration: .5,
				}, 0)
			const slides = gsap.utils.toArray(".pinned-post")
			if (slides.length > 0) {
				gsap.timeline({
					scrollTrigger: {
						trigger: ".pin-bar",
						scrub: 1,
						start: "top top",
						end: "+=600"
					}
				})
					.from(slides, {
						opacity: 0,
						scale: .5,
						y: 400,
						duration: 2.5
					})
			}
		}
	}
}
</script>
<style lang="sass" scoped>
.pin-column
	transition: all .2s
	margin-top: -40px !important
	@media only screen and (min-width: 1391px)
		margin-top: -140px !important
	@media only screen and (max-width: 1390px)  and (min-width: 960px)
		margin-top: -100px !important
		@media only screen and (max-width: 994px)
			margin-top: -80px !important
	@media only screen and (max-width: 959px)
		margin-top: -150px !important
	@media only screen and (max-width: 355px)
		margin-top: -100px !important
	@media only screen and (max-width: 305px)
		margin-top: -50px !important
	@media only screen and (max-width: 299px)
		margin-top: -180px !important
	@media only screen and (max-width: 245px)
		margin-top: -150px !important
	@media only screen and (max-width: 214px)
		margin-top: -110px !important
	@media only screen and (max-width: 140px)
		margin-top: -70px !important
	@media only screen and (max-width: 137px)
		margin-top: -150px !important

.pin-bg-card
	overflow: hidden
	display: flex
	justify-content: center
	align-items: center
	background: #f1f1f2

.swiper-container
	margin: 0 auto
	max-width: 1000px
	height: 356px
.overline
	font-size: 14px !important
.pin-header
	color: whitesmoke
	text-align: center
	font-weight: 700
	@media only screen and (min-width: 1390px)
		font-size: 60px
		line-height: 65px
	@media only screen and (min-width: 1119px) and (max-width: 1389px)
		font-size: 48px
		line-height: 40px
	@media only screen and (min-width: 600px) and (max-width: 1118px)
		font-size: 32px
		line-height: 32px
	@media only screen and (min-width: 300px) and (max-width: 599px)
		font-size: 48px
		line-height: 48px
	@media only screen and (max-width: 299px)
		font-size: 32px
		line-height: 32px
	@media only screen and (max-width: 137px)
		display: none
.subtitle-1
	max-width: 800px
	margin: 0 auto
	text-align: center

.explore-pin-btn
	border: 2px solid white
	border-radius: 20px
</style>
<style lang="scss" scoped>
.shape-divider {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	overflow: hidden;
	line-height: 0;
	transform: rotate(180deg);
}

.shape-divider svg {
	position: relative;
	display: block;
	width: calc(139% + 1.3px);
	height: 219px;
}

.shape-divider .shape-fill {
	fill: #030d27;
}
.pin-bar-slider {
	max-width: 1450px; z-index: 2
}
.pin-post-item {
	z-index: 44;
}
.pin-bar-wrapper {
	margin-top: -60px;
}
.pin-bar-wrapper-card {
	z-index: 1;
}
</style>
