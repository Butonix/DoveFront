<template>
	<v-card
		dark rounded="xl"
		color="green"
		max-width="500"
		class="text-center"
	>
		<v-card-text>
			<v-sheet color="rgba(0, 0, 0, .12)"
				rounded="xl"
			>
				<v-sparkline
					:value="value"
					color="rgba(255, 255, 255, .7)"
					height="100"
					padding="24"
					stroke-linecap="round"
					smooth
					line-width="2"
				>
					<template #label="item">
						${{ item.value }}
					</template>
				</v-sparkline>
			</v-sheet>
		</v-card-text>

		<v-card-text>
			<div class="text-h5 font-weight-thin">
				Mulimedias
			</div>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	name: "MultimediaSparkline",
	data: () => ({
		value: [
			423,
			446,
			675,
			510,
			590,
			610,
			760,
		],
	}),
}
</script>

<style scoped>

</style>
