<template>
	<div>
		<v-card
			tile
			flat
			height="100vh"
			color="primary lighten-1"
		>
			<div style="position: relative">
				<v-img :src="require('@/assets/equality.gif')"
					height="100vh"
					max-width="50vw"
					style="position: absolute;"
				/>
				<v-img :src="require('@/assets/equity.gif')"
					height="100vh"
					max-width="50vw"
					style="position: absolute; right: 0"
				/>
			</div>
		</v-card>
		<v-card flat
			tile class="foot"
		>
			<div class="text-center pa-4 font-weight-bold heading">
				SACHCHAI IS ALL ABOUT EQUITY
			</div>
		</v-card>
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
