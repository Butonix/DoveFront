<template>
	<v-row no-gutters>
		<v-col cols="12"
			xl="6"
			lg="6"
			sm="6"
			md="6"
			class="pa-2"
		>
			<user-sparkline />
		</v-col>
		<v-col cols="12"
			xl="6"
			lg="6"
			sm="6"
			md="6"
			class="pa-2"
		>
			<multimedia-sparkline />
		</v-col>
	</v-row>
</template>

<script>
export default {
	name: "ModelSparklines",
	components: {
		UserSparkline: () => import("@/components/settings/UserSparkline.vue"),
		MultimediaSparkline: () => import("@/components/settings/MultimediaSparkline.vue")
	}
}
</script>

<style scoped>

</style>
