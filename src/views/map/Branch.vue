<template>
	<div class="pa-4">
		<v-card rounded="xl">
			<v-card-title>
				<span>
					<v-icon
						color="#9C27B0"
						large
					>
						mdi-map-marker
					</v-icon>
				</span>
				Navigate our different registered Branches throughout the globe.
			</v-card-title>
		</v-card>
		<div class="py-2" />
		<v-card
			flat rounded="xl"
			color="transparent"
			width="100vw"
			height="80vh"
		>
			<iframe
				id="branch-iframe"
				src="https://www.google.com/maps/d/embed?mid=1gQSVr7mErgYHo00oSpVGv5oIdklxJqPc"
				width="100%" height="100%"
			/>
		</v-card>
	</div>
</template>
<script>
export default {
	name: "BranchMapView",
	data: () => ({
		//stuff
	})
}
</script>
<style scoped>

</style>
