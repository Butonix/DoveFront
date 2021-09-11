<template>
	<div style="margin-top: -270px; z-index: 1">
		<v-parallax
			height="1000"
			dark
			:src="require('@/assets/equity.jpg')"
		>
			<v-row
				align="center"
				justify="center"
			>
				<v-col
					class="text-center"
					cols="12"
				>
					<v-card flat
						rounded="xl" class="foot"
					>
						<div class="text-center pa-4 font-weight-bold heading">
							SACHCHAI IS ALL ABOUT EQUITY
						</div>
					</v-card>
				</v-col>
			</v-row>
		</v-parallax>
	</div>
</template>

<script>
export default {
	name: "EquityEquality",
	props: {},
	data: () => ({}),
	computed: {},
	methods: {}
}
</script>

<style scoped lang="scss">
.foot {
	.heading {
		color: #b1b1b1;
		font-size: 84px;
	}
	background-image: linear-gradient( 96.5deg,  rgba(39,103,187,1) 10.4%, rgba(16,72,144,1) 87.7% );
}
</style>
