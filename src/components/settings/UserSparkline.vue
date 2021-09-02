<template>
	<v-card
		dark rounded="xl"
		max-width="500"
		color="blue lighten-1"
	>
		<v-card-text>
			<v-sheet color="rgba(0, 0, 0, .12)"
				rounded="xl"
			>
				<v-sparkline
					:labels="labels"
					:value="value"
					color="white"
					line-width="2"
					padding="16"
					height="100"
					smooth
					stroke-linecap="round"
				/>
			</v-sheet>
		</v-card-text>

		<v-card-text class="text-center">
			<div class="text-h5 font-weight-thin">
				User Registrations
			</div>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	name: "UserSparkline",
	data: () => ({
		labels: [
			"12am",
			"3am",
			"6am",
			"9am",
			"12pm",
			"3pm",
			"6pm",
			"9pm",
		],
		value: [
			200,
			675,
			410,
			390,
			310,
			460,
			250,
			240,
		],
	}),
}
</script>

<style scoped>
.v-sheet--offset {
	top: -24px;
	position: relative;
}
</style>
