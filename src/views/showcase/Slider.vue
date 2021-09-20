<template>
	<v-card
		tile
	>
		<v-fade-transition>
			<v-card
				v-if="loading"
				height="100vh"
				width="100vw"
				flat tile
				class="d-flex justify-center align-center center-bg"
			>
				<div class="center-bg-first">
					<div class="d-flex justify-center align-center">
						<v-avatar
							size="80"
							class="center-logo"
							color="blue"
						>
							<img
								:src="require('@/assets/sacchai_logo.png')"
								alt="Sachchai Kendra Nepal Logo"
							>
						</v-avatar>
						<div class="nepali-font text-center center-subtitle">
							{{ item.subtitle }}
						</div>
					</div>
					<div class="pa-2 nepali-font text-center center-title">
						{{ item.title }}
					</div>
				</div>
			</v-card>
			<section v-else
				class="showcase-img-section"
			>
				<v-img class="showcase-img"
					:src="require('@/assets/kendra_set.jpg')"
					dark
					gradient="to top right, rgb(0 0 0 / 0%), rgb(0 0 0 / 60%), rgb(0 0 0 / 20%)"
					height="100vh"
					width="100vw"
					eager
				>
					<template #default>
						<v-row no-gutters justify="center"
							align="start"
							class="fill-height"
						>
							<v-card
								flat tile
								class="text-start"
								max-width="1000"
								color="transparent"
							>
								<gap height="150" />
								<v-card-text class="text-uppercase context">
									{{ item.context }}
								</v-card-text>
								<v-card-text class="main nepali-font">
									{{ item.title }}
								</v-card-text>
								<v-card-text class="sub nepali-font">
									{{ item.subtitle }}
								</v-card-text>
								<v-card-actions>
									<v-tooltip bottom>
										<template #activator="{on, attrs}">
											<v-btn
												:loading="loading"
												dark
												height="55"
												color="primary"
												v-bind="attrs"
												rounded
												class="explore-btn"
												v-on="on"
												@click="routeToFeedsPage()"
											>
												<v-fade-transition>
													<span v-if="$vuetify.breakpoint.smAndUp"
														class="explore pr-2"
													>
														Explore
													</span>
												</v-fade-transition>
												<v-icon>
													mdi-arrow-right-circle
												</v-icon>
											</v-btn>
										</template>
										<span>Explore More</span>
									</v-tooltip>
								</v-card-actions>
							</v-card>
						</v-row>
					</template>
				</v-img>
			</section>
		</v-fade-transition>
	</v-card>
</template>
<script>
import {gsap} from "gsap"

export default {
	name: "ShowCaseSliderComponent",
	data: () => ({
		loading: true,
		item: {
			context: "Sachchai kendra nepal presents",
			title: "ईश्वरीय मार्ग भजन मण्डल सच्चाई केन्द्र नेपाल",
			subtitle: "हिमाल पहाड तराई, कोहि छैन पराई, सबैलाई समेट्ने एक मात्र सच्चाई"
		}
	}),
	mounted() {
		const tl = gsap.timeline()
		tl
			.to(".center-logo", {
				delay: 3,
				width: 120,
				maxWidth: 120,
				height: 120,
				duration: .5
			})
			.from(".center-subtitle", {
				width: 0,
				opacity: 0,
				ease: "power1.out"
			})
			.from(".center-title", {
				opacity: 0,
				scale: 0,
				ease: "power1.out"
			})
		setTimeout(() => {
			this.loading = false
		}, 8000)
	},
	methods: {
		async routeToFeedsPage() {
			this.loading = true
			await this.$router.push({name: "HOME"})
			this.loading = false
		},
	}

}
</script>

<style lang="scss" scoped>

.center-bg {
	flex-direction: column;
	background-image: radial-gradient(
			circle farthest-corner at 10% 20%,
			rgba(37,145,251,0.98) 0.1%,
			rgba(0,7,128,1) 99.8%
	);
}

.center-title {
	font-size: 20px;
	width: 300px;
	overflow: hidden;
	margin: 0 auto;
	color: white;
	font-weight: bold;
}

.center-subtitle {
	width: 200px;
	overflow: hidden;
	font-size: 14px;
	color: white;
	font-weight: bold;
}
.main {
	transition: all ease .5s;
	font-size: 3rem;
	line-height: 4rem;
	font-weight: 600;
	padding-top: 0;
	padding-bottom: 0;
	color: white !important;
}
.sub {
	transition: all ease .5s;
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 600;
	color: white !important;
}
.context {
	transition: all ease .5s;
	text-transform: capitalize;
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 500;
	color: white !important;
}
.explore-btn {
	border: 2px solid white !important;
	.explore {
		transition: all ease .5s;
		font-size: 16px;
		@media only screen and (max-width: 900px) {
			font-size: 16px;
		}
		@media only screen and (max-width: 700px) {
			font-size: 14px;
		}
	}
}
@media only screen and (max-width: 1000px) {
	.main {
		font-size: 2.8rem;
		line-height: 3.2rem;
	}
	.sub {
		font-size: 1.4rem;
		line-height: 1.8rem;
	}
	.context {
		font-size: 1.2rem;
		line-height: 1.6rem;
	}
}
@media only screen and (max-width: 600px) {
	.main {
		font-size: 2.4rem;
		line-height: 3rem;
	}
	.sub {
		font-size: 1.2rem;
		line-height: 1.5rem;
	}
	.context {
		font-size: 1.2rem;
		line-height: 1.5rem;
	}
}
@media only screen and (max-width: 450px) {
	.main {
		font-size: 2rem;
		line-height: 2.5rem;
	}
	.sub {
		font-size: 1.2rem;
		line-height: 1.5rem;
	}
	.context {
		font-size: 1rem;
		line-height: 1.5rem;
	}
}
@media only screen and (max-width: 385px) {
	.main {
		font-size: 2rem;
		line-height: 2.5rem;
	}
	.sub {
		font-size: 1rem;
		line-height: 1.2rem;
	}
	.context {
		font-size: .875rem;
		line-height: 1rem;
	}
}
@media only screen and (max-width: 290px) {
	.main {
		font-size: 2rem;
		line-height: 2.5rem;
	}
	.sub {
		height: 0;
		visibility: hidden;
	}
	.context {
		height: 0;
		visibility: hidden;
	}
}
</style>
