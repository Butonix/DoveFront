<template>
	<v-row class="ma-0 pa-0">
		<v-col cols="12"
			class="d-flex align-center"
		>
			<model-sparklines />
		</v-col>
		<model-summary />
	</v-row>
</template>
<script>
export default {
	name: "SettingsHomeView",
	components: {
		ModelSparklines: () => import("@/views/settings/ModelSparklines"),
		ModelSummary: () => import("@/views/settings/ModelSummary"),
	},
	data: () => ({
		currentUser: null
	}),
	async created() {
		this.currentUser = this.$helper.getCurrentUser()
	},
}
</script>
<style lang="sass" scoped>
.admin-welcome-text
	padding: 10px
	font-size: 20px
	color: white
	min-height: 100%
.profile-avatar
	border: 4px solid gold
	background-color: gold
</style>
