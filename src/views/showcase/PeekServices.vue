<template>
	<v-card
		dark color="#060C28"
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
			style="z-index: 2"
		>
			<p class="pb-0 quote">
				"The essence of all religions is one. Only their approaches are different."
			</p>
			<p class="text-center quoter">
				- Mahatma Gandhi
			</p>
			<v-row
				v-if="services"
				align="center"
				class="text-center ma-0 pa-0"
			>
				<v-col
					v-for="(item, index) in services"
					:id="item.id"
					:key="index"
					cols="12"
					xl="4" lg="4"
					md="4" sm="4"
				>
					<v-card
						color="primary darken-3"
						class="pa-2 service-card d-flex justify-center align-start"
						:min-height="(index % 2 === 0) ? 700 : 680"
						outlined
					>
						<div>
							<div class="py-4" />
							<v-avatar
								color="grey"
								size="200"
								class="rounded-circle service-img"
							>
								<v-img
									v-if="item.images.length"
									:src="$helper.replaceBackendHost(item.images[0].image)"
								/>
							</v-avatar>
							<p class="peek-title">
								{{ item.title }}
							</p>
							<v-card
								class="ma-2 mx-auto pa-4"
								flat color="transparent"
								outlined
								max-width="450"
							>
								<div style="font-size: 16px !important;">
									{{ getPeekDescription(item.description) }}
								</div>
							</v-card>
						</div>
					</v-card>
				</v-col>
			</v-row>
		</v-card>
		<div style="height: 250px;" />
	</v-card>
</template>
<script>
import {mapGetters} from "vuex";

export default {
	name: "PeekServicesBox",
	data: () => ({
		loading: null,
	}),
	computed: {
		...mapGetters({
			services: "utilities/serviceList"
		})
	},
	async created() {
		await this.init()
	},
	methods: {
		async init() {
			this.loading = true
			await this.$store.dispatch("utilities/fetchServices")
			this.loading = false
		},
		getPeekDescription(text) {
			if (this.$vuetify.breakpoint.width > 400) return text
			else return text.toString().substr(0, 100) + "<span>...</span><br/><a href='#' class='see-more'>See More</a>"
		}
	}
}
</script>
<style lang="sass" scoped>
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
		padding: 0px 80px 0 80px !important
		font-size: 3rem
		line-height: 3.3rem
		font-weight: 700
		letter-spacing: 1px
		text-align: center
		transition: all .3s
		@media only screen and (max-width: 895px) and (min-width: 436px)
			font-size: 2.4rem
			line-height: 2.6rem
			padding: 80px 40px 0 40px !important
		@media only screen and (max-width: 435px) and (min-width: 185px)
			font-size: 1.5rem
			line-height: 1.6rem
			padding: 15px !important
		@media only screen and (max-width: 184px)
			font-size: 1.1rem
			line-height: 1.3rem
			padding: 15px !important
	.quoter
		margin: 0
		padding: 15px 0
		font-size: 1.9rem
		line-height: 1.9rem
		font-weight: 500
		transition: all .3s
		@media only screen and (max-width: 895px) and (min-width: 436px)
			font-size: 1.5rem
			line-height: 1.5rem
			padding: 20px 0
		@media only screen and (max-width: 435px) and (min-width: 185px)
			font-size: 1.2rem
			line-height: 1.2rem
			padding-bottom: 10px
		@media only screen and (max-width: 184px)
			font-size: 1rem
			line-height: 1rem
			padding-bottom: 10px
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
		.peek-title
			margin: 0
			padding: 20px 0
			font-weight: 500
			font-size: 24px
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
