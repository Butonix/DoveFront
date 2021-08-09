<template>
	<v-card width="100vw"
		flat tile
		dark color="rgb(6 12 40)"
		style="position: relative"
	>
		<div
			class="custom-shape-divider-bottom"
			style="z-index: 1"
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
		<div class="custom-shape-divider-top"
			style="z-index: 1"
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
		<v-card
			style="z-index: 2"
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
					<v-card-text class="pin-header py-4">
						Become a part of something great!
					</v-card-text>
				</v-col>
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
							See our top pinned items here. <v-icon large>
								mdi-arrow-right
							</v-icon>
						</h3>
					</v-card-text>
				</v-col>
				<v-col cols="12">
					<v-card-actions class="py-0 d-flex justify-center mt-4 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-0">
						<v-btn large
							dark
							height="55"
							outlined
							rounded
						>
							<v-icon>mdi-eye-circle</v-icon>
							<span v-show="$vuetify.breakpoint.smAndUp"
								class="ml-4"
							>Explore All</span>
						</v-btn>
					</v-card-actions>
				</v-col>
			</v-row>
			<div class="py-6" />
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
				<div
					v-else
					class="rounded d-flex flex-wrap justify-center pa-2"
					style="z-index: 2;"
				>
					<pinned-post
						v-for="(item) in articles.results"
						:key="item.id"
						class="ma-2"
						:post="item"
						is-article
					/>
				</div>
			</v-col>
			<div style="height: 500px;" />
		</v-card>
	</v-card>
</template>
<script>
import Swiper, { Navigation, Pagination } from "swiper"
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
	mounted() {
		gsap.timeline({
			scrollTrigger: {
				trigger: ".pin-bg-card",
				start: "top center",
				end: "+=800",
			},
		})
			.from(".pin-header", {
				scale: 4,
				opacity: 0,
				color: "transparent",
				duration: .5
			})
			.from(".bulls-eye-avatar", {
				opacity: 20,
				duration: 2,
				ease: "ease",
				rotation: 360*7,
			})
		gsap.timeline({
			scrollTrigger: {
				trigger: ".pin-bg-card",
				start: "top center",
				end: "+=400",
			},
		})
			.from(".explore-pin-btn", {
				y: 600,
				opacity: 0,
				ease: "bounce",
			})
			.from(".view-top-pins", {
				scale: 1.3,
				opacity: 0,
				ease: "ease",
			})
		const slides = gsap.utils.toArray(".swiper-slide")
		if (slides.length > 0) {
			gsap.timeline({
				scrollTrigger: {
					trigger: ".pin-bg-card",
					scrub: 1,
					start: "top 400px",
					end: "+=600"
				}
			})
				.from(slides, {
					opacity: 0,
					scale: .5,
					y: 400,
					ease: "back.out(4)",
					duration: 2.5
				})
		}
	},
	async created() {
		await this.init()
		await this.initSwiper()
	},
	methods: {
		async init() {
			await this.$store.dispatch("article/fetchPinned")
		},
		initSwiper() {
			Swiper.use([Navigation, Pagination]);

			const pinSwiper = new Swiper(".swiper-container", {
				direction: "horizontal",
				loop: false,
				freeMode: true,
				centerInsufficientSlides: true,
				slidesOffsetBefore: 10,
				slidesOffsetAfter: 10,
				spaceBetween: 25,
				breakpoints: {
					250: {
						slidesPerView: 1,
					},
					500: {
						slidesPerView: 2
					},
					750: {
						slidesPerView: 3,
					},
				},
				grabCursor: true,
				speed: 1500,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
				pagination: {
					el: ".swiper-pagination",
					dynamicBullets: false,
					clickable: true,
					type: "bullets"
				},
			})
		}
	}
}
</script>
<style>
.swiper-pagination {
	bottom: -5px !important;
}
.swiper-pagination-bullet {
	background-color: white;
	width: 12px !important;
	height: 12px !important;
	opacity: .4;
	transition: all .2s;
}
.swiper-pagination-bullet-active {
	background-color: white !important;
	opacity: 1;
}
</style>
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
</style>
<style lang="scss" scoped>
.custom-shape-divider-top {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	overflow: hidden;
	line-height: 0;
}

.custom-shape-divider-top svg {
	position: relative;
	display: block;
	width: calc(100% + 1.3px);
	height: 500px;
	transform: rotateY(180deg);
}

.custom-shape-divider-top .shape-fill {
	fill: #060C28;
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
	fill: #c9c9c9;
}
</style>
