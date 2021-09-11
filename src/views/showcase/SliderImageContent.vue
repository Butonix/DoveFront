<template>
	<v-row
		class="fill-height" no-gutters
		justify="center" align="start"
	>
		<div class="text-start image-content">
			<div class="text-uppercase context">
				{{ item.context }}
			</div>
			<div class="main nepali-font">
				{{ item.title }}
			</div>
			<div class="sub nepali-font">
				{{ item.subtitle }}
			</div>
			<div class="explore-btn">
				<v-tooltip bottom>
					<template #activator="{on, attrs}">
						<v-btn
							:loading="loading"
							dark
							height="55"
							class="primary"
							v-bind="attrs"
							rounded
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
			</div>
		</div>
	</v-row>
</template>
<script>
import Snack from "@/mixins/Snack.js";

export default {
	name: "SliderImageContent",
	mixins: [Snack],
	data: () => ({
		loading: null,
		item: {
			context: "Sachchai kendra nepal presents",
			title: "ईश्वरीय मार्ग भजन मण्डल सच्चाई केन्द्र नेपाल",
			subtitle: "हिमाल पहाड तराई, कोहि छैन पराई, सबैलाई समेट्ने एक मात्र सच्चाई"
		}
	}),
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
.image-content {
	padding: 15vh 20px 0;
	max-width: 1000px;
	margin: 0 auto;
}
.main {
	transition: all ease .5s;
	padding: 20px 0;
	font-size: 3rem;
	line-height: 4rem;
	font-weight: 600;
}
.sub {
	transition: all ease .5s;
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 600;
}
.context {
	transition: all ease .5s;
	text-transform: capitalize;
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 500;
}
.explore-btn {
	padding-top: 20px;
	.showcase-blue-bg {
		transition: all ease .5s;
		width: 180px;
		@media only screen and (max-width: 900px) {
			width: 150px;
		}
		@media only screen and (max-width: 700px) {
			width: 140px;
		}
		@media only screen and (max-width: 600px) {
			width: 70px;
		}
	}
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
		padding: 12px 0;
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
		padding: 8px 0;
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
		padding: 4px 0;
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
		padding: 4px 0;
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
