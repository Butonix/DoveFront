<template>
	<v-card color="transparent"
		flat tile
		:height="height"
	/>
</template>

<script>
export default {
	name: "Gap",
	props: {
		height: {
			type: String,
			required: true
		}
	}
}
</script>
